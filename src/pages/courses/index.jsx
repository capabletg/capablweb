import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FiChevronRight, FiChevronUp } from "react-icons/fi";
import CrackedSdtSlider from "../../components/courses/CrackedSdtSlider";

export default function Courses() {
    return (
        <div>
            <Head>
                <title>Capabl</title>
                <meta name="description" content="Capable Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                {/* fixed */}
                <div className="bg-[#fbfbfb] fixed top-0 left-0 w-full z-20">
                    <div className="max-w-7xl mx-auto container flex items-center justify-end gap-2 px-4 md:py-2 font-normal text-[0.625rem] md:text-xs h-7 md:h-8">
                        <a href="tel:8998798798" target="_blank" rel="noreferrer" className="pr-2 border-r border-r-[#cdcdcd] text-black">
                            Call : 8998798798
                        </a>
                        <Link href="/login">
                            <a className="underline text-capabl_primary">Login</a>
                        </Link>
                    </div>
                </div>
                {/* spacer */}
                <div className="w-full h-7 md:h-8" />

                {/* fixed */}
                <div className="fixed top-7 md:top-8 left-0 w-full bg-white z-20">
                    <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 h-10 md:h-20">
                        <Link href="/">
                            <img src="/images/svgs/logo.svg" alt="capable logo" className="w-full max-w-[6rem] md:max-w-[8rem] object-contain cursor-pointer" />
                        </Link>

                        <div>
                            <button className="inline-block md:hidden">
                                <img src="/images/svgs/hamburger_icon.svg" alt="hamburger icon" />
                            </button>

                            {/* Nav Items */}
                            <div className="hidden md:flex items-center justify-end gap-4">
                                <Link href="/">
                                    <a className="font-medium text-sm text-black">Programs</a>
                                </Link>
                                <Link href="/">
                                    <a className="font-medium text-sm text-[#6F6F6F]">Careers Transformed</a>
                                </Link>
                                <Link href="/">
                                    <a className="font-medium text-sm text-[#6F6F6F]">Hire</a>
                                </Link>
                                <Link href="/">
                                    <a className="font-medium text-sm text-[#6F6F6F]">Others</a>
                                </Link>
                                <Link href="/">
                                    <a className="font-medium text-sm text-[#CF2323] rounded-lg py-2 px-4 bg-transparent border border-[#CF2323]">
                                        Join Our Tribe
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* spacer */}
                <div className="w-full h-10 md:h-20" />
            </header>

            <main className="min-h-screen w-full">
                {/* Hero Section */}
                <section id="hero" className="px-4 pt-6 md:pt-7 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 max-w-7xl mx-auto">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 w-full relative flex items-center justify-center md:order-1">
                        <img
                            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md md:max-w-2xl"
                            src="/images/raw_images/1_0_bg.jpg"
                            alt="1 0 bg"
                        />
                        <div className="w-full h-full max-h-80 max-w-xs md:max-w-md z-[1] relative overflow-hidden rounded-xl">
                            <img
                                className="w-full h-full object-cover"
                                src={`https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60`}
                                alt="video bg"
                            />
                        </div>
                        <button className="absolute z-[2] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#CF2323] flex items-center justify-center text-white text-sm w-10 h-10 rounded-full pl-0.5">
                            <FaPlay />
                        </button>
                    </div>

                    <div className="col-span-1 md:col-span-3 lg:col-span-1 mt-12 md:pb-12">
                        <h1
                            title="From 0 to Hero in Data Science Land kickass First Job in Core!"
                            className="relative text-lg md:text-3xl text-center md:text-left text-black font-medium mb-3 md:mb-2.5 max-w-md mx-auto md:max-w-lg md:mx-0 md:leading-[3rem]"
                        >
                            {`From`}
                            <span className="text-capabl_primary">{` 0 `}</span>
                            {`to`}
                            <span className="text-capabl_primary">{` Hero `}</span>
                            {`in `}
                            <span className="relative font-semibold after:w-full after:h-0.5 md:after:h-[0.1875rem] after:absolute after:bottom-0 after:left-0 after:bg-capabl_primary">
                                {`Data Science`}
                            </span>
                            {` Land kickass First Job in Core!`}

                            <svg
                                className="hidden fill-capabl_primary md:block absolute -top-[1.8rem] left-[5ch] object-contain w-20"
                                viewBox="0 0 104 43"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1.65812 37.6855C4.52668 22.6386 16.4196 11.0974 29.5704 7.31762C45.9344 2.61241 62.8183 8.55874 76.7951 17.8625C84.7566 23.1621 92.047 29.5919 99.0889 36.2698C100.9 37.9858 103.706 35.1796 101.878 33.4342C88.5658 20.7437 74.0836 8.5109 56.6718 3.78265C40.9097 -0.496352 23.3961 1.67821 11.0392 14.3585C5.13224 20.4181 1.14649 28.5578 0.0415886 37.3719C-0.0884609 38.3866 1.46312 38.7022 1.65812 37.6855Z" />
                                <path d="M102.423 32.4658C101.316 28.2461 100.342 23.9461 99.6149 19.6231C98.8888 15.2856 98.5469 10.8643 97.7027 6.56012C97.3761 4.90311 95.1 5.1455 95.0228 6.84265C94.6228 15.7541 97.4175 25.181 100.609 33.2168C101.055 34.3233 102.731 33.6382 102.423 32.4658Z" />
                                <path d="M98.9279 33.1836C92.0995 32.9095 84.8485 33.9203 78.6529 37.3377C77.3596 38.0534 78.3858 40.0327 79.668 39.4746C85.9687 36.7323 92.0949 34.5282 98.8917 34.1255C99.4248 34.0957 99.4846 33.2075 98.9279 33.1836Z" />
                            </svg>
                        </h1>

                        <p className="text-[#636363] text-sm text-center md:text-left">{`Graduate not just with a degree but with a job!`}</p>

                        <div className="flex items-center justify-center md:justify-start gap-2 mt-6">
                            <button className="font-medium text-center py-2 px-3 border border-transparent rounded-lg text-sm text-[#272727] bg-capabl_primary">
                                Talk to Counselor
                            </button>
                        </div>

                        <div className="hidden max-w-lg relative z-[2] rounded-lg p-6 light_shadow shadow-none bg-white md:bg-[#f2f4f7] md:flex items-start justify-between gap-4 md:gap-6 mt-5 md:mt-10">
                            <p className="flex flex-col justify-start items-start gap-1">
                                <span className="text-[#371B69] font-semibold text-lg">10,000+</span>
                                <span className="text-black text-xs text-left">Students</span>
                            </p>
                            <p className="flex flex-col items-start justify-start gap-1">
                                <span className="text-[#371B69] font-semibold text-lg flex gap-1 items-center">
                                    4.7 <IoStar className="text-[#FCA600] mb-0.5" />
                                </span>
                                <span className="text-black text-xs text-left">Rating</span>
                            </p>
                            <p className="flex flex-col items-start justify-start gap-1">
                                <span className="text-[#371B69] font-semibold text-lg">100cr+</span>
                                <span className="text-black text-xs text-left">Sponsorship</span>
                            </p>
                            <p className="flex flex-col items-start justify-start gap-1">
                                <span className="text-[#371B69] font-semibold text-lg">42+</span>
                                <span className="text-black text-xs text-left">Projects</span>
                            </p>
                            <p className="flex flex-col items-start justify-start gap-1">
                                <span className="text-[#371B69] font-semibold text-lg">6</span>
                                <span className="text-black text-xs text-left">Months</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Students Cracked Data Science Jobs! */}
                <section className="max-w-7xl mx-auto mt-16 md:mt-20 pl-0 md:pl-4">
                    <div className="p-4 md:py-10 md:pl-10 md:rounded-tl-2xl md:rounded-bl-2xl bg-[#14213D] grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-20">
                        <div className="col-span-1 md:col-span-2 text-white pt-8 md:pt-0 flex flex-col justify-start md:justify-center max-w-lg">
                            <h2 className="font-semibold text-lg md:text-xl mb-3 md:mb-5">{`Those who cracked Data Science Jobs!`}</h2>
                            <p className="text-sm mb-3 md:mb-6 font-light">
                                {`Thanks to Capabl, I changed my career path from Business Intelligence Executive to Senior Analyst with a 30% hike in my salary.`}
                            </p>
                            <button className="flex items-center justify-start gap-1 text-sm font-normal group">
                                <span className="underline">Connect Now</span>
                                <span className="transform rotate-90">
                                    <FiChevronUp className="text-lg text-capabl_primary group-hover:animate-bounce" />
                                </span>
                            </button>
                        </div>

                        <div className="col-span-1 md:col-span-5">
                            <CrackedSdtSlider />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
