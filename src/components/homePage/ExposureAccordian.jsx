import React, { useEffect, useState } from "react";
import { exposure } from "../../utils/data/homePage/exposure";

export default function ExposureAccordian() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, []);

    return (
        <div className="max-w-sm">
            {exposure?.map(({ title, description }, index) => (
                <div key={index} className="mb-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <h4 className="font-semibold text-lg text-black text-left">{title}</h4>
                        <button
                            className="outline-none border-none ring-0 hover:ring-0 active:ring-0 focus:ring-0"
                            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                        >
                            {activeIndex === index ? (
                                <img src="/images/svgs/minus_icon.svg" alt="minus" />
                            ) : (
                                <img src="/images/svgs/plus_icon.svg" alt="plus" />
                            )}
                        </button>
                    </div>
                    <div className={`overflow-hidden transition-all max-w-xs duration-300 ${activeIndex === index ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
                        <p className="font-normal text-sm text-[#636363] text-left">{description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
