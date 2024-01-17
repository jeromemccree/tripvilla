import { create } from "zustand";

type Store = {
  email: string;
  setEmail: (email: string) => void;
};

export const useEmailSelect = create<Store>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
}));
