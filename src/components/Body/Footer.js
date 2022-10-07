import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-10 mt-20 flex justify-between items-center">
      <div>
        Copyright &#169; 2022 All rights reserved. Made with{" "}
        <span className="text-red-500 text-2xl">&#9829;</span> by Senlop Subba.
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <button className=" bg-zinc-700 p-3 shadow-lg rounded">
          <FaFacebookF />
        </button>
        <button className="rounded bg-zinc-700 p-3">
          <FaLinkedinIn />
        </button>
        <button className="rounded bg-zinc-700 p-3">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default Footer;
