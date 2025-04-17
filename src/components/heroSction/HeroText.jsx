import React from "react";

function HeroText() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center ">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">
        Web developer & UI/UX Engineer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">
        KAVINDU SHALINDA
      </h1>
      <p className="text-lg mt-4 text-white">
        creative thinker, passionate web developer <br />
        And UI/UX Designer
      </p>
    </div>
  );
}

export default HeroText;
