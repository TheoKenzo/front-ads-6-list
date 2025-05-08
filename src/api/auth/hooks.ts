import { useMutation } from "@tanstack/react-query";
import { authApi } from ".";

export function useVerifyAccessKey() {
  return useMutation({
    mutationFn: async ({ accessKey }: { accessKey: string }) => {
      return await authApi.verifyAccessKey({ accessKey });
    },
    retry: false,
  });
}
