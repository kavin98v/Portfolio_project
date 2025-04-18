import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImg from "./AboutMeImg";

function AboutMeMain() {
  return (
    <div className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1400px] justify-between items-center mt-10 ">
      <div>
        <AboutMeText />
      </div>
      <div>
        <AboutMeImg />
      </div>
    </div>
  );
}

export default AboutMeMain;
