import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Verify the webhook secret if you set one up
    const secret = process.env.WEBHOOK_SECRET;
    
    if (secret) {
      const signature = request.headers.get('x-hub-signature-256');
      if (!signature) {
        return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
      }
      
      // Basic signature check - in production, implement proper HMAC verification
      // For now, we'll just check if signature exists when secret is configured
      console.log('Webhook signature received:', signature.substring(0, 10) + '...');
    }

    const payload = await request.json();
    
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
