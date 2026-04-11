import type Genre from "./Genre";
import type Platform from "./Platform";
import type Publisher from "./Publisher";

export default interface Game {
  added: number;
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  rating: number;
  ratings_count: number;
  metacritic: number;
  released: string;
  playtime: number;
  website?: string;
  reddit_url?: string;
  developers?: Publisher[];
  tags?: { id: number; name: string; language: string }[];
  esrb_rating?: { id: number; name: string; slug: string };
  stores?: { store: { id: number; name: string; domain: string } }[];
}
