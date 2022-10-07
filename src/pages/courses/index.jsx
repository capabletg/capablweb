import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaMinus, FaPlay, FaPlus } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import CrackedSdtSlider from "../../components/courses/CrackedSdtSlider";
import Accordian from "../../components/courses/Accordian";

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

                {/* Take the journey now to be Capabl */}
                {/* TODO: */}
                <section className="hidden">
                    <h2>
                        Why wait, Take the journey now to be <span className="text-capabl_primary">Capabl</span>
                    </h2>

                    <div>
                        <svg width="1728" height="195" viewBox="0 0 1728 195" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M-178.503 192.577C145.293 48.6474 1015.57 -152.854 1906.33 192.577"
                                stroke="#E1E1E1"
                                strokeOpacity="0.5"
                                strokeWidth="3.59868"
                            />
                        </svg>
                    </div>
                </section>

                {/* Where you transform to an industry Capabl Engineer */}
                <section className="px-4 lg:px-6 mt-12 md:mt-16 lg:mt-20 max-w-7xl mx-auto">
                    <h2 className="text-center font-medium text-lg md:text-2xl mb-3 lg:mb-4">Where you transform to an Industry Capabl Engineer</h2>
                    <p className="text-center text-[#636363] text-xs md:text-sm max-w-xl mx-auto">
                        1 in 100 engineers qualify for IIT. Can anything be better? Yes, Stanford/MIT kind of ecosystem focused on projects and industrial
                        exposure.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 lg:mt-10">
                        <div className="col-span-1 lg:order-1">
                            <div className="w-full max-w-2xl mx-auto py-4 md:py-8">
                                <img className="w-full object-contain" src="/images/courses/analysing.jpg" alt="analysing" />
                            </div>
                        </div>

                        <div className="col-span-1">
                            <Accordian />
                        </div>
                    </div>
                </section>

                {/* how the scolarship system works */}
                <section className="max-w-7xl my-20 mx-auto px-4">
                    <div className="bg-transparent md:bg-[#F2F6F7] md:rounded-3xl p-0 md:p-6">
                        <div className="bg-transparent md:bg-white md:bg-opacity-30 md:rounded-3xl md:px-6 md:pt-10 md:pb-4">
                            <div className="hidden w-fit mx-auto mb-5 md:flex items-center justify-center gap-2 bg-capabl_primary bg-opacity-[0.15] rounded-3xl py-1 pl-3 pr-3">
                                <span className="w-3 h-3 rounded-full bg-capabl_primary flex-shrink-0" />
                                <span className="text-black text-sm font-light">The Scholarship Initiative</span>
                            </div>

                            <h3 className="hidden md:block text-center text-2xl font-medium mb-16 max-w-md mx-auto">How the Scholarship System Works</h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                                {[
                                    {
                                        label: "With",
                                        desc: `Govt Bodies, Education Organizations and Industries`,
                                    },
                                    {
                                        label: "To",
                                        desc: `Create a world-class engineering ecosystem`,
                                    },
                                    {
                                        label: "That",
                                        desc: `Results in creating skilled Engineers right after Graduation!`,
                                    },
                                    {
                                        label: "And",
                                        desc: `Make Parents proud by graudating with a job in 1/20th of expense on degree`,
                                    },
                                ].map(({ label, desc }, index) => (
                                    <div key={index} className="mb-6 group">
                                        <div className="relative flex items-center justify-center mb-4">
                                            <svg
                                                className="w-full object-contain max-w-[5rem] relative z-0"
                                                viewBox="0 0 93 101"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    className="origin-center transform rotate-0 transition duration-1000 group-hover:rotate-180"
                                                    d="M4.23815 36.2118C0.201637 12.4226 27.7173 -4.04108 47.3099 10.4404L81.7497 35.896C97.1077 47.2476 95.9616 70.28 79.5501 80.0997L52.2057 96.4609C35.7942 106.281 14.4977 96.6765 11.3335 78.0287L4.23815 36.2118Z"
                                                    fill="#FF696D"
                                                />
                                                <path
                                                    className="origin-center transform rotate-0 transition duration-1000 group-hover:-rotate-180"
                                                    opacity="0.5"
                                                    d="M16.7797 17.4171C25.1447 -5.51308 58.3807 -5.5357 68.8058 17.3816L87.131 57.6658C95.303 75.6301 82.6272 95.1883 62.8038 95.2019L29.7746 95.2244C9.95121 95.2379 -4.48135 75.6982 2.07575 57.7238L16.7797 17.4171Z"
                                                    fill="#CF2323"
                                                />
                                            </svg>

                                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white text-xl z-[2] mt-1">
                                                {label}
                                            </p>
                                        </div>
                                        <p className="text-center text-sm max-w-[13rem] mx-auto">{desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/*  */}
                            <div className="hidden w-fit mx-auto mt-16 mb-5 md:flex items-center justify-center gap-2 bg-capabl_primary bg-opacity-[0.15] rounded-3xl py-1 pl-3 pr-3">
                                <span className="w-3 h-3 rounded-full bg-capabl_primary flex-shrink-0" />
                                <span className="text-black text-sm font-light">Scholarship Breakdown</span>
                            </div>

                            <h3 className="hidden md:block text-center text-2xl font-medium mb-10 max-w-md mx-auto">{`ETG Contribution in Strengthening Future Engineers`}</h3>

                            <div className="overflow-x-scroll scrollbar-hide p-6 mt-8 md:mt-0">
                                <div
                                    style={{ boxShadow: "0px 8px 20px rgba(177, 194, 193, 0.2)" }}
                                    className="w-full min-w-[45rem] bg-white rounded-xl overflow-hidden"
                                >
                                    <table className="w-full">
                                        <thead>
                                            <tr className="relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-capabl_primary z-0 after:shadow-md after:rounded-xl">
                                                <th className="align-middle text-left text-sm md:text-base font-medium text-[#231F20] pl-6 pr-4 py-4 md:py-5 relative z-[1]">
                                                    Particulars
                                                </th>
                                                <th className="align-middle text-left text-sm md:text-base font-medium text-[#231F20] pl-6 pr-4 py-4 md:py-5 relative z-[1]">
                                                    ETG Investment
                                                </th>
                                                <th className="align-middle text-left text-sm md:text-base font-medium text-[#231F20] pl-6 pr-4 py-4 md:py-5 relative z-[1]">
                                                    Student Investment
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { particulars: `Technical Training`, etg: `1,30,000`, st_investment: `30,000` },
                                                { particulars: `Placement Training`, etg: `6,200`, st_investment: `0` },
                                                { particulars: `Software Access`, etg: `25,000`, st_investment: `0` },
                                                { particulars: `ETG - SAEINDIA, ARK-Ansys, Siemens, Altair Certification`, etg: `50,000`, st_investment: `0` },
                                                { particulars: `SAE Membership of 1 Year`, etg: `400`, st_investment: `0` },
                                                { particulars: `No Cost EMI Financing Benefits`, etg: `8,400`, st_investment: `0` },
                                            ].map(({ particulars, etg, st_investment }, index) => (
                                                <tr key={index}>
                                                    <td className="pl-6 pr-4 py-4 md:py-4 text-sm text-[#545d61] border-b-[0.05rem] border-b-[#e9e9e9]">
                                                        <p className="max-w-[18rem] md:max-w-xs flex items-start justify-start gap-2">
                                                            <span>{index + 1}.</span>
                                                            <span>{particulars}</span>
                                                        </p>
                                                    </td>
                                                    <td className="pl-6 pr-4 py-4 md:py-4 text-sm text-[#545d61] border-b-[0.05rem] border-b-[#e9e9e9]">
                                                        {etg}
                                                    </td>
                                                    <td className="pl-6 pr-4 py-4 md:py-4 text-sm text-[#545d61] border-b-[0.05rem] border-b-[#e9e9e9]">
                                                        {st_investment}
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td className="pl-6 pr-4 py-4 md:py-4 text-sm font-medium text-[#231f20]">Total Investment</td>
                                                <td className="pl-6 pr-4 py-4 md:py-4 text-sm font-medium text-[#231f20]">{`₹ 2,20,000`}</td>
                                                <td className="pl-6 pr-4 py-4 md:py-4 text-sm font-medium text-[#231f20]">{`₹ 30,000`}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className="bg-transparent text-[#231f20] relative z-[1] md:bg-white mt-10 md:mt-8 md:rounded-2xl p-0 md:px-10 md:pt-16 md:pb-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            <div
                                style={{ boxShadow: "0px 8px 20px rgba(177, 194, 193, 0.2)" }}
                                className="hidden md:block absolute z-0 top-0 left-0 w-full h-full rounded-2xl"
                            />

                            <svg
                                className="hidden xl:block absolute top-[-10%] left-[-4.5%] w-16 object-contain fill-capabl_primary"
                                viewBox="0 0 108 238"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M105.593 3.79062C63.0871 8.94795 29.3178 35.3969 17.1444 65.5382C1.99134 103.044 16.6213 142.818 41.0084 176.18C52.7232 192.206 66.7477 207.205 81.569 221.712C82.6224 208.124 86.6182 194.315 95.355 182.433C97.5159 179.503 102.938 182.081 101.22 185.001C93.5762 197.993 87.1858 210.697 84.6012 224.663C86.3597 226.364 88.1277 228.06 89.903 229.75C94.3697 234.007 86.7246 240.022 82.0062 236.274C81.334 237.002 80.1842 237.453 78.8421 237.109C67.1519 234.119 55.2206 231.43 43.1949 229.313C37.9717 228.396 32.6959 227.645 27.4216 226.895L27.4206 226.894C20.5111 225.911 13.6044 224.928 6.82275 223.574C2.21913 222.65 3.17217 217.393 7.93685 217.383C31.354 217.345 55.6996 223.848 76.8691 231.411C44.6689 200.512 14.6101 167.044 3.97832 128.078C-6.11475 91.0739 2.08577 50.6481 39.1026 23.236C56.7923 10.1319 80.0792 1.69368 104.909 0.00801261C107.768 -0.192662 108.466 3.43944 105.593 3.79062Z" />
                            </svg>

                            <div className="col-span-1 md:order-1 max-w-lg md:max-w-md mx-auto md:ml-auto md:mr-0">
                                <img className="w-full object-contain" src="/images/courses/school_boy.svg" alt="studying" />
                            </div>

                            <div className="col-span-1 md:pt-8 max-w-lg mx-auto">
                                <div className="mb-5 flex items-center justify-start gap-2">
                                    <span className="w-3 h-3 rounded-full bg-capabl_primary flex-shrink-0" />
                                    <span className="text-black text-base font-light">Process to get Scholarship</span>
                                </div>

                                <h3 className="text-xl md:text-3xl font-light text-[#14213D] mb-3 md:mb-4">
                                    Take <span className="font-semibold">Scholarship</span> Test
                                </h3>

                                <p className="text-sm text-[#808080] font-light mb-6 md:mb-7">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet asperiores provident in dolorum sequi! Recusandae
                                    veritatis labore debitis illum facilis ab? Illum minus quasi ratione incidunt eveniet ut sint aperiam!
                                </p>

                                <button className="rounded-lg px-10 md:px-12 py-3 bg-capabl_primary text-[#272727] text-center font-normal text-sm">
                                    Start Now
                                </button>
                            </div>

                            <div className="hidden col-span-2 md:order-2 md:flex items-center mt-10 pb-10 px-10">
                                <div className="relative flex-shrink-0 w-4 h-4 rounded-full bg-capabl_primary">
                                    <span className="absolute whitespace-nowrap top-[150%] left-1/2 transform -translate-x-1/2 text-xs lg:text-sm font-light text-[#14213d] text-center">
                                        Talk to Counsellor
                                    </span>
                                </div>
                                <span className="h-1 bg-capabl_primary w-full" />
                                <div className="relative flex-shrink-0 w-4 h-4 rounded-full bg-capabl_primary">
                                    <span className="absolute whitespace-nowrap top-[150%] left-1/2 transform -translate-x-1/2 text-xs lg:text-sm font-medium text-[#14213d] text-center">
                                        Take Scholarship Test
                                    </span>
                                </div>
                                <span className="h-1 bg-capabl_primary w-full" />
                                <div className="relative flex-shrink-0 w-4 h-4 rounded-full bg-capabl_primary">
                                    <span className="absolute whitespace-nowrap top-[150%] left-1/2 transform -translate-x-1/2 text-xs lg:text-sm font-light text-[#14213d] text-center">
                                        Crack the Interview
                                    </span>
                                </div>
                                <span className="h-1 bg-capabl_primary w-full" />
                                <div className="relative flex-shrink-0 w-4 h-4 rounded-full bg-capabl_primary">
                                    <span className="absolute whitespace-nowrap top-[150%] left-1/2 transform -translate-x-1/2 text-xs lg:text-sm font-light text-[#14213d] text-center">
                                        Get Admission
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
