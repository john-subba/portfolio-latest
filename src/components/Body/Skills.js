import React from "react";
import { FaJs, FaReact, FaGit } from "react-icons/fa";
import { SiTailwindcss, SiReduxsaga, SiRedux, SiWebpack } from "react-icons/si";

const skillsArray = [
  {
    icons: <FaJs />,
    name: "Javascript",
    color: "text-yellow-400",
    uniqueKey: "btn-js",
  },
  {
    icons: <FaReact />,
    name: "ReactJS",
    color: "text-blue-400",
    uniqueKey: "btn-react",
  },
  {
    icons: <SiTailwindcss />,
    name: "TailwindCSS",
    color: "text-blue-600",
    uniqueKey: "btn-tailwind",
  },
  {
    icons: <SiRedux />,
    name: "Redux",
    color: "text-indigo-500",
    uniqueKey: "btn-redux",
  },
  {
    icons: <SiReduxsaga />,
    name: "Redux-Saga",
    color: "text-emerald-400",
    uniqueKey: "btn-saga",
  },
  {
    icons: <FaGit />,
    name: "Git",
    color: "text-amber-600",
    uniqueKey: "btn-git",
  },
  {
    icons: <SiWebpack />,
    name: "Webpack",
    color: "text-blue-300",
    uniqueKey: "btn-webpack",
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="py-20 pt-24">
        <div className="flex justify-center gap-2 items-baseline pb-10">
          <span className="text-2xl">Featured</span>
          <span className="text-2xl semi-bold">Skills</span>
        </div>
        <div className="flex flex-wrap justify-center px-4 md:px-0 gap-4 md:gap-10 lg:justify-evenly  w-full items-center mb-10 mt-4">
          {skillsArray.map((each, index) => {
            return (
              <div className={`flex flex-col items-center gap-4`} key={index}>
                <div
                  className={`${each.color} cursor-pointer text-7xl btn-${index}`}
                >
                  {each.icons}
                </div>
                <div>{each.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
