import { Metadata } from 'next';
import SayHiPageClient from './SayHiPageClient';

export const metadata: Metadata = {
  title: 'Say Hi | OneRomeo',
  description:
    'Say hi to Arnold at OneRomeo. Have a story, a question, or just want to connect? Feel free to reach out.',
  openGraph: {
    title: 'Say Hi | OneRomeo',
    description:
      'Say hi to Arnold at OneRomeo. Have a story, a question, or just want to connect? Feel free to reach out.',
    url: 'https://oneromeo.com/say-hi',
    siteName: 'OneRomeo',
    images: [
      {
        url: '/imgs/home-og.png',
        width: 1200,
        height: 630,
        alt: 'Say Hi to Arnold - OneRomeo',
      },
    ],
    type: 'website',
  },
};

export default function SayHiPage() {
  return <SayHiPageClient />;
}
