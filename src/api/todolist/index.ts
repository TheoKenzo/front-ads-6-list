import { apiUrl } from "../config";

export const todolistApi = {
  async getTodoLists() {
    const { data } = await apiUrl.get("/todo/list");

    return data;
  },
};
