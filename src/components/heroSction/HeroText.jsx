import React from "react";

function HeroText() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center pl-5">
      <h2 className="lg:text-3xl sm:text-xl uppercase text-cyan">
        Web developer & UI/UX Engineer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-8xl sm:text-4xl font-bold font-special text-orange">
        KAVINDU SHALINDA
      </h1>
      <p className="text-xl mt-4 text-white">
        Creative thinker, passionate web developer <br />
        And UI/UX Designer
      </p>
    </div>
  );
}

export default HeroText;
