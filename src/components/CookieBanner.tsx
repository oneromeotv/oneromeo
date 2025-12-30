/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (status: 'granted' | 'denied') => {
    localStorage.setItem('cookie_consent', status);
    setShowBanner(false);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: status,
        ad_user_data: status,
        ad_personalization: status,
        ad_storage: status,
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-xl p-6 z-[100] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Cookie Settings
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We use cookies to analyze traffic and optimize your experience.
            Choose whether you want to accept or decline tracking.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => handleConsent('denied')}
            className="text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent('granted')}
            className="bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white text-xs font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
