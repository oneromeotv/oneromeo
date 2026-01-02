'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSupabase } from '@/hooks/useSupabase';
import { SupabaseClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

// --- TYPE DEFINITIONS ---
interface Note {
  id: number;
  created_at: string;
  content: string;
}

// ----------------------------------------------------------------------------------
// --- 1. New Note Form (Admin Only) ---
// ----------------------------------------------------------------------------------
function NewNoteForm({
  onSuccess,
  supabase,
}: {
  onSuccess: () => void;
  supabase: SupabaseClient;
}) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsLoading(true);

    const { error } = await supabase
      .from('notes')
      .insert([{ content: content.trim() }]);

    setIsLoading(false);

    if (error) {
      console.error('Error posting note:', error);
      alert('Failed to post note. Check your RLS policies!');
    } else {
      setContent('');
      onSuccess(); // Refresh the list of notes
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-amber-200 dark:bg-zinc-700 rounded-lg shadow-inner space-y-4"
    >
      <h2 className="text-2xl font-bold font-heading dark:text-white">
        Add New Note
      </h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a short, simple note here..."
        rows={3}
        required
        className="w-full bg-amber-50 rounded-lg border-zinc-300 dark:border-zinc-600 dark:bg-zinc-600 dark:text-white shadow-sm focus:border-amber-600 focus:ring-amber-600 text-lg p-3"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex justify-center py-2 px-4 border border-transparent 
                   shadow-sm text-sm font-semibold rounded-lg text-white 
                   bg-amber-600 hover:bg-amber-700 disabled:opacity-50 transition-colors"
      >
        {isLoading ? 'Posting...' : 'Post Note'}
      </button>
    </form>
  );
}

// ----------------------------------------------------------------------------------
// --- MAIN PAGE COMPONENT ---
// ----------------------------------------------------------------------------------
export default function NotesPage() {
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loadingNotes, setLoadingNotes] = useState(true);
  const [displayLimit, setDisplayLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  // ⭐️ INTEGRATION: Use the hook to get client, session, and loading state
  const { supabase, session, loading: loadingSession } = useSupabase();

  // Get user identity for display
  const userIdentifier =
    session?.user?.email || session?.user?.id.substring(0, 8) + '...';
  const fetchNotes = useCallback(
    async (limit: number) => {
      // Only show the big loading spinner if we don't have any notes yet
      if (notes.length === 0) setLoadingNotes(true);

      const { data, error, count } = await supabase
        .from('notes')
        .select('id, created_at, content', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(0, limit - 1);

      if (error) {
        console.error('Error fetching notes:', error);
      } else if (data) {
        // This replaces the old list with the new, longer list
        // without the user seeing a "flash" or "No notes" message
        setNotes(data);
        setHasMore(data.length < (count || 0));
      }

      // We set this to false so the "Loading..." text on the button goes away
      setLoadingNotes(false);
    },
    [supabase, notes.length]
  );

  // Trigger fetch when displayLimit changes
  useEffect(() => {
    if (!loadingSession) {
      fetchNotes(displayLimit);
    }
  }, [loadingSession, displayLimit, fetchNotes]);

  const handleLoadMore = () => {
    setDisplayLimit((prev) => prev + 5);
  };

  // ⭐️ INTEGRATION: Refetch notes when component mounts or session status changes
  useEffect(() => {
    if (!loadingSession) {
      const fetchNotesOnLoad = async () => {
        setLoadingNotes(true);
        const { data, error } = await supabase
          .from('notes')
          .select('id, created_at, content')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching notes:', error);
        } else if (data) {
          setNotes(data);
        }
        setLoadingNotes(false);
      };
      fetchNotesOnLoad();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingSession]); // Removed fetchNotes from dependency array as it's defined outside

  // --- DELETE LOGIC ---
  const handleDelete = useCallback(
    async (noteId: number) => {
      if (!session) return alert('You must be logged in to delete notes.');

      if (window.confirm('Are you sure you want to delete this note?')) {
        const { error } = await supabase
          .from('notes')
          .delete()
          .eq('id', noteId);

        if (error) {
          console.error('Error deleting note:', error);
          alert('Failed to delete note. Check your RLS DELETE policy.');
        } else {
          setNotes((prevNotes) =>
            prevNotes.filter((note) => note.id !== noteId)
          );
        }
      }
    },
    [supabase, session]
  );

  // --- LOGOUT LOGIC ---
  const handleLogout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout failed:', error);
    } else {
      // Clear local session state (handled by useSupabase hook listener)
      // Redirect to the login page after sign out
      router.push('/notes');
    }
  }, [supabase, router]);

  // ----------------------------------------------------------------------------------

  // Show a loading indicator while checking auth status
  if (loadingSession) {
    return (
      <div className="flex min-h-screen justify-center items-center bg-zinc-50 dark:bg-zinc-900">
        <p className="text-xl text-zinc-500 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-zinc-900">
      <main className="w-full max-w-3xl mx-auto py-16 px-6 md:px-12 space-y-12">
        {/* --- Header --- */}
        <header className="text-center space-y-3">
          <h1 className="text-5xl font-extrabold font-heading dark:text-white leading-tight">
            My notes
          </h1>
          <p className="text-xl font-bold text-zinc-600 dark:text-zinc-400">
            My daily thoughts.
          </p>
          {session && (
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-lg text-green-600 dark:text-green-400 font-semibold">
                Logged in as: {userIdentifier}
              </p>
              <button
                onClick={handleLogout}
                className="text-sm py-1 px-3 border border-red-500 text-red-600 dark:text-red-400 dark:border-red-400 rounded-full hover:bg-red-50 dark:hover:bg-zinc-700 transition-colors"
              >
                Log Out
              </button>
            </div>
          )}
        </header>

        {/* --- ADMIN SECTION: ADD NOTE FORM --- */}
        {session && (
          <NewNoteForm
            onSuccess={() => fetchNotes(displayLimit)}
            supabase={supabase}
          />
        )}

        {/* --- PUBLIC SECTION: LIST OF NOTES --- */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold font-heading dark:text-white border-b pb-2 border-zinc-200 dark:border-zinc-700">
            Latest thoughts ({notes.length})
          </h2>

          {loadingNotes && (
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              Loading notes...
            </p>
          )}

          {!loadingNotes && notes.length === 0 && (
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              No notes found yet.
            </p>
          )}

          <ul className="space-y-3">
            {notes.map((note) => (
              <li
                key={note.id}
                className="flex justify-between items-start p-3 dark:bg-zinc-800 rounded-lg dark:border-zinc-700"
              >
                <div className="flex-grow min-w-0 pr-4">
                  <p className="text-lg text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">
                    {note.content}
                  </p>
                </div>

                <div className="flex-shrink-0 flex flex-col items-end space-y-1">
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                    {new Date(note.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>

                  {/* ⭐️ DELETE BUTTON (Visible only when authenticated) */}
                  {session && (
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500 font-semibold transition-colors mt-0"
                      aria-label={`Delete note ID ${note.id}`}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* --- LOAD MORE BUTTON --- */}
          {hasMore && (
            <div className="flex justify-center pt-6">
              <button
                onClick={handleLoadMore}
                disabled={loadingNotes}
                className="px-6 py-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 
                   dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 
                   rounded-full font-semibold transition-colors disabled:opacity-50"
              >
                {loadingNotes ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}

          {!hasMore && notes.length > 0 && (
            <p className="text-center text-zinc-500 text-sm mt-4">
              You&apos;ve reached the end.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
