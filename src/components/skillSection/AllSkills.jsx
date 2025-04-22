import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import SingleSkill from "./SingleSkill";
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

function AllSkills() {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto ">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("down", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill key={index} text={item.skill} icon={<item.icon />} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default AllSkills;
