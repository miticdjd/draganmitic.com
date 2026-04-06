import { NextResponse } from 'next/server';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

type ContactRequest = {
  name: string;
  email: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const debugEnabled =
    process.env.CONTACT_DEBUG === 'true' || process.env.NODE_ENV !== 'production';

  if (!region || !accessKeyId || !secretAccessKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: 'Contact form is not configured.' },
      { status: 500 }
    );
  }

  let body: ContactRequest;
  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email and message are required.' },
      { status: 400 }
    );
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 });
  }

  const sesClient = new SESv2Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const textBody = [
    'New message from draganmitic.com contact form',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const sendResult = await sesClient.send(
      new SendEmailCommand({
        FromEmailAddress: fromEmail,
        Destination: {
          ToAddresses: [toEmail],
        },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: {
              Data: `Contact form: ${name}`,
              Charset: 'UTF-8',
            },
            Body: {
              Text: {
                Data: textBody,
                Charset: 'UTF-8',
              },
            },
          },
        },
      })
    );

    if (debugEnabled) {
      console.log('SES SendEmail success', {
        messageId: sendResult.MessageId,
        requestId: sendResult.$metadata?.requestId,
        httpStatusCode: sendResult.$metadata?.httpStatusCode,
        fromEmail,
        toEmail,
      });
    }

    return NextResponse.json({
      ok: true,
      ...(debugEnabled
        ? {
            debug: {
              provider: 'amazon-ses',
              messageId: sendResult.MessageId || null,
              requestId: sendResult.$metadata?.requestId || null,
              httpStatusCode: sendResult.$metadata?.httpStatusCode || null,
              fromEmail,
              toEmail,
            },
          }
        : {}),
    });
  } catch (error) {
    if (debugEnabled) {
      console.error('SES SendEmail failed', error);
    } else {
      console.error('SES SendEmail failed');
    }
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 502 }
    );
  }
}
