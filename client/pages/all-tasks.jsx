import TaskCard from "@/components/TaskCard";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdOutlineTask } from "react-icons/md";

const allTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/tasks?email=${user?.email}`)
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);
  return (
    <div>
      {/* header  */}
      <div className="text-white border-b border-[#52525b] px-6">
        <div className="">
          <div className="text-sm breadcrumbs py-6">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>All Tasks</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-7xl pb-2">All Tasks</h1>
            <div className="flex justify-around items-center gap-6 pl-6">
              <h2 className="text-xl">Tasks({tasks.length})</h2>
              <div className="flex justify-center items-center border px-4 py-2 border-[#52525B] rounded-3xl">
                <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500"></div>
              </div>
              <div className="flex justify-center items-center border px-4 py-2 border-[#52525B] rounded-3xl">
                <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500"></div>
              </div>
              <div className="flex justify-center items-center border px-4 py-2 border-[#52525B] rounded-3xl">
                <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {user ? (
        <div className="px-4 pt-8 grid grid-cols-2 gap-4">
          {tasks.map((datae) => (
            <TaskCard key={datae.id} datae={datae} setTasks={setTasks} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[30rem]">
          <MdOutlineTask className="text-7xl text-white mb-4" />
          <h1 className="text-white">Please log in to see your tasks</h1>
        </div>
      )}
    </div>
  );
};

export default allTasks;
