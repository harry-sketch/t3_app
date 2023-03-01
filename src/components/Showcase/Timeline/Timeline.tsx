// Store
import useTwitterStore from "@/Store/slices";

// Type
import type { TaActiveTab } from "@/Store/slices/createTabSlice";

// Components
import { Home } from "./Home/Home";

export const Timeline = () => {
  const activeTab = useTwitterStore((state) => state.activeTab);

  const TabData: {
    [key in TaActiveTab]: JSX.Element;
  } = {
    home: <Home />,
    profile: <div>profile</div>,
  };

  return (
    <div className="h-full w-[40rem]  border-l border-r border-slate-300 p-4 text-custom-1">
      {activeTab ? TabData[activeTab] : null}
    </div>
  );
};
