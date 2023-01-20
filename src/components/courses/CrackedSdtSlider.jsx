import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import { crackedStudents } from "../../utils/data/courses/crackedStudents";

export default function CrackedSdtSlider({ theme = { primary: "", text: "" } }) {
    const [activeSlide, setActiveSlide] = useState(0);

    const sliderRef = useRef();

    const next = () => sliderRef.current?.slickNext();
    const prev = () => sliderRef.current?.slickPrev();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        pauseOnHover: false,
        nextArrow: null,
        prevArrow: null,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "ease",
        beforeChange: (current, next) => {
            setActiveSlide(next);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="w-full">
                <Slider {...settings} ref={sliderRef}>
                    {crackedStudents?.map((item, index) => (
                        <div key={index} className="py-3 px-3">
                            <div className="bg-white sm:max-w-xs rounded-sm md:rounded-md w-full mx-auto overflow-hidden">
                                <div className="w-full h-[14rem]">
                                    <img className="w-full h-full object-cover" src={item?.image} alt={item?.name} />
                                </div>
                                <div className="p-4 py-10 sm:py-6">
                                    <p className="text-sm">{item?.feedback}</p>
                                    <div className="mt-5">
                                        <p className="font-semibold text-sm mb-0.5">{item?.name}</p>
                                        <p className="italic text-[#969C9F] text-sm font-normal">{item?.designation}</p>
                                        <div className="w-16 mt-2">
                                            <img className="w-full object-contain" src={item?.company_logo} alt="Company" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="hidden md:flex items-center justify-end w-full max-w-xs mx-auto sm:max-w-full gap-2 md:pr-2">
                <p className="text-white text-sm">
                    {activeSlide + 1} of {crackedStudents?.length}
                </p>
                <button
                    onClick={() => prev()}
                    disabled={activeSlide === 0}
                    style={{ color: theme.primary }}
                    className="rounded-full text-lg md:text-2xl outline-none border-none bg-white flex items-center justify-center transition duration-200 w-8 h-8 md:w-12 md:h-12 disabled:opacity-40"
                >
                    <FiChevronLeft />
                </button>
                <button
                    disabled={activeSlide === crackedStudents?.length - 1}
                    onClick={() => next()}
                    style={{ color: theme.primary }}
                    className="rounded-full text-lg md:text-2xl outline-none border-none bg-white flex items-center justify-center transition duration-200 w-8 h-8 md:w-12 md:h-12 disabled:opacity-40"
                >
                    <FiChevronRight />
                </button>
            </div>
        </>
    );
}
