import React from "react";

function AboutMeText() {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-cente">
      <h2 className="text-5xl text-cyan font-special mb-10 ">About Me</h2>
      <p className="text-white font-special">
        Hey there! I'm Kavindu Shalinda — a curious mind, creative soul, and
        code enthusiast currently crafting my future at the University of
        Peradeniya. I blend the logic of web development with the artistry of
        UI/UX design, creating digital experiences that are both functional and
        visually captivating. Whether I’m sketching wireframes in Figma, writing
        React components, or fine-tuning animations with Tailwind.<br/><br/> I’m
        deeply passionate about learning new technologies, solving real-world
        problems, and working with collaborative teams that dream big and build
        even bigger. My tech toolkit includes React, Java, JavaScript, HTML,
        CSS, MySQL, TailwindCSS, Figma, and a splash of Photoshop for those
        creative sparks. Outside the screen? You’ll find me wandering through
        new places, sketchbook in hand, soaking in inspiration from every corner
        of the world. Travel and art keep my creativity fueled and my
        perspective fresh. <br/>Let’s build something meaningful together — one line
        of code, one pixel, one idea at a time.
      </p>
      <button className="border border-orange text-white rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange hover:text-black transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        My Projects
      </button>
    </div>
  );
}

export default AboutMeText;
