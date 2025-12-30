import { Metadata } from 'next';
import SayHiPageClient from './SayHiPageClient';

export const metadata: Metadata = {
  title: 'Say hi | OneRomeo',
  description:
    'A collection of stories, observations, and cinematic moments captured in the field.',
  openGraph: {
    title: 'Field Notes | OneRomeo',
    description:
      'Real stories from real people. Explore the latest notes and observations.',
    url: 'https://oneromeo.com/notes',
    images: ['/notes-og.jpg'], // A collage or a cinematic landscape shot
    type: 'website',
  },
};

export default function SayHiPage() {
  return <SayHiPageClient />;
}
