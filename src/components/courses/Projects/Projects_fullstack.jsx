import React, { useState } from "react";

import minorMajorProjects from "../../../utils/data/courses/minorMajorProjects_fullstack";
import Content from "./Content";

export default function Projects() {
  const [activePoint, setActivePoint] = useState(0);
  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="bg-[#f2f4f7] rounded-2xl p-4 md:p-6 mt-8 md:mt-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-1 md:col-span-4 lg:col-span-3 flex flex-col items-start justify-start flex-shrink-0 gap-2 w-full md:pr-4 lg:pr-2">
          {minorMajorProjects?.slice(0, 7)?.map((item, index) => (
            <p
              onClick={() => setActivePoint(index)}
              key={index}
              className={`w-full flex items-start justify-start gap-3 text-sm cursor-pointer transition-all duration-300 pb-4 pt-2 border-b border-b-[#e4e6e9] ${
                activePoint === index
                  ? "text-black font-normal"
                  : "text-[#616263] font-light"
              }`}
            >
              <span
                className={`bg-capabl_primary rounded-full flex-shrink-0 transition-all duration-300 transform ${
                  activePoint === index
                    ? "scale-100 opacity-100 h-2.5 md:h-3 w-2.5 md:w-3 mt-1"
                    : "scale-0 opacity-0 h-0 w-0"
                }`}
              />{" "}
              {item?.title}
            </p>
          ))}
          {viewAll &&
            minorMajorProjects?.slice(7)?.map((item, index) => (
              <p
                onClick={() => setActivePoint(index + 7)}
                key={index + 7}
                className={`w-full flex items-start justify-start gap-3 text-sm cursor-pointer transition-all duration-300 pb-4 pt-2 border-b border-b-[#e4e6e9] ${
                  activePoint === index + 7
                    ? "text-black font-normal"
                    : "text-[#616263] font-light"
                }`}
              >
                <span
                  className={`bg-capabl_primary rounded-full flex-shrink-0 transition-all duration-300 transform ${
                    activePoint === index + 7
                      ? "scale-100 opacity-100 h-2.5 md:h-3 w-2.5 md:w-3 mt-1"
                      : "scale-0 opacity-0 h-0 w-0"
                  }`}
                />{" "}
                {item?.title}
              </p>
            ))}
          <button
            onClick={() => setViewAll((prev) => !prev)}
            className="font-medium underline text-center text-capabl_primary text-xs md:text-sm py-2 w-fit mx-auto"
          >
            {viewAll ? "Hide" : "View All"}
          </button>
        </div>

        <Content content={minorMajorProjects?.[activePoint]?.content} />
      </div>
    </div>
  );
}
