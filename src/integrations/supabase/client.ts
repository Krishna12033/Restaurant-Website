// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://erofkqacgpeddpmihlmb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyb2ZrcWFjZ3BlZGRwbWlobG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwOTM1NzcsImV4cCI6MjA1ODY2OTU3N30.WAob146RZ07PJHYjzQg6nTlXbzmD6VH8P6XZC7YrLPE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);