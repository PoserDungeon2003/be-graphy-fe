import { NavLink } from "react-router"
import _ from 'lodash'

const navBar = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Booking',
    to: '#',
  },
  {
    name: 'Pictures',
    to: '#',
  },
  {
    name: 'Contact us',
    to: '#',
  },
  {
    name: 'Chat box',
    to: '#',
  },
]

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-200 via-blue-300 to-blue-400">
      <nav className="space-x-10 p-3 ml-6">
        {_.map(navBar, (nav, index) => (
          <NavLink to={nav.to} key={index} className="text-white p-3">
            <span className="text-black uppercase font-bold">
              {nav.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </header>
  )
}