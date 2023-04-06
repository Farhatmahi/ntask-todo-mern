import { AuthContext } from "@/context/authContext";
import withPrivateRoute from "@/PrivateRoute./WithPrivateRoute";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Oval } from "react-loader-spinner";

const addTask = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [formData, setFormData] = useState({
    task_name: "",
    description: "",
    due_date: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { task_name, description, due_date } = formData;
  const email = user?.email;

  const taskData = { email, task_name, description, due_date };

  const handleAddTask = async (e) => {
    setLoading(true);
    e.preventDefault();

    if ((!email, !task_name || !description || !due_date)) {
      setLoading(false);
      return console.error("An error occurred");
    }
    try {
      const response = await fetch(
        `https://todo-server-farhatmahi.vercel.app/tasks`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(taskData),
        }
      );
      const data = await response.json();
      console.log(data);
      setLoading(false);
      toast.success("Task added!");
      router.push("/all-tasks");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex w-full items-center text-white border-b border-[#52525b] px-6">
        <div className="">
          <div className="text-sm breadcrumbs py-6">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Add Task</a>
              </li>
            </ul>
          </div>
          <h1 className="text-3xl md:text-7xl pb-4 text-center lg:text-left">Add Task</h1>
        </div>
        {/* form  */}
      </div>
      <form class="rounded px-8 pt-10 pb-8 mb-4 min-h-[70vh] lg:min-h-0">
        <div class="mb-4">
          <label class="block text-white " htmlFor="username">
            Task name
          </label>
          <input
            class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
            name="task_name"
            type="text"
            placeholder="Wash the dishes"
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-6">
          <label class="block text-white" htmlFor="username">
            Description
          </label>
          <input
            class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
            name="description"
            type="text"
            placeholder="A quick brown fox jumped over the lazy dog"
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-6">
          <label class="block text-white" for="username">
            Due Date
          </label>
          <input
            class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
            name="due_date"
            type="date"
            placeholder="A quick brown fox jumped over the lazy dog"
            onChange={handleInputChange}
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            onClick={handleAddTask}
            className="btn bg-accent text-white w-32"
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
              "Add Task"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default withPrivateRoute(addTask);
