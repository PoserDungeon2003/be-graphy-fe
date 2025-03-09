import _ from "lodash";
import { IoNotifications, IoPerson, IoSearch } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";

const navBar = [
  {
    name: "Home",
    to: "/user/home",
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
    to: "/messenger",
  },
];

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-[#cafbda] to-[#9bc1fb] px-4">
      <nav className="ml-6 space-x-10 p-3">
        {_.map(navBar, (nav, index) => (
          <NavLink to={nav.to} key={index} className="p-3 text-white">
            <span className="font-bold text-black uppercase">{nav.name}</span>
          </NavLink>
        ))}
      </nav>
      <nav className="flex items-center justify-end gap-4 p-3 text-black">
        <IoNotifications className="size-8 cursor-pointer" />
        <IoSearch className="size-8 cursor-pointer" />
        <IoPerson
          onClick={() => navigate(`/profile`)}
          className="size-8 cursor-pointer"
        />
      </nav>
    </header>
  );
};
