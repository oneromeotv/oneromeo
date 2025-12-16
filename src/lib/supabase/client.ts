// /src/lib/supabase/client.ts

import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase environment variables are missing.');
}

// 1. Declare a variable to hold the cached client instance
let browserSupabaseClient: SupabaseClient | undefined;

// Function to create and return the client instance (Singleton pattern)
export const createBrowserClient = () => {
  // 2. If the client is already cached, return it
  if (browserSupabaseClient) {
    return browserSupabaseClient;
  }

  // 3. If it doesn't exist, create it and store it in the cache variable
  browserSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

  // 4. Return the new instance
  return browserSupabaseClient;
};
