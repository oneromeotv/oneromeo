import Image from 'next/image';
import Link from 'next/link'; // Use Link for internal navigation

// --- Updated EbookCtaButton Component ---
function EbookCtaButton() {
  return (
    <Link
      href="/ebook"
      // *** USING THE CUSTOM COLORS HERE ***
      className="mt-6 px-10 py-4 text-xl font-bold bg-amber-500 rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:bg-amber-600 text-white inline-block"
    >
      Read the Semi-Bio Novel &rarr;
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="w-full max-w-4xl py-12 px-6 sm:px-12 lg:px-16 space-y-20">
        {/* 1. HERO SECTION */}
        <section className="text-center pt-8 pb-10 sm:pt-16 sm:pb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
            Connecting Souls. Sharing Stories.
          </h1>
          <p className="mt-5 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            From the insights of my YouTube journey on **human connection**,
            comes a raw and intimate **semi-biographical novel** about the
            people who shaped me.
          </p>
          {/* This button is now Pink/brand-primary */}
          <EbookCtaButton />
        </section>

        {/* 2. INTRODUCTION SECTION: YouTube and Author Context */}
        <section className="border-t border-zinc-200 dark:border-zinc-700 pt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              Behind the Camera: My Journey
            </h2>
            <div className="text-lg text-zinc-600 dark:text-zinc-400 space-y-4">
              <p>
                As a YouTube starter, I’ve dedicated my channel to exploring the
                beautiful, complex, and often messy threads of **human
                connection**. Every video is a conversation, a deep dive into
                empathy, vulnerability, and shared experience.
              </p>
              <p>
                My ebook, **[Your Ebook Title Here]**, is an extension of that
                mission. It’s not just theory; it’s a narrative woven from the
                profound encounters and personal lessons gathered on this
                creative path.
              </p>
            </div>
            <a
              href="[Your YouTube Channel URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.251-11.233-.251-14.837 0C1.865 3.447.887 5.257.887 7.727v8.546c0 2.47 1.272 4.28 3.89 4.543 3.604.251 11.233.251 14.837 0 2.618-.263 3.89-2.073 3.89-4.543V7.727c0-2.47-1.272-4.28-3.89-4.543zM10 15V9l6 3-6 3z" />
              </svg>
              Watch My Latest Video
            </a>
          </div>
          {/* Mock image for author/youtube presence */}
          <div className="flex justify-center">
            <Image
              src="/placeholder-youtube.jpg" // CHANGE THIS PATH
              alt="Author presenting a video about human connection"
              width={400}
              height={300}
              className="rounded-xl shadow-lg object-cover"
              priority={false}
            />
          </div>
        </section>

        {/* 3. MOCK INFO SECTION: Testimonials / Featured Content */}
        <section className="border-t border-zinc-200 dark:border-zinc-700 pt-16">
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            What Readers and Viewers Are Saying
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {/* Mock Testimonial 1 */}
            <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
              <blockquote className="italic text-zinc-700 dark:text-zinc-300">
                "The most insightful content on connection I've ever found. A
                must-read."
              </blockquote>
              <footer className="mt-3 text-sm font-semibold text-black dark:text-white">
                – Sarah K.
              </footer>
            </div>
            {/* Mock Testimonial 2 */}
            <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
              <blockquote className="italic text-zinc-700 dark:text-zinc-300">
                "It felt like I was reading my own biography. Beautifully raw."
              </blockquote>
              <footer className="mt-3 text-sm font-semibold text-black dark:text-white">
                – David L.
              </footer>
            </div>
            {/* Mock Testimonial 3 */}
            <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
              <blockquote className="italic text-zinc-700 dark:text-zinc-300">
                "Her videos prepared me, but the novel healed me."
              </blockquote>
              <footer className="mt-3 text-sm font-semibold text-black dark:text-white">
                – Reviewer Name
              </footer>
            </div>
          </div>
        </section>

        {/* 4. EBOOK CTA SECTION: Final Pitch */}
        <section className="border-t border-zinc-200 dark:border-zinc-700 pt-16 pb-20 text-center bg-white dark:bg-zinc-900">
          <h2 className="text-4xl font-extrabold text-black dark:text-white">
            Ready to Connect Deeper?
          </h2>
          <p className="mt-3 text-xl text-zinc-600 dark:text-zinc-400">
            Dive into the semi-biographical novel that explores the profound
            connections that change everything.
          </p>
          {/* This button is also now Pink/brand-primary */}
          <EbookCtaButton />
        </section>
      </main>
    </div>
  );
}
