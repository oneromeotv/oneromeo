'use client';
import Link from 'next/link';
import { Check, Download, Home, Film, Loader2 } from 'lucide-react';
import { redirect, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutSuccessPageClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isDownloading, setIsDownloading] = useState(false);

  if (!sessionId) {
    redirect('/');
  }

  const handleDownload = () => {
    if (isDownloading || !sessionId) return;

    setIsDownloading(true);

    // Trigger the file download by navigating the browser to the API route
    window.location.href = `/api/download?session_id=${sessionId}`;

    // Reset the button state after 5 seconds
    // (enough time for the server to respond and start the download stream)
    setTimeout(() => {
      setIsDownloading(false);
    }, 5000);
  };

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
              I‘m glad this story found its way to you :&#41;
            </p>
          </div>

          {/* Download Action */}
          <div className="space-y-3">
            <button
              onClick={handleDownload}
              disabled={isDownloading || !sessionId}
              className="flex items-center justify-center gap-3 w-full py-4 bg-amber-500 text-black rounded-2xl font-bold hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed transition-all shadow-lg shadow-amber-500/10"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Preparing eBook...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download eBook
                </>
              )}
            </button>

            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              {isDownloading
                ? 'Verifying Payment...'
                : 'Format: EPUB • Size: 231.76 KB'}
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
              target="_blank"
              className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-red-500 transition-colors"
            >
              <Film className="w-4 h-4" /> Watch stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
