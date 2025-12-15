import Image from 'next/image';
import Link from 'next/link';

// --- Updated Checkout Button Component ---
function CheckoutButton() {
  return (
    <button
      // The button now uses amber-600 for background and amber-700 for hover
      className="w-full sm:w-auto mt-8 px-12 py-4 text-2xl font-extrabold rounded-xl 
                 bg-amber-600 text-white shadow-xl transition-all duration-300 
                 hover:bg-amber-700 hover:shadow-2xl hover:scale-[1.02] 
                 font-heading tracking-wide"
      aria-label="Purchase the semi-biographical novel"
      // TODO: Add actual onClick handler to trigger Stripe checkout
    >
      Buy the Ebook Now — $19.99
    </button>
  );
}
export default function EbookPage() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-zinc-900">
      <main className="w-full max-w-4xl py-16 px-6 sm:px-12 lg:px-16 space-y-16">
        {/* Header/Back Link - remains */}
        {/* <Link
          href="/"
          className="text-lg text-neutral-600 dark:text-neutral-400 hover:text-amber-600 transition-colors"
        >
          &larr; Back to Home
        </Link> */}

        {/* Ebook Presentation Section: Now Centered and Stacked on Mobile */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-2xl mx-auto">
          {/* Ebook Cover Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-96 relative shadow-2xl rounded-lg overflow-hidden border-8 border-white dark:border-zinc-800">
              <Image
                src="/ebook.png"
                alt="Ebook Cover Title Here"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>

          {/* Introduction and Hook */}
          <div className="space-y-6 text-center md:text-left pt-6">
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading dark:text-white leading-tight">
              The Threads of Connection
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              A raw and intimate semi-biographical novel exploring the
              serendipitous, sometimes painful, but always profound encounters
              that define us. This book is a deep dive into the empathy,
              vulnerability, and shared humanity I uncover every day on my
              YouTube channel.
            </p>

            {/* Applied font-serif and italic */}
            <p className="text-xl font-serif italic text-amber-700 dark:text-amber-500">
              "Every person is a story waiting to be felt."
            </p>

            {/* Purchase Button - Centered on mobile */}
            <div className="flex justify-center md:justify-start">
              <CheckoutButton />
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-600 pt-2">
              Instant digital download (PDF, EPUB, MOBI) available immediately
              after purchase.
            </p>
          </div>
        </section>

        {/* Detailed Description Section - Remains mostly the same, but using the wider max-w-4xl container */}
        <section className="border-t border-zinc-200 dark:border-zinc-800 pt-10 space-y-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-heading dark:text-white">
            What Readers Will Discover
          </h2>
          <ul className="space-y-4 text-lg text-zinc-700 dark:text-zinc-300 list-disc list-inside">
            <li>
              **Authentic Encounters:** Unfiltered stories of strangers and
              friends, revealing the universal desire to belong.
            </li>
            <li>
              **The YouTube Genesis:** How the lessons learned from building a
              human connection channel translated into a life-changing
              narrative.
            </li>
            <li>
              **Vulnerability & Growth:** A personal journey through finding
              strength in shared weaknesses and emotional honesty.
            </li>
            <li>
              **Actionable Empathy:** Beyond the story, find profound insights
              into improving your own connections.
            </li>
          </ul>
        </section>

        {/* Reiterate CTA at the bottom */}
        <section className="pb-16 text-center">
          <h3 className="text-2xl font-heading dark:text-white mb-4">
            Start Your Journey of Connection Today.
          </h3>
          <CheckoutButton />
        </section>
      </main>
    </div>
  );
}
