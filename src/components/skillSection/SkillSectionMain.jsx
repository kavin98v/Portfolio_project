import React from "react";
import SkillText from "./SkillText";
import AllSkills from "./AllSkills";
import AllSlilssSM from "./AllSlilssSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varient";

function SkillSectionMain() {
  return (
    <div id="skills">
      <div className="w-full h-[1px] bg-lightGrey mt-20"></div>
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden mt-20">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSlilssSM />
        </div>
      </div>
    </div>
  );
}

export default SkillSectionMain;
