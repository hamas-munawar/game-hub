import ms from "ms";

import { useQuery } from "@tanstack/react-query";

import platforms from "../data/platforms";
import APIClient from "../services/api-client";

import type { Platform } from "../interfaces/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
