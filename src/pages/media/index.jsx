import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { pressreleases } from "./pressrelease";
import HeadlinesSlider from "../../components/media/HeadlinesSlider";
import Footer from "../../components/Footer";

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
            <a
              href="tel:8998798798"
              target="_blank"
              rel="noreferrer"
              className="pr-2 border-r border-r-[#cdcdcd] text-black"
            >
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
        {/* <div className="w-full bg-white relative z-20"> */}
        <div className="fixed top-7 md:top-8 left-0 w-full bg-white z-20">
          <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 h-10 md:h-20">
            <Link href="/">
              <img
                src="/images/svgs/logo.svg"
                alt="capable logo"
                className="w-full max-w-[6rem] md:max-w-[8rem] object-contain cursor-pointer"
              />
            </Link>

            <div>
              <button className="inline-block md:hidden">
                <img
                  src="/images/svgs/hamburger_icon.svg"
                  alt="hamburger icon"
                />
              </button>

              {/* Nav Items */}
              <div className="hidden md:flex items-center justify-end gap-4">
                <Link href="/">
                  <a className="font-medium text-sm text-black">Programs</a>
                </Link>
                <Link href="/">
                  <a className="font-medium text-sm text-[#6F6F6F]">
                    Careers Transformed
                  </a>
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
      <section id="headlines" className="max-w-5xl mx-auto px-4 mt-2 md:mt-2">
        <HeadlinesSlider />
      </section>
      <section id="about" className="mt-4">
        <div className="flex justify-around">
          <div className="block p-16 rounded-lg shadow-lg bg-white w-1/2 max-w-md">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              About Capabl
            </h5>
            <p className="text-base mb-4">
              Elite Techno Groups is an India-based company focused on creating
              an engineering ecosystem around Skills needed for industry. We
              help students embrace the industrial requirements by exposing them
              to real-world scenarios and providing them with the impetus to
              apply their skills and knowledge to tackle the challenges
              presented.
            </p>

            <p>
              With a reliable team of more than 100 Experts from various
              Industries led by Founder Mr. Mayank Arora who has 8yr+ Experience
              in the EdTech Industry and Co-Founder Mr. Umang Surana who is an
              IIT Madras Alumnus - we ensure the best outcomes to our student
              fraternity. Winning More than 26 Awards ensures our credibility.
            </p>
            <p>
              To date, we have skilled 1 Lakh+ Student from 400+ Colleges from
              all of the Indian states and 15+ countries globally. We even had
              offline programs across India, UAE, and South Africa. To date, we
              have skilled 1 Lakh+ Student from 400+ Colleges from all of the
              Indian states and 15+ countries globally. We even had offline
              programs across India, UAE, and South Africa.
            </p>
          </div>
          <div className="aboutimages p-16 rounded-lg shadow-lg bg-white w-1/2 max-w-md"></div>
        </div>
      </section>
      <section id="press">
        <div className="mb-10 md:mb-12 max-w-sm md:max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-center text-black font-semibold text-base md:font-medium md:text-4xl mb-4 md:mb-6">
            Capabl in Press
          </h2>
        </div>
        <div className="relative flex items-center justify-center">
          <div
            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="group"
          >
            <a
              href="#"
              aria-current="page"
              className="
        rounded-l
        px-6
        py-4
        bg-capabl_primary
        text-gray-900
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:.bg-capabl_primary
        transition
        duration-150
        ease-in-out
      "
            >
              Press Release
            </a>
            <a
              href="#"
              className="
        px-6
        py-4
        bg-white
        text-gray-900
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:bg-blue-800
        transition
        duration-150
        ease-in-out
      "
            >
              Article
            </a>
            <a
              href="#"
              className="
        rounded-r
        px-6
        py-4
        bg-white
        text-gray-900
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:bg-blue-800
        transition
        duration-150
        ease-in-out
      "
            >
              Press Release
            </a>
          </div>
        </div>
        <div className="px-4 -mt-6 md:bg-[#14213D] grid grid-cols-1 divide-y md:grid-cols-3 p-24">
          {!!pressreleases?.length &&
            pressreleases.map((item, index) => (
              <div key={index} className="rounded-lg shadow-lg bg-white m-2">
                <a href="#!" className="flex bg-[#F7F9FA] justify-center">
                  <img
                    className="rounded-t-lg object-center"
                    src={item?.image}
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {item.name}
                  </h5>
                  <p className="text-gray-400 text-base mb-4">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="text-capabl_primary hover:text-purple-500 underline text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section id="leaders">
        <div className="grid grid-cols-1 divide-y">
          <div></div>
          <div className="relative overflow-x-scroll scrollbar-hide w-full mt-6 md:mt-8 mb-8 md:mb-12 flex items-start justify-start lg:justify-between gap-4 px-4">
            {!!pressreleases?.length &&
              pressreleases.map((item, index) => (
                <div key={index} className="p-8 w-full md:w-1/2">
                  <div className="bg-white rounded-lg shadow-lg">
                    <img
                      src="/images/media/leaders.png"
                      alt=""
                      className="rounded-t-lg"
                    />
                    <div className="p-6">
                      <p className="text-700 mb-2">
                        Creating The Culture You Want To See In Your...
                      </p>
                      <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 flex items-center justify-center group-hover:scale-95 transition-all duration-500`}
                      >
                        <span className="text-xs sm:text-sm md:text-base ml-1 text-[#4B0AFF]">
                          <FaPlay />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
