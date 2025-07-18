import { useQuery } from "@tanstack/react-query";

import APIClient from "../services/api-client";

import type Trailer from "../interfaces/Trailer";

const useTrailer = (slug: string) => {
  const apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);
  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
