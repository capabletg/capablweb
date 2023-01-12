import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import classes from "./style.module.css";

// min Slide Length = 5

export default function JourneySlider({ arr = [] }) {
    const [slides, setSlides] = useState([]);
    const [slideLeft, setSlideLeft] = useState(true);

    const timerRef = useRef();

    const shiftArray = (shift) => {
        if (shift > arr?.length) return;
        setSlideLeft(shift > 0);
        setSlides((prev) => [...prev.slice(shift), ...prev.slice(0, shift)]);
    };

    useEffect(() => {
        if (arr?.length) setSlides([...arr]);
    }, [arr]);

    useEffect(() => {
        if (!!slides?.length) {
            if (!!timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                shiftArray(1);
            }, 2500);
        }
        return () => {
            !!timerRef.current && clearTimeout(timerRef.current);
        };
    }, [slides]);

    if (!slides?.length) return <></>;

    return (
        <div className="mt-10 md:mt-14 relative z-0">
            {/* diffuser */}
            <div className="hidden xl:block absolute top-0 left-0 z-[2] w-12 h-full bg-gradient-to-r from-white to-transparent" />
            <div className="hidden xl:block absolute top-0 right-0 z-[2] w-12 h-full bg-gradient-to-l from-white to-transparent" />

            <svg
                className="w-[48rem] lg:w-[80rem] mx-auto absolute left-1/2 top-[8rem] lg:top-[45%] transform -translate-y-1/2 -translate-x-1/2 object-contain z-[1]"
                viewBox="0 0 1728 195"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M-178.503 192.577C145.293 48.6474 1015.57 -152.854 1906.33 192.577" stroke="#E1E1E1" strokeOpacity="0.5" strokeWidth="3.59868" />
            </svg>

            <div className="flex items-start justify-evenly relative z-[2]">
                {/* Slider 1 */}
                <div onClick={() => shiftArray(-2)} className="hidden lg:block cursor-pointer w-full max-w-[8rem] flex-shrink-0 mt-[10.5%]">
                    <div className="relative border-2 border-white w-fit mb-4 mx-auto">
                        <div className="w-24 h-24 relative overflow-hidden rounded-full transition-all duration-300">
                            <ImageOnChange src={slides?.[0]?.image} alt={slides?.[0]?.name} toLeft={slideLeft} />
                        </div>
                        <div
                            style={{ boxShadow: "0px 0px 4.52439px #E8E8E8" }}
                            className="bg-white w-12 h-12 rounded-full p-1 flex items-center justify-center absolute bottom-[-15%] right-[-12%]"
                        >
                            <img className="w-full object-contain" src={slides?.[0]?.company} alt="company" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <p className="text-center text-sm line-clamp-1 text-[#14213D]">{slides?.[0]?.name}</p>
                        <p className="text-[#6b6b6b] line-clamp-1 text-xs text-center">{slides?.[0]?.designation}</p>
                    </div>
                </div>

                {/* Slider 2 */}
                <div
                    onClick={() => shiftArray(-1)}
                    className="flex-shrink-0 w-full max-w-[5.3rem] sm:max-w-[8rem] cursor-pointer mt-[4.2rem] sm:mt-[3.5rem] md:mt-[4rem] lg:mt-[7%]"
                >
                    <div className="relative border-2 border-white w-fit mx-auto mb-2 lg:mb-5">
                        <div className="w-14 sm:w-[5.5rem] lg:w-28 h-14 sm:h-[5.5rem] lg:h-28 relative overflow-hidden rounded-full transition-all duration-300">
                            <ImageOnChange src={slides?.[1]?.image} alt={slides?.[1]?.name} toLeft={slideLeft} />
                        </div>
                        <div
                            style={{ boxShadow: "0px 0px 4.52439px #E8E8E8" }}
                            className="bg-white w-7 sm:w-9 lg:w-14 h-7 sm:h-9 lg:h-14 rounded-full p-1 flex items-center justify-center absolute bottom-[-15%] right-[-12%] transition-all duration-300"
                        >
                            <img className="w-full object-contain" src={slides?.[1]?.company} alt="company" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-0.5 lg:gap-1">
                        <p className="text-center line-clamp-1 text-[0.6rem] sm:text-xs lg:text-sm text-[#14213D]">{slides?.[1]?.name}</p>
                        <p className="text-[#6b6b6b] line-clamp-1 text-[0.5rem] sm:text-[0.65rem] lg:text-xs text-center">{slides?.[1]?.designation}</p>
                    </div>
                </div>

                {/* Slider 3 - MAIN */}
                <div className="bg-[#f2f4f7] flex-shrink-0 transition-all duration-300 rounded-full p-2 sm:p-3 lg:p-4 w-full max-w-[10rem] sm:max-w-[13rem] lg:max-w-[15rem]">
                    <div
                        className={`rounded-full w-fit mx-auto p-2 relative z-[0] after:z-[0] after:absolute after:rounded-full after:left-0 after:top-0 after:w-full after:h-full after:border-2 after:border-capabl_primary after:border-r-[#dfe0e3] after:border-t-[#dfe0e3] ${classes.slider_main_border}`}
                    >
                        <div className="relative w-fit">
                            <div className="w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 relative overflow-hidden rounded-full transition-all duration-300">
                                <ImageOnChange src={slides?.[2]?.image} alt={slides?.[2]?.name} toLeft={slideLeft} />
                            </div>
                            <div
                                style={{ boxShadow: "0px 0px 4.52439px #E8E8E8" }}
                                className="bg-white w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full p-1 flex items-center justify-center absolute z-[1] bottom-[-9%] right-[-6%] transition-all duration-300"
                            >
                                <Image layout="fill" className="w-full object-contain" src={slides?.[2]?.company} alt="company" />
                                {/* <img className="w-full object-contain" src={slides?.[2]?.company} alt="company" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-5 lg:mt-6 w-full px-1 lg:px-1.5 pb-3 flex flex-col items-center justify-start gap-2 sm:gap-2.5 lg:gap-3.5">
                        <p className="text-[0.6rem] sm:text-[0.7rem] lg:text-xs font-light text-center text-[#282828] line-clamp-6 h-[5.5rem] sm:h-[6.3rem] lg:h-[6rem]">
                            {slides?.[2]?.feedback}
                        </p>
                        <span className="bg-black w-6 lg:w-10 h-0.5 inline-block" />
                        <div className="flex flex-col items-center justify-start gap-1">
                            <p className="text-center font-medium text-xs sm:text-[0.8rem] lg:text-sm text-[#14213D]">{slides?.[2]?.name}</p>
                            <p className="text-[#6b6b6b] text-[0.6rem] sm:text-[0.7rem] lg:text-xs text-center">{slides?.[2]?.designation}</p>
                        </div>
                    </div>
                </div>

                {/* Slider 4 */}
                <div
                    onClick={() => shiftArray(1)}
                    className="flex-shrink-0 w-full max-w-[5.3rem] sm:max-w-[8rem] cursor-pointer mt-[4.2rem] sm:mt-[3.5rem] md:mt-[4rem] lg:mt-[7%]"
                >
                    <div className="relative border-2 border-white w-fit mb-2 lg:mb-5 mx-auto">
                        <div className="w-14 sm:w-[5.5rem] lg:w-28 h-14 sm:h-[5.5rem] lg:h-28 relative overflow-hidden rounded-full transition-all duration-300">
                            <ImageOnChange src={slides?.[3]?.image} alt={slides?.[3]?.name} toLeft={slideLeft} />
                        </div>
                        <div
                            style={{ boxShadow: "0px 0px 4.52439px #E8E8E8" }}
                            className="bg-white w-7 sm:w-9 lg:w-14 h-7 sm:h-9 lg:h-14 rounded-full p-1 flex items-center justify-center absolute bottom-[-15%] right-[-12%] transition-all duration-300"
                        >
                            <img className="w-full object-contain" src={slides?.[3]?.company} alt="company" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 lg:gap-1">
                        <p className="text-center line-clamp-1 text-[0.6rem] sm:text-xs lg:text-sm text-[#14213D]">{slides?.[3]?.name}</p>
                        <p className="text-[#6b6b6b] line-clamp-1 text-[0.5rem] sm:text-[0.65rem] lg:text-xs text-center">{slides?.[3]?.designation}</p>
                    </div>
                </div>

                {/* Slider 5 */}
                <div onClick={() => shiftArray(2)} className="cursor-pointer hidden lg:block w-full max-w-[8rem] flex-shrink-0 mt-[10.5%]">
                    <div className="relative border-2 border-white w-fit mb-4 mx-auto">
                        <div className="w-24 h-24 relative overflow-hidden rounded-full transition-all duration-300">
                            <ImageOnChange src={slides?.[4]?.image} alt={slides?.[4]?.name} toLeft={slideLeft} />
                        </div>
                        <div
                            style={{ boxShadow: "0px 0px 4.52439px #E8E8E8" }}
                            className="bg-white w-12 h-12 rounded-full p-1 flex items-center justify-center absolute bottom-[-15%] right-[-12%]"
                        >
                            <img className="w-full object-contain" src={slides?.[4]?.company} alt="company" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-center line-clamp-1 text-sm text-[#14213D]">{slides?.[4]?.name}</p>
                        <p className="text-[#6b6b6b] line-clamp-1 text-xs text-center">{slides?.[4]?.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ImageOnChange({ src = "", alt = "", toLeft = true }) {
    return (
        <AnimatePresence>
            <motion.img
                key={`slider_${src}_${alt}`}
                initial={{ opacity: 0, scale: 0, x: toLeft ? "100%" : "-100%" }}
                animate={{ opacity: 1, x: "0%", scale: 1 }}
                exit={{ opacity: 0, x: toLeft ? "-100%" : "100%", scale: 0 }}
                transition={{ duration: 0.5 }}
                src={src}
                alt={alt}
                className="w-full h-full absolute object-cover top-0 left-0 rounded-full transform"
            />
        </AnimatePresence>
    );
}
