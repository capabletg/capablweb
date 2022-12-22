import Head from "next/head";
import Link from "next/link";
import ExposureAccordian from "../components/homePage/ExposureAccordian";
import { studentTestimonials } from "../utils/data/homePage/student_testimonials";
import { presentColleges } from "../utils/data/homePage/present_colleges";
import FaculyTestimonials from "../components/homePage/FaculyTestimonials";
import { features } from "../utils/data/homePage/features";
import Footer from "../components/Footer";
import IndustrialPrograms from "../components/homePage/IndustrialPrograms";
import Services from "../components/homePage/Services";
import { FaPlay } from "react-icons/fa";
import CtaForm from "../components/CtaForm";
import { useState } from "react";

export default function Home() {
    const [showCtaForm, setShowCtaForm] = useState(false);

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
                    <div className="max-w-7xl mx-auto container flex items-center justify-end gap-2 px-4 md:py-2 font-medium text-[10px] md:text-sm h-7 md:h-8">
                        <a href="tel:8998798798" target="_blank" rel="noreferrer" className="pr-2 border-r border-r-[#cdcdcd] text-black">
                            Call : 8998798798
                        </a>
                        <Link href="/login">
                            <a className="underline text-capabl_primary">Login</a>
                        </Link>
                    </div>
                </div>

                {/* fixed */}
                <div className="fixed top-7 md:top-8 left-0 w-full bg-white md:light_shadow z-20">
                    <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 h-10 md:h-20">
                        <Link href="/">
                            <img
                                src="/images/svgs/logo.svg"
                                alt="capable logo"
                                className="w-full max-w-[6.25rem] md:max-w-[10rem] object-contain cursor-pointer"
                            />
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
                                    <a className="font-medium text-sm text-black">Careers Transformed</a>
                                </Link>
                                <Link href="/">
                                    <a className="font-medium text-sm text-black">Hire</a>
                                </Link>
                                <Link href="/">
                                    <a className="font-medium text-sm text-black">Others</a>
                                </Link>

                                <button
                                    onClick={() => setShowCtaForm(true)}
                                    style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
                                    className="font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary"
                                >
                                    Join Our Tribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* spacer */}
                <div className="w-full h-7 md:h-8" />
                <div className="w-full h-10 md:h-20" />
            </header>

            <main className="min-h-screen w-full">
                {/* Hero Section */}
                <section
                    id="hero"
                    className="flex flex-col md:flex-row md:gap-14 items-center md:items-start md:justify-between my-10 md:mt-24 px-4 container mx-auto max-w-7xl w-full"
                >
                    {/* Hero Image */}
                    <div className="relative md:order-2 flex-shrink-0 pt-5 md:pt-0">
                        <div className="z-[2] relative bg-capabl_primary rounded-md mb-6 w-[14rem] md:w-[22.5rem] h-[17.5rem] md:h-[28rem] p-4 transform translate-x-[7.5%] md:translate-x-0">
                            <p className="text-xs md:text-lg text-black font-normal">
                                {`Check out why we are Rated 4.8 & voted best for engineering students.`}
                            </p>

                            <button className="absolute w-4/5 h-4/5 top-1/4 -left-[15%] overflow-hidden rounded-md flex items-center justify-center group">
                                <img className="absolute w-full h-full object-cover" src="/images/raw_images/hero_girl.jpg" alt="hero girl capabl" />
                                <img className="object-contain w-10 z-[2]" src="/images/svgs/play.svg" alt="play button" />
                            </button>

                            <img className="absolute bottom-[47%] right-[10%] object-contain w-[16%]" src="/images/svgs/aws_icon.svg" alt="aws icon" />
                            <img className="absolute bottom-[30%] right-[10%] object-contain w-[16%]" src="/images/svgs/azure_icon.svg" alt="azure icon" />
                            <img className="absolute bottom-[13%] right-[10%] object-contain w-[16%]" src="/images/svgs/gcp_icon.svg" alt="gcp icon" />
                        </div>
                        <img
                            className="hidden md:block absolute z-[1] -top-[6rem] right-[2rem] w-full max-w-[11rem]"
                            src="/images/svgs/gray_dots.svg"
                            alt="gray dot"
                        />
                    </div>

                    {/* Hero Content */}
                    <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left max-w-3xl">
                        <h1 className="text-black font-semibold text-center md:text-left text-base md:text-4xl mt-5">
                            Where Engineering Students become Industry Capabl
                        </h1>
                        <p className="text-[#636363] text-center md:text-left text-xs md:text-lg mt-4 md:mt-6">
                            {`Get personalized mentoring, skills, projects & jobs!`}
                            <br />
                            {`Because Degree/Courses aren't enough`}
                            {/* <span className="text-capabl_primary">{`'Bond'`}</span> in Engineering */}
                        </p>
                        <div className="mt-4 md:mt-10 flex items-center gap-3">
                            <button
                                onClick={() => setShowCtaForm(true)}
                                className="text-[#272727] font-medium border border-capabl_primary bg-capabl_primary rounded-md px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-base"
                            >
                                Talk to Counselor
                            </button>

                            <Link href="/">
                                <a className="text-[#ff696d] font-medium bg-transparent border border-[#ff696d] rounded-md px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-base">
                                    Explore Programs
                                </a>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="rounded-lg relative z-[2] md:rounded-2xl py-5 md:py-8 px-4 md:px-8 light_shadow md:shadow-none bg-white md:bg-[#f2f4f7] flex items-start justify-between gap-4 md:gap-6 mt-5 md:mt-10">
                                <p className="flex flex-col items-center justify-start md:items-start gap-1">
                                    <span className="text-[#371B69] font-semibold text-xs md:text-xl md:bold">1.5 lakh+</span>
                                    <span className="text-[#898989] md:text-black text-[9px] md:text-sm text-center md:text-left">Careers Transformed</span>
                                </p>
                                {/* <p className="flex flex-col items-center justify-start md:items-start gap-1">
                                    <span className="text-[#371B69] font-semibold text-xs md:text-xl md:bold flex gap-0.5 items-center">
                                        4.6 <img src="/images/svgs/star_orange.svg" alt="star" className="w-full object-contain max-w-[1rem]" />
                                    </span>
                                    <span className="text-[#898989] md:text-black text-[9px] md:text-sm text-center md:text-left">Rating</span>
                                </p> */}
                                <p className="flex flex-col items-center justify-start md:items-start gap-1">
                                    <span className="text-[#371B69] font-semibold text-xs md:text-xl md:bold">120+</span>
                                    <span className="text-[#898989] md:text-black text-[9px] md:text-sm text-center md:text-left">Industry Experts</span>
                                </p>
                                <p className="flex flex-col items-center justify-start md:items-start gap-1">
                                    <span className="text-[#371B69] font-semibold text-xs md:text-xl md:bold">93%+</span>
                                    <span className="text-[#898989] md:text-black text-[9px] md:text-sm text-center md:text-left">Placement Rate</span>
                                </p>
                                <p className="flex flex-col items-center justify-start md:items-start gap-1">
                                    <span className="text-[#371B69] font-semibold text-xs md:text-xl md:bold">800+</span>
                                    <span className="text-[#898989] md:text-black text-[9px] md:text-sm text-center md:text-left">{`Colleges' Students`}</span>
                                </p>
                            </div>
                            <img
                                className="hidden md:block absolute z-[1] top-1/2 -left-[4rem] w-full max-w-[11rem]"
                                src="/images/svgs/gray_dots.svg"
                                alt="gray dot"
                            />
                        </div>
                    </div>
                </section>

                <Link href="/#student_testimonials">
                    <a className="hidden mx-auto rounded-full w-16 h-16 md:flex items-center justify-center bg-capabl_primary p-5">
                        <img className="w-full object-contain pt-1" src="/images/svgs/chevron_down.svg" alt="chevron" />
                    </a>
                </Link>

                {/* Student Testimonials */}
                <section id="student_testimonials" className="py-4 md:py-20 container mx-auto max-w-7xl">
                    <div className="overflow-x-scroll scrollbar-hide mx-auto flex items-center justify-start md:justify-center px-4 box-content">
                        {!!studentTestimonials?.length &&
                            studentTestimonials.map((item, index) => (
                                <div key={index} className="flex-shrink-0">
                                    <div className={`${index % 2 === 0 ? "bg-[#F8F7FF]" : "bg-[#FFFEFD]"} w-full max-w-xs h-[600px] mx-auto relative p-6`}>
                                        <h2 className="text-left font-semibold text-xl mb-4">{item?.title}</h2>
                                        <p className="text-left font-medium text-xs mb-4">{item?.description}</p>
                                        <p className="font-semibold text-base">{item?.name}</p>
                                        <img
                                            style={{ transform: `rotate(-${60 * (index % 4)}deg)` }}
                                            className="absolute w-3/4 bottom-[11%] left-[12.5%] origin-center"
                                            src="/images/svgs/slider_bg_illustration.svg"
                                            alt="illustration"
                                        />
                                        <img
                                            className="h-1/2 absolute bottom-0 left-1/2 transform -translate-x-1/2 object-contain"
                                            src={item?.image}
                                            alt={item?.title}
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>

                {/* Associations */}
                <section id="associations" className="mt-8 container mx-auto max-w-7xl px-4 pt-4 md:pt-16">
                    <h2 className="text-center font-normal text-lg md:text-5xl mb-4 md:mb-24">
                        {`You're in a`} <br /> <span className="text-capabl_primary font-semibold">Capabl Company</span>
                    </h2>

                    <div>
                        <div className="relative">
                            <img className="w-2/3 md:w-1/2 object-contain -mb-2 mx-auto z-0 relative" src="/images/raw_images/won.jpg" alt="won" />

                            <div className="hidden md:block">
                                <h3 className="font-medium text-base absolute -top-[13%] left-[15%]">Accreditions, Accolades</h3>
                                <img className="w-full max-w-[3rem] absolute top-[0%] left-[15%]" src="/images/raw_images/iso_logo_square.jpg" alt="iso" />
                                <img className="w-full max-w-[8rem] absolute top-[18%] left-[6%]" src="/images/raw_images/nasscom_logo.jpg" alt="nasscom" />
                                <img className="w-full max-w-[8rem] absolute top-[36%] left-[15%]" src="/images/raw_images/uincept_logo.jpg" alt="uincept" />
                                <img className="w-full max-w-[3rem] absolute top-[54%] left-[24%]" src="/images/raw_images/iso_logo_square.jpg" alt="iso" />
                                <img className="w-full max-w-[8rem] absolute top-[72%] left-[10%]" src="/images/raw_images/nasscom_logo.jpg" alt="nasscom" />
                                {/*  */}
                                <h3 className="font-medium text-base absolute -top-[13%] right-[20%]">Industry Connect</h3>
                                <img className="w-full max-w-[8rem] absolute top-[5%] right-[16%]" src="/images/raw_images/saeindia_logo.jpg" alt="saeindia" />
                                <img className="w-full max-w-[8rem] absolute top-[26%] right-[11%]" src="/images/raw_images/siemens_logo.jpg" alt="siemens" />
                                <img className="w-full max-w-[8rem] absolute top-[48%] right-[17%]" src="/images/raw_images/altair_logo.jpg" alt="altair" />
                                <img className="w-full max-w-[8rem] absolute top-[70%] right-[9%]" src="/images/raw_images/ansys_logo.jpg" alt="ansys" />
                            </div>
                        </div>
                        <div className="z-[1] relative bg-white border-2 border-capabl_primary rounded-lg p-4 md:p-7 grid grid-cols-5 gap-3 md:gap-6">
                            <p className="text-left font-medium text-xs md:text-lg col-span-2 md:col-span-1 align-middle flex items-center">
                                Courses Designed by Experts from
                            </p>
                            <div className="col-span-3 md:col-span-4 grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
                                <div className="w-full max-w-[2rem] md:max-w-[3.7rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/tesla_logo.jpg" alt="tesla" />
                                </div>
                                <div className="w-full max-w-[2rem] md:max-w-[3.7rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/tata_logo.jpg" alt="tata" />
                                </div>
                                <div className="w-full max-w-[2rem] md:max-w-[3.7rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/kn_logo.jpg" alt="kn" />
                                </div>
                                <div className="w-full max-w-[2rem] md:max-w-[3.7rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/ather_logo.jpg" alt="ather" />
                                </div>
                                <div className="w-full max-w-[2rem] md:max-w-[3.7rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/amazon_logo.jpg" alt="amazon" />
                                </div>
                                <div className="w-full max-w-[2rem] md:max-w-[3.7rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/benz_logo.jpg" alt="benz" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="visible md:hidden">
                        <div className="flex flex-col items-center gap-3 my-6">
                            <h3 className="font-medium text-sm">Accreditions, Accolades</h3>
                            <div className="flex items-center justify-center gap-4 w-full">
                                <div className="w-full max-w-[5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/iso_logo.jpg" alt="iso" />
                                </div>
                                <div className="w-full max-w-[5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/nasscom_logo.jpg" alt="nasscom" />
                                </div>
                                <div className="w-full max-w-[5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/uincept_logo.jpg" alt="uincept" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 my-8">
                            <h3 className="font-medium text-sm">Industry Connect</h3>
                            <div className="flex items-center justify-center gap-4 w-full">
                                <div className="w-full max-w-[5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/saeindia_logo.jpg" alt="saeindia" />
                                </div>
                                <div className="w-full max-w-[5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/siemens_logo.jpg" alt="siemens" />
                                </div>
                                <div className="w-full max-w-[5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/altair_logo.jpg" alt="altair" />
                                </div>
                                <div className="w-full max-w-[5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/ansys_logo.jpg" alt="ansys" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Exposure */}
                <section id="exposure" className="p-4 pt-0 md:pt-8">
                    <div className="bg-[#F2F4F7] rounded-3xl max-w-screen-2xl mx-auto px-4">
                        <div className="max-w-6xl mx-auto pb-4 pt-8 md:pt-16 md:pb-6 grid grid-cols-2 md:flex md:items-center gap-4 md:gap-10 justify-content-center md:justify-center">
                            <div className="p-4 flex items-center justify-center max-w-[13rem] md:max-w-[17.5rem]">
                                <img src="/images/svgs/focus_man.svg" alt="focus man" />
                            </div>
                            <div className="block md:flex md:items-start md:gap-10">
                                <div className="relative mb-4 flex-shrink-0">
                                    <h3 className="font-semibold text-base md:text-4xl md:leading-[3rem] whitespace-nowrap">
                                        A Stanford/IIT
                                        <br />
                                        Ecosystem!
                                    </h3>
                                    <img
                                        className="absolute top-[2rem] md:top-[4rem] left-[4rem] md:left-[9rem] max-w-[3rem] md:max-w-[7rem] w-full"
                                        src="/images/svgs/arrow_curved.svg"
                                        alt="curved arrow"
                                    />
                                </div>
                                <p className="text-[#636363] font-medium text-[9px] md:text-base max-w-xs">
                                    {`We're proud to be the `}
                                    <span className="text-capabl_primary">only</span>
                                    {` platform who understands students like no one else :) An ecosystem that gives you an IIT/
                                    MIT/Stanford like exposure in your college`}
                                </p>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <hr />
                            <div className="max-w-6xl mx-auto flex items-start justify-between gap-10 py-20">
                                <ExposureAccordian />
                                <div>
                                    <img src="/images/raw_images/teaching.png" alt="teaching" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Services />

                <IndustrialPrograms setShowCtaForm={setShowCtaForm} />

                {/* Features */}
                <section id="features" className="bg-[#F2F4F7] w-full rounded-3xl max-w-screen-2xl mx-auto px-2 py-10 pb-28 md:py-16 mb-40">
                    <div className="mb-10 md:mb-12 max-w-md md:max-w-3xl mx-auto px-4">
                        <h2 className="text-center text-black font-semibold text-xl sm:text-3xl md:font-medium mb-4 md:mb-6">
                            {`See why we are the best Engineering Ecosystem!`}
                        </h2>
                        <p className="text-center font-normal text-[#636363] text-xs sm:text-sm">
                            {`Don't believe us? Prove us wrong and you can take the programs for free. We care for you and your parents hard earned money. Hence, we are giving you our best - the best engineering ecosystem for you!`}
                        </p>
                    </div>

                    <div className="rounded-md flex items-start max-w-5xl mx-auto relative">
                        <div className="w-[55%] sm:w-[50%] md:w-full md:max-w-md flex-shrink-0">
                            {["", ...features].map(({ feature }, index) => (
                                <p
                                    key={index}
                                    className={`${
                                        index % 2 === 0 ? "bg-[#FCFDFD]" : "bg-white"
                                    } flex items-center justify-start px-3 md:pl-8 md:pr-4 py-1 h-16 font-medium text-xs md:text-base text-[#636363]`}
                                >
                                    {feature}
                                </p>
                            ))}
                        </div>

                        <div
                            style={{ boxShadow: "0px 4px 21px rgba(255, 175, 0, 0.5)" }}
                            className="bg-capabl_primary rounded-lg w-20 md:w-auto flex-shrink-0 pb-2 block md:hidden absolute top-0 left-[55%] sm:left-1/2"
                        >
                            <p className="h-16 flex items-center justify-center font-semibold text-[10px] md:text-sm px-4 text-balck md:px-4">Capabl</p>
                            {features.map(({ capable }, index) => (
                                <p key={index} className={`h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-[#F2F4F6] bg-opacity-10" : ""}`}>
                                    {!!capable ? (
                                        <img src="/images/svgs/white_tick.svg" className="w-full max-w-[21px] object-contain" alt="white tick" />
                                    ) : (
                                        <></>
                                    )}
                                </p>
                            ))}
                            <div className="mt-2 md:mt-4 flex items-center justify-center px-2">
                                <button
                                    onClick={() => setShowCtaForm(true)}
                                    className="bg-white w-full py-3 px-2 font-medium rounded-lg text-[10px] md:text-sm text-center text-black"
                                >
                                    Join Our Tribe
                                </button>
                            </div>
                        </div>

                        <div className="w-[45%] sm:w-[50%] md:w-auto flex-shrink-0 md:flex-shrink md:flex-grow overflow-x-scroll scrollbar-hide">
                            <div className="flex items-start justify-start md:grid md:grid-cols-4">
                                <div className="bg-white rounded-b-lg hidden md:block">
                                    <div
                                        style={{ boxShadow: "0px 4px 21px rgba(255, 175, 0, 0.5)" }}
                                        className="bg-capabl_primary rounded-lg w-auto flex-shrink-0 pb-2"
                                    >
                                        <p className="h-16 flex items-center justify-center font-semibold text-sm px-4 text-balck">Capabl</p>
                                        {features.map(({ capable }, index) => (
                                            <p
                                                key={index}
                                                className={`h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-[#F2F4F6] bg-opacity-10" : ""}`}
                                            >
                                                {!!capable ? (
                                                    <img src="/images/svgs/white_tick.svg" className="w-full max-w-[21px] object-contain" alt="white tick" />
                                                ) : (
                                                    <></>
                                                )}
                                            </p>
                                        ))}
                                        <div className="mt-4 flex items-center justify-center px-2">
                                            <button
                                                onClick={() => setShowCtaForm(true)}
                                                className="bg-white w-full py-3 px-2 font-medium rounded-lg text-sm text-center text-black"
                                            >
                                                Join Our Tribe
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white w-20 md:hidden flex-shrink-0" />

                                <div className="bg-white w-20 md:w-auto flex-shrink-0">
                                    <p className="h-16 flex items-center justify-center text-center text-[#565656] font-medium text-[10px] md:text-sm px-4">
                                        Coursera
                                    </p>
                                    {features.map(({ coursera }, index) => (
                                        <p key={index} className={`h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-white" : "bg-[#FCFDFD]"}`}>
                                            {!!coursera ? (
                                                <img src="/images/svgs/orange_tick.svg" className="w-full max-w-[21px] object-contain" alt="orange tick" />
                                            ) : (
                                                <></>
                                            )}
                                        </p>
                                    ))}
                                </div>

                                <div className="bg-white w-20 md:w-auto flex-shrink-0">
                                    <p className="h-16 flex items-center justify-center text-center text-[#565656] font-medium text-[10px] md:text-sm md:whitespace-nowrap px-4">
                                        YouTube / Udemy
                                    </p>
                                    {features.map(({ yt_udemy }, index) => (
                                        <p key={index} className={`h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-white" : "bg-[#FCFDFD]"}`}>
                                            {!!yt_udemy ? (
                                                <img src="/images/svgs/orange_tick.svg" className="w-full max-w-[21px] object-contain" alt="orange tick" />
                                            ) : (
                                                <></>
                                            )}
                                        </p>
                                    ))}
                                </div>

                                <div className="bg-white w-20 md:w-auto flex-shrink-0">
                                    <p className="h-16 flex items-center justify-center text-center text-[#565656] font-medium text-[10px] md:text-sm px-4">
                                        Offline
                                    </p>
                                    {features.map(({ offline }, index) => (
                                        <p key={index} className={`h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-white" : "bg-[#FCFDFD]"}`}>
                                            {!!offline ? (
                                                <img src="/images/svgs/orange_tick.svg" className="w-full max-w-[21px] object-contain" alt="orange tick" />
                                            ) : (
                                                <></>
                                            )}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-24">
                    <h2 className="text-center font-medium text-lg md:text-2xl mb-3 md:mb-4 text-black">{`Hear from our Students`}</h2>
                    <p className="text-xs md:text-sm max-w-md md:max-w-2xl mx-auto text-center font-normal text-[#6c6c6c]">{`Success isn't really that difficult. Right mentoring, active peers, good opportunities & most importantly, industrial skills to back your interests can help achieve impossible`}</p>

                    <div className="relative z-0 mt-10 sm:mt-12 md:mt-16 lg:mt-[4.5rem]">
                        {/* Top illustration */}
                        <svg
                            className="absolute hidden md:block z-0 top-0 left-0 transform translate-y-[-45%] w-full object-contain"
                            viewBox="0 0 1365 437"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path opacity="0.4" d="M1126.34 355.482L1235.75 112.58H1347.89" stroke="#89C5CC" strokeWidth="2.83266" />
                            <path
                                d="M1363.83 111.554C1363.83 116.206 1360.06 119.977 1355.41 119.977C1350.77 119.977 1347 116.206 1347 111.554C1347 106.902 1350.77 103.131 1355.41 103.131C1360.06 103.131 1363.83 106.902 1363.83 111.554Z"
                                fill="#89C5CC"
                                stroke="white"
                                strokeWidth="0.94422"
                            />
                            <path opacity="0.4" d="M323.367 366.366L174.693 15.0859H22.3017" stroke="#89C5CC" strokeWidth="2.83266" />
                            <path
                                d="M0.472691 13.6016C0.472691 20.4737 5.69715 25.9932 12.0804 25.9932C18.4636 25.9932 23.688 20.4737 23.688 13.6016C23.688 6.72944 18.4636 1.2099 12.0804 1.2099C5.69715 1.2099 0.472691 6.72944 0.472691 13.6016Z"
                                fill="#89C5CC"
                                stroke="white"
                                strokeWidth="0.94422"
                            />
                            <path opacity="0.4" d="M442.034 435.633L293.36 84.353H140.969" stroke="#89C5CC" strokeWidth="2.83266" />
                            <path
                                d="M119.139 82.8687C119.139 89.7408 124.363 95.2603 130.746 95.2603C137.13 95.2603 142.354 89.7408 142.354 82.8687C142.354 75.9965 137.13 70.477 130.746 70.477C124.363 70.477 119.139 75.9965 119.139 82.8687Z"
                                fill="#89C5CC"
                                stroke="white"
                                strokeWidth="0.94422"
                            />
                        </svg>

                        {/* Bottom illustration */}
                        <svg
                            className="absolute hidden md:block z-0 top-0 bottom-0 transform translate-y-[100%] w-full object-contain"
                            viewBox="0 0 1376 436"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path opacity="0.4" d="M344.589 30.7912L186.367 382.071L24.1889 382.071" stroke="#89C5CC" strokeWidth="2.83266" />
                            <path
                                d="M0.92702 383.556C0.927021 376.712 6.47156 371.164 13.3105 371.164C20.1494 371.164 25.6939 376.712 25.6939 383.556C25.6939 390.4 20.1494 395.947 13.3105 395.947C6.47156 395.947 0.92702 390.4 0.92702 383.556Z"
                                fill="#89C5CC"
                                stroke="white"
                                strokeWidth="0.94422"
                            />
                            <path opacity="0.4" d="M371.914 81.2568L262.507 324.158L150.365 324.158" stroke="#89C5CC" strokeWidth="2.83266" />
                            <path
                                d="M134.426 325.185C134.426 320.532 138.195 316.762 142.843 316.762C147.492 316.762 151.26 320.532 151.26 325.185C151.26 329.837 147.492 333.607 142.843 333.607C138.195 333.607 134.426 329.837 134.426 325.185Z"
                                fill="#89C5CC"
                                stroke="white"
                                strokeWidth="0.94422"
                            />
                            <path opacity="0.4" d="M1052.63 70.3717L1201.31 421.652L1353.7 421.652" stroke="#89C5CC" strokeWidth="2.83266" />
                            <path
                                d="M1375.53 423.136C1375.53 416.264 1370.3 410.745 1363.92 410.745C1357.54 410.745 1352.31 416.264 1352.31 423.136C1352.31 430.008 1357.54 435.528 1363.92 435.528C1370.3 435.528 1375.53 430.008 1375.53 423.136Z"
                                fill="#89C5CC"
                                stroke="white"
                                strokeWidth="0.94422"
                            />
                            <path opacity="0.4" d="M933.965 1.10514L1082.64 352.385L1235.03 352.385" stroke="#89C5CC" strokeWidth="2.83266" />
                            <path
                                d="M1256.86 353.87C1256.86 346.997 1251.63 341.478 1245.25 341.478C1238.87 341.478 1233.64 346.997 1233.64 353.87C1233.64 360.742 1238.87 366.261 1245.25 366.261C1251.63 366.261 1256.86 360.742 1256.86 353.87Z"
                                fill="#89C5CC"
                                stroke="white"
                                strokeWidth="0.94422"
                            />
                        </svg>

                        <div className="rounded-2xl md:rounded-3xl overflow-hidden relative z-[1] grid grid-cols-1 md:grid-cols-2">
                            {/* set 1 */}
                            <div className="grid grid-cols-2 md:order-1">
                                <div className="w-full h-full overflow-hidden relative group cursor-pointer">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
                                        src="/images/courses/testimonial_1.jpg"
                                        alt="testimonial"
                                    />

                                    {/* fader */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-[#12A5EE] bg-opacity-20" />

                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 flex items-center justify-center">
                                        <span className="text-xs sm:text-sm md:text-base ml-0.5 text-black">
                                            <FaPlay />
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-[#12A5EE] text-white flex flex-col items-center justify-center gap-4 md:gap-5 px-4 md:px-6 py-10">
                                    <svg className="w-5 md:w-8 object-contain fill-white" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M33.082 16.5374C33.082 17.5615 32.8862 18.5254 32.4946 19.4291C32.1331 20.3026 31.6211 21.0858 30.9584 21.7786C30.2957 22.4412 29.5126 22.9684 28.6089 23.3599C27.7354 23.7515 26.7866 23.9473 25.7624 23.9473C24.4672 23.9473 23.3226 23.6612 22.3286 23.0889C21.3647 22.5165 20.5363 21.7786 19.8435 20.8749C19.1809 19.9411 18.6688 18.8869 18.3073 17.7121C17.976 16.5073 17.8103 15.2874 17.8103 14.0524C17.8103 12.6969 17.9911 11.3565 18.3525 10.0311C18.714 8.70579 19.226 7.4708 19.8887 6.32618C20.5815 5.18156 21.4249 4.14237 22.4189 3.2086C23.4129 2.27483 24.5274 1.50673 25.7624 0.904297L29.7385 3.02787C28.9553 3.81103 28.2776 4.71468 27.7053 5.73881C27.1631 6.76295 26.892 7.83226 26.892 8.94676V9.3534C27.7655 9.50401 28.5788 9.79017 29.3318 10.2119C30.0849 10.6336 30.7325 11.1607 31.2747 11.7933C31.847 12.4258 32.2837 13.1487 32.585 13.962C32.9163 14.7753 33.082 15.6338 33.082 16.5374ZM15.506 16.5374C15.506 17.5615 15.3102 18.5254 14.9187 19.4291C14.5572 20.3026 14.0451 21.0858 13.3825 21.7786C12.7198 22.4412 11.9366 22.9684 11.033 23.3599C10.1594 23.7515 9.21061 23.9473 8.18648 23.9473C6.89125 23.9473 5.74663 23.6612 4.75261 23.0889C3.78872 22.5165 2.96038 21.7786 2.26758 20.8749C1.60491 19.9411 1.09284 18.8869 0.731381 17.7121C0.400044 16.5073 0.234375 15.2874 0.234375 14.0524C0.234375 12.6969 0.415105 11.3565 0.776564 10.0311C1.13802 8.70579 1.65009 7.4708 2.31276 6.32618C3.00556 5.18156 3.84897 4.14237 4.84298 3.2086C5.83699 2.27483 6.95149 1.50673 8.18648 0.904297L12.1625 3.02787C11.3794 3.81103 10.7016 4.71468 10.1293 5.73881C9.58713 6.76295 9.31604 7.83226 9.31604 8.94676V9.3534C10.1896 9.50401 11.0028 9.79017 11.7559 10.2119C12.5089 10.6336 13.1565 11.1607 13.6987 11.7933C14.271 12.4258 14.7078 13.1487 15.009 13.962C15.3404 14.7753 15.506 15.6338 15.506 16.5374Z"
                                            fill="inherit"
                                        />
                                    </svg>
                                    <p className="text-center text-xs sm:text-sm">{`Thanks to Capabl, I changed my career path from Business Intelligence Executive to Senior Analyst with a 30% hike in my salary.`}</p>
                                </div>
                            </div>

                            {/* set 2 */}
                            <div className="grid grid-cols-2 md:order-3">
                                <div className="bg-[#CF2323] text-white flex flex-col items-center justify-center gap-4 md:gap-5 px-4 md:px-6 py-10">
                                    <svg className="w-5 md:w-8 object-contain fill-white" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M33.082 16.5374C33.082 17.5615 32.8862 18.5254 32.4946 19.4291C32.1331 20.3026 31.6211 21.0858 30.9584 21.7786C30.2957 22.4412 29.5126 22.9684 28.6089 23.3599C27.7354 23.7515 26.7866 23.9473 25.7624 23.9473C24.4672 23.9473 23.3226 23.6612 22.3286 23.0889C21.3647 22.5165 20.5363 21.7786 19.8435 20.8749C19.1809 19.9411 18.6688 18.8869 18.3073 17.7121C17.976 16.5073 17.8103 15.2874 17.8103 14.0524C17.8103 12.6969 17.9911 11.3565 18.3525 10.0311C18.714 8.70579 19.226 7.4708 19.8887 6.32618C20.5815 5.18156 21.4249 4.14237 22.4189 3.2086C23.4129 2.27483 24.5274 1.50673 25.7624 0.904297L29.7385 3.02787C28.9553 3.81103 28.2776 4.71468 27.7053 5.73881C27.1631 6.76295 26.892 7.83226 26.892 8.94676V9.3534C27.7655 9.50401 28.5788 9.79017 29.3318 10.2119C30.0849 10.6336 30.7325 11.1607 31.2747 11.7933C31.847 12.4258 32.2837 13.1487 32.585 13.962C32.9163 14.7753 33.082 15.6338 33.082 16.5374ZM15.506 16.5374C15.506 17.5615 15.3102 18.5254 14.9187 19.4291C14.5572 20.3026 14.0451 21.0858 13.3825 21.7786C12.7198 22.4412 11.9366 22.9684 11.033 23.3599C10.1594 23.7515 9.21061 23.9473 8.18648 23.9473C6.89125 23.9473 5.74663 23.6612 4.75261 23.0889C3.78872 22.5165 2.96038 21.7786 2.26758 20.8749C1.60491 19.9411 1.09284 18.8869 0.731381 17.7121C0.400044 16.5073 0.234375 15.2874 0.234375 14.0524C0.234375 12.6969 0.415105 11.3565 0.776564 10.0311C1.13802 8.70579 1.65009 7.4708 2.31276 6.32618C3.00556 5.18156 3.84897 4.14237 4.84298 3.2086C5.83699 2.27483 6.95149 1.50673 8.18648 0.904297L12.1625 3.02787C11.3794 3.81103 10.7016 4.71468 10.1293 5.73881C9.58713 6.76295 9.31604 7.83226 9.31604 8.94676V9.3534C10.1896 9.50401 11.0028 9.79017 11.7559 10.2119C12.5089 10.6336 13.1565 11.1607 13.6987 11.7933C14.271 12.4258 14.7078 13.1487 15.009 13.962C15.3404 14.7753 15.506 15.6338 15.506 16.5374Z"
                                            fill="inherit"
                                        />
                                    </svg>
                                    <p className="text-center text-xs sm:text-sm">{`Thanks to Capabl, I changed my career path from Business Intelligence Executive to Senior Analyst with a 30% hike in my salary.`}</p>
                                </div>

                                <div className="w-full h-full overflow-hidden relative group cursor-pointer">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
                                        src="/images/courses/testimonial_2.jpg"
                                        alt="testimonial"
                                    />

                                    {/* fader */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-[#CF2323] bg-opacity-20" />

                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 flex items-center justify-center">
                                        <span className="text-xs sm:text-sm md:text-base ml-0.5 text-black">
                                            <FaPlay />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* set 3 */}
                            <div className="grid grid-cols-2 md:order-2">
                                <div className="w-full h-full overflow-hidden relative group cursor-pointer">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
                                        src="/images/courses/testimonial_3.jpg"
                                        alt="testimonial"
                                    />

                                    {/* fader */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-capabl_primary bg-opacity-10" />

                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 flex items-center justify-center">
                                        <span className="text-xs sm:text-sm md:text-base ml-0.5 text-black">
                                            <FaPlay />
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-capabl_primary text-[#090909] flex flex-col items-center justify-center gap-4 md:gap-5 px-4 md:px-6 py-10">
                                    <svg className="w-5 md:w-8 object-contain fill-[#090909]" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M33.082 16.5374C33.082 17.5615 32.8862 18.5254 32.4946 19.4291C32.1331 20.3026 31.6211 21.0858 30.9584 21.7786C30.2957 22.4412 29.5126 22.9684 28.6089 23.3599C27.7354 23.7515 26.7866 23.9473 25.7624 23.9473C24.4672 23.9473 23.3226 23.6612 22.3286 23.0889C21.3647 22.5165 20.5363 21.7786 19.8435 20.8749C19.1809 19.9411 18.6688 18.8869 18.3073 17.7121C17.976 16.5073 17.8103 15.2874 17.8103 14.0524C17.8103 12.6969 17.9911 11.3565 18.3525 10.0311C18.714 8.70579 19.226 7.4708 19.8887 6.32618C20.5815 5.18156 21.4249 4.14237 22.4189 3.2086C23.4129 2.27483 24.5274 1.50673 25.7624 0.904297L29.7385 3.02787C28.9553 3.81103 28.2776 4.71468 27.7053 5.73881C27.1631 6.76295 26.892 7.83226 26.892 8.94676V9.3534C27.7655 9.50401 28.5788 9.79017 29.3318 10.2119C30.0849 10.6336 30.7325 11.1607 31.2747 11.7933C31.847 12.4258 32.2837 13.1487 32.585 13.962C32.9163 14.7753 33.082 15.6338 33.082 16.5374ZM15.506 16.5374C15.506 17.5615 15.3102 18.5254 14.9187 19.4291C14.5572 20.3026 14.0451 21.0858 13.3825 21.7786C12.7198 22.4412 11.9366 22.9684 11.033 23.3599C10.1594 23.7515 9.21061 23.9473 8.18648 23.9473C6.89125 23.9473 5.74663 23.6612 4.75261 23.0889C3.78872 22.5165 2.96038 21.7786 2.26758 20.8749C1.60491 19.9411 1.09284 18.8869 0.731381 17.7121C0.400044 16.5073 0.234375 15.2874 0.234375 14.0524C0.234375 12.6969 0.415105 11.3565 0.776564 10.0311C1.13802 8.70579 1.65009 7.4708 2.31276 6.32618C3.00556 5.18156 3.84897 4.14237 4.84298 3.2086C5.83699 2.27483 6.95149 1.50673 8.18648 0.904297L12.1625 3.02787C11.3794 3.81103 10.7016 4.71468 10.1293 5.73881C9.58713 6.76295 9.31604 7.83226 9.31604 8.94676V9.3534C10.1896 9.50401 11.0028 9.79017 11.7559 10.2119C12.5089 10.6336 13.1565 11.1607 13.6987 11.7933C14.271 12.4258 14.7078 13.1487 15.009 13.962C15.3404 14.7753 15.506 15.6338 15.506 16.5374Z"
                                            fill="inherit"
                                        />
                                    </svg>
                                    <p className="text-center text-xs sm:text-sm">{`Thanks to Capabl, I changed my career path from Business Intelligence Executive to Senior Analyst with a 30% hike in my salary.`}</p>
                                </div>
                            </div>

                            {/* set 4 */}
                            <div className="grid grid-cols-2 md:order-4">
                                <div className="bg-[#31B6AC] text-white flex flex-col items-center justify-center gap-4 md:gap-5 px-4 md:px-6 py-10">
                                    <svg className="w-5 md:w-8 object-contain fill-white" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M33.082 16.5374C33.082 17.5615 32.8862 18.5254 32.4946 19.4291C32.1331 20.3026 31.6211 21.0858 30.9584 21.7786C30.2957 22.4412 29.5126 22.9684 28.6089 23.3599C27.7354 23.7515 26.7866 23.9473 25.7624 23.9473C24.4672 23.9473 23.3226 23.6612 22.3286 23.0889C21.3647 22.5165 20.5363 21.7786 19.8435 20.8749C19.1809 19.9411 18.6688 18.8869 18.3073 17.7121C17.976 16.5073 17.8103 15.2874 17.8103 14.0524C17.8103 12.6969 17.9911 11.3565 18.3525 10.0311C18.714 8.70579 19.226 7.4708 19.8887 6.32618C20.5815 5.18156 21.4249 4.14237 22.4189 3.2086C23.4129 2.27483 24.5274 1.50673 25.7624 0.904297L29.7385 3.02787C28.9553 3.81103 28.2776 4.71468 27.7053 5.73881C27.1631 6.76295 26.892 7.83226 26.892 8.94676V9.3534C27.7655 9.50401 28.5788 9.79017 29.3318 10.2119C30.0849 10.6336 30.7325 11.1607 31.2747 11.7933C31.847 12.4258 32.2837 13.1487 32.585 13.962C32.9163 14.7753 33.082 15.6338 33.082 16.5374ZM15.506 16.5374C15.506 17.5615 15.3102 18.5254 14.9187 19.4291C14.5572 20.3026 14.0451 21.0858 13.3825 21.7786C12.7198 22.4412 11.9366 22.9684 11.033 23.3599C10.1594 23.7515 9.21061 23.9473 8.18648 23.9473C6.89125 23.9473 5.74663 23.6612 4.75261 23.0889C3.78872 22.5165 2.96038 21.7786 2.26758 20.8749C1.60491 19.9411 1.09284 18.8869 0.731381 17.7121C0.400044 16.5073 0.234375 15.2874 0.234375 14.0524C0.234375 12.6969 0.415105 11.3565 0.776564 10.0311C1.13802 8.70579 1.65009 7.4708 2.31276 6.32618C3.00556 5.18156 3.84897 4.14237 4.84298 3.2086C5.83699 2.27483 6.95149 1.50673 8.18648 0.904297L12.1625 3.02787C11.3794 3.81103 10.7016 4.71468 10.1293 5.73881C9.58713 6.76295 9.31604 7.83226 9.31604 8.94676V9.3534C10.1896 9.50401 11.0028 9.79017 11.7559 10.2119C12.5089 10.6336 13.1565 11.1607 13.6987 11.7933C14.271 12.4258 14.7078 13.1487 15.009 13.962C15.3404 14.7753 15.506 15.6338 15.506 16.5374Z"
                                            fill="inherit"
                                        />
                                    </svg>
                                    <p className="text-center text-xs sm:text-sm">{`Thanks to Capabl, I changed my career path from Business Intelligence Executive to Senior Analyst with a 30% hike in my salary.`}</p>
                                </div>

                                <div className="w-full h-full overflow-hidden relative group cursor-pointer">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
                                        src="/images/courses/testimonial_4.jpg"
                                        alt="testimonial"
                                    />

                                    {/* fader */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-[#31B6AC] bg-opacity-20" />

                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 flex items-center justify-center">
                                        <span className="text-xs sm:text-sm md:text-base ml-0.5 text-black">
                                            <FaPlay />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Present Across */}
                <section id="present_across" className="mt-10 md:mt-20 lg:mt-48 mb-4 md:mb-6">
                    <div className="md:grid md:grid-cols-7 md:gap-2 max-w-5xl mx-auto">
                        <div className="p-4 md:col-span-4">
                            <h3 className="text-black font-medium text-lg md:text-4xl mb-4 md:mb-8 md:leading-[3rem] md:max-w-sm">{`Present across 400+ Colleges & Universities`}</h3>

                            <div className="w-full">
                                <p className="font-normal text-xs md:text-xl text-balck">
                                    {`Increase avg`} <span className="text-capabl_primary font-bold">{`package by 40%+`}</span>
                                </p>
                                <hr className="w-3/4 my-2.5 md:my-3 max-w-xs md:w-full md:max-w-sm" />

                                <p className="font-normal text-xs md:text-xl text-balck">{`Add labs & Infrastructure`}</p>
                                <hr className="w-3/4 my-2.5 md:my-3 max-w-xs md:w-full md:max-w-sm" />

                                <p className="font-normal text-xs md:text-xl text-balck">{`Offer 'Honours' Degrees`}</p>
                                <hr className="w-3/4 my-2.5 md:my-3 max-w-xs md:w-full md:max-w-sm" />

                                <p className="font-normal text-xs md:text-xl text-balck">
                                    {`Improve Ranking & Ratings:`} <span className="text-capabl_primary font-bold">{`NIRF, NAAC, NBA`}</span>
                                </p>
                                <hr className="w-3/4 my-2.5 md:my-3 max-w-xs md:w-full md:max-w-sm" />
                            </div>
                        </div>

                        <div className="overflow-x-scroll pt-0 pb-6 scrollbar-hide px-4 md:col-span-3 md:row-span-2 md:pl-12">
                            <div className="flex items-center justify-start gap-4 md:gap-8 md:grid md:grid-cols-2 md:justify-items-end">
                                {presentColleges?.map(({ image, name }, index) => (
                                    <div
                                        key={index}
                                        style={{ boxShadow: "0px 2px 15px 2px #F2F4F6" }}
                                        className="rounded-xl md:rounded-3xl flex flex-col items-center gap-2 justify-center p-3 w-24 md:w-40 h-24 md:h-40 flex-shrink-0"
                                    >
                                        <img className="w-full max-w-[45px] md:max-w-[90px]" src={image} alt={name} />
                                        <p className="font-medium text-black text-[9px] md:text-base text-center">{name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-2 max-w-sm md:max-w-none md:col-span-4">
                            <p className="font-medium text-xs md:text-lg text-[#807E7E] mb-5 md:mb-10 px-4">
                                Students from all colleges across India are joining the education revolution
                            </p>
                            <FaculyTestimonials />
                        </div>
                    </div>
                </section>

                {/* cta_illustration */}

                <section id="cta_2" className="px-4 max-w-6xl mx-auto mb-16 md:mb-20">
                    <div className="bg-capabl_primary rounded-xl px-6 md:px-10 py-8 md:py-12 relative md:flex md:items-center md:justify-between md:gap-7">
                        <img className="absolute top-0 z-0 left-0 w-full h-full object-cover" src="/images/svgs/cta_illustration.svg" alt="cta illustration" />
                        <div className="relative z-[1]">
                            <p className="text-black text-xl font-medium mb-4 md:mb-2 text-center md:text-left">{`Be part of the best ecosystem redefining engineering education`}</p>
                            <p className="text-black font-light text-sm mb-8 md:mb-0 text-center md:text-left">{`What are you waiting for? Join only the best ecosystem to kickstart your career journey! `}</p>
                        </div>
                        <Link href="/">
                            <a className="z-[1] bg-black rounded-lg px-4 w-1/2 py-3 text-white text-center max-w-[200px] font-medium text-base whitespace-nowrap absolute md:relative bottom-0 left-1/2 md:left-auto md:bottom-auto transform -translate-x-1/2 md:translate-x-0 translate-y-1/2 md:translate-y-0">
                                Know More
                            </a>
                        </Link>
                    </div>
                </section>
            </main>

            <CtaForm show={showCtaForm} setShow={setShowCtaForm} />

            <Footer />
        </div>
    );
}
