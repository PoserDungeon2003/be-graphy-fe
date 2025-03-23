import {
  IoCameraOutline,
  IoImagesOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    {
      name: "Customers",
      path: "/admin/dashboard/customers",
      icon: IoPeopleOutline,
    },
    {
      name: "Photographers",
      path: "/admin/dashboard/photographers",
      icon: IoCameraOutline,
    },
    {
      name: "Photo Projects",
      path: "/admin/dashboard/photo-projects",
      icon: IoImagesOutline,
    },
    { name: "Wallet", path: "/admin/dashboard/wallet", icon: IoWalletOutline },
  ];

  return (
    <div className="h-full w-72 bg-gradient-to-b from-green-100 to-blue-200">
      <div className="bg-gradient-to-r from-green-100 to-blue-200 p-8">
        <h1 className="text-center text-3xl font-bold text-gray-800">
          DASHBOARD
        </h1>
      </div>
      <div className="p-8">
        <div className="space-y-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <div
                  className={`flex cursor-pointer items-center space-x-4 rounded-lg p-4 text-base
                    ${isActive ? "bg-blue-400 text-white" : "text-gray-800"} transition duration-300 hover:bg-blue-400 hover:text-white`}
                >
                  <item.icon size={28} />
                  <span className="font-medium">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-12 left-0 flex w-72 justify-center">
        <div className="flex cursor-pointer items-center space-x-2 text-2xl font-bold text-gray-800 transition hover:text-red-500">
          <Link to={"/login"}><span>LOG OUT</span></Link>
          <IoLogOutOutline size={24} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
