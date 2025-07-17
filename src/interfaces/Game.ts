import type { Platform } from "./Platform";

export interface Game {
  added: number;
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}
