import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { ITwitterState } from "../types";
import { createTabSlice } from "./createTabSlice";

const useTwitterStore = create<ITwitterState>()(
  devtools(
    (...a) => ({
      ...createTabSlice(...a),
    }),
    {
      name: "twitter-store",
    }
  )
);

// eslint-disable-next-line @typescript-eslint/unbound-method
const { getState, setState } = useTwitterStore;

export { getState, setState };

export default useTwitterStore;
