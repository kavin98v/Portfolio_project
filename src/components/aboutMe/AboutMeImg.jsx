import React from "react";


function AboutMeImg() {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[550px] w-[350px] rounded-[100px] absolute overflow-hidden">
        <img
          src="../../public/images/aboutMe3.jpg"
          alt="about me"
          className="h-full w-auto object-cover "
        />
      </div>
      <div className="h-[550px] w-[320px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
}

export default AboutMeImg;
