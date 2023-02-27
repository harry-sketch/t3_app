import useTwitterStore from "@/Store/slices";

const Sidebar = () => {
  const isTest = useTwitterStore((state) => state.isTest);

  const setIsTest = useTwitterStore((state) => state.setIsTest);

  return (
    <div className="h-full w-[20rem]" onClick={() => setIsTest(!isTest)}>
      {isTest ? "Sidebar" : "sed"}
    </div>
  );
};

export default Sidebar;
