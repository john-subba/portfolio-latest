import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Educations = () => {
  return (
    <div className="my-52">
      <div className="flex justify-center gap-2 items-baseline pb-10">
        <span className="text-2xl">My</span>
        <span className="text-2xl semi-bold">Work Experience</span>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 lg:px-0 px-8">
        <div className="p-8 bg-zinc-800 rounded-md relative transition-top">
          <div className="flex items-center gap-2 text-sm pb-4">
            <FaCalendarAlt /> <span>March 2022 - June 2022</span>
          </div>
          <div className="pb-4 text-xl text-amber-600">
            React Developer Internship
          </div>
          <div className="text-sm text-zinc-400 pb-2">
            Learned to work around demo projects using React as base block,
            Redux for state management, Redux-Saga for API management.
          </div>
          <div className="text-sm text-zinc-400 pb-2">
            Worked in Tailwind CSS for styling and to create custom UI
            components.
          </div>
          <div className="mt-4 text-zinc-300 bottom-5 absolute">
            WaftTech Pvt. Ltd.
          </div>
        </div>
        <div className="p-8 bg-zinc-800 rounded-md relative transition-top">
          <div className="flex items-center gap-2 text-sm pb-4">
            <FaCalendarAlt /> <span>June 2022 - Current</span>
          </div>
          <div className="pb-4 text-xl text-amber-600">
            Junior React Developer
          </div>
          <div className="text-sm text-zinc-400 pb-2">
            Currently working in different ecommerce related projects such as
            saathimart.com, socheko.com, upakart.com & sybazzar.com.
          </div>
          <div className="text-sm text-zinc-400 pb-5">
            Also working in optimizing these projects and also working on
            waftcommerce project which can be used to create a ecommerce
            platform in instant.
          </div>
          <div className="mt-4 text-zinc-300 bottom-5 absolute">
            WaftTech Pvt. Ltd.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
