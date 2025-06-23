import { useQuery } from "@tanstack/react-query";
import { todolistApi } from ".";

export function useGetTodoLists() {
  return useQuery({
    queryKey: ["todoLists"],
    queryFn: async () => {
      return await todolistApi.getTodoLists();
    },
  });
}
