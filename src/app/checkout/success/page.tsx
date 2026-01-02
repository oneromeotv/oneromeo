import { Metadata } from 'next';
import CheckoutSuccessPageClient from './CheckoutSuccessPageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Order Confirmed | OneRomeo',
  description:
    'Thank you for your order. Your eBook purchase is confirmed and ready to download.',
  openGraph: {
    title: 'Order Confirmed | OneRomeo',
    description:
      'Thank you for your order. Your eBook purchase is confirmed and ready to download.',
    url: 'https://oneromeo.com/checkout/success',
    images: ['/imgs/ebook-og.png'],
    type: 'website',
  },
};

export default function CheckoutSuccessPage() {
  return <CheckoutSuccessPageClient />;
}
