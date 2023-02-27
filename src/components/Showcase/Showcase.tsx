import Account from "./Account/Account";
import Sidebar from "./Sidebar/Sidebar";
import { Timeline } from "./Timeline/Timeline";

export const Showcase = () => {
  return (
    <main className="flex h-full justify-center p-4">
      <Sidebar />
      <Timeline />
      <Account />
    </main>
  );
};
