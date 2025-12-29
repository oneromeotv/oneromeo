import Image from 'next/image';
import Link from 'next/link';
// If using Lucide icons (standard in Next.js projects)
import { PenLine, BookOpen, ArrowRight, Video } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real People, Real Stories | OneRomeo',
  description:
    'OneRomeo captures real moments from real people on camera, one story at a time.',

  // 1. Open Graph (Facebook, Instagram, LinkedIn, WhatsApp)
  openGraph: {
    title: 'Real People, Real Stories | OneRomeo',
    description:
      'OneRomeo captures real moments from real people on camera, one story at a time.',
    url: 'https://oneromeo.com',
    siteName: 'OneRomeo',
    images: [
      {
        url: '/og-image.jpg', // Put a 1200x630px image in your /public folder
        width: 1200,
        height: 630,
        alt: 'OneRomeo Cinematic Storytelling',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 2. Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Real People, Real Stories | OneRomeo',
    description:
      'OneRomeo captures real moments from real people on camera, one story at a time.',
    images: ['/og-image.jpg'], // Same image as OG
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <main className="w-full max-w-5xl mx-auto py-16 px-6 md:px-12 space-y-24">
        {/* 1. HERO SECTION */}
        <section className="text-center pt-8 sm:pt-16">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6">
              One person, one camera, <br className="hidden md:block" />
              <span className="text-amber-600 dark:text-amber-500">
                one story
              </span>{' '}
              at a time.
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium">
              Real people, real lives.
            </p>
          </div>

          {/* Viewfinder Border Image */}
          <div className="relative max-w-5xl mx-auto">
            {/* Outer solid border */}
            <div className="p-3 bg-white dark:bg-zinc-800 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-700 shadow-xl">
              {/* Inner dotted border */}
              <div className="p-2 border-2 border-dotted border-zinc-300 dark:border-zinc-600 rounded-[2rem]">
                <div className="relative aspect-[16/9] w-full rounded-[1.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="/home.jpeg"
                    alt="Cinematic storytelling"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle 'Live' Indicator */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-2 py-1 bg-black/40 backdrop-blur-md rounded-md border border-white/10">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white font-mono uppercase tracking-tighter">
                      REC 00:04:12:12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPLORATION SECTION */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start border-t border-zinc-200 dark:border-zinc-800 pt-20">
          {/* Left: Content Navigation with Icons */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-tight">
              Start your journey
            </h3>
            <nav className="space-y-3">
              {[
                {
                  name: 'On camera moments',
                  href: 'https://youtube.com/@oneromeo',
                  icon: <Video className="w-5 h-5" />,
                  color: 'text-red-600 bg-red-50 dark:bg-red-900/20',
                },
                {
                  name: 'Notes',
                  href: '/notes',
                  icon: <PenLine className="w-5 h-5" />,
                  color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20',
                },
                {
                  name: 'eBook',
                  href: '/ebook',
                  icon: <BookOpen className="w-5 h-5" />,
                  color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20',
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all"
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-xl ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <span className="flex-1 font-bold text-zinc-700 dark:text-zinc-200">
                    {item.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Modern Contact Card */}
          <div className="h-full">
            <div className="p-8 md:p-10 rounded-[2.5rem] dark:bg-white dark:text-zinc-900 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                  <Video className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">
                  Your story matters.
                  <br />
                  Let’s film it.
                </h3>
              </div>

              <Link
                href="/say-hi"
                className="mt-8 group flex items-center border border-amber-500 justify-center gap-2 w-full py-4 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl font-bold hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-black dark:hover:text-black transition-all"
              >
                Say hello
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
