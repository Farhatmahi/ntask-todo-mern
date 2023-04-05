import Header from "@/components/Header";
import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  return (
    // <div>
    //     <Header />
    //     <div className="grid grid-cols-4">
    //         <div className="col-span-1"><Sidebar /></div>
    //         <div className="col-span-3">{children}</div>
    //     </div>
    // </div>
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
