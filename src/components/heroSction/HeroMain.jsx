import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

function HeroMain() {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center">
        <HeroText />
        <HeroImg />
      </div>
    </div>
  );
}

export default HeroMain;
