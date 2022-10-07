import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Educations = () => {
  return (
    <div className="my-10 mt-20">
      <div className="flex justify-center gap-2 items-baseline pb-10">
        <span className="text-2xl">My</span>
        <span className="text-2xl semi-bold">Resume</span>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 text-sm">
            <FaCalendarAlt /> <span>March 2022 - June 2022</span>
          </div>
          <div className="">React Developer Internship</div>
          <div>WaftTech Pvt. Ltd.</div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
