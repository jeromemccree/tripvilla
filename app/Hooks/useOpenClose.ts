import { create } from "zustand";

interface OpenCloseStore {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

const createOpenCloseStore = () =>
  create<OpenCloseStore>((set) => ({
    isOpen: false,
    setOpen: () => set({ isOpen: true }),
    setClose: () => set({ isOpen: false }),
  }));

export const useSearchModal = createOpenCloseStore();
export const useMobleSidebarModal = createOpenCloseStore();
