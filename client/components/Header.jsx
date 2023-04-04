import { AuthContext } from "@/context/authContext";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineShareAlt } from "react-icons/ai";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = e => {
    e.preventDefault();
    logOut()
    .then(res => toast.success("Logged out"))
    .catch(err => console.error(err))
  }

  return (
    <div className="bg-primary flex justify-between py-4 text-white border-b border-[#52525B]">
      <div className="flex justify-center items-center pl-6">
        {user && <h1>Welcome {user?.displayName}</h1>}
      </div>
      <div className="">
        <button className="btn btn-outline bg-primary text-white mr-4 px-8">
          <AiOutlineShareAlt className="mr-2 inline" /> Share
        </button>
        {user ? (
          <button onClick={handleLogOut} className="btn bg-accent text-white mr-8 px-8">
            Log out
          </button>
        ) : (
          <Link href='/login' className="btn bg-accent text-white mr-8 px-8">
            Sign up
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
