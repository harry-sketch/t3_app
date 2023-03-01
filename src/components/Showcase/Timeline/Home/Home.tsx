import { useSession } from "next-auth/react";
import { Tweet } from "./Tweet/Tweet";

export const Home = () => {
  const { status } = useSession();

  return (
    <div className="w-full">
      {status === "authenticated" ? <Tweet /> : null}
    </div>
  );
};
