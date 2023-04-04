import { AuthContext } from "@/context/authContext";
import { useContext } from "react";
import { Oval } from "react-loader-spinner";

const Modal = () => {
  const { loading } = useContext(AuthContext);

  const handleEditTask = async (id) => {};

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
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
                placeholder="Enter your password"
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
                placeholder="Enter your password"
              />
            </div>

            <div class="flex items-center justify-start gap-6">
              <button
                onClick={handleEditTask}
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
