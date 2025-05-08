import { createClient } from "@supabase/supabase-js";
import { getEnvVariable } from "./utils";

const supabaseUrl = getEnvVariable(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  "NEXT_PUBLIC_SUPABASE_URL"
);

const supabaseAnonKey = getEnvVariable(
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  "NEXT_PUBLIC_SUPABASE_ANON_KEY"
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
