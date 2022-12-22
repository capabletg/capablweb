import React from "react";
import Slider from "react-slick";
import { helpsYouMakeCareer } from "../../utils/data/homePage/helps_you_make_career";

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: false,
    nextArrow: null,
    prevArrow: null,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "ease",
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export default function HelpingAreasSlider() {
    return (
        <div className="max-w-5xl mx-auto">
            <Slider {...settings}>
                {helpsYouMakeCareer.map((item, index) => (
                    <div key={index} className="py-5 px-3">
                        <div className="bg-[#FAFAFA] max-w-[350px] rounded-lg p-2.5 pb-4 w-full mx-auto relative group">
                            <div className="bg-white w-full h-52 mx-auto rounded-lg overflow-hidden flex items-end justify-center">
                                <img
                                    className="w-3/4 h-full border-[3px] border-white object-contain transform translate-y-3 group-hover:scale-110 transition-all duration-1000"
                                    src={item?.image}
                                    alt={item?.title}
                                />
                            </div>
                            <h3 className="mt-3 mb-6 font-semibold text-xl text-left px-2">{item?.title}</h3>
                            <div className="flex flex-col items-start justify-start gap-4 px-2">
                                {item?.points?.map((el, indx) => (
                                    <div key={indx}>
                                        <div className="flex items-start justify-start gap-2 bg-white rounded-3xl border border-[#e8e8e8] py-1.5 px-2 w-fit">
                                            <img className="w-5 object-contain" src="/images/svgs/tick.svg" alt="tick" />
                                            <p className="font-medium text-sm">{el?.title}</p>
                                        </div>
                                        <p className="font-light text-sm mt-1.5 pl-2">{el?.description}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs italic mt-4 text-end">{item?.extra}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
