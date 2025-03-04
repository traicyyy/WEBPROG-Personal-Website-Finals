import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://thmewioigafrztlxdnzz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobWV3aW9pZ2Fmcnp0bHhkbnp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwOTc2NDEsImV4cCI6MjA1NjY3MzY0MX0.q3Dy8SrkjJTZFfDQ3GOXVYxfWtQD7TctFN63D60KIfs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
