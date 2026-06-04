import { NextResponse } from 'next/server';

type SignupRequest = {
  email: string;
  first_name?: string;
  name?: string;
};

const MAILLAYER_HOOK_URL =
  'https://maillayer.hefesgroup.com/api/hooks/itg_FVzlzu0aKsCz';

export async function POST(request: Request) {
  const secret = process.env.MAILLAYER_HOOK_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: 'Newsletter is not configured.' },
      { status: 500 }
    );
  }

  let body: SignupRequest;

  try {
    body = (await request.json()) as SignupRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  const firstName = body.first_name?.trim() || body.name?.trim();
  const payload = {
    event: 'user.signup',
    data: {
      email,
      ...(firstName ? { first_name: firstName } : {}),
    },
  };

  try {
    const response = await fetch(MAILLAYER_HOOK_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secret}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = (await response.json().catch(() => ({}))) as {
      error?: string;
    };

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
