import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";

const data1 = [
    {
        image: "/images/home/electric_vehicle.jpg",
        target: "/",
        id: "electric-vehicle",
        title: "Electric Vehicle",
        short_desc: "Passionate about Electric Vehicles? This is the only program you need.",
        stat: {
            rating: "4.8",
            projects: "40+",
            companies: "250+",
        },
        points: [
            `EV and  Powertrain Components, E/E Architecture of EVs, Li-ion Cell & BMS Modeling, EV Battery Design and Analysis, Motor Technology, Power Electronics, Communication Protocols, Wire Harness Testing and Homologation`,
            `Ace 40+ projects including BMS modeling of Tesla model S!`,
            `MATLAB, Simulink, Ansys, Creo, Altair Fluxmotor, Mathcad`,
        ],
    },
    {
        image: "/images/home/data_science.jpg",
        target: "/",
        id: "data-science",
        title: "Data Science",
        short_desc: "Don't know coding or scared of how to start - the perfect program for you!",
        stat: {
            rating: "4.9",
            projects: "50+",
            companies: "1000+",
        },
        points: [
            `Python, Stats, Data Analytics, Business Analytics, Data Visualization, Machine Learning, Deep Learning`,
            `Learn algorithms (KNN, CNN, clustering, random forest) & Latest technologies like neural networks, big data used by Google, Zomato, Amazon, etc.`,
            `Git, Numpy, Pandas, Tableau, Scikit, Tensorflow, OpenCV`,
        ],
    },
    {
        image: "/images/home/mechatronics.jpg",
        target: "/",
        id: "mechatronics",
        title: "Mechatronics",
        short_desc: "Be a master of Robotics, Mechatronics, IoT, etc. - start from scratch & become pro!",
        stat: {
            rating: "4.7",
            projects: "45+",
            companies: "300+",
        },
        points: [
            `Embedded Systems, Robot Operating System, Industrial Automation, Robotics, Internet of Things & IIoT, AI/ML in Mechatronix`,
            `Get a firm grip on digital control systems, Real-time OS's, Robotics, IoT device design and automation techniques.`,
            `PLC, Scada, ROS, STM Cube MX, factory automation, robodk, polyscope etc.`,
        ],
    },
];

const data2 = [
    {
        image: "/images/home/design_cae.jpg",
        target: "/",
        id: "design-and-engineering",
        title: "Design Engineering",
        short_desc: "Be it a ferrari, your water bottle or a rocket ship - be the engineer who can design it all!",
        stat: {
            rating: "4.9",
            projects: "50+",
            companies: "700+",
        },
        points: [
            `Design In Automotive Industry, Plastic Design, BIW & Sheet Metail, Solid Modeling, Surface Modeling, FEA, CFD`,
            `Learn BIW, GDnT, Plastic Design, Turbomachinery analysis and more`,
            `Siemens NX, Solidworks, Hypermesh, StarCCM and ANSYS workbench.`,
        ],
    },
    {
        image: "/images/home/full_stack.jpg",
        target: "/",
        id: "full-stack-development",
        title: "Full Stack Development",
        short_desc: "Be it a ferrari, your water bottle or a rocket ship - be the engineer who can design it all!",
        stat: {
            rating: "4.9",
            projects: "50+",
            companies: "700+",
        },
        points: [
            `Design In Automotive Industry, Plastic Design, BIW & Sheet Metail, Solid Modeling, Surface Modeling, FEA, CFD`,
            `Learn BIW, GDnT, Plastic Design, Turbomachinery analysis and more`,
            `Siemens NX, Solidworks, Hypermesh, StarCCM and ANSYS workbench.`,
        ],
    },
];

