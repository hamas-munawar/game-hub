import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (order: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, sortOrder } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

export default useGameQueryStore;
