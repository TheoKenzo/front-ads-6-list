import { apiUrl } from "../config";

export const authApi = {
  async verifyAccessKey({ accessKey }: { accessKey: string }) {
    const { data } = await apiUrl.post("/auth/verify-access-key", {
      accessKey,
    });

    return data;
  },
};
