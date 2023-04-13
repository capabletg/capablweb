import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import useGeneralStore from "../../../store/generalStore";

export default function Module4() {
    const openCtaForm = useGeneralStore((state) => state.openCtaForm);

    const [playing, setPlaying] = useState(true);
    const videoRef = useRef();

    const playVideo = () => {
        setPlaying(true);
        videoRef.current?.play();
    };
    const pauseVideo = () => {
        setPlaying(false);
        videoRef.current?.pause();
    };

    useEffect(() => {
        if (!!videoRef.current?.paused || !!videoRef.current?.ended) {
            setPlaying(false);
        } else setPlaying(true);
    }, []);

    const toggleVideo = () => (videoRef.current?.paused || videoRef.current?.ended ? playVideo() : pauseVideo());

    return (
        <div className="col-span-1 rounded-2xl bg-[#00253A] p-4 sm:px-7 sm:py-5 relative overflow-hidden">
            <img
                className="absolute z-0 bottom-0 right-0 min-w-[200%] object-contain"
                src="/images/courses/circuit_illustration_3.svg"
                alt="circuit illustration"
            />

            <div className="relative z-[1]">
                <div className="items-center justify-start hidden md:flex md:mb-4">
                    <p className="uppercase text-[#ff696d] font-semibold text-xs bg-white rounded-full px-3 py-1">Module 4</p>
                </div>

                <div className="flex items-start justify-between gap-4 pt-1 sm:pt-4 md:pt-2 lg:pt-0">
                    <p className="text-white text-base sm:text-2xl font-light">
                        Data <span className="font-medium">Analytics</span>
                    </p>

                    {/* <div className="flex items-center justify-end gap-2.5 sm:gap-4">
                        <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-xs text-white font-light">Experts from</p>
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-9 lg:h-9 rounded-full bg-[#f1f1f1]" />
                            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-9 lg:h-9 rounded-full bg-[#f1f1f1]" />
                            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-9 lg:h-9 rounded-full bg-[#f1f1f1]" />
                        </div>
                    </div> */}
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-6 sm:mt-9 lg:mt-8">
                    <div className="flex flex-col items-start justify-start md:gap-1 h-full">
                        {/* Video here */}
                        <div className="bg-white mb-3 sm:mb-5 flex-grow w-full relative overflow-hidden rounded-sm h-[9rem] sm:h-[12rem] md:h-[15rem] lg:h-[12rem] group cursor-pointer">
                            <video
                                ref={videoRef}
                                src="/videos/loop_video_4.mp4"
                                autoPlay={false}
                                loop={true}
                                className="w-full h-full object-cover transition-all duration-500"
                                muted={true}
                                type="video/mp4"
                            />

                            <div onClick={() => toggleVideo()}>
                                <div
                                    className={`absolute top-0 left-0 w-full h-full bg-black transition-all duration-200 ${
                                        playing ? "bg-opacity-0 hover:bg-opacity-20" : "bg-opacity-20"
                                    }`}
                                />

                                {!!playing && (
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#FF0000] text-white rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-95 transition-all duration-500">
                                        <FaPause className="text-xs ml-0.5" />
                                    </button>
                                )}

                                {!playing && (
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#FF0000] text-white rounded-full group-hover:scale-95 transition-all duration-500">
                                        <FaPlay className="text-xs ml-0.5" />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5 sm:gap-4 justify-end w-full">
                            <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-xs text-white font-light">Softwares</p>

                            <div className="flex items-center gap-1.5 sm:gap-2 justify-end">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-9 lg:h-9 rounded-full bg-[#f1f1f1]" />
                                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-9 lg:h-9 rounded-full bg-[#f1f1f1]" />
                                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-9 lg:h-9 rounded-full bg-[#f1f1f1]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-start h-full">
                        <p className="text-[#B3BEC4] font-normal sm:font-light text-[0.6rem] sm:text-xs md:text-sm lg:text-xs mb-0.5 sm:mb-1">{`See Industrial Use Case`}</p>
                        <p className="text-[#B3BEC4] font-normal sm:font-light text-[0.6rem] sm:text-xs md:text-sm lg:text-xs mb-0.5 sm:mb-1">{`Understand Data Science Evolution`}</p>
                        <p className="text-[#B3BEC4] font-normal sm:font-light text-[0.6rem] sm:text-xs md:text-sm lg:text-xs mb-0.5 sm:mb-1">{`Introduction to the program`}</p>

                        <p className="text-white text-[0.6rem] sm:text-xs md:text-sm lg:text-xs mt-3 sm:mt-4">
                            {`4 Modules`} <span className="text-[#738793]">{` | `}</span> {`2 Projects`}
                        </p>

                        <button
                            onClick={() => openCtaForm()}
                            className="mt-4 sm:mt-4 md:mb-1 flex-shrink-0 bg-capabl_primary cursor-pointer rounded-md px-3 py-1 sm:py-1.5 text-black text-[0.6rem] sm:text-xs md:text-sm lg:text-xs hover:scale-95 transition-all duration-300"
                        >
                            View Modules
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
