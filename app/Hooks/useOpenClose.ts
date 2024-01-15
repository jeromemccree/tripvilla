import { create } from "zustand";

export type OpenCloseStore = {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
};

const createOpenCloseStore = () =>
  create<OpenCloseStore>((set) => ({
    isOpen: false,
    setOpen: () => set({ isOpen: true }),
    setClose: () => set({ isOpen: false }),
  }));

export const useModal = createOpenCloseStore();
export const useCheckEmailModal = createOpenCloseStore();
export const useSearchModal = createOpenCloseStore();
export const useMobleSidebarModal = createOpenCloseStore();
export const useRegisterModal = createOpenCloseStore();
