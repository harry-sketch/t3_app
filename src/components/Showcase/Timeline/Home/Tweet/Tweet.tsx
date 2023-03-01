import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { useState } from "react";

export const Tweet = () => {
  const [tweetValue, setTweetValue] = useState("");

  const { data } = useSession();

  const { refetch } = api.tweet.getAll.useQuery(undefined, {
    enabled: data?.user !== undefined,
  });

  const createTweet = api.tweet.create.useMutation({
    onSuccess: () => {
      void refetch();
    },
  });

  const handleCreateTweet = () => {
    if (tweetValue.length < 0) return;

    createTweet.mutate({ tweet: tweetValue });
  };

  return (
    <div className="flex w-full flex-col">
      <div className="relative">
        <textarea
          value={tweetValue}
          onChange={(e) => {
            if (tweetValue.length > 80) return;
            setTweetValue(e.target.value);
          }}
          placeholder="what's happening?"
          className="w-full resize-none rounded-lg border-none bg-custom-2/95 p-4 text-black placeholder:text-black focus:outline-none"
          rows={3}
        />
        <span className="absolute right-3 bottom-3 text-black">
          {tweetValue.length}/words
        </span>
      </div>
      <button
        onClick={handleCreateTweet}
        type="button"
        className="ml-auto w-20 rounded-lg bg-primary p-2.5 text-center"
      >
        Tweet
      </button>
    </div>
  );
};
