import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const accordianContent = [
    {
        title: `Top Certifications`,
        description: `Exclusive Certifications only for Capabl Students - Internationally Accredited (UK, ISO) Certification with 5+ Industries and technical organizations that stamps your performance and credibility.`,
    },
    {
        title: `Made for College Students`,
        description: `Talk to experts in live sessions, get your doubts solved over mail, call, portal, msg, etc. Pause your course during your college projects/exams and a lot more features, especially for college students.`,
    },
    {
        title: `1:1 Counselling and Reporting`,
        description: `Our students to get an exclusive feature - a dedicated mentor who will help them throughout the program and even after! Furthermore, our experts discuss your performance report on a regular basis! `,
    },
    {
        title: `World-Class Exposure & Networking - at home`,
        description: `Live talks with Industry leaders, projects with students from different parts of India, and be in a community with Industry experts, researchers, and like-minded students. `,
    },
    {
        title: `Competitions, Projects, Credits & More!`,
        description: `Get - updates on national/international events, your major-minor projects done, credits for internships, industrial projects in Electric Vehicle, and services that help you be Capabl.`,
    },
    {
        title: `A true Career Platform`,
        description: `Profile on platforms like LinkedIn, etc. Support in interviews, resumes, and profiling. And, finally Internship and Job Guarantee!`,
    },
    {
        title: `Leaderboards & Learning Environment`,
        description: `Keep a track of your performance against 1000s of others to stay ahead of the competition. The more you stay ahead of the competition, chances are higher to get noticed by Industry! What more, you get exclusive perks like exclusive skilling, discounts, and more for good performance.`,
    },
];

export default function AccordianEV() {
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
