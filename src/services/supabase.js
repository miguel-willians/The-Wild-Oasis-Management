import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nemraowxnhnyhvynzemh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lbXJhb3d4bmhueWh2eW56ZW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MzcwMTEsImV4cCI6MjA1MTQxMzAxMX0.wd8anP3lPkpFTkq1MVh70tPpgQ5jEzSJl1dPpRpGfRc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
