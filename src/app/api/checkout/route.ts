import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [
        'card',
        'alipay',
        'wechat_pay',
        'kr_card', // South Korean cards, Kakao Pay, Naver Pay
        'bancontact', // Belgium
        'eps', // Austria
        'ideal', // Netherlands
      ],
      payment_method_options: {
        wechat_pay: {
          client: 'web', // Required to show the QR code on desktop
        },
      },
      line_items: [
        {
          price_data: {
            currency: 'hkd',
            product_data: {
              name: 'Not in a Million Years (eBook)',
              description: 'A novel by Arnold Meindertsma',
              images: ['https://oneromeo.com/ebook.png'],
            },
            unit_amount: 1100, // $11.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/ebook`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
