import _ from "lodash"
import { Link } from "react-router"

const footerContents = [
  {
    title: 'Contact us',
    links: [
      // { name: 'Company', href: '#' },
      // { name: 'Customers', href: '#' },
      // { name: 'Blog', href: '#' },
    ],
  },
  {
    title: 'About us',
    links: [
      { name: 'What is Be Graphy', href: '#' },
    ],
  },
  {
    title: 'Style',
    links: [
      { name: 'Studio', href: '#' },
      { name: 'Outside', href: '#' },
      { name: 'Landscape', href: '#' },
      { name: 'Portrait', href: '#' },
    ],
  }
]

export const Footer = () => {
  return (
    <footer className="shrink-0 bg-gradient-to-r from-teal-700 to-green-600">
      <div className="flex pt-2 pb-16">
        {_.map(footerContents, (content, index) => (
          <div key={index} className="p-3 ml-6">
            <h3 className="text-black uppercase font-bold text-center">
              {content.title}
            </h3>
            <ul className="text-white space-y-0.5">
              {_.map(content.links, (link, index) => (
                <li key={index}>
                  <Link target="_blank" to={link.href} className="text-black">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}