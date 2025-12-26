import Image from 'next/image';
import { Camera, Heart, Play, MessageSquare, Sparkles } from 'lucide-react';

function CheckoutButton() {
  return (
    <button
      className="w-full sm:w-auto px-10 py-4 text-xl font-bold rounded-2xl 
                 bg-amber-600 text-white shadow-lg transition-all duration-300 
                 hover:bg-amber-700 hover:scale-[1.02] active:scale-[0.98]
                 tracking-tight"
      aria-label="Purchase the semi-biographical novel"
    >
      Read my novel - HKD 9.90
    </button>
  );
}

export default function EbookPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      <main className="max-w-5xl mx-auto py-20 px-6 md:px-12 space-y-28">
        {/* 1. PRESENTATION SECTION */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          {/* Ebook Cover with Viewfinder Frame */}
          <div className="relative group mx-auto md:mx-0">
            <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl">
              <div className="p-2 border-2 border-dotted border-zinc-300 dark:border-zinc-700 rounded-[2rem]">
                <div className="relative aspect-[2/3] w-64 h-96 rounded-[1.2rem] overflow-hidden bg-zinc-100">
                  <Image
                    src="/ebook.png"
                    alt="Not in a Million Years"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg rotate-12">
              Instant download
            </div>
          </div>

          {/* Introduction and Hook */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl italic md:text-6xl font-extrabold tracking-tighter leading-tight">
                Not in a Million Years
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I wrote this novel before I ever picked up a camera. It was the
                time of blogs, not vlogs. The interest in people was already
                there.
              </p>
            </div>

            <p className="text-xl font-serif italic text-amber-700 dark:text-amber-500">
              &quot;Writing made my heart lighter and the world more
              colorful.&quot;
            </p>

            <div className="space-y-4">
              <CheckoutButton />
              <p className="text-sm text-zinc-500 dark:text-zinc-600">
                Instant digital download (EPUB) available immediately after
                purchase.
              </p>
            </div>
          </div>
        </section>

        {/* 2. READERS' WORDS */}
        <section className="space-y-6 py-3">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-zinc-800 dark:text-zinc-100">
              Readers&apos; words
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-5xl mx-auto px-4">
            {[
              {
                text: 'Very difficult to put down.',
                icon: <Heart className="w-4 h-4 fill-current" />,
                color: 'text-red-500',
                hoverText:
                  'group-hover:text-red-600 dark:group-hover:text-red-400',
                bg: 'bg-red-500/10',
              },
              {
                text: 'A breathless pace.',
                icon: <Play className="w-4 h-4 ml-0.5 fill-current" />,
                color: 'text-blue-500',
                hoverText:
                  'group-hover:text-blue-600 dark:group-hover:text-blue-400',
                bg: 'bg-blue-500/10',
              },
              {
                text: 'It felt like watching a movie.',
                icon: <Camera className="w-4 h-4 fill-current" />,
                color: 'text-amber-500',
                hoverText:
                  'group-hover:text-amber-600 dark:group-hover:text-amber-500',
                bg: 'bg-amber-500/10',
              },
              {
                text: 'The characters come alive.',
                icon: <MessageSquare className="w-4 h-4 fill-current" />,
                color: 'text-emerald-500',
                hoverText:
                  'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
                bg: 'bg-emerald-500/10',
              },
              {
                text: 'Subtle sadness done right.',
                icon: <Sparkles className="w-4 h-4 fill-current" />,
                color: 'text-purple-500',
                hoverText:
                  'group-hover:text-purple-600 dark:group-hover:text-purple-400',
                bg: 'bg-purple-500/10',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 transition-all duration-300 group cursor-default"
              >
                {/* Circle with constant icon color */}
                <div
                  className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 transition-all duration-300 group-hover:scale-110 ${item.bg} border-transparent group-hover:border-current`}
                >
                  <div
                    className={`${item.color} transition-transform duration-500 group-hover:rotate-[360deg]`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Text that changes color on hover */}
                <p
                  className={`text-lg md:text-xl font-bold tracking-tight italic text-zinc-700 dark:text-zinc-300 leading-tight transition-colors duration-300 ${item.hoverText}`}
                >
                  &quot;{item.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WHY I WROTE THIS & PLOT */}
        <section className="grid md:grid-cols-2 gap-12 border-t border-zinc-200 dark:border-zinc-800 pt-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Why I wrote this
            </h2>
            <div className="space-y-4 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p>
                At some point, we all need to let something out. For me, it was
                ink and paper. Writing made my heart lighter and the world more
                colorful.
              </p>
              <p>
                If you’d like me to write another novel, tell me. I’m ready —
                and I have a feeling it will happen anyway.
              </p>
            </div>
          </div>

          <div className="p-8 bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold mb-4 italic">
              Not in a Million Years
            </h2>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              This novel tells the story of a young law student caught between
              expectations and dreams. To take the pressure off, he travels
              abroad between classes. Girls show up — and drama unfolds.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
