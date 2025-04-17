import React from "react";
import { GoArrowDownRight } from "react-icons/go";

function NavbarBtn() {
  return (
    <button className="px-4 py-2 rounded-full font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
      Hire Me
      <div className="sm:hidden md:block">
        <GoArrowDownRight />
      </div>
    </button>
  );
}

export default NavbarBtn;
