// Assets
import {
  AiFillHome,
  AiFillProfile,
  AiOutlineProfile,
  AiOutlineHome,
} from "react-icons/ai";

// Utils
import { cn } from "@/utils/helpers";

// Auth
import { useSession } from "next-auth/react";

// Store
import useTwitterStore from "@/Store/slices";

// Type
import type { TaActiveTab } from "@/Store/slices/createTabSlice";

// Components
import { AccountComp } from "./AccountComp/AccountComp";

const Sidebar = () => {
  const { data, status } = useSession();

  const activeTab = useTwitterStore((state) => state.activeTab);

  const setActiveTab = useTwitterStore((state) => state.setActiveTab);

  const tabs: {
    title: TaActiveTab;
    icon: JSX.Element;
  }[] = [
    {
      title: "home",
      icon:
        activeTab === "home" ? (
          <AiFillHome size={30} />
        ) : (
          <AiOutlineHome size={30} />
        ),
    },

    {
      title: "profile",
      icon:
        activeTab === "profile" ? (
          <AiFillProfile size={30} />
        ) : (
          <AiOutlineProfile size={30} />
        ),
    },
  ];

  return (
    <div className="relative h-full w-[20rem] p-4 text-white">
      {tabs.map(({ icon, title }) => {
        if (title === "profile" && status === "unauthenticated") return;
        return (
          <button
            onClick={() => setActiveTab(title)}
            type="button"
            key={`sidebar-${title}`}
            className={cn("mb-4 flex items-center gap-2 last:mb-0")}
          >
            <span>{icon}</span>
            <span>{title.toUpperCase()}</span>
          </button>
        );
      })}

      {data ? <AccountComp /> : null}
    </div>
  );
};

export default Sidebar;
