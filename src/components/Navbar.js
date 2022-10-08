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
    var navbar = document.getElementById("home");
    if (window.scrollY >= 200) {
      navbar.classList.add("navbar-colored");
    } else {
      navbar.classList.remove("navbar-colored");
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50" id="home">
        <div className="flex gap-16 justify-center py-6 mx-auto max-w-6xl">
          {navArr.map((each, index) => (
            <a
              className="duration-100 ease-in-out  uppercase"
              key={index}
              href={each.link}
              onClick={() => each.link === "#home" && window.scrollTo(0, 0)}
            >
              {each.label}
            </a>
          ))}
        </div>
      </div>
      <section id="home" className="section">
        <div className="flex flex-col items-center h-screen bg-prof bg-zinc-800 bg-opacity-50 gap-8 absolute top-0 w-full justify-center">
          <div className="text-6xl mt-60">Hello, I'm</div>
          <div className="font-bold text-7xl">Senlop Subba</div>
          <div className="uppercase text-zinc-500 tracking-wider">
            And this is my portfolio
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
