import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useWindowDimensions from "./dimensions";

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

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef();
  const linksRef = useRef();

  const { width } = useWindowDimensions();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight =
      linksRef.current && linksRef.current.getBoundingClientRect().height;
    if (linksContainerRef.current) {
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
        // document.getElementById("mobile-navbar").classList.add("");
      } else {
        linksContainerRef.current.style.height = "0px";
        // document.getElementById("mobile-navbar").classList.remove("");
      }
    }
  }, [showLinks]);

  return (
    <>
      <div className="sticky top-0 z-50" id="home">
        {width > 769 ? (
          <div className=" gap-16 justify-center py-6 mx-auto max-w-6xl flex ">
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
        ) : (
          <>
            <div className="text-zinc-700 bg-white w-full p-6">
              <button onClick={toggleLinks} className="text-xl">
                {showLinks ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <div ref={linksContainerRef} className="nav-mobile-links-container">
              <div className="nav-mobile-links" ref={linksRef}>
                {navArr.map((each, index) => (
                  <a
                    className="duration-100 ease-in-out  uppercase"
                    key={index}
                    href={each.link}
                    onClick={() =>
                      each.link === "#home" && window.scrollTo(0, 0)
                    }
                  >
                    {each.label}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <section id="home" className="section">
        <div className="flex flex-col items-center h-screen bg-prof  gap-8 absolute top-0 w-full justify-center">
          <div className="text-6xl mt-60">Hello, I'm</div>
          <div className="font-bold text-7xl text-center">Senlop Subba</div>
          <div className="uppercase text-zinc-500 tracking-wider">
            And this is my portfolio
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
