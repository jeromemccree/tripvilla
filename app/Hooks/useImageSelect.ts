import { create } from "zustand";

type Store = {
  image: string | null;
  setImage: (image: string | null) => void;
};

export const useImageSelect = create<Store>((set) => ({
  image: null,
  setImage: (image) => set({ image }),
}));
