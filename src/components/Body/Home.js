import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ProfileImg from "../../assets/prof.jpeg";
// import { FaChevronRight } from "react-icons/fa";
// import Sybazzar from "../../assets/logo/sybazzar.png";
// import Upakart from "../../assets/logo/upakart.png";
// import Saathimart from "../../assets/logo/sathimart.png";
// import Commerce from "../../assets/logo/waftcommerce.svg";
// import SamsungPlaza from "../../assets/logo/samsungplaza.png";

// const compArray = [
//   { label: "sybazaar", img: Sybazzar, link: "" },
//   { label: "upakart", img: Upakart, link: "" },
//   { label: "sathimart", img: Saathimart, link: "" },
//   { label: "commerce", img: Commerce, link: "" },
//   { label: "samsungplaza", img: SamsungPlaza, link: "" },
// ];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full gap-8 justify-center">
        <div className="text-6xl">Hello, I'm</div>
        <div className="font-bold text-7xl">Senlop Subba</div>
        <div className="uppercase text-zinc-500 tracking-wider">
          And this is my portfolio
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-3 items-baseline pb-10">
          <span className="text-2xl">Featured</span>
          <span className="text-2xl font-bold">Projects</span>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
