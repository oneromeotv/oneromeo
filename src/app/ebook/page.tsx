import { Metadata } from 'next';
import EbookPageClient from './EbookPageClient';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Not in a Million Years – A Novel by Arnold',
  description:
    'Not in a Million Years is a coming-of-age novel about a young law student caught between expectations, love, and escape.',

  openGraph: {
    title: 'Not in a Million Years – A Novel by Arnold',
    description:
      'Not in a Million Years is a coming-of-age novel about a young law student caught between expectations, love, and escape.',
    url: 'https://oneromeo.com/ebook',
    siteName: 'OneRomeo',
    // It's best to use a specific image showing the book cover for this page
    images: [
      {
        url: '/imgs/ebook-og.png',
        width: 1200,
        height: 630,
        alt: 'Not in a Million Years eBook Cover',
      },
    ],
    type: 'book', // Changed to 'book' type for eBook page
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Not in a Million Years – A Novel by Arnold | OneRomeo',
    description:
      'Not in a Million Years is a coming-of-age novel about a young law student caught between expectations, love, and escape.',
    images: ['/imgs/ebook-og.png'],
  },
};

export default function EbookPage() {
  return <EbookPageClient />;
}
