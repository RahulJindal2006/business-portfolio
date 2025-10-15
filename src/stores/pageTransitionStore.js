import { create } from "zustand";

export const usePageTransitionStore = create((set) => ({
  isEntering: false,
  isExiting: false,
  delay: 0,

  setIsEntering: (value) => set({ isEntering: value }),
  setIsExiting: (value) => set({ isExiting: value }),
  setDelay: (value) => set({ delay: value }),
}));
