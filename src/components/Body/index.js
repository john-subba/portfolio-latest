import React from "react";
import Home from "./Home";
import Navbar from "../Navbar";

const MainBody = () => {
  return (
    <div className="bg-prof">
      <div className="mx-auto max-w-6xl bg-zinc-800 bg-opacity-50 h-full">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default MainBody;
