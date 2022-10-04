import React from "react";
import Home from "./Home";
import Navbar from "../Navbar";

const MainBody = () => {
  return (
    <div className="bg-prof">
      <div className="mx-auto max-w-6xl">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default MainBody;
