import type { StateCreator } from "zustand";
import type { ITwitterState } from "../types";

export type TaActiveTab = "home" | "profile";

export interface IActiveTabState {
  activeTab: TaActiveTab;
  setActiveTab: (val: TaActiveTab) => void;
}

export const createTabSlice: StateCreator<
  ITwitterState,
  [],
  [],
  IActiveTabState
> = (set) => ({
  activeTab: "home",

  setActiveTab: (val) => {
    set(() => ({
      activeTab: val,
    }));
  },
});
