import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const accordianContent = [
    {
        title: `Designed to be completed with College Studies`,
        description: `1 in 100 engineers qualify for IIT. Can anything be better? Yes, Stanford/MIT kind of ecosystem focused on projects and industrial exposure.`,
    },
    {
        title: `Talk to Data Scientists from top companies`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolorem harum dolores illo hic odit consequuntur earum similique dolor porro obcaecati voluptate, assumenda eaque natus beatae. Reiciendis quas omnis esse repellat, numquam neque, molestias saepe, expedita maxime ipsum sint. Possimus ex, beatae vitae in praesentium quasi voluptatem magni fugit nihil ea ab neque esse assumenda nemo labore! Tenetur error, sapiente delectus ullam tempora amet suscipit, molestiae voluptatem laudantium, mollitia dolorem a rem facilis quasi. Maxime illo at, natus, suscipit quod dolorum architecto vitae ea porro consequatur atque quasi sapiente, necessitatibus velit voluptatum iste. Aperiam doloremque quis velit est? In, id!`,
    },
    {
        title: `Access to all the learning!!`,
        description: `1 in 100 engineers qualify for IIT. Can anything be better? Yes, Stanford/MIT kind of ecosystem focused on projects and industrial exposure.`,
    },
    {
        title: `Get Credits, Internships, Projects & More`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolorem harum dolores illo hic odit consequuntur earum similique dolor porro obcaecati voluptate, assumenda eaque natus beatae. Reiciendis quas omnis esse repellat, numquam neque, molestias saepe, expedita maxime ipsum sint. Possimus ex, beatae vitae in praesentium quasi voluptatem magni fugit nihil ea ab neque esse assumenda nemo labore! Tenetur error, sapiente delectus ullam tempora amet suscipit, molestiae voluptatem laudantium, mollitia dolorem a rem facilis quasi. Maxime illo at, natus, suscipit quod dolorum architecto vitae ea porro consequatur atque quasi sapiente, necessitatibus velit voluptatum iste. Aperiam doloremque quis velit est? In, id!`,
    },
    {
        title: `Likeminded Peers`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolorem harum dolores illo hic odit consequuntur earum similique dolor porro obcaecati voluptate, assumenda eaque natus beatae. Reiciendis quas omnis esse repellat, numquam neque, molestias saepe, expedita maxime ipsum sint. Possimus ex, beatae vitae in praesentium quasi voluptatem magni fugit nihil ea ab neque esse assumenda nemo labore! Tenetur error, sapiente delectus ullam tempora amet suscipit, molestiae voluptatem laudantium, mollitia dolorem a rem facilis quasi. Maxime illo at, natus, suscipit quod dolorum architecto vitae ea porro consequatur atque quasi sapiente, necessitatibus velit voluptatum iste. Aperiam doloremque quis velit est? In, id!`,
    },
    {
        title: `Opportunity to work with the Industry`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
];

export default function Accordian() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="max-w-2xl lg:max-w-lg mx-auto lg:mx-0">
            {accordianContent.map(({ title, description }, index) => (
                <div key={index} className={`my-6 pb-4 ${index !== accordianContent?.length - 1 && "border-b border-b-[#D3D3D3]"}`}>
                    <div
                        onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
                        className="flex items-start justify-between gap-6 lg:gap-20 cursor-pointer"
                    >
                        <p className={`font-normal text-base ${activeIndex === index ? "text-black" : "text-[#737373]"}`}>{title}</p>
                        <span className="text-capabl_primary text-lg flex-shrink-0 w-5 h-5 flex items-center justify-center relative">
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
    );
}
