/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
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
      <div className="mt-2 md:mt-4  max-w-7xl mx-auto">
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
                  className={` overflow-hidden rounded-xl transition-all duration-300 relative mb-12    ${
                    centerSlide === index
                      ? "h-[560px] lg:h-auto xl:h-[360px] w-[260%] sm:w-[220%] lg:w-[1000px] xl:w-[1000px] opacity-100 shadow-3xl"
                      : "h-[550px] lg:h-[350px] opacity-100 text-opacity-0"
                  } `}
                >
                  <img
                    className="relative w-full h-full object-cover object-center group-hover:scale-100  transform transition-all duration-500"
                    src={item?.image}
                    alt={item?.name}
                  />

                  {/* fade */}
                  <div className=" bg-opacity-25 absolute top-0 left-0 w-full h-full" />
                  <div className="absolute left-4 top-8 w-32 md:w-48 md:top-12 md:left-12 lg:w-48 lg:top-12 lg:left-18 xl:left-8  ">
                    <img src={item?.press_logo} alt={item?.press_logo} />
                  </div>
                  <div className="absolute text-xl left-4 pt-6 md:pt-12 top-12 w-32 md:w-48 md:top-12 md:left-12 lg:w-48 lg:top-12 lg:left-8 xl:left-8 xl:top-12  xl:text-base">
                    <h6 className="text-white">
                      {centerSlide === index && item.caption}
                    </h6>
                  </div>
                  <div className="absolute left-4 text-lg sm:text-lg pt-24 top-8 sm:w-[28rem] md:pt-20 md:top-12 md:left-12 lg:pt-20 lg:w-[44rem] lg:top-12 lg:left-8 xl:left-8 xl:top-16 xl:text-base">
                    <div className="relative">
                      <p className="text-white ">
                        {centerSlide === index && item.content}
                      </p>
                      {centerSlide === index && (
                        <div className="absolute bottom-[-3.5rem] text-xs  xl:text-base">
                          <Link href="/">
                            <a className="font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary">
                              Read More
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
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
