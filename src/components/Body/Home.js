import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import About from "./About";
import Skills from "./Skills";
import Educations from "./Educations";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

const Home = () => {
  const [showAll, setShowAll] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleShowAll = (index) => {
    setShowAll({ ...showAll, [index]: !showAll[index] });
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-5 lg:right-10 z-10"
        onClick={onClick}
      >
        <FaChevronRight className="text-white text-4xl lg:text-6xl" />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-5 lg:left-10 z-10"
        onClick={onClick}
      >
        <FaChevronLeft className="text-white text-4xl lg:text-6xl" />
      </button>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mx-auto max-w-6xl" style={{ marginTop: "750px" }}>
      <About />
      <Skills />
      <Projects />
      <Educations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
