import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Accordian({ data = [], theme = { primary: "", text: "" } }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
        setActiveImageIndex(0);
    }, []);

    useEffect(() => {
        if (activeIndex >= 0 && activeIndex !== null) setActiveImageIndex(activeIndex);
    }, [activeIndex]);

    if (!data?.length) return;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 lg:mt-10">
            <div className="col-span-1 lg:order-1">
                <div className="w-full max-w-2xl mx-auto py-4 md:py-8 relative h-full">
                    {data?.map(({ image }, index) => (
                        <AnimatePresence key={index}>
                            {index === activeImageIndex && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute left-0 top-0 h-full w-full flex items-start justify-center"
                                >
                                    {image}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    ))}
                </div>
            </div>

            <div className="col-span-1">
                <div className="max-w-2xl lg:max-w-lg mx-auto lg:mx-0">
                    {data?.map(({ title, description }, index) => (
                        <div key={index} className={`my-6 pb-4 ${index !== data?.length - 1 && "border-b border-b-[#D3D3D3]"}`}>
                            <div
                                onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
                                className="flex items-start justify-between gap-6 lg:gap-20 cursor-pointer"
                            >
                                <p className={`font-normal text-base ${activeIndex === index ? "text-black" : "text-[#737373]"}`}>{title}</p>
                                <span style={{ color: theme.primary }} className="text-lg flex-shrink-0 w-5 h-5 flex items-center justify-center relative">
                                    <FaPlus
                                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-200 ${
                                            activeIndex === index ? "opacity-0 scale-0" : "opacity-100 scale-1"
                                        }`}
                                    />
                                    <FaMinus
                                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-200 ${
                                            activeIndex !== index ? "opacity-0 scale-0" : "opacity-100 scale-1"
                                        }`}
                                    />
                                </span>
                            </div>
                            <p
                                className={`text-sm text-[#565656] font-light overflow-hidden transition-all duration-50 pr-6 md:pr-10 ${
                                    activeIndex === index ? "max-h-screen mt-4 opacity-100" : "max-h-0 mt-0 opacity-0"
                                }`}
                            >
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
