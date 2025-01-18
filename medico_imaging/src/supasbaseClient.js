import { createClient } from "@supabase/supabase-js";

const supabaseUrl ="https://wfnkbftrclahkqvwmoqv.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmbmtiZnRyY2xhaGtxdndtb3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwOTU4NjksImV4cCI6MjA1MjY3MTg2OX0.8ydH6Un5zD5wFrh6ut31arCApFtXaZruP8kKXyda4Cg";

export const supabase = createClient(supabaseUrl,supabaseAnonKey);