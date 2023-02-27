import { Wrapper } from "../Wrapper/Wrapper";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0  z-10 h-20 w-full bg-primary py-3">
      <Wrapper className="mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <div className="text-2xl font-semibold text-slate-50">
            Don&apos;t miss what&apos;s happening
          </div>
          <div className="tex-base font-normal text-slate-50">
            People on twitter are the first
          </div>
        </div>
        <div>
          <button
            type="button"
            className="rounded-3xl bg-slate-50 px-4 py-2 text-base font-semibold"
          >
            SignUp
          </button>
        </div>
      </Wrapper>
    </footer>
  );
};
