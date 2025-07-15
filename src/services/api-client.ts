import axios from 'axios';

import type { AxiosRequestConfig } from "axios";

export interface FetchResults<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResults<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
