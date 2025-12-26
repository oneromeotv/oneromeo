import { Youtube, Facebook, Send, Camera } from 'lucide-react';

export default function SayHiPage() {
  // Placeholder for the form action (replace with your form service endpoint)
  const FORM_ACTION_URL = 'YOUR_FORM_SERVICE_ENDPOINT_HERE';

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      <main className="max-w-5xl mx-auto py-20 px-6 md:px-12 space-y-20">
        {/* 1. HEADER & MISSION */}
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-amber-500/10 text-amber-600 mb-2">
            <Camera className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight">
            Let’s connect. <span className="text-amber-500">Say hi!</span>
          </h1>
          <div className="space-y-2">
            <p className="text-xl font-bold text-zinc-600 dark:text-zinc-400">
              Saying hello could be the beginning of something wonderful.
            </p>
            <p className="text-lg font-medium text-amber-700 dark:text-amber-500 italic">
              &quot;Your story could be next.&quot;
            </p>
          </div>
        </header>

        {/* 2. CONTACT FORM - Wrapped in the Viewfinder Aesthetic */}
        <section className="max-w-2xl mx-auto">
          <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl">
            <div className="p-2 border-2 border-dotted border-zinc-300 dark:border-zinc-700 rounded-[2rem]">
              <div className="p-8 sm:p-10">
                <form
                  action={FORM_ACTION_URL}
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-bold uppercase tracking-wider text-zinc-500 ml-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="How should I address you?"
                      className="block w-full rounded-2xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-4 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-bold uppercase tracking-wider text-zinc-500 ml-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="_replyto"
                      id="email"
                      required
                      placeholder="Where can I reach you?"
                      className="block w-full rounded-2xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-4 transition-all"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-bold uppercase tracking-wider text-zinc-500 ml-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="What's on your mind? I'm listening..."
                      className="block w-full rounded-2xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-4 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 py-4 px-6 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xl font-bold rounded-2xl hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-black dark:hover:text-black transition-all shadow-lg active:scale-[0.98]"
                  >
                    Send Message
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SOCIAL LINKS */}
        <footer className="text-center space-y-8">
          <div className="flex flex-col items-center space-y-2">
            <span className="h-px w-12 bg-zinc-300 dark:bg-zinc-700" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              Find me elsewhere
            </p>
          </div>

          <div className="flex justify-center items-center gap-8">
            <a
              href="https://youtube.com/@oneromeo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
              aria-label="YouTube Channel"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-red-500 transition-all shadow-sm group-hover:shadow-red-500/10">
                <Youtube className="w-6 h-6 text-zinc-400 group-hover:text-red-600 transition-colors" />
              </div>
              <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-red-600">
                YouTube
              </span>
            </a>

            <a
              href="[Your Facebook URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
              aria-label="Facebook Profile"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-blue-600 transition-all shadow-sm group-hover:shadow-blue-600/10">
                <Facebook className="w-6 h-6 text-zinc-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-blue-600">
                Facebook
              </span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
