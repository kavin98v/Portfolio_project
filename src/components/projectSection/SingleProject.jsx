import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varient";

function SingleProject({ name, discription, align, image, link }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-fill sm:flex-col-reverse items-center gap-5 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-pureWhite ">{name}</h2>
        <h2
          className={`text-lg font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {discription}
        </h2>
        <ul
          className={`text-sm flex gap-2 items-center  transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          {Array.isArray(link) &&
            link.map((item, index) => <li className="text-cyan bg-lightBlue/30 rounded-lg p-1 px-2" key={index}>{item}</li>)}
        </ul>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
        <img src={image} atl="project image" className="w-full h-full" />
      </div>
    </motion.div>
  );
}

export default SingleProject;
