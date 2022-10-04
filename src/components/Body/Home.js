import React from "react";
import ProfileImg from "../../assets/prof.jpeg";
import { FaChevronRight } from "react-icons/fa";
import Sybazzar from "../../assets/logo/sybazzar.png";
import Upakart from "../../assets/logo/upakart.png";
import Saathimart from "../../assets/logo/sathimart.png";
import Commerce from "../../assets/logo/waftcommerce.svg";
import SamsungPlaza from "../../assets/logo/samsungplaza.png";

const compArray = [
  { label: "sybazaar", img: Sybazzar, link: "" },
  { label: "upakart", img: Upakart, link: "" },
  { label: "sathimart", img: Saathimart, link: "" },
  { label: "commerce", img: Commerce, link: "" },
  { label: "samsungplaza", img: SamsungPlaza, link: "" },
];

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-40 mt-10">
        <div>
          <div className="text-5xl mb-8 font-bold tracking-wide flex flex-col">
            <span className="head-tag text-2xl">&lt;head&gt;</span>
            <span className="ml-4">Senlop Subba</span>
            <span className="head-tag text-2xl">&lt;/head&gt;</span>
          </div>
          <p className="mb-8 flex flex-col">
            <span className="head-tag text-2xl">&lt;body&gt;</span>
            <span className="ml-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
            <span className="head-tag text-2xl">&lt;/body&gt;</span>
          </p>
          <div className="flex flex-col">
            <span className="head-tag text-2xl">&lt;button&gt;</span>
            <button className="p-5 px-10 bg-zinc-900 rounded-md font-semibold justify-center flex gap-2 items-center shadow-lg w-2/5">
              <span>Let's get started</span>
              <FaChevronRight />
            </button>
            <span className="head-tag text-2xl">&lt;/button&gt;</span>
          </div>
        </div>
        <div>
          {/* <img
              src={ProfileImg}
              alt="profile"
              width={900}
              className="rounded-md"
            /> */}
        </div>
      </div>
      {/* <div className="mt-8">
        <div>Worked With</div>
        <div className="grid grid-cols-5 items-center mt-4 justify-items-center mb-10">
          {compArray.map((each, index) => (
            <img
              key={index}
              alt={each.label}
              src={each.img}
              width={200}
              style={{ height: "70px" }}
              className="border-zinc-600 border p-5 px-8 grayscale hover:grayscale-0 duration-100 cursor-pointer"
            />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Home;
