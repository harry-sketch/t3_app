import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { type ITwitterState } from "../types";
import { createTestSlice } from "./createTestSlice";

const useTwitterStore = create<ITwitterState>()(
  devtools(
    (...a) => ({
      ...createTestSlice(...a),
    }),
    {
      name: "client-store",
    }
  )
);

// eslint-disable-next-line @typescript-eslint/unbound-method
const { getState, setState } = useTwitterStore;

export { getState, setState };

export default useTwitterStore;
