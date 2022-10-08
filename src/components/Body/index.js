import React, { useCallback } from "react";
import Home from "./Home";
import Navbar from "../Navbar";
import Particles from "react-tsparticles";
import particlesConfig from "../particlesConfig.json";
import { loadFull } from "tsparticles";

const MainBody = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log();
  }, []);

  return (
    <>
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className="particles-container"
      />
      <div className="z-10 relative">
        <Navbar />
        <div className="bg-zinc-900">
          <Home />
        </div>
      </div>
    </>
  );
};

export default MainBody;
