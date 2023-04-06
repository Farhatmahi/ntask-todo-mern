import Header from "@/components/Header";
import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full">
        <Header />
        <MobileNavbar />
        <div className="bg-secondary">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
