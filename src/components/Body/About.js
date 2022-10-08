import React from "react";
import ProfileImg from "../../assets/prof.jpeg";

const About = () => {
  return (
    <section id="about">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:gap-6 md:gap-4  items-center py-28">
        <div className="lg:p-20 p-14">
          <img src={ProfileImg} alt="profile" />
        </div>
        <div className="md:pr-8 sm:pt-8 md:pt-0 sm:px-8 md:px-0">
          <div className="pb-6 text-4xl">
            About <span className="bold">Me</span>
          </div>
          <div className="text-zinc-400 text-sm pb-5">
            Diving into the world of programming without any educational
            background on IT fields was the first challenge I faced. Self
            learning from online platforms and frustation from code not working
            while learning was what I faced while walking down the path of
            coding.
            <br />
            <span className="pl-12">
              But all these hardwork has lead me to a successfull start as
              Frontend-Dev(ReactJS). And I'm happy to see the journey I've
              completed till now. I'm looking forward to use all of my
              skills/experience in the company where my skills are appreciated.
            </span>
          </div>
          <div className="flex gap-3">
            <button className="btn text-white hover:text-black bg-zinc-700 hover:bg-white">
              Hire Me
            </button>
            <button className="btn text-black hover:text-white bg-zinc-200 hover:bg-zinc-700">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
