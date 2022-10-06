import React from "react";
import Home from "./Home";
import Navbar from "../Navbar";

const MainBody = () => {
  return (
    <>
      <div className="bg-prof">
        <div className=" bg-zinc-800 bg-opacity-50  h-full">
          <Navbar />
        </div>
      </div>
      <Home />
    </>
  );
};

export default MainBody;
