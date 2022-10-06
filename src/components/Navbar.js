import React from "react";

const navArr = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Recent Works", link: "#recentworks" },
  { label: "Get In Touch", link: "#getintotouch" },
];

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col w-full mx-auto max-w-6xl">
        <button className="flex gap-16 justify-center py-10 uppercase">
          {navArr.map((each, index) => (
            <div
              className="hover:text-zinc-400 duration-100 ease-in-out"
              key={index}
            >
              {each.label}
            </div>
          ))}
        </button>
      </div>
      <div className="flex flex-col items-center h-full gap-8 justify-center">
        <div className="text-6xl">Hello, I'm</div>
        <div className="font-bold text-7xl">Senlop Subba</div>
        <div className="uppercase text-zinc-500 tracking-wider">
          And this is my portfolio
        </div>
      </div>
    </>
  );
};

export default Navbar;
