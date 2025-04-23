import React from "react";
import {Link} from "react-scroll"

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  // { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function NavbarLinks() {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-special lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-sm sm:text-sm sm:bg-cyan/30 lg:bg-darkBlue sm:backdrop-blur-lg sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="cursor-pointer hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500 "></div>
          </li>
        );
      })}
    </ul>
  );
}

export default NavbarLinks;
