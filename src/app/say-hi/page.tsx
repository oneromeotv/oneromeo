'use client';

import { useState } from 'react';
import { Send, Camera, CheckCircle2 } from 'lucide-react';

export default function SayHiPage() {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      subject: 'Say Hi Inquiry',
    };

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err: unknown) {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      <main className="max-w-5xl mx-auto py-20 px-6 md:px-12 space-y-20">
        {/* 1. HEADER */}
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

        {/* 2. CONTACT FORM */}
        <section className="max-w-2xl mx-auto">
          <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl">
            <div className="p-2 border-2 border-dotted border-zinc-300 dark:border-zinc-700 rounded-[2rem]">
              <div className="p-8 sm:p-10">
                {status === 'success' ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                    <div className="flex justify-center">
                      <CheckCircle2 className="w-16 h-16 text-amber-500" />
                    </div>
                    <h2 className="text-2xl font-bold">Message Sent!</h2>
                    <p className="text-zinc-500">
                      Thanks for reaching out, Arnold will get back to you soon.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-sm font-bold text-amber-600 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        disabled={status === 'sending'}
                        placeholder="How should I address you?"
                        className="block w-full rounded-2xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-4 transition-all disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-bold uppercase tracking-wider text-zinc-500 ml-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        disabled={status === 'sending'}
                        placeholder="Where can I reach you?"
                        className="block w-full rounded-2xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-4 transition-all disabled:opacity-50"
                      />
                    </div>

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
                        disabled={status === 'sending'}
                        placeholder="What's on your mind? I'm listening..."
                        className="block w-full rounded-2xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-4 transition-all disabled:opacity-50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group w-full flex items-center justify-center gap-2 py-4 px-6 bg-amber-600 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xl font-bold rounded-2xl hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-black dark:hover:text-black transition-all shadow-lg active:scale-[0.98] disabled:bg-amber-400"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                      <Send
                        className={`w-5 h-5 transition-transform ${
                          status === 'sending'
                            ? 'translate-x-10 -translate-y-10 opacity-0'
                            : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                        }`}
                      />
                    </button>

                    {status === 'error' && (
                      <p className="text-red-500 text-center text-sm font-bold">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
