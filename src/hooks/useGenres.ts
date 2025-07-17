import ms from "ms";

import { useQuery } from "@tanstack/react-query";

import genres from "../data/genres";
import APIClient from "../services/api-client";

import type { Genre } from "../interfaces/Genre";

const apiClient = new APIClient<Genre>("genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
