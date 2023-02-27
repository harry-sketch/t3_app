import useTwitterStore from "@/Store/slices";
import type { TaActiveTab } from "@/Store/slices/createTabSlice";

export const Timeline = () => {
  const activeTab = useTwitterStore((state) => state.activeTab);

  const TabData: {
    [key in TaActiveTab]: JSX.Element;
  } = {
    home: <div>home</div>,
    profile: <div>profile</div>,
  };

  return (
    <div className="h-full w-[40rem]  border-l border-r border-slate-300">
      {activeTab ? TabData[activeTab] : null}
    </div>
  );
};
