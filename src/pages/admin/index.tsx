import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import Customers from "./customers";
import Photographers from "./photographers";
import PhotoProjects from "./photoProjects";
import Sidebar from "./sidebar";
import Wallet from "./wallet";

function Dashboard() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-screen">
        <Routes>
          <Route path="customers" element={<Customers />} />
          <Route path="photographers" element={<Photographers />} />
          <Route path="photo-projects" element={<PhotoProjects />} />
          <Route path="wallet" element={<Wallet />} />

          {/* Route cho trang không tìm thấy */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
