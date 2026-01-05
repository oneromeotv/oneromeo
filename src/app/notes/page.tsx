import { Metadata } from 'next';
import NotesPageClient from './NotesPageClient';

export const revalidate = 600;

export const metadata: Metadata = {
  title: 'Notes',
  description:
    'Short notes, thoughts, and observations by Arnold. Small moments, written down as they come.',
  openGraph: {
    title: 'Notes',
    description:
      'Short notes, thoughts, and observations by Arnold. Small moments, written down as they come.',
    url: 'https://oneromeo.com/notes',
    images: ['/imgs/notes-og.png'], // A collage or a cinematic landscape shot
    type: 'website',
  },
};

export default function NotesPage() {
  return <NotesPageClient />;
}
