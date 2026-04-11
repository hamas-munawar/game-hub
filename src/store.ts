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

interface WishlistStore {
  wishlist: number[];
  toggleWishlist: (gameId: number) => void;
  isInWishlist: (gameId: number) => boolean;
}

import { persist } from "zustand/middleware";

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlist: [],
      toggleWishlist: (gameId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(gameId)
            ? state.wishlist.filter((id) => id !== gameId)
            : [...state.wishlist, gameId],
        })),
      isInWishlist: (gameId) => get().wishlist.includes(gameId),
    }),
    {
      name: "gamehub-wishlist",
    }
  )
);
