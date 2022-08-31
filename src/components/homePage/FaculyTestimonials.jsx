import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { facultyTestimonials } from "../../utils/data/homePage/faculty_testimonials";

export default function FaculyTestimonials() {
    const [activeSlide, setActiveSlide] = useState(0);

    const sliderRef = useRef();

    const next = () => sliderRef.current?.slickNext();
    const prev = () => sliderRef.current?.slickPrev();

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        pauseOnHover: false,
        nextArrow: null,
        prevArrow: null,
        speed: 500,
        beforeChange: (current, next) => {
            setActiveSlide(next);
        },
    };

    return (
        <>
            <div className="flex items-start justify-start md:justify-between gap-4 mb-2 md:mb-10 px-4">
                <h3 className="text-black font-medium text-base md:text-3xl md:max-w-xs">What faculties have say about capabl</h3>
                <div className="flex items-center justify-start gap-2">
                    <button
                        onClick={() => prev()}
                        disabled={activeSlide === 0}
                        className="rounded-full outline-none border-none bg-capabl_primary flex items-center justify-center w-8 h-8 md:w-14 md:h-14 p-2.5 disabled:opacity-40"
                    >
                        <img className="w-full object-contain transform rotate-90 max-w-[1rem]" src="/images/svgs/chevron_down.svg" alt="chevron" />
                    </button>
                    <button
                        disabled={activeSlide === facultyTestimonials?.length - 1}
                        onClick={() => next()}
                        className="rounded-full outline-none border-none bg-capabl_primary flex items-center justify-center w-8 h-8 md:w-14 md:h-14 p-2.5 disabled:opacity-40"
                    >
                        <img className="w-full object-contain transform -rotate-90 max-w-[1rem]" src="/images/svgs/chevron_down.svg" alt="chevron" />
                    </button>
                </div>
            </div>
            <div className="w-full">
                <Slider {...settings} ref={sliderRef}>
                    {facultyTestimonials.map((item, index) => (
                        <div key={index} className="py-3 px-3">
                            <div
                                style={{ boxShadow: "0px 2.05193px 20.0064px 2.05193px #F2F4F6" }}
                                className="bg-white rounded-lg md:rounded-2xl w-full mx-auto grid grid-cols-7 pt-2"
                            >
                                <div className="w-full col-span-3 mx-auto flex items-end justify-center">
                                    <img className="w-10/12 h-fit object-contain" src={item?.image} alt={item?.name} />
                                </div>
                                <div className="col-span-4 p-4 pl-0">
                                    <p className="font-semibold text-black text-[9px] md:text-lg md:leading-6 mb-2 md:mb-3">{item?.title}</p>
                                    <p className="font-normal text-[#787878] text-[8px] md:text-xs mb-3 md:mb-4">{item?.description}</p>
                                    <p className="font-medium text-[#321664] text-[8px] md:text-base">{item?.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
