import React from "react";

const navArr = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Recent Works", link: "#recentworks" },
  { label: "Get In Touch", link: "#getintotouch" },
];

const Navbar = () => {
  window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY >= 200) {
      navbar.classList.add("navbar-colored");
    } else {
      navbar.classList.remove("navbar-colored");
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50" id="navbar">
        <div className="flex gap-16 justify-center py-8 mx-auto max-w-6xl">
          {navArr.map((each, index) => (
            <button
              className="hover:text-zinc-400 duration-100 ease-in-out uppercase"
              key={index}
            >
              {each.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center h-screen bg-prof bg-zinc-800 bg-opacity-50 gap-8 absolute top-0 w-full justify-center">
        <div className="text-6xl mt-60">Hello, I'm</div>
        <div className="font-bold text-7xl">Senlop Subba</div>
        <div className="uppercase text-zinc-500 tracking-wider">
          And this is my portfolio
        </div>
      </div>
    </>
  );
};

export default Navbar;
