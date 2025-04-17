import React from "react";

function AboutMeText() {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10 ">About Me</h2>
      <p className="text-white">
        think out of the box, and try to go beyond the tradition. A quick
        learner, adapts fast to new technologies and environments within a short
        period of time and enthusiastic about Data Analysis and Visualization.
      </p>
      <button className="border border-orange text-white rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange hover:text-black transition-all duration-500 cursor-pointer md:self-start sm:self-center">My Projects</button>
    </div>
  );
}

export default AboutMeText;
