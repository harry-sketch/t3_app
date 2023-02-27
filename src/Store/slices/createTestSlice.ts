import type { StateCreator } from "zustand";
import type { ITwitterState } from "../types";

export interface ITestState {
  isTest: boolean;
  setIsTest: (val: boolean) => void;
}

export const createTestSlice: StateCreator<
  ITwitterState,
  [],
  [],
  ITestState
> = (set) => ({
  isTest: false,
  setIsTest: (val) => {
    set(() => ({
      isTest: val,
    }));
  },
});
