import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varient";

function HeroImg() {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="../../public/images/myimage.png"
        alt="image kavindu"
        className="max-h-[520px] w-auto rounded-3xl"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[50%] sm:h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_30s_linear_infinite]" />
      </div>
    </motion.div>
  );
}

export default HeroImg;
