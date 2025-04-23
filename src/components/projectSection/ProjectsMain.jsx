import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varient";

const projects = [
  {
    name: "Portfolio Website",
    discription: "A responsive personal portfolio website showcasing projects, skills, and contact information with e mail service",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: ["React","tailwind CSS","Framer Motion"]
  },
  {
    name: "Tic-Tac-Tor Game",
    discription: "A simple yet interactive Tic Tac Toe game.Features responsive design, real-time player interaction, and basic game logic including win/tie detection. Developed to enhance logical thinking and front-end development skills.",
    align: "left",
    image: "../../public/images/website-img-2.jpg",
    link: ["React","CSS","JavaScripts"],
  },
  {
    name: "IMATS-99X",
    discription: "IMATS-99x is a web application that can perform CRUD operations about employee data and track their work. ",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: ["React","tailwind CSS","NodeJs", "MongoDB"],
  },
  
];

function ProjectsMain() {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              discription={item.discription}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsMain;
