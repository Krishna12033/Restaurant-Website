
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL and anon key
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-anon-key';

// Create a single supabase client for the entire app
export const supabase = createClient(supabaseUrl, supabaseKey);
