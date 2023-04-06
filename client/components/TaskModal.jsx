import { RiDeleteBin6Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { AiOutlineClockCircle } from "react-icons/ai";
import Modal from "./Modal";

// const TaskModal = ({ datae }) => {
//   const { _id, email, task_name, description, due_date, priority } = datae;

//   return (
// <>
//   <input type="checkbox" id="my-modal-5" className="modal-toggle" />
//   <div className="modal bg-[#00000070]">
//     <div className="modal-box relative bg-primary">
//       <label
//         htmlFor="my-modal-5"
//         className="btn btn-sm btn-circle absolute right-2 top-2 bg-secondary"
//       >
//         ✕
//       </label>
//       {/* <h3 className="text-lg font-bold text-black">Task info</h3> */}
//       <div className="bg-primary rounded-2xl p-6 text-white min-h-[200px] flex flex-col gap-4 justify-between">
//         <div className="pb-4 border-b ">
//           <h1 className="text-3xl mb-2">{task_name}</h1>
//           <h2 className="text-md">{description}</h2>
//         </div>
//         <div className="flex items-center">
//           <AiOutlineClockCircle className="mr-2" />
//           <h2>{due_date}</h2>
//         </div>
//         <div className="flex justify-between items-center">
//           <div className="flex justify-around items-center gap-4">
//             <h1>Priority : </h1>
//             <div
//               className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
//                 priority === "red" && "bg-red-500"
//               }`}
//             ></div>
//             <div
//               className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
//                 priority === "yellow" && "bg-yellow-500"
//               }`}
//             ></div>
//             <div
//               className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
//                 priority === "green" && "bg-green-500"
//               }`}
//             ></div>
//           </div>
//           <div className="flex gap-4">
//             <label
//               htmlFor="my-modal-3"
//               className="btn bg-transparent hover:bg-transparent text-white border-0"
//             >
//               <TiEdit />
//             </label>
//             <button
//               onClick={() => handleDelete(_id)}
//               className="btn bg-transparent hover:bg-transparent border-0"
//             >
//               <RiDeleteBin6Line />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </>
//   );
// };

// export default TaskModal;

import { useEffect } from "react";

export default function TaskModal({ open, control, modalData }) {
  const { task_name, description, due_date, priority } = modalData || {};

  return (
    open && (
      <>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal bg-[#00000070]">
          <div className="modal-box relative bg-primary">
            <label
              onClick={control}
              htmlFor="my-modal-5"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-secondary"
            >
              ✕
            </label>
            {/* <h3 className="text-lg font-bold text-black">Task info</h3> */}
            <div className="bg-primary rounded-2xl p-6 text-white min-h-[200px] flex flex-col gap-4 justify-between">
              <div className="pb-4 border-b ">
                <h1 className="text-3xl mb-2">{task_name}</h1>
                <h2 className="text-md">{description}</h2>
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
            </div>
          </div>
        </div>
      </>
    )
  );
}
