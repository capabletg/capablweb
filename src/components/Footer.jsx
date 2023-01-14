import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="bg-[#14213D] text-white min-h-[200px] w-full px-6 pt-4 pb-4">
            <div className="max-w-7xl mx-auto mt-10 mb-8">
                {/* Capabl */}
                <div className="mb-8">
                    <h4 className="text-sm font-medium mb-2">Capabl</h4>
                    <p className="text-xs md:text-sm font-light text-[#bfbfbf]">
                        Capabl is the best engineering ecosystem that allows engineering students, companies, and colleges to collaborate on jobs, upskilling,
                        hands-on training online or offline, mentorship, research and networking to build future engineers.
                    </p>
                </div>

                {/* Capabl Ecosystem */}
                <div className="mb-8">
                    <h4 className="text-sm font-medium mb-2">Capabl Ecosystem</h4>
                    <p className="text-xs md:text-sm font-light text-[#bfbfbf]">
                        You can opt for one training program or join multiple to upskill yourself to be a multi-domain expert. Each program comes up with 1:1
                        personal support, live sessions both online and offline, offline events, hackathons, design competitions, internship/job opportunities,
                        peer connect, events, industry connect, industrial projects, resume making, interviews, and more! The ecosystem also enable
                        Industry-student and Industry-college connect.
                    </p>
                </div>

                {/* Cities */}
                <div className="mb-8">
                    <h4 className="text-sm font-medium mb-2">Cities</h4>
                    <p className="text-xs md:text-sm font-light text-[#bfbfbf]">
                        City wise presence (eg. learn data science in Bangalore, Chennai, Coimbatore, Mumbai, etc.)
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-x-4 gap-y-4 justify-items-start">
                    <div className="col-span-12 w-full sm:col-span-4 md:col-span-2 pt-6 flex flex-col items-start justify-start gap-1.5">
                        <h5 className="font-medium text-sm text-white mb-3">Job Oriented Programs</h5>
                        {[
                            { label: "Electric Vehicle", href: "/courses/electric-vehicle" },
                            { label: "Data Science", href: "/courses/data-science" },
                            { label: "Programming", href: "/" },
                            { label: "Mechatronics", href: "/courses/mechatronics" },
                            { label: "Design Engineering", href: "/" },
                        ]?.map(({ label, href }, index) => (
                            <Link key={index} href={href}>
                                <a className="font-light text-xs text-white text-opacity-75">{label}</a>
                            </Link>
                        ))}
                    </div>
                    <div className="col-span-12 w-full sm:col-span-4 md:col-span-2 pt-6 flex flex-col items-start justify-start gap-1.5">
                        <h5 className="font-medium text-sm text-white mb-3">Capabl</h5>
                        {[
                            { label: "About", href: "/" },
                            { label: "Careers", href: "/" },
                            { label: "Counselling", href: "/" },
                            { label: "Careers Transformed", href: "/" },
                            { label: "Colleges", href: "/" },
                            { label: "Club", href: "/" },
                            { label: "Community", href: "/" },
                            { label: "Read", href: "/" },
                            { label: "Free Courses", href: "/" },
                            { label: "Competitions", href: "/" },
                            { label: "Projects", href: "/" },
                        ]?.map(({ label, href }, index) => (
                            <Link key={index} href={href}>
                                <a className="font-light text-xs text-white text-opacity-75">{label}</a>
                            </Link>
                        ))}
                    </div>
                    <div className="col-span-12 w-full sm:col-span-4 md:col-span-2 pt-6 flex flex-col items-start justify-start gap-1.5">
                        <h5 className="font-medium text-sm text-white mb-3">Information</h5>
                        {[
                            { label: "FAQ", href: "/" },
                            { label: "Blog", href: "/" },
                            { label: "Support", href: "/" },
                            { label: "Capabl in Media", href: "/" },
                            { label: "Interview Corner", href: "/" },
                            { label: "Experts Talks", href: "/" },
                            { label: "Events", href: "/" },
                        ]?.map(({ label, href }, index) => (
                            <Link key={index} href={href}>
                                <a className="font-light text-xs text-white text-opacity-75">{label}</a>
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block col-span-1" />

                    <div className="col-span-12 mt-4 md:mt-0 w-full md:col-span-5 bg-white py-6 px-10 bg-opacity-10 max-w-sm mr-auto md:mr-0 h-fit pb-10 justify-self-end">
                        <h5 className="font-medium text-white text-sm mb-5">Subscribe to our newsletter</h5>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                            className="flex w-full rounded-md overflow-hidden bg-white mb-5 group"
                        >
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full py-2 lg:py-3 px-3 placeholder:font-normal placeholder:text-[#7A7E92] placeholder:text-[0.8rem] text-[0.8rem] font-normal text-black border-none outline-none ring-0 hover:ring-0 active:ring-0 focus:ring-0"
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center bg-capabl_primary outline-none border-none text-lg lg:text-xl flex-shrink-0 px-3.5 lg:px-5"
                            >
                                <HiArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                            </button>
                        </form>
                        <p className="font-light text-xs text-white text-opacity-60">
                            To get latest update about our courses and programs, please subscribe to our newsletter.
                        </p>
                    </div>
                </div>
                <hr className="mt-10 mb-8 border-white border-opacity-20" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row items-center justify-start gap-4">
                        {/* logo */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <img className="w-full max-w-[8rem] object-contain mr-4 flex-shrink-0" src="/logo_white.svg" alt="capabl logo" />
                            <p className="text-[0.6rem] font-light text-white text-opacity-70">Capabl from Elite Techno Groups</p>
                        </div>

                        {/* terms , privacy & policy */}
                        <div className="flex items-center justify-center md:justify-start flex-wrap gap-x-4 gap-y-2 my-3 md:my-0">
                            {[
                                { label: "Terms", href: "/" },
                                { label: "Privacy Policy", href: "/" },
                                { label: "Refund Policy", href: "/" },
                                { label: "Cookies", href: "/" },
                                { label: "Sitemap", href: "/" },
                            ]?.map(({ label, href }, index) => (
                                <Link key={index} href={href}>
                                    <a className="font-normal text-white text-sm">{label}</a>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center md:justify-end gap-4">
                        <p className="text-xs text-white text-opacity-50 order-2 text-center lg:text-left lg:order-1">{`copyright © 2023 Elite Techno Groups Pvt Ltd.`}</p>

                        <div className="flex items-center justify-center md:justify-end gap-4 order-1 lg:order-2">
                            {[
                                { icon: FaLinkedinIn, href: "#", name: "LinkedIn" },
                                { icon: FaFacebookF, href: "#", name: "Facebook" },
                                { icon: FaTwitter, href: "#", name: "Twitter" },
                            ].map(({ icon: Icon, href, name }, index) => (
                                <a
                                    key={index}
                                    className="w-10 h-10 rounded-full flex items-center justify-center p-3 border text-white border-white border-opacity-25 transition-all duration-300 hover:scale-95 hover:bg-white hover:bg-opacity-10"
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
