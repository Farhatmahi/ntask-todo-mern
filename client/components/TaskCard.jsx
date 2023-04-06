import { RiDeleteBin6Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { AiOutlineClockCircle } from "react-icons/ai";
import Modal from "./Modal";
import DeleteConfirmation from "./DeleteConfirmation";
import { useState } from "react";
import TaskModal from "./TaskModal";

const TaskCard = ({ datae, setTasks, control, setModalData }) => {
  const { _id, email, task_name, description, due_date, priority } = datae;

  const [isOpen, setIsOpen] = useState(true);

  const handleDelete = async (id) => {
    const res = await fetch(
      `https://todo-server-chi.vercel.app/tasks/${id}?email=${email}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    setTasks(data);
    return data;
  };

  return (
    <>
      <label
        htmlFor="my-modal-5"
        onClick={() => {
          control();
          setModalData(datae);
        }}
      >
        <div className="bg-primary rounded-2xl p-6 text-white min-h-[200px] flex flex-col gap-4 justify-between">
          <div className="pb-4 border-b ">
            <h1 className="text-3xl mb-2">{task_name}</h1>
            {/* <h2 className="text-md">{description}</h2> */}
          </div>
          <div className="flex items-center">
            <AiOutlineClockCircle className="mr-2" />
            <h2>{due_date}</h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-around items-center gap-4">
              <h1>Priority : </h1>
              <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
                  priority === "red" && "bg-red-500"
                }`}
              ></div>
              <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
                  priority === "yellow" && "bg-yellow-500"
                }`}
              ></div>
              <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
                  priority === "green" && "bg-green-500"
                }`}
              ></div>
            </div>
            <div className="flex gap-4">
              <label
                htmlFor="my-modal-3"
                className="btn bg-transparent hover:bg-transparent text-white border-0"
              >
                <TiEdit />
              </label>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-transparent hover:bg-transparent border-0"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
          {datae && isOpen && (
            <Modal datae={datae} setIsOpen={setIsOpen} setTasks={setTasks} />
          )}
          {/* <DeleteConfirmation datae={datae} /> */}
        </div>
      </label>
      <TaskModal datae={datae} />
    </>
  );
};

export default TaskCard;
