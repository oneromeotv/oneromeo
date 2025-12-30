// src/app/api/download/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId)
    return NextResponse.json({ error: 'Missing session' }, { status: 400 });

  try {
    // 1. Verify Payment with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not verified' },
        { status: 403 }
      );
    }

    // 2. Check current count in Supabase
    const { data: attempt } = await supabase
      .from('download_attempts')
      .select('count')
      .eq('id', sessionId)
      .single();

    const currentCount = attempt ? attempt.count : 0;

    if (currentCount >= 3) {
      return new NextResponse(
        `
    <html>
      <head>
        <title>Download Limit Reached</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
            display: flex; align-items: center; justify-content: center; 
            min-height: 100vh; margin: 0;
            background: #fafafa; color: #18181b; 
            text-align: center; padding: 24px;
          }
          .card { 
            background: white; padding: 3.5rem 2rem; 
            border-radius: 2.5rem; 
            border: 1px solid #e4e4e7; 
            max-width: 420px; width: 100%;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.04);
          }
          h1 { 
            color: #18181b; font-size: 1.875rem; font-weight: 900; 
            text-transform: uppercase; font-style: italic; letter-spacing: -0.05em;
            margin-bottom: 1rem; 
          }
          p { color: #71717a; line-height: 1.6; font-weight: 500; margin-bottom: 2rem; }
          
          .button-group { display: flex; flex-direction: column; gap: 0.75rem; }
          
          .primary-button { 
            display: block; padding: 1rem;
            background: #f59e0b; color: black; 
            text-decoration: none; font-weight: 800; border-radius: 1.25rem;
            transition: transform 0.2s, opacity 0.2s;
          }
          
          .secondary-button { 
            display: block; padding: 1rem;
            background: transparent; color: #71717a; 
            text-decoration: none; font-weight: 700; border-radius: 1.25rem;
            border: 1px solid #e4e4e7;
            transition: background 0.2s, color 0.2s;
          }

          .primary-button:hover { transform: scale(1.02); }
          .secondary-button:hover { background: #f4f4f5; color: #18181b; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Limit Reached</h1>
          <p>If you need a fresh link, I'm happy to reset it for you.</p>
          
          <div class="button-group">
            <a href="mailto:support@oneromeo.com" class="primary-button">Contact for reset</a>
            <a href="javascript:history.back()" class="secondary-button">Return to order</a>
          </div>
        </div>
      </body>
    </html>
    `,
        { headers: { 'Content-Type': 'text/html' }, status: 403 }
      );
    }

    // 3. Get the Signed URL from Supabase Storage
    const { data: fileData, error: storageError } = await supabase.storage
      .from('ebook')
      .createSignedUrl('Not-in-a-Million-Years-by-Arnold-Meindertsma.epub', 60);

    if (storageError || !fileData) throw new Error('Storage error');

    // 4. Update the counter in Supabase (Upsert)
    const { error: upsertError } = await supabase
      .from('download_attempts')
      .upsert({
        id: sessionId,
        email: session.customer_details?.email,
        count: currentCount + 1,
        last_download_at: new Date().toISOString(),
      });

    if (upsertError) console.error('Upsert Error:', upsertError);

    // 5. Success!
    return NextResponse.redirect(fileData.signedUrl);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error('Download API Error:', errorMessage);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
