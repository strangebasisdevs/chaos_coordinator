import { NextRequest, NextResponse } from 'next/server';
import { createHmac, timingSafeEqual } from 'crypto';

function isValidSignature(payload: string, signature: string, secret: string): boolean {
  const expected = `sha256=${createHmac('sha256', secret).update(payload).digest('hex')}`;
  const expectedBuffer = Buffer.from(expected);
  const signatureBuffer = Buffer.from(signature);

  // Lengths must match before calling timingSafeEqual, otherwise it throws.
  if (expectedBuffer.length !== signatureBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, signatureBuffer);
}

export async function POST(request: NextRequest) {
  try {
    const secret = process.env.WEBHOOK_SECRET;
    if (!secret) {
      console.error('WEBHOOK_SECRET is not configured; rejecting webhook request');
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 });
    }

    // Read the raw body for HMAC verification before parsing it as JSON.
    const rawBody = await request.text();
    const signature = request.headers.get('x-hub-signature-256');

    if (!signature || !isValidSignature(rawBody, signature, secret)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);

    // Check if this is a push to the main branch
    if (payload.ref === 'refs/heads/main' && payload.repository?.name === 'time_decomposes') {
      // Trigger the GitHub Action to update submodules
      const response = await fetch(
        `https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/dispatches`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event_type: 'submodule-update',
          }),
        }
      );

      if (response.ok) {
        return NextResponse.json({ message: 'Submodule update triggered' });
      } else {
        console.error('Failed to trigger GitHub Action:', await response.text());
        return NextResponse.json({ error: 'Failed to trigger update' }, { status: 500 });
      }
    }

    return NextResponse.json({ message: 'Webhook received' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
