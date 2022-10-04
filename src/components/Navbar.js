import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const navArr = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Recent Works", link: "#recentworks" },
  { label: "Get In Touch", link: "#getintotouch" },
];

const socialMedia = [
  { link: "", icon: <FaLinkedinIn />, hoverColor: "text-blue-500" },
  { link: "", icon: <FaGithub />, hoverColor: "bg-zinc-900" },
];

const Navbar = () => {
  return (
    <div className="flex flex-col w-full mx-auto max-w-6xl">
      <span className="head-tag text-2xl">&lt;navbar&gt;</span>
      <div className=" flex items-center w-full justify-between p-8 px-12 bg-zinc-900 rounded-md">
        <button className="flex gap-16">
          {navArr.map((each) => (
            <div className="hover:text-zinc-400 duration-100 ease-in-out">
              {each.label}
            </div>
          ))}
        </button>
        <button className="flex gap-8">
          {socialMedia.map((each) => (
            <div
              className={`duration-100 ease-in-out hover:${each.hoverColor}`}
            >
              {each.icon}
            </div>
          ))}
        </button>
      </div>
      <span className="head-tag text-2xl">&lt;/navbar&gt;</span>
    </div>
  );
};

export default Navbar;
