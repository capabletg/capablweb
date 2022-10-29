import React, { useState } from "react";
import { pressreleases } from "../../utils/data/media/pressreleases";

export default function AceYourDreamSlider() {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <div className="mx-4 inline-flex p-1 bg-white rounded-xl shadow-2xl hover:shadow-2xl focus:shadow-2xl shadow-black">
          {pressreleases?.map(({ label }, index) => (
            <button
              disabled={activeCategory === index}
              onClick={() => setActiveCategory(index)}
              key={index}
              className="  disabled:bg-capabl_primary bg-white
                            px-6
        py-4
        rounded-xl
        text-gray-900
        font-medium
        text-xs
        leading-tight
        uppercase
        transition
        duration-150
        ease-in-out
        m-1"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div id="pressreleases" className="px-4 -mt-6  md:bg-[#14213D] p-24">
        <div className="max-w-7xl mx-auto overflow-x-scroll scrollbar-hide w-full mt-6 md:mt-8 mb-8 md:mb-12 flex items-start justify-start lg:justify-between gap-4 px-4">
          {!!pressreleases?.length &&
            pressreleases?.[activeCategory]?.contents?.map((item, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg bg-white m-2 flex-shrink-0 w-fit md:flex-shrink "
              >
                <a
                  href="#!"
                  className="flex rounded-lg bg-[#F7F9FA] justify-center"
                >
                  <img
                    className="rounded-t-lg object-center"
                    src={item?.image}
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {item.name}
                  </h5>
                  <p className="text-gray-400 text-base mb-4">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="text-capabl_primary hover:text-purple-500 underline text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
