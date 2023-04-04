import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/router";
import { Oval } from "react-loader-spinner";

const login = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const router = useRouter();
  const { login, signInWithGoogle } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // console.log(formData);

  const handleLogIn = (e) => {
    setLoading(true);
    e.preventDefault();
    login(formData.email, formData.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoading(false);
        router.push("/all-tasks");
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithGoogle().then((result) => {
      const user = result.user;
      console.log(user);
      router.push("/add-task");
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
                <a>Login</a>
              </li>
            </ul>
          </div>
          <h1 className="text-7xl pb-4">Login</h1>
        </div>
        {/* form  */}
      </div>
      <form class="shadow-md rounded px-8 pt-10 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-white " for="username">
            Email
          </label>
          <input
            class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
            type="text"
            placeholder="john@gmail.com"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-6">
          <label class="block text-white" for="username">
            Password
          </label>
          <input
            class="appearance-none bg-transparent border-b border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
        </div>

        <div class="flex items-center justify-start gap-6">
          <button
            onClick={handleLogIn}
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
              "Login"
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
          New to nTask?{" "}
          <Link className="text-accent hover:underline" href="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default login;
