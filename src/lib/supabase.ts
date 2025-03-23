
import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and key from environment variables or use defaults for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'your-supabase-anon-key';

// Create a single supabase client for the entire app
export const supabase = createClient(supabaseUrl, supabaseKey);
