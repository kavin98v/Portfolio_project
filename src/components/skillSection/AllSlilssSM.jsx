import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";

import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varient";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "Java Scrips",
    icon: RiJavascriptFill,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "Figma",
    icon: FaFigma,
  },
  {
    skill: "Photoshop",
    icon: SiAdobephotoshop,
  },
];

function AllSlilssSM() {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-orange text-7xl" />
            <p className="text-center text-white mt-4">{item.skill} </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default AllSlilssSM;
