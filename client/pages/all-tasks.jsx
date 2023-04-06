import TaskCard from "@/components/TaskCard";
import TaskModal from "@/components/TaskModal";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdOutlineTask } from "react-icons/md";

const allTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [modalData, setModalData] = useState(null);

  // modal elements start
  const [opened, setOpened] = useState(false);
  console.log(opened);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };
  // modal elements end

  useEffect(() => {
    axios
      .get(`https://todo-server-chi.vercel.app/tasks?email=${user?.email}`)
      .then((response) => {
        // console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user, setTasks]);
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
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h1 className="text-3xl lg:text-7xl pb-2">All Tasks</h1>
            <div className="flex justify-around items-center gap-6 lg:pl-6 pb-4 lg:pb-0">
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
        <div className="px-4 pt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[70vh] lg:min-h-0">
          {tasks.map((datae) => (
            <TaskCard
              setModalData={setModalData}
              key={datae.id}
              datae={datae}
              // setModalData={setModalData}
              setTasks={setTasks}
              control={controlModal}
            />
          ))}
          {opened && (
            <TaskModal
              modalData={modalData}
              open={opened}
              control={controlModal}
            />
          )}
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

// const Open = () => {

//   return (
//     <div>
//       <button onClick={controlModal}>Open</button>
// <Modal open={opened} control={controlModal} id={id} />
//     </div>
//   );
// };

// export default Open;
