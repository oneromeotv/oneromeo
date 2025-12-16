// /src/hooks/useSupabase.ts

import { useState, useEffect, useCallback } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';
import { Session, SupabaseClient } from '@supabase/supabase-js';

// Define the shape of the data returned by the hook
interface SupabaseHookResult {
  supabase: SupabaseClient;
  session: Session | null;
  loading: boolean;
  refreshSession: () => Promise<void>;
}

export const useSupabase = (): SupabaseHookResult => {
  const supabase = createBrowserClient();

  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch the current session
  const refreshSession = useCallback(async () => {
    setLoading(true);
    const {
      data: { session },
    } = await supabase.auth.getSession();
    setSession(session);
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    // 1. Initial fetch of the session
    const fetchInitialSession = async () => {
      await refreshSession();
    };

    fetchInitialSession();

    // 2. Set up a listener for session changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, currentSession) => {
        setSession(currentSession);
      }
    );

    // Cleanup the subscription
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase, refreshSession]); // Dependencies are correct

  return { supabase, session, loading, refreshSession };
};
