import { useQuery } from "@tanstack/react-query";

import APIClient from "../services/api-client";

import type Screenshot from "../interfaces/Screenshot";

const useScreenshot = (slug: string) => {
  const apiClient = new APIClient<Screenshot>(`/games/${slug}/screenshots`);

  return useQuery({
    queryKey: ["screenshot", slug],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshot;
