/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import { headlines } from "../../utils/data/media/headlines";

export default function HeadlinesSlider() {
  const [centerSlide, setCenterSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 300,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: null,
    prevArrow: null,
    arrows: false,
    focusOnSelect: true,
    beforeChange: (_, nextIndex) => {
      setCenterSlide(nextIndex);
    },
  };

  return (
    <>
      <div className="mt-2 md:mt-4">
        <Slider {...settings}>
          {headlines?.map((item, index) => (
            <div
              key={index}
              className={`px-0 pt-10 sm:pt-12 md:pt-2 lg:pt-2 py-4 relative ${
                centerSlide === index && "z-10"
              }`}
            >
              <div className="bg-transparent mx-auto relative flex items-center justify-start flex-col cursor-pointer group">
                <div
                  className={`overflow-hidden rounded-xl transition-all duration-300 relative h-[8rem] sm:h-[11rem] md:h-[18.125rem] lg:h-[18.125rem] ${
                    centerSlide === index
                      ? "scale-125 w-[10rem] sm:w-[15rem] md:w-[46rem] lg:w-[46rem] opacity-100"
                      : "scale-100 w-full max-w-[9rem] sm:max-w-[14rem] md:max-w-[15.3rem] lg:max-w-[18rem] opacity-60"
                  }`}
                >
                  <img
                    className="relative w-full h-full object-cover group-hover:scale-110 transform transition-all duration-500"
                    src={item?.image}
                    alt={item?.name}
                  />

                  {/* fade */}
                  <div className=" bg-opacity-25 absolute top-0 left-0 w-full h-full" />
                  <div className="absolute left-4 top-8 w-32 md:w-48 md:top-12 md:left-16 lg:w-48 lg:top-12 lg:left-16 ">
                    <img src={item?.press_logo} alt={item?.press_logo} />
                  </div>
                  <div className="absolute left-4 pt-12 top-8 w-32 md:w-48 md:top-12 md:left-16 lg:w-48 lg:top-12 lg:left-16">
                    <h6 className="text-white">{item.caption}</h6>
                  </div>
                  <div className="absolute left-4 text-xs  top-8 w-32 md:w-[28rem] md:pt-20 md:top-12 md:left-16 lg:pt-20 lg:w-[28rem] lg:top-12 lg:left-16">
                    <p className="text-white text-xs">{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
