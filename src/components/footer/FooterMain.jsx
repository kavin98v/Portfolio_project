import React from "react";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  // { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function FooterMain() {
  return (
    <div className="gap-4 font-special"> 
      <div className="w-full h-[1px] bg-pureWhite mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto ">
        <p className="text-xl text-pureWhite ">Kavindu Shalinda </p>
        <ul className="flex gap-4 text-pureWhite text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-ddarkCyan transition-all text-xl duration-300 cursor-pointer"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown"> © 2025 Kavindu Shalinda | All Rights Reserved.</p>
    </div>
  );
}

export default FooterMain;
