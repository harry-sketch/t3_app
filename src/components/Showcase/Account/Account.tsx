import React from "react";

// Auth
import { useSession } from "next-auth/react";

// Components
import { Story } from "./Story/Story";
import { NewAccount } from "./NewAccout/NewAccount";

const Account = () => {
  const { status } = useSession();

  return (
    <div className="h-full w-[20rem] pl-4">
      {status === "authenticated" ? <Story /> : <NewAccount />}
    </div>
  );
};

export default Account;
