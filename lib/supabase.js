import { createClient } from "@supabase/supabase-js";

// Check if environment variables are set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== 'https://placeholder.supabase.co' && 
  supabaseAnonKey !== 'placeholder-key');

if (!isSupabaseConfigured) {
  console.warn('Supabase not properly configured. Please check your .env.local file.');
  console.warn('Required variables:');
  console.warn('- NEXT_PUBLIC_SUPABASE_URL');
  console.warn('- NEXT_PUBLIC_SUPABASE_ANON_KEY');
  console.warn('- SUPABASE_SERVICE_ROLE_KEY (optional for client-side)');
}

// Client-side Supabase client (uses anon key)
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    })
  : null;

// Server-side Supabase client (uses service role key)
export const supabaseAdmin = isSupabaseConfigured && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

// Helper function to safely use Supabase
export const safeSupabase = (callback) => {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase not configured, skipping operation');
    return null;
  }
  return callback(supabase);
};
