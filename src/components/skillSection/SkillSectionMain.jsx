import React from "react";
import SkillText from "./SkillText";
import AllSkills from "./AllSkills";
import AllSlilssSM from "./AllSlilssSM";

function SkillSectionMain() {
  return (
    <div id="skill">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillText />
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSlilssSM/>
        </div>
      </div>
    </div>
  );
}

export default SkillSectionMain;
