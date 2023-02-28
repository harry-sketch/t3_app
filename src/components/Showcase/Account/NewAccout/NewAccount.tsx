import { signIn } from "next-auth/react";

export const NewAccount = () => (
  <div className="w-full rounded-lg border border-slate-300 p-3">
    <div className=" text-2xl font-bold text-slate-600">New to Twitter</div>
    <div className="mt-1 mb-4 text-xs font-normal text-slate-600">
      Sign up now to get your own personlized timeline
    </div>
    <button
      onClick={() => void signIn()}
      type="button"
      className="w-full rounded-2xl  border-2 border-slate-300 py-2 text-base font-semibold text-slate-600"
    >
      Sign Up
    </button>
  </div>
);
