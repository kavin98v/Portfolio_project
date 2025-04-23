import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varient";

function HeroText() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center pl-5">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-3xl sm:text-xl uppercase text-cyan"
      >
        Web developer & UI/UX Designer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-7xl sm:text-4xl font-bold font-special text-orange"
      >
        KAVINDU SHALINDA
      </motion.h1>
      <motion.p 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="text-xl mt-4 text-white">
        Creative thinker, passionate web developer <br />
        And UI/UX Designer
      </motion.p>
    </div>
  );
}

export default HeroText;
