import { AuthContext } from "@/context/authContext";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Oval } from "react-loader-spinner";

const Modal = ({ datae, setTasks, setIsOpen }) => {
  const { user, loading } = useContext(AuthContext);
  const { _id } = datae;
  const [formData, setFormData] = useState({
    task_name: "",
    description: "",
    due_date: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const updatedData = {
    email: user?.email,
    task_name: formData.task_name,
    description: formData.description,
    due_date: formData.due_date,
  };

  const handleEditTask = async (id) => {
    try {
      if (
        formData.task_name === "" ||
        formData.description === "" ||
        formData.due_date === ""
      ) {
        toast.error("Please enter all required fields");
        return;
      }
      const { data } = await axios.put(
        `https://todo-server-farhatmahi.vercel.app/tasks/update`,
        { data: updatedData, id: id },
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("clicked");
      // console.log(data);
      toast.success("Task updated successfully");
      setTasks(data);
      setIsOpen(false);
    } catch (error) {}
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal bg-[#00000070]">
        <div className="modal-box relative bg-secondary">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-black"></h3>
          <form class="shadow-md rounded px-8 pt-10 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-white " for="username">
                Task name
              </label>
              <input
                class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
                type="text"
                placeholder="Make a sandwich"
                name="task_name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="mb-6">
              <label class="block text-white" for="username">
                Description
              </label>
              <input
                class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
                type="text"
                name="description"
                placeholder="A quick brown fox jumped over the lazy dog"
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="mb-6">
              <label class="block text-white" for="username">
                Due date
              </label>
              <input
                class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
                type="date"
                name="due_date"
                placeholder="18-04-2023"
                onChange={handleInputChange}
                required
              />
            </div>

            <div class="flex items-center justify-start gap-6">
              <button
                onClick={() => handleEditTask(_id)}
                className="btn bg-accent text-white w-36"
                type="button"
              >
                {loading ? (
                  <Oval
                    height={20}
                    width={20}
                    color="#ffffff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#c1c1c1"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                ) : (
                  "Update task"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
