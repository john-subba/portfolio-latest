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
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100011753101658"
          rel="noreferrer"
          className=" bg-zinc-700 hover:bg-zinc-800 p-3 shadow-lg rounded"
        >
          <FaFacebookF />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/senlop-subba-a1840a164/"
          rel="noreferrer"
          className="rounded bg-zinc-700 hover:bg-zinc-800 p-3"
        >
          <FaLinkedinIn />
        </a>
        <a
          target="_blank"
          href="https://github.com/john-subba"
          rel="noreferrer"
          className="rounded bg-zinc-700 hover:bg-zinc-800 p-3"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
