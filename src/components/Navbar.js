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
    <div className="flex flex-col w-full mx-auto max-w-6xl">
      <button className="flex gap-16 justify-center py-10 uppercase">
        {navArr.map((each) => (
          <div className="hover:text-zinc-400 duration-100 ease-in-out">
            {each.label}
          </div>
        ))}
      </button>
    </div>
  );
};

export default Navbar;
