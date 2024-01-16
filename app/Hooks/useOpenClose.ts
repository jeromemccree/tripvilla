import { m } from "framer-motion";
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
export const useMobileSidebarModal = createOpenCloseStore();
export const useRegisterModal = createOpenCloseStore();
export const useCompleteProfileModal = createOpenCloseStore();

// export type OpenCloseStore = {
//   name: string;
//   modalStack: string[];
//   setOpen: () => void;
//   setClose: () => void;
// };

// const useModalStackStore = create<ModalStackStore>((set) => ({
//   modalStack: [],
//   pushToStack: (name) => set((state) => ({ modalStack: [...state.modalStack, name] })),
//   popFromStack: () =>
//     set((state) => {
//       const newStack = [...state.modalStack];
//       newStack.pop();
//       return { modalStack: newStack };
//     }),
// }));

// const createOpenCloseStore = (name: string) =>
//   create<OpenCloseStore>((set) => ({
//     name,
//     modalStack: [],
//     setOpen: () => {
//       set({
//         modalStack.push(name)
//       }),
//     },
//     setClose: () => {
//       set((state) => {
//         const newStack = [...state.modalStack];
//         newStack.pop();
//         console.log("Modal closed:", name, "Modal stack:", newStack);
//         return { modalStack: newStack };
//       });
//     },
//   }));
// export const useModal = createOpenCloseStore("modal");
// export const useCheckEmailModal = createOpenCloseStore("checkEmailModal");
// export const useSearchModal = createOpenCloseStore("searchModal");
// export const useMobileSidebarModal = createOpenCloseStore("mobileSidebarModal");
// export const useRegisterModal = createOpenCloseStore("registerModal");
// export const useCompleteProfileModal = createOpenCloseStore("completeProfileModal");

// This is how i want it to work. User selects model 1. model 1 then takes user to model 2. model 1 is hidden. If user click out of model 2 it reopens model 1.
