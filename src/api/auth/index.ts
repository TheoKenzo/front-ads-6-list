import { apiUrl } from "../config";
import { supabase } from "@/lib/supabase";

export const authApi = {
  async verifyAccessKey({ accessKey }: { accessKey: string }) {
    const { data } = await apiUrl.post("/auth/verify-access-key", {
      accessKey,
    });

    return data;
  },

  async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<Error | null> {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return error;
  },
};
