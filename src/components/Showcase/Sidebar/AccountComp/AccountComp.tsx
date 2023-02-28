import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export const AccountComp = () => {
  const { data } = useSession();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      className="absolute bottom-20 left-0 flex w-3/4 items-center gap-2 rounded-xl bg-custom-2 p-2"
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

      <span className="text-xl font-semibold capitalize">
        {data?.user.name}
      </span>

      {isOpen ? (
        <button
          onClick={() => void signOut()}
          type="button"
          className="absolute bottom-16 left-0 w-full rounded-xl bg-slate-300 p-2 text-base font-semibold text-slate-600"
        >
          Sign out
        </button>
      ) : null}
    </button>
  );
};
