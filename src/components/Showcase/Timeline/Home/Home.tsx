import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { Tweet } from "./Tweet/Tweet";

export const Home = () => {
  const { status } = useSession();

  const { data: tweets } = api.tweet.getAll.useQuery(undefined, {
    enabled: status === "authenticated",
  });

  return (
    <div className="w-full">
      {status === "authenticated" ? <Tweet /> : null}

      {tweets?.map(({ id, tweet }) => (
        <div key={id}>{tweet}</div>
      ))}
    </div>
  );
};
