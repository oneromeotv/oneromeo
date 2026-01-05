import Image from 'next/image';
import Link from 'next/link';
import { Map, Milestone, ArrowUpRight, Video } from 'lucide-react';

export const revalidate = 86400;

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who I Am – Arnold | OneRomeo',
  description:
    'I’m Arnold, a newbie filmmaker and storyteller documenting real people, real moments, and human connection through video.',

  openGraph: {
    title: 'Who I Am – Arnold | OneRomeo',
    description:
      'I’m Arnold, a newbie filmmaker and storyteller documenting real people, real moments, and human connection through video.',

    url: 'https://oneromeo.com/who',
    siteName: 'OneRomeo',
    images: [
      {
        url: '/imgs/who-og.png', // Use a high-quality portrait
        width: 1200,
        height: 630,
        alt: 'Arnold Meindertsma - OneRomeo',
      },
    ],
    type: 'profile', // Tells social networks this is a person's profile
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Who I Am – Arnold | OneRomeo',
    description:
      'I’m Arnold, a newbie filmmaker and storyteller documenting real people, real moments, and human connection through video.',

    images: ['/imgs/who-og.png'],
  },
};

export default function WhoPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <main className="max-w-4xl mx-auto py-20 px-6 md:px-12 space-y-24">
        {/* 1. HERO / INTRO */}
        <section className="space-y-12">
          <header className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
              This is{' '}
              <span className="text-amber-500 underline decoration-amber-500/20 underline-offset-8">
                me
              </span>
              .
            </h1>
          </header>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Photo with the 'Viewfinder' border style from Home */}
            <div className="md:col-span-2">
              <div className="p-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl">
                <div className="p-1.5 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-[1.2rem]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src="/who.jpg"
                      alt="Arnold - OneRomeo"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="md:col-span-3 space-y-6">
              <p className="text-2xl font-medium leading-relaxed tracking-tight text-zinc-800 dark:text-zinc-200 italic">
                I’m Arnold, a newbie filmmaker drawn to small, real moments that
                feel unforgettable.
              </p>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                <p>
                  The more I film, the more I feel the need to keep going. I may
                  be early in the journey, but the urgency to create stories is
                  real.
                </p>
                <p>
                  This is how I make sense of the world — one story at a time.
                </p>
              </div>

              <Link
                href="https://youtube.com/@oneromeo"
                className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold hover:underline"
              >
                Watch my intro on YouTube <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. THE STORY SECTION */}
        <section className="bg-zinc-100 dark:bg-zinc-900/50 rounded-[3rem] p-8 md:p-12 border border-zinc-200 dark:border-zinc-800">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-amber-600 mb-4">
              <Map className="w-6 h-6" />
              <span className="font-mono text-sm tracking-widest uppercase">
                Craziest thing I’ve ever done
              </span>
            </div>
            {/* <h2 className="text-3xl font-bold mb-6">
              Lost in Northern Thailand
            </h2> */}
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400">
              <p>
                Going off-trail in the jungles of northern Thailand was a moment
                of pure survival. While I was losing my mind, my friend Paul
                kept his cool and got us back on track.
              </p>
              <p className="border-l-4 border-amber-500 pl-6 italic">
                The funny thing is, even when I was scared, I kept the camera
                rolling.
              </p>
              <Link
                href="https://youtube.com/shorts/VNhcY-glv7o?feature=share"
                className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-2xl font-bold hover:bg-amber-500 dark:hover:bg-amber-500 transition-colors"
              >
                Watch the moment <Video className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. BUCKET LIST */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-amber-600">
              <Milestone className="w-6 h-6" />
              <h2 className="font-mono text-sm tracking-widest uppercase">
                Bucket list
              </h2>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm">
                <p className="text-zinc-500 dark:text-zinc-500 text-sm font-mono mb-2">
                  01.
                </p>
                <p className="text-lg font-medium">
                  Driving around the world, capturing thousands of human
                  stories.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm">
                <p className="text-zinc-500 dark:text-zinc-500 text-sm font-mono mb-2">
                  02.
                </p>
                <p className="text-lg font-medium">
                  Uploading 500 videos and hitting 100,000 subscribers.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Sidebar */}
          <div className="flex flex-col justify-center items-center text-center p-10 bg-amber-500 rounded-[3rem] text-black">
            <h3 className="text-3xl font-extrabold mb-4">
              Have a story to tell?
            </h3>
            <p className="mb-8 font-medium">
              I&apos;m always looking for my next project. Let&apos;s talk.
            </p>
            <Link
              href="/say-hi"
              className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
