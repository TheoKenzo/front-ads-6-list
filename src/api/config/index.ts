import { supabase } from "@/lib/supabase";
import { getEnvVariable } from "@/lib/utils";
import axios from "axios";

export function getApi(baseURL: string) {
  const api = axios.create({
    baseURL,
  });

  const token = getAccessToken();

  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return api;
}

const getAccessToken = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Erro ao obter sessão:", error);
    return null;
  }

  return data.session?.access_token || null;
};

export const apiUrl = getApi(
  getEnvVariable(process.env.NEXT_PUBLIC_API_URL, "NEXT_PUBLIC_API_URL")
);
