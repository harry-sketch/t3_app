// Assets
import { AiFillHome, AiFillProfile } from "react-icons/ai";

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
      icon: (
        // Todo: Change the active and default color states for icons
        <AiFillHome size={30} color={activeTab === "home" ? "black" : "gray"} />
      ),
    },

    {
      title: "profile",
      icon: (
        <AiFillProfile
          size={30}
          color={activeTab === "profile" ? "black" : "gray"}
        />
      ),
    },
  ];

  return (
    <div className="relative h-full w-[20rem] p-4">
      {tabs.map(({ icon, title }) => {
        if (title === "profile" && status === "unauthenticated") return;
        return (
          <button
            onClick={() => setActiveTab(title)}
            type="button"
            key={`sidebar-${title}`}
            // Todo:Add suitable bg for active states
            className={cn(
              "mb-2.5 flex items-center gap-2 last:mb-0",
              activeTab === title ? "" : ""
            )}
          >
            <span>{icon}</span>
            <span
              className={cn(
                activeTab === title ? "font-bold" : "font-normal",
                "text-base"
              )}
            >
              {title.toUpperCase()}
            </span>
          </button>
        );
      })}

      {data ? <AccountComp /> : null}
    </div>
  );
};

export default Sidebar;
