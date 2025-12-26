import Link from 'next/link';
import { Check, Download, Home, Film } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-6">
      {/* Viewfinder-style container */}
      <div className="max-w-md w-full p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl">
        <div className="p-8 border-2 border-dotted border-zinc-300 dark:border-zinc-700 rounded-[2rem] text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Check className="w-8 h-8" strokeWidth={3} />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-black tracking-tighter uppercase italic">
              Order Confirmed
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              Thank you for supporting my journey. Your story is ready.
            </p>
          </div>

          {/* Download Action */}
          <div className="space-y-3">
            <Link
              href="/downloads/not-in-a-million-years.epub"
              className="flex items-center justify-center gap-3 w-full py-4 bg-amber-500 text-black rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-amber-500/10"
            >
              <Download className="w-5 h-5" /> Download Ebook
            </Link>

            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Format: EPUB • Size: 1.2MB
            </p>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            >
              <Home className="w-4 h-4" /> Home
            </Link>
            <Link
              href="https://youtube.com/@oneromeo"
              className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-red-500 transition-colors"
            >
              <Film className="w-4 h-4" /> Watch Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
