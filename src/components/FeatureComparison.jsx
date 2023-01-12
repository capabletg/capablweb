import React, { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { IoIosCheckmarkCircle } from "react-icons/io";
import useGeneralStore from "../store/generalStore";

const data = [
    { feature: "Live Doubt Session", capable: true, coursera: false, yt_udemy: true, offline: true },
    { feature: "Personal Tech-Guru", capable: true, coursera: false, yt_udemy: false, offline: true },
    { feature: "1:1 Counselling", capable: true, coursera: false, yt_udemy: true, offline: false },
    { feature: "Engagement with Industry Experts", capable: true, coursera: false, yt_udemy: true, offline: false },
    { feature: "Engineering Community", capable: true, coursera: true, yt_udemy: false, offline: false },
    { feature: "Internships", capable: true, coursera: false, yt_udemy: false, offline: false },
    { feature: "Minor-Major Projects", capable: true, coursera: false, yt_udemy: true, offline: false },
    { feature: "Events & Competition Support", capable: true, coursera: false, yt_udemy: false, offline: false },
    { feature: "Research Paper & Project Support", capable: true, coursera: false, yt_udemy: false, offline: false },
    { feature: "Scholarship for College Students", capable: true, coursera: false, yt_udemy: false, offline: false },
    { feature: "Flexible learning as per college", capable: true, coursera: false, yt_udemy: false, offline: false },
    { feature: "LoR/SoP support", capable: true, coursera: false, yt_udemy: false, offline: false },
    { feature: "Internationally Accredited Certificate", capable: true, coursera: true, yt_udemy: true, offline: false },
    { feature: "Offline Programs*", capable: true, coursera: false, yt_udemy: false, offline: true },
    { feature: "Profile Building on Internet", capable: true, coursera: false, yt_udemy: true, offline: false },
    { feature: "Multiple Domain Expertise", capable: true, coursera: true, yt_udemy: true, offline: false },
    { feature: "Mock Interviews", capable: true, coursera: false, yt_udemy: true, offline: false },
    { feature: "Placement Assistance", capable: true, coursera: false, yt_udemy: true, offline: false },
];

export default function FeatureComparison({ showAllFeatures = false, showCount = 4 }) {
    const openCtaForm = useGeneralStore((state) => state.openCtaForm);

    const [showAll, setShowAll] = useState(false);
    const [filteredFeatures, setFilteredFeatures] = useState([]);

    useEffect(() => {
        setFilteredFeatures(showAll ? [...data] : [...data].splice(0, showCount));
    }, [showAll]);

    useEffect(() => {
        setShowAll(showAllFeatures);
    }, [showAllFeatures]);

    return (
        <div className="mt-12 md:mt-16 max-w-5xl mx-auto relative rounded-md grid grid-cols-2">
            <div className="flex-shrink-0 pt-4 md:pt-8">
                {["", ...filteredFeatures]?.map(({ feature }, index) => (
                    <div
                        key={index}
                        className={`${index % 2 === 0 ? "bg-[#FCFDFD]" : "bg-white"} ${index === data?.length ? "rounded-bl-md" : ""} ${
                            index === 0 ? "rounded-tl-md" : ""
                        } flex items-center justify-start px-3 md:pl-8 md:pr-4 py-1 h-16`}
                    >
                        <p className="font-normal text-xs md:text-sm text-[#636363] max-w-sm">{feature}</p>
                    </div>
                ))}
            </div>

            <div>
                {/* fixed in mobile */}
                <div
                    style={{ boxShadow: "0px 3px 14px rgba(255, 175, 0, 0.43)" }}
                    className="bg-capabl_primary rounded-lg w-20 md:w-auto flex-shrink-0 pb-2 block md:hidden absolute top-0 left-1/2 pt-4"
                >
                    <p className="h-16 flex items-center justify-center font-medium text-xs md:text-sm px-4 text-balck md:px-4">
                        <span className="mb-3">Capabl</span>
                    </p>
                    {filteredFeatures?.map(({ capable }, index) => (
                        <p key={index} className={`h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-[#F2F4F6] bg-opacity-10" : ""}`}>
                            {!!capable ? <IoIosCheckmarkCircle className="text-white text-xl" /> : <></>}
                        </p>
                    ))}
                    <div className="mt-2 md:mt-4 flex items-center justify-center px-2">
                        {showAll && (
                            <button
                                onClick={() => openCtaForm()}
                                className="bg-white w-full py-3 px-2 font-medium rounded-lg text-[0.6rem] md:text-sm text-center text-black hover:scale-95 transition-all duration-300"
                            >
                                Join Our Tribe
                            </button>
                        )}
                        {!showAll && (
                            <button
                                onClick={() => setShowAll((prev) => !prev)}
                                className="bg-white w-full py-3 px-2 font-medium rounded-lg text-[0.6rem] md:text-sm text-center text-black hover:scale-95 transition-all duration-300"
                            >
                                View All Features
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex-shrink-0 md:flex-shrink md:flex-grow overflow-x-scroll scrollbar-hide pt-4 md:pt-8">
                    <div className="flex items-start justify-start md:grid md:grid-cols-4">
                        <div className="bg-white rounded-b-lg hidden md:block">
                            <div
                                style={{ boxShadow: "0px 3px 14px rgba(255, 175, 0, 0.43)" }}
                                className="bg-capabl_primary rounded-lg w-auto flex-shrink-0 pb-2 pt-4 md:pt-8 -mt-4 md:-mt-8"
                            >
                                <p className="h-16 flex items-center justify-center font-medium text-sm px-4 text-balck">
                                    <span className="mb-5">Capabl</span>
                                </p>
                                {filteredFeatures?.map(({ capable }, index) => (
                                    <p key={index} className={`h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-[#F2F4F6] bg-opacity-10" : ""}`}>
                                        {!!capable ? <IoIosCheckmarkCircle className="text-white text-xl" /> : <></>}
                                    </p>
                                ))}
                                <div className="mt-4 flex items-center justify-center px-2">
                                    {showAll && (
                                        <button
                                            onClick={() => openCtaForm()}
                                            className="bg-white w-full py-3 px-2 font-normal rounded-lg text-xs text-center text-black hover:scale-95 transition-all duration-300"
                                        >
                                            Join Our Tribe
                                        </button>
                                    )}
                                    {!showAll && (
                                        <button
                                            onClick={() => setShowAll((prev) => !prev)}
                                            className="bg-white w-full py-3 px-2 font-normal rounded-lg text-xs text-center text-black hover:scale-95 transition-all duration-300"
                                        >
                                            View All Features
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-20 md:hidden flex-shrink-0" />

                        <div className="bg-white w-20 md:w-auto flex-shrink-0">
                            <p className="h-16 flex items-center justify-center text-center text-[#565656] font-normal text-[0.63rem] md:text-xs px-4">
                                Coursera
                            </p>
                            {filteredFeatures?.map(({ coursera }, index) => (
                                <p key={index} className={`h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-white" : "bg-[#FCFDFD]"}`}>
                                    {!!coursera ? (
                                        <IoIosCheckmarkCircle className="text-capabl_primary text-xl" />
                                    ) : (
                                        <HiXMark className="text-xl text-gray-300" />
                                    )}
                                </p>
                            ))}
                        </div>

                        <div className="bg-white w-20 md:w-auto flex-shrink-0">
                            <p className="h-16 flex items-center justify-center text-center text-[#565656] font-normal text-[0.63rem] md:text-xs md:whitespace-nowrap px-4">
                                YouTube / Udemy
                            </p>
                            {filteredFeatures?.map(({ yt_udemy }, index) => (
                                <p key={index} className={`h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-white" : "bg-[#FCFDFD]"}`}>
                                    {yt_udemy ? (
                                        <IoIosCheckmarkCircle className="text-capabl_primary text-xl" />
                                    ) : (
                                        <HiXMark className="text-xl text-gray-300" />
                                    )}
                                </p>
                            ))}
                        </div>

                        <div className="bg-white w-20 md:w-auto flex-shrink-0 rounded-r-md overflow-hidden">
                            <p className="h-16 flex items-center justify-center text-center text-[#565656] font-normal text-[0.63rem] md:text-xs px-4">
                                Offline
                            </p>
                            {filteredFeatures?.map(({ offline }, index) => (
                                <p key={index} className={`h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-white" : "bg-[#FCFDFD]"}`}>
                                    {!!offline ? (
                                        <IoIosCheckmarkCircle className="text-capabl_primary text-xl" />
                                    ) : (
                                        <HiXMark className="text-xl text-gray-300" />
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
