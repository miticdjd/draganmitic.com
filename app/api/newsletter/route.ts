import { NextResponse } from 'next/server';

type CaptureRequest = {
  email: string;
  name?: string;
  tags?: string[];
};

export async function POST(request: Request) {
  const token = process.env.MAILLAYER_CAPTURE_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'Newsletter is not configured.' },
      { status: 500 }
    );
  }

  let body: CaptureRequest;

  try {
    body = (await request.json()) as CaptureRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  const payload = {
    email,
    ...(body.name ? { name: body.name.trim() } : {}),
    tags:
      body.tags && body.tags.length > 0
        ? body.tags
        : [process.env.MAILLAYER_DEFAULT_TAG || 'draganmitic.com'],
  };

  try {
    const response = await fetch(
      `https://maillayer.com/api/v1/contacts/capture/${token}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = (await response.json()) as { error?: string };

    if (!response.ok) {
      return NextResponse.json(
        { error: result.error || 'Subscription failed. Please try again.' },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Unable to connect to newsletter provider.' },
      { status: 502 }
    );
  }
}
