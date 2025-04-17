import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarLogo from "./NavbarLogo";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBarMain() {
  const [menuOpen, setMenuOpen] = useState(false);
  function menuHandler() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div
        className="flex lg:hidden sm:block p-6 items-center justify-center]"
        onClick={menuHandler}
      >
        <button className="text-2xl p-3  bg-black border border-orange rounded-full text-white">
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}

export default NavBarMain;
