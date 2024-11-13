import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oikjmoxlqzwjrqgkyhmu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa2ptb3hscXp3anJxZ2t5aG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjU3MDUsImV4cCI6MjA0NzA0MTcwNX0.wITQnAco8IJmLqZSh4y2OitQExNf7AAcWxvuU-Bm13c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
