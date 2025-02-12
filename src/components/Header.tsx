import { NavLink } from "react-router";
import _ from "lodash";

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
  return (
    <header className="bg-gradient-to-r from-green-200 via-blue-300 to-blue-400">
      <nav className="ml-6 space-x-10 p-3">
        {_.map(navBar, (nav, index) => (
          <NavLink to={nav.to} key={index} className="p-3 text-white">
            <span className="font-bold text-black uppercase">{nav.name}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
