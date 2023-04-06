import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/router";
import { Oval } from "react-loader-spinner";

const register = () => {
  const { createUser, updateUser, signInWithGoogle, loading, setLoading } =
    useContext(AuthContext);
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithGoogle().then((result) => {
      const user = result.user;
      // console.log(user);
      router.push("/all-tasks");
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    createUser(formData.email, formData.password).then((result) => {
      const user = result.user;
      // console.log(user);
      const userInfo = {
        displayName: formData.username,
      };
      updateUser(userInfo)
        .then((result) => {
          // console.log(result);
          setLoading(false);
          router.push("/add-task");
        })
        .then((err) => console.log(err));
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center text-white border-b border-[#52525b] px-6">
        <div className="">
          <div className="text-sm breadcrumbs py-6">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Register</a>
              </li>
            </ul>
          </div>
          <h1 className="text-7xl pb-4">Register</h1>
        </div>
        {/* form  */}
      </div>
      <form class="rounded px-8 pt-10 pb-8 mb-4 min-h-[70vh] lg:min-h-0">
        <div class="mb-4">
          <label class="block text-white " for="username">
            Username
          </label>
          <input
            class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
            name="username"
            type="text"
            placeholder="John Doe"
            required
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-4">
          <label class="block text-white " for="username">
            Email
          </label>
          <input
            class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
            name="email"
            required
            type="text"
            placeholder="john@gmail.com"
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-6">
          <label class="block text-white" for="username">
            Password
          </label>
          <input
            class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
            name="password"
            required
            type="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
        </div>

        <div class="flex items-center justify-start gap-6">
          <button
            onClick={handleSubmit}
            className="btn bg-accent text-white"
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
              "Sign up"
            )}
          </button>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-accent text-white"
            type="button"
          >
            <FcGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
        <p className="mt-8 text-white ">
          Already have an account?{" "}
          <Link className="text-accent hover:underline" href="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default register;
