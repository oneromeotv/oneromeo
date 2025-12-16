// /src/app/login/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useSupabase } from '@/hooks/useSupabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const { supabase, session, loading } = useSupabase();
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState('');

  // 1. Redirection Logic: Redirect authenticated user to /notes
  useEffect(() => {
    if (!loading && session) {
      router.replace('/notes');
    }
  }, [session, loading, router]);

  // 2. GitHub Sign In Handler
  const handleSignInWithGitHub = async () => {
    setAuthLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        // Redirect user back to the notes page after successful sign-in
        redirectTo: `${window.location.origin}/notes`,
      },
    });

    if (error) {
      setError(`GitHub sign-in failed: ${error.message}`);
      setAuthLoading(false);
    }
    // Note: The sign-in process involves a redirect, so the function doesn't complete here.
    // The browser will be redirected to GitHub, then back to /notes.
  };

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center bg-zinc-50 dark:bg-zinc-900">
        <p className="text-xl text-zinc-500 dark:text-zinc-400">
          Checking login status...
        </p>
      </div>
    );
  }

  // If user is already logged in, show nothing (useEffect will redirect)
  if (session) return null;

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-zinc-900">
      <main className="w-full max-w-sm mx-auto py-24 px-6 md:px-12">
        <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-xl space-y-6">
          <header className="text-center">
            <h1 className="text-3xl font-extrabold font-heading dark:text-white">
              Admin Login
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Use your GitHub account to access the private notes.
            </p>
          </header>

          {error && (
            <div className="p-3 text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-md text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleSignInWithGitHub}
            disabled={authLoading}
            className="w-full inline-flex justify-center items-center py-3 px-4 border border-transparent 
                       shadow-sm text-lg font-bold rounded-lg text-white space-x-2
                       bg-gray-800 hover:bg-gray-900 disabled:opacity-50 transition-colors"
          >
            {/* You can replace the text with a proper GitHub icon if you install one (e.g., lucide-react) */}
            {authLoading ? 'Redirecting...' : 'Sign In with GitHub'}
          </button>
        </div>
      </main>
    </div>
  );
}
