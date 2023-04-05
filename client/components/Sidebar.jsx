import Link from "next/link";
import { RiFileAddFill } from "react-icons/ri";
import { AiFillClockCircle } from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
  const [selectedRoute, setSelectedRoute] = useState("");

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div className="bg-primary w-96 h-screen text-white hidden md:flex flex-col border-r border-[#52525B]">
      <div className="py-4 border-b border-[#52525B] flex items-center h-[81px]">
        <h1 className="text-3xl px-10">
          <span className="text-accent">n</span>Task
        </h1>
      </div>
      <div className="flex flex-col gap-6 px-10 pt-4">
        <Link
          onClick={() => handleRouteChange("/add-task")}
          href="/add-task"
          className={`border-b border-[#52525b] py-4 w-full text-xl font-semibold ${
            selectedRoute === "/add-task"
              ? "text-white border-b border-white"
              : "text-[#a1a1aa] border-b border-[#52525b]"
          } flex items-center hover:bg-zinc-700 hover:text-white hover:rounded-lg`}
        >
          <RiFileAddFill className="inline mr-2" />
          Add Task
        </Link>
        <Link
          onClick={() => handleRouteChange("/all-tasks")}
          href="/all-tasks"
          className={`py-4 w-full text-xl font-semibold ${
            selectedRoute === "/all-tasks"
              ? "text-white border-b border-white"
              : "text-[#a1a1aa] border-b border-[#52525b]"
          } flex items-center hover:bg-zinc-700 hover:text-white hover:rounded-lg`}
        >
          <AiFillClockCircle className="inline mr-2" />
          All Tasks
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
