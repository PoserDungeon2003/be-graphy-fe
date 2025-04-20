import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import Bookings from './bookings';
import Customers from "./customers";
import Sidebar from "./sidebar";
import Wallet from "./wallet";

function Dashboard() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-screen">
        <Routes>
          <Route path="/admin/dashboard/customers" element={<Customers />} />
          <Route path="/admin/dashboard/wallet" element={<Wallet />} />
          <Route path="/admin/dashboard/bookings" element={<Bookings />} />

          {/* Route cho trang không tìm thấy */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;