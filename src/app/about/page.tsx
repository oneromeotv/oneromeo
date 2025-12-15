// /app/about/page.tsx

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-zinc-900">
      <main className="w-full max-w-4xl py-16 px-6 sm:px-12 lg:px-16 space-y-16">
        {/* 1. Header and Mission Statement (Uses Poppins/font-heading) */}
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold font-heading dark:text-white leading-tight">
            Hi, I’m OneRomeo.
          </h1>
          {/* Highlight your core theme with the accent color */}
          <p className="text-xl font-semibold text-amber-600 dark:text-amber-500">
            My life&apos;s work is exploring the profound, often quiet, ways
            humans connect.
          </p>
        </header>

        {/* 2. Photo and Introduction Section */}
        <section className="grid md:grid-cols-3 gap-12 items-start border-b border-zinc-200 dark:border-zinc-800 pb-12">
          {/* Photo Column */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-56 h-56 relative rounded-full overflow-hidden shadow-xl border-4 border-amber-600">
              <Image
                src="/about-me.jpeg" // ⬅️ REPLACE THIS WITH YOUR OWN PHOTO
                alt="Profile picture of OneRomeo, the author."
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>

          {/* Bio Text Column (Uses Inter/font-sans) */}
          <div className="md:col-span-2 space-y-6 text-lg text-zinc-700 dark:text-zinc-300">
            <p className="font-bold text-zinc-900 dark:text-white">
              For years, my focus has been on building meaningful conversation
              and community online, specifically through my YouTube channel
              where I interview people about connection.
            </p>
            <p>
              But the stories that truly shape us—the deeply personal
              encounters, the silent battles, and the life-altering
              friendships—often happen off-camera. This novel is my way of
              giving those private moments the depth they deserve.
            </p>
            <p>
              I believe vulnerability is our greatest superpower. By sharing my
              semi-biographical experiences, my hope is that you find echoes of
              your own journey in these pages.
            </p>
          </div>
        </section>

        {/* 3. The Novel's Genesis (Why I Wrote the Book) */}
        <section className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold font-heading dark:text-white text-center">
            From Screen to Page: The Journey
          </h2>
          <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300">
            <p>
              The novel, **"The Threads of Connection,"** grew directly out of
              the thousands of hours I spent listening to people share their
              deepest truths. It became clear that the best way to understand
              the complex tapestry of human relationships wasn't through a
              documentary—it was through a story.
            </p>
            <p>
              It’s an intimate exploration of the people who shaped me—the
              mentors, the lost loves, and the accidental friendships that
              changed my trajectory. It's written for anyone who has ever felt
              disconnected in a hyper-connected world.
            </p>
          </div>
        </section>

        {/* 4. Call to Action (Re-engages the main goal) */}
        <section className="pt-8 pb-16 text-center">
          <h3 className="text-2xl font-heading dark:text-white mb-4">
            Connect with the novel, connect with yourself.
          </h3>
          <a
            href="/ebook"
            className="inline-flex items-center px-8 py-3 text-lg font-bold rounded-full shadow-lg 
                       bg-amber-600 text-white 
                       hover:bg-amber-700 transition-colors duration-200"
          >
            Explore the Novel &rarr;
          </a>
        </section>
      </main>
    </div>
  );
}
