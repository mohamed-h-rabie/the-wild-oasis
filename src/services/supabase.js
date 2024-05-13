import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ckjkytyrbmobofvaiuop.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNramt5dHlyYm1vYm9mdmFpdW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4ODExODYsImV4cCI6MjAyOTQ1NzE4Nn0.k-YbtWmn4QggI690K9iCDhyQnwB9OydiWaNcdVpCg5Y";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
