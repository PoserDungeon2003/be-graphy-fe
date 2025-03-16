import { Dropdown, Menu } from "antd";
import _ from "lodash";
import { useState } from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { IoNotifications, IoPerson, IoSearch } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";

const navBar = [
  {
    name: "Home",
    to: "/user/home",
  },
  {
    name: "Booking",
    to: "/user/package",
  },
  {
    name: "Pictures",
    to: "#",
  },
  {
    name: "Contact us",
    to: "#",
  },
  {
    name: "Chat box",
    to: "/messenger",
  },
];

export const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/user/profile");
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <button
              onClick={handleProfile}
              className="flex w-full flex-row items-center gap-1.5 px-2 text-left hover:bg-gray-200"
            >
              <FaUser /> Profile
            </button>
          ),
        },
        {
          key: "2",
          label: (
            <button
              onClick={handleLogout}
              className="flex w-full flex-row items-center gap-1.5 px-2 text-left hover:bg-gray-200"
            >
              <FaSignOutAlt />
              Đăng xuất
            </button>
          ),
        },
      ]}
    />
  );

  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-[#cafbda] to-[#9bc1fb] px-4">
      <nav className="ml-6 space-x-10 p-3">
        {_.map(navBar, (nav, index) => (
          <NavLink to={nav.to} key={index} className="p-3 text-white">
            <span className="font-bold text-black uppercase">{nav.name}</span>
          </NavLink>
        ))}
      </nav>
      <nav className="flex items-center justify-end gap-7 p-3 text-black">
        <IoNotifications className="size-8 cursor-pointer" />
        <IoSearch className="size-8 cursor-pointer" />
        <Dropdown
          overlay={menu}
          trigger={["hover"]}
          open={open}
          onOpenChange={setOpen}
        >
          <IoPerson className="size-8 cursor-pointer" />
        </Dropdown>
      </nav>
    </header>
  );
};
