import { create } from "zustand";

type Store = {
  image: string | null;
  aspectRatio: number;
  setImage: (image: string | null) => void;
  setAspectRatio: (aspectRatio: number) => void;
};

export const useImageSelect = create<Store>((set) => ({
  image: "",
  aspectRatio: 1,
  setImage: (image) => set({ image }),
  setAspectRatio: (aspectRatio) => set({ aspectRatio }),
}));
