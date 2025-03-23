
import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Warn if Supabase credentials are not set
if (!supabaseUrl || !supabaseKey) {
  console.warn(
    'Supabase credentials not set. Please set VITE_SUPABASE_URL and VITE_SUPABASE_KEY environment variables.'
  );
}

// Create a single supabase client for the entire app
export const supabase = createClient(
  supabaseUrl || 'https://your-supabase-url.supabase.co',
  supabaseKey || 'your-supabase-anon-key'
);
