import { NavLink, useNavigate } from "react-router";
import _ from "lodash";
import { IoNotifications, IoPerson, IoSearch } from "react-icons/io5";

const navBar = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Booking",
    to: "#",
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
    to: "#",
  },
];

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-[#cafbda] to-[#9bc1fb] flex items-center justify-between px-4">
      <nav className="ml-6 space-x-10 p-3">
        {_.map(navBar, (nav, index) => (
          <NavLink to={nav.to} key={index} className="p-3 text-white">
            <span className="font-bold text-black uppercase">{nav.name}</span>
          </NavLink>
        ))}
      </nav>
      <nav className="text-black flex items-center justify-end gap-4 p-3">
        <IoNotifications className="size-8 cursor-pointer" />
        <IoSearch className="size-8 cursor-pointer" />
        <IoPerson onClick={() => navigate(`/profile`)} className="size-8 cursor-pointer" />
      </nav>
    </header>
  );
};