export default function IndustrialPrograms({ setShowCtaForm }) {
    return (
        <section id="programs" className="container mx-auto max-w-7xl px-0 md:px-4 relative mb-10 md:mb-20 mt-20">
            {/* Top Circle */}
            <div
                style={{ background: "radial-gradient(147% 539.45% at 50% 50%, rgba(255, 175, 0, 0.4) 0%, rgba(255, 0, 0, 0.4) 100%)" }}
                className="rounded-full absolute top-0 left-0 transform -translate-x-[30%] md:translate-x-0 -translate-y-[25%] md:translate-y-[17%] z-0 w-1/2 min-w-[200px] max-w-md aspect-square transition duration-300"
            />

            {/* Bottom Circle */}
            <div
                style={{ background: "radial-gradient(147% 539.45% at 50% 50%, #FFAF00 0%, #FF0000 100%)" }}
                className="rounded-full absolute bottom-0 right-0 transform -translate-x-[10%] -translate-y-[90%] z-0 w-1/2 min-w-[200px] max-w-xs aspect-square transition duration-300"
            />

            {/* Content */}
            <div
                style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(243, 243, 243, 0.73) 100%)" }}
                className="w-full backdrop-blur-md py-8 md:px-12 md:py-12 border-[0.05rem] border-[#d2d2d2] md:rounded-xl relative z-[1]"
            >
                <div className="px-6">
                    <div className="md:grid md:grid-cols-5 md:gap-10">
                        <div className="max-w-sm flex-shrink-0 md:col-span-2">
                            <h3 className="font-semibold text-lg md:text-4xl text-[#002639] mb-3 md:mb-8">
                                Indutrial Programs for a Capa<span className="text-capabl_primary">bl</span> you!
                            </h3>
                            <p className="font-medium text-sm md:text-base text-[#002639]">
                                {`With Capabl. You get licence to (S)kill - skill in top domains all together. Specially designed for college students to make you `}
                                <span className="font-bold">the Bond</span>
                                {` of the Industry!`}
                            </p>
                        </div>
                        <div className="md:col-span-3 hidden w-full min-h-[13rem] relative md:block flex-grow overflow-hidden rounded-tr-3xl">
                            <img className="absolute object-cover w-full h-full rounded-bl-[9.5rem]" src="/images/raw_images/discussion.jpg" alt="discussion" />
                        </div>
                    </div>

                    <hr className="border-t-[0.05rem] border-t-[#d2d2d2] my-3 md:my-6" />
                </div>

                <div className="overflow-x-scroll scrollbar-hide w-full mt-6 md:mt-8 pb-8 md:pb-12 flex items-start justify-start lg:justify-between gap-4 px-4">
                    {data1.map((item, index) => (
                        <Card key={index} details={item} />
                    ))}
                </div>

                <div className="overflow-x-scroll scrollbar-hide w-full mt-6 pb-8 md:pb-12 flex items-start justify-start lg:justify-between gap-4 px-4">
                    {data2.map((item, index) => (
                        <Card key={index} details={item} />
                    ))}
                    <div className="bg-transparent w-full max-w-[250px] min-h-[380px] md:max-w-xs flex-shrink-0"></div>
                </div>

                <div className="px-4 mb-4 md:mt-20">
                    <div className="bg-[#14213D] rounded-xl px-6 md:px-10 py-8 md:py-12 relative md:flex md:items-center md:justify-between md:gap-7">
                        <div>
                            <p className="text-white font-medium text-2xl mb-4 md:mb-2 text-center md:text-left">Book a counseling session with Mentor.</p>
                            <p className="text-white font-light text-sm mb-8 md:mb-0 text-center md:text-left">{`Only thing you need to start is a will to do great. Everything else, we will take care of :)`}</p>
                        </div>

                        <button
                            onClick={() => setShowCtaForm(true)}
                            className="bg-capabl_primary rounded-lg px-4 py-3 text-black font-medium text-base whitespace-nowrap absolute md:relative bottom-0 left-1/2 md:left-auto md:bottom-auto transform -translate-x-1/2 md:translate-x-0 translate-y-1/2 md:translate-y-0"
                        >
                            Talk to Counselor
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Card({ details }) {
    return (
        <div id={details?.id} className="bg-white rounded-2xl p-4 w-full max-w-[250px] min-h-[380px] md:max-w-xs flex-shrink-0 group hover:shadow-lg">
            <div
                className={`w-full rounded-2xl h-[250px] group-hover:h-[200px] md:h-[250px] group-hover:md-h-[300px] bg-[#F6E372] mb-4 relative overflow-hidden transition-all duration-300`}
            >
                {!!details?.image && <img src={details?.image} alt={details.title} className="w-full h-full object-cover" />}
            </div>
            <div className="pr-6">
                <h4 className="font-medium text-sm md:text-xl mb-2 md:mb-3 text-black">{details.title}</h4>
                <div className="font-normal text-[10px] md:text-sm text-black mb-4 md:mb-6">
                    <p className="text-xs mb-4">{details.short_desc}</p>
                    <div className="flex items-start justify-start gap-5 font-semibold text-xs">
                        <p>
                            <span className="flex items-center justify-start gap-0.5">
                                {details.stat.rating} <AiFillStar className="text-capabl_primary" />
                            </span>
                            Rating
                        </p>
                        <p>
                            {details.stat.projects} <br />
                            Projects
                        </p>
                        <p>
                            {details.stat.companies} <br />
                            Companies hiring
                        </p>
                    </div>
                </div>

                <ol className="flex flex-col items-start gap-2 text-xs md:text-sm font-light list-disc pl-3 max-h-0 overflow-hidden group-hover:max-h-screen transition-all duration-300">
                    {details.points.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ol>

                <Link href="/">
                    <a className="mt-4 flex w-fit items-center font-medium justify-start gap-2 text-sm text-[#1F28CF] hover:transform hover:translate-x-2 transition duration-500">
                        Explore <HiArrowLongRight className="text-xl" />
                    </a>
                </Link>
            </div>
        </div>
    );
}
