import React, { useState } from "react";
import { aceYourDreamData } from "../../utils/data/courses/aceYourDreamData";

export default function AceYourDreamSlider() {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <div>
            <div className="px-6 relative z-0">
                <div className="flex items-center justify-start gap-0 overflow-x-scroll scrollbar-hide">
                    {aceYourDreamData?.map(({ label }, index) => (
                        <button
                            disabled={activeCategory === index}
                            onClick={() => setActiveCategory(index)}
                            key={index}
                            className="flex-shrink-0 bg-white text-capabl_primary disabled:text-black disabled:bg-[#f2f4f7] rounded-t-lg px-4 md:px-5 py-2.5 text-xs sm:text-sm font-medium"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="pt-6 md:pt-8 pb-4 bg-[#f2f6f7] rounded-xl md:rounded-2xl -mt-1 relative z-[1]">
                {/* diffuser */}
                <div className="absolute z-[2] top-0 left-0 w-6 h-full bg-gradient-to-r from-[#f2f4f7] to-transparent rounded-full" />
                <div className="absolute z-[2] top-0 right-0 w-6 h-full bg-gradient-to-l from-[#f2f4f7] to-transparent rounded-full" />
                <div className="flex items-start justify-start gap-4 md:gap-6 overflow-x-scroll scrollbar-hide px-6 py-4">
                    {aceYourDreamData?.[activeCategory]?.contents?.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-white max-w-[13rem] mx-auto relative flex items-center justify-start flex-col p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-capabl_primary hover:shadow-lg hover:shadow-[#e5e5e5]"
                        >
                            <img className="w-28 object-contain" src={item?.image} alt={item?.title} />

                            <p className="mt-3 mb-3 font-medium text-sm text-center">{item?.title}</p>
                            <div className="text-[0.7rem] sm:text-xs text-center flex flex-col items-center justify-start gap-1">
                                {item?.points?.map((point, key) => (
                                    <p key={`${index}_${key}`}>{point}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
