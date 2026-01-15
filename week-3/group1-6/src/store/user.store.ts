import { create } from "zustand";
import type { UserProps } from "../types/user.types";

export const useUser = create((set) => ({
  user: {},
  setUser: (newUser: UserProps) => set({ user: newUser }),
}));
