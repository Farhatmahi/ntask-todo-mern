import { AuthContext } from "@/context/authContext";
import Link from "next/link";
import { useContext } from "react";

const MobileNavbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut()
      .then((res) => toast.success("Logged out"))
      .catch((err) => console.error(err));
  };

  return (
    <>
    <div className="flex justify-center items-center bg-primary lg:hidden">
        <h1 className="text-white pt-4"> Welcome {user?.displayName}</h1>
    </div>
      <div className="navbar bg-primary text-white lg:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-primary"
            >
              <li>
                <Link href="/add-task">Add task</Link>
              </li>
              <li>
                <Link href="/all-tasks">All tasks</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/">
            <span className="text-accent">n</span>Task
          </Link>
        </div>
        <div className="navbar-end">
          <div className="">
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn bg-accent text-white"
              >
                Log out
              </button>
            ) : (
              <Link
                href="/login"
                className="btn bg-accent text-white mr-8 px-8"
              >
                Sign up
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
