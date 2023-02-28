import { useState } from "react";
import Image from "next/image";

// Auth
import { useSession, signOut } from "next-auth/react";

export const AccountComp = () => {
  // Local States
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useSession();

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      className="absolute bottom-20 left-0 flex w-3/4 items-center gap-2 rounded-xl bg-primary p-2"
    >
      {data?.user.image ? (
        <Image
          src={data?.user.image}
          alt={`${data?.user.name ?? ""} profile picture`}
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : null}

      <span className="text-xl font-semibold capitalize text-slate-50">
        {data?.user.name}
      </span>

      {isOpen ? (
        <button
          onClick={() => void signOut()}
          type="button"
          className="absolute bottom-16 left-0 w-full rounded-xl bg-slate-300 p-2 text-base font-semibold text-slate-600"
        >
          Logout
        </button>
      ) : null}
    </button>
  );
};
