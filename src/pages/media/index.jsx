import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { pressreleases } from "../../utils/data/media/pressrelease";
import { achivements } from "../../utils/data/media/headlines";
import HeadlinesSlider from "../../components/media/HeadlinesSlider";
import Footer from "../../components/Footer";
import { accreditedby } from "../../utils/data/media/accreditedby";

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
          <div className="max-w-7xl mx-auto container flex items-center justify-end gap-2 px-4 md:py-2 font-medium text-[10px] md:text-sm h-7 md:h-8">
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
                  <a className="font-medium text-sm text-black">
                    Careers Transformed
                  </a>
                </Link>
                <Link href="/">
                  <a className="font-medium text-sm text-black">Hire</a>
                </Link>
                <Link href="/">
                  <a className="font-medium text-sm text-black">Others</a>
                </Link>
                <Link href="/">
                  <a
                    style={{
                      boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)",
                    }}
                    className="font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary"
                  >
                    Join Our Tribe
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* spacer */}
        <div className="w-full h-7 md:h-8" />
        <div className="w-full h-10 md:h-20" />
      </header>

      <main className="min-h-screen w-full mx-auto">
        <section id="headlines" className="max-w-5xl mx-auto px-4 mt-2 md:mt-2">
          <HeadlinesSlider />
        </section>
        <section id="about" className="mt-4 ml-8 mr-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-y">
            <div className="block p-8 rounded-lg  bg-gray-100">
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                About Capabl
              </h5>
              <p className="text-base mb-4">
                Elite Techno Groups is an India-based company focused on
                creating an engineering ecosystem around Skills needed for
                industry. We help students embrace the industrial requirements
                by exposing them to real-world scenarios and providing them with
                the impetus to apply their skills and knowledge to tackle the
                challenges presented.
              </p>

              <p>
                With a reliable team of more than 100 Experts from various
                Industries led by Founder Mr. Mayank Arora who has 8yr+
                Experience in the EdTech Industry and Co-Founder Mr. Umang
                Surana who is an IIT Madras Alumnus - we ensure the best
                outcomes to our student fraternity. Winning More than 26 Awards
                ensures our credibility.
              </p>
              <p>
                To date, we have skilled 1 Lakh+ Student from 400+ Colleges from
                all of the Indian states and 15+ countries globally. We even had
                offline programs across India, UAE, and South Africa. To date,
                we have skilled 1 Lakh+ Student from 400+ Colleges from all of
                the Indian states and 15+ countries globally. We even had
                offline programs across India, UAE, and South Africa.
              </p>
            </div>
            <div className=" grid mx-auto grid-cols-3 rounded-lg max-w-md">
              <div className="aboutimages p-1 rounded-lg   max-w-md">
                <img src="/images/media/about.png"></img>
              </div>
              <div className="aboutimages p-1 rounded-lg  max-w-md">
                <img src="/images/media/about_1.png"></img>
              </div>
              <div className="aboutimages p-1 rounded-lg  max-w-md">
                <img src="/images/media/about_2.png"></img>
              </div>
            </div>
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
            <div>
              <h2 className="text-center text-black font-semibold text-base md:font-medium md:text-4xl mt-4">
                Listen to our leaders
              </h2>
            </div>
            <div className=" overflow-x-scroll scrollbar-hide w-full mt-6 md:mt-8 mb-8 md:mb-12 flex items-start justify-start lg:justify-between gap-4 px-4">
              {!!pressreleases?.length &&
                pressreleases.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 lg:p-8 flex-shrink-0 w-fit md:flex-shrink  border-white md:w-1/2"
                  >
                    <div className="bg-white relative rounded-lg shadow-lg">
                      <img
                        src="/images/media/leaders.png"
                        alt=""
                        className="rounded-t-lg "
                      />
                      <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 flex items-center justify-center group-hover:scale-95 transition-all duration-500`}
                      >
                        <span className="text-xs sm:text-sm md:text-base ml-1 text-[#4B0AFF]">
                          <FaPlay />
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-700 mb-2">
                        Creating The Culture You Want To See In Your...
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section id="awards">
          <div className="m-8">
            <div className="flex items-left justify-left mt-10 mb-4">
              <span className="bg-capabl_primary w-7 md:w-12 h-1.5 md:h-2"></span>
            </div>
            <div className="text-left grid grid-col-2 gap-0">
              <h2 className=" text-black font-semibold text-base md:font-medium md:text-4xl mb-2 text-left ">
                Awards &
              </h2>
              <h2 className=" text-black font-semibold text-base md:font-medium md:text-4xl mb-4 md:mb-6 text-left ">
                Achivements
              </h2>
            </div>
            <div className="grid grid-cols-2 mx-auto">
              {!!achivements &&
                achivements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md w-32 h-32 justify-self-center md:w-56 md:h-56 m-8"
                  ></div>
                ))}
            </div>
          </div>
        </section>
        <section id="accredition">
          <div className="m-8 bg-[#14213D] rounded-lg p-8">
            <div className="flex items-left justify-left mt-10 mb-4">
              <span className="bg-capabl_primary w-7 md:w-12 h-1.5 md:h-2"></span>
            </div>
            <h2 className="text-white font-semibold text-base md:font-medium md:text-4xl mb-4 md:mb-6 text-left ">
              Accredited by
            </h2>
            <div className="bg-white rounded-lg grid grid-cols-3 justify-items-center xl:grid-cols-5 ">
              {!!accreditedby &&
                accreditedby.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F2F6F7] rounded-lg p-4 md:p-8 lg:p-8 w-[83px] h-[57px] md:w-[207px] md:h-[150px] m-8 flex align-center justify-around"
                  >
                    <img
                      src={item.image}
                      alt={item.accreditedby}
                      className="self-center"
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
