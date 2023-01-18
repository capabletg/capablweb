import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import ExposureAccordian from "../components/homePage/ExposureAccordian";
import { studentTestimonials } from "../utils/data/homePage/student_testimonials";
import { presentColleges } from "../utils/data/homePage/present_colleges";
import FaculyTestimonials from "../components/homePage/FaculyTestimonials";
import Footer from "../components/Footer";
import IndustrialPrograms from "../components/homePage/IndustrialPrograms";
import Services from "../components/homePage/Services";
import CtaForm from "../components/CtaForm";
import Header from "../components/header";
import useGeneralStore from "../store/generalStore";
import VideoGridTestimonials from "../components/VideoGridTestimonials";
import FeatureComparison from "../components/FeatureComparison";

export default function Home() {
    const openCtaForm = useGeneralStore((state) => state.openCtaForm);

    return (
        <div>
            <Head>
                <title>Online Courses for data science, data analytics, mechatronics, design Engineering Students | Capabl</title>
                <meta name="keywords" content="online courses" />
                <meta name="description" content="Online courses in data science, data analytics, mechatronics, design and other engineering domains." />
                <meta name="robots" content="index, follow" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                id="app-ld-json"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "CollegeOrUniversity",

                        name: "Elite Techno Groups",

                        alternateName: "ETG",

                        url: "https://www.elitetechnogroups.com/",

                        logo: "https://www.elitetechnogroups.com/",

                        sameAs: [
                            "https://www.facebook.com/EliteTechnoGroups/",

                            "https://www.instagram.com/etgroups/?ref=badge",

                            "https://www.linkedin.com/company/30203475/admin/",

                            "https://twitter.com/ETgroups",

                            "https://www.youtube.com/channel/UCoBQveYfZas0x7PHK2i_Eeg",
                        ],
                    }),
                }}
            />

            <Header />

            <main className="min-h-screen w-full">
                {/* Hero Section */}
                <section
                    key={"hero_section"}
                    id="hero"
                    className="flex flex-col md:flex-row md:gap-14 items-center md:items-start md:justify-between my-10 md:mt-24 px-4 container mx-auto max-w-7xl w-full"
                >
                    {/* Hero Image */}
                    <div className="relative md:order-2 flex-shrink-0 pt-5 md:pt-0">
                        <div className="z-[2] relative bg-capabl_primary rounded-md mb-6 w-[14rem] md:w-[22.5rem] h-[17.5rem] md:h-[28rem] p-4 transform translate-x-[7.5%] md:translate-x-0">
                            <p className="text-xs md:text-base text-black font-normal">
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
                            Where Engineering Students become{" "}
                            <span className="relative">
                                <span className="relative z-[1]">Industry Capabl</span>
                                <svg
                                    className="w-5/6 object-contain absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
                                    viewBox="0 0 250 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        className="stroke-capabl_primary"
                                        d="M2.24707 5.03916L119 2.73438H247.995"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>{" "}
                        </h1>
                        <p className="text-[#636363] text-center md:text-left text-xs md:text-lg mt-4 md:mt-6">
                            {`Get 1:1 mentoring, skills, projects & jobs!`}
                            <br />
                            {`Because Degree/Courses aren't enough`}
                        </p>
                        <div className="mt-4 md:mt-10 flex items-center gap-3">
                            <button
                                onClick={() => openCtaForm()}
                                className="text-[#272727] font-medium border border-capabl_primary bg-capabl_primary rounded-md px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-base hover_animation"
                            >
                                Talk to Counselor
                            </button>

                            <Link href="/#programs">
                                <a className="text-[#ff696d] font-medium bg-transparent border border-[#ff696d] rounded-md px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-base hover_animation">
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

                <Link href="/#associations">
                    <a className="hidden mx-auto rounded-full w-16 h-16 md:flex items-center justify-center bg-capabl_primary p-5 hover_animation">
                        <img className="w-full object-contain pt-1" src="/images/svgs/chevron_down.svg" alt="chevron" />
                    </a>
                </Link>

                {/* Student Testimonials */}
                <section id="student_testimonials" className="hidden py-4 md:py-20 container mx-auto max-w-7xl">
                    <div className="mb-10 md:mb-12 max-w-md md:max-w-3xl mx-auto px-4">
                        <h2 className="text-center text-black font-semibold text-xl sm:text-3xl md:font-medium mb-4">{`Proud Stories`}</h2>
                        <p className="text-center font-normal text-[#636363] text-sm md:text-base">{`Meet our alumni whom we could help live their career dreams`}</p>
                    </div>

                    <div className="overflow-x-scroll scrollbar-hide mx-auto flex items-center justify-start md:justify-center px-4 box-content">
                        {!!studentTestimonials?.length &&
                            studentTestimonials.map((item, index) => (
                                <div key={index} className="flex-shrink-0">
                                    <div className={`${index % 2 === 0 ? "bg-[#F8F7FF]" : "bg-[#FFFEFD]"} w-full max-w-xs h-[600px] mx-auto relative p-6`}>
                                        <h2 className="text-left font-semibold text-lg mb-4">{item?.title}</h2>
                                        <p className="text-left font-light text-sm mb-4">{item?.description}</p>
                                        <p className="font-medium text-sm">{item?.name}</p>
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
                    <h2 className="text-center font-normal text-lg md:text-4xl mb-8 md:mb-16">
                        {`You're in a`} <br />
                        <span className="text-black font-semibold">
                            <span className="relative">
                                <span className="relative z-[1]">Capabl Company</span>
                                <svg
                                    className="w-5/6 object-contain absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
                                    viewBox="0 0 250 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        className="stroke-capabl_primary"
                                        d="M2.24707 5.03916L119 2.73438H247.995"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>{" "}
                        </span>
                    </h2>

                    <div>
                        <div className="relative mb-0">
                            <div className="w-full px-4">
                                <img
                                    className="w-full object-contain max-w-lg md:max-w-2xl -mb-0.5 mx-auto z-0 relative transition-all duration-300"
                                    src="/images/home/achievements.png"
                                    alt="won"
                                />
                            </div>
                        </div>

                        <div className="z-[1] relative bg-white border-2 border-capabl_primary rounded-lg p-4 md:p-7 flex items-center justify-start gap-3 md:gap-10 lg:gap-20">
                            <p className="text-left font-medium text-xs md:text-base col-span-2 md:col-span-1 align-middle flex items-center whitespace-nowrap">
                                {`To give the best`}
                                <br />
                                {`We've partenered with`}
                            </p>
                            <div className="flex-grow flex flex-wrap gap-x-4 md:gap-x-6 gap-y-3 items-center justify-center md:justify-between">
                                <div className="w-full max-w-[4rem] md:max-w-[5.5rem] lg:max-w-[7rem]">
                                    <img className="w-full object-contain" src="/images/home/partner_1.jpg" alt="tesla" />
                                </div>
                                <div className="w-full max-w-[7rem] md:max-w-[10rem] lg:max-w-[13rem]">
                                    <img className="w-full object-contain" src="/images/home/partner_2.jpg" alt="tata" />
                                </div>
                                <div className="w-full max-w-[4rem] md:max-w-[5.5rem] lg:max-w-[7rem]">
                                    <img className="w-full object-contain" src="/images/home/partner_3.jpg" alt="kn" />
                                </div>
                                <div className="w-full max-w-[4rem] md:max-w-[5.5rem] lg:max-w-[7rem]">
                                    <img className="w-full object-contain" src="/images/home/partner_4.jpg" alt="ather" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 z-[1] relative bg-white border-2 border-capabl_primary rounded-lg p-4 md:p-7 grid grid-cols-5 gap-3 md:gap-6">
                            <p className="text-left font-medium text-xs md:text-base col-span-2 md:col-span-1 align-middle flex items-center">
                                Courses Designed by Experts from
                            </p>
                            <div className="col-span-3 md:col-span-4 grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
                                <div className="w-full max-w-[2rem] md:max-w-[3rem] lg:max-w-[3.5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/tesla_logo.jpg" alt="tesla" />
                                </div>
                                <div className="w-full max-w-[2rem] md:max-w-[3rem] lg:max-w-[3.5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/tata_logo.jpg" alt="tata" />
                                </div>
                                <div className="w-full max-w-[2rem] md:max-w-[3rem] lg:max-w-[3.5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/kn_logo.jpg" alt="kn" />
                                </div>
                                <div className="w-full max-w-[2rem] md:max-w-[3rem] lg:max-w-[3.5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/ather_logo.jpg" alt="ather" />
                                </div>
                                <div className="w-full max-w-[2rem] md:max-w-[3rem] lg:max-w-[3.5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/amazon_logo.jpg" alt="amazon" />
                                </div>
                                <div className="w-full max-w-[2rem] md:max-w-[3rem] lg:max-w-[3.5rem]">
                                    <img className="w-full object-contain" src="/images/raw_images/benz_logo.jpg" alt="benz" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Exposure */}
                <section id="exposure" className="mt-16 md:mt-20 p-4 pt-0 md:pt-8">
                    <div className="bg-[#F2F4F7] rounded-3xl max-w-screen-2xl mx-auto px-4">
                        <div className="max-w-6xl mx-auto pb-4 pt-8 md:pt-16 md:pb-6 grid grid-cols-2 gap-4 lg:gap-10">
                            <div className="p-4 flex items-center justify-center">
                                <img src="/images/home/ecosystem.png" alt="focus man" className="w-full object-contain" />
                            </div>
                            <div className="block md:gap-10">
                                <div className="relative mb-4 flex-shrink-0">
                                    <h3 className="font-semibold text-base md:text-3xl md:leading-[3rem]">
                                        <span className="relative">
                                            <span className="relative z-[1]">An Ecosystem of</span>
                                            <svg
                                                className="w-5/6 object-contain absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
                                                viewBox="0 0 250 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    className="stroke-capabl_primary"
                                                    d="M2.24707 5.03916L119 2.73438H247.995"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>{" "}
                                        <br />
                                        Stanford/ Harvard/ IITs!!
                                    </h3>
                                </div>
                                <p className="text-[#636363] font-normal text-xs md:text-sm max-w-xs">
                                    {`We're proud to be the `}
                                    <span className="text-capabl_primary">only</span>
                                    {` platform who understands students like no one else :) An ecosystem that gives you an IIT/
                                    MIT/Stanford like exposure in your college`}
                                </p>
                            </div>
                        </div>

                        <hr />
                        <ExposureAccordian />
                    </div>
                </section>

                <Services />

                <IndustrialPrograms />

                {/* Features */}
                <section id="features" className="bg-[#F2F4F7] w-full rounded-3xl max-w-screen-2xl mx-auto px-2 py-10 pb-28 md:py-16 mb-40">
                    <div className="mb-10 md:mb-12 max-w-md md:max-w-3xl mx-auto px-4">
                        <h2 className="text-center text-black font-semibold text-xl sm:text-3xl md:font-medium mb-4 md:mb-6">
                            {`See why we are the best Engineering Ecosystem!`}
                        </h2>
                        <p className="text-center font-normal text-[#636363] text-xs sm:text-sm">
                            {`Don't believe us? Prove us wrong and you can take the programs for free. We care for you and your parents' hard earned money. Hence, we are giving you our best - the best engineering ecosystem for you!`}
                        </p>
                    </div>

                    <FeatureComparison showAllFeatures={true} />
                </section>

                <section className="max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-24">
                    <h2 className="text-center font-medium text-lg md:text-2xl mb-3 md:mb-4 text-black">{`What our Students have to say!`}</h2>
                    <p className="text-xs md:text-sm max-w-md md:max-w-2xl mx-auto text-center font-normal text-[#6c6c6c]">{`We're glad to have so much love from our students! We would love to keep working towards making our students' dreams come true.`}</p>

                    <VideoGridTestimonials />
                </section>

                {/* Present Across */}
                <section id="present_across" className="mt-10 md:mt-20 lg:mt-48 px-4 mb-12 md:mb-20">
                    <div
                        style={{
                            background: `linear-gradient(180deg, #E1E1E1 0%, #F6F6F6 100%)`,
                        }}
                        className="max-w-7xl mx-auto pt-8 pb-10 md:pb-4 md:pt-12 border border-[#e1e1e1] rounded-xl"
                    >
                        <div className="md:grid md:grid-cols-7 md:gap-2 max-w-5xl mx-auto">
                            <div className="p-4 md:col-span-4">
                                <h3 className="text-black font-medium text-lg md:text-3xl mb-4 md:mb-8 md:leading-[3rem] md:max-w-sm">{`Present across 400+ Colleges & Universities`}</h3>

                                <div className="font-normal max-w-lg text-sm mb-6 md:mb-8 text-[#636363]">
                                    As per the NEP and directives by GoI, Academia Industry Collaboration (AIC) by Capabl help colleges improve Industrial
                                    exposure, infrastructure and make them part of an engineering Ecosystem - taking the college to the next level.
                                </div>

                                <div className="w-full">
                                    <p className="font-normal text-sm md:text-base text-black">
                                        {`Increase avg`} <span className="text-[#BE362E] font-bold">{`package by 40%+`}</span>
                                    </p>
                                    <hr className="w-3/4 my-2.5 md:my-3 max-w-xs md:w-full md:max-w-sm border-t border-t-gray-300" />

                                    <p className="font-normal text-sm md:text-base text-black">{`Add Hitech labs & Infrastructure`}</p>
                                    <hr className="w-3/4 my-2.5 md:my-3 max-w-xs md:w-full md:max-w-sm border-t border-t-gray-300" />

                                    <p className="font-normal text-sm md:text-base text-black">{`Offer 'Honours' Degrees`}</p>
                                    <hr className="w-3/4 my-2.5 md:my-3 max-w-xs md:w-full md:max-w-sm border-t border-t-gray-300" />

                                    <p className="font-normal text-sm md:text-base text-black">{`Increase Admissions & Popularity`}</p>
                                    <hr className="w-3/4 my-2.5 md:my-3 max-w-xs md:w-full md:max-w-sm border-t border-t-gray-300" />

                                    <p className="font-normal text-sm md:text-base text-black">{`Improve NIRF, NAAC, NBA Ranking & Ratings`}</p>
                                    <hr className="w-3/4 my-2.5 md:my-3 max-w-xs md:w-full md:max-w-sm border-t border-t-gray-300" />
                                </div>
                            </div>

                            <div className="overflow-x-scroll pt-0 pb-6 scrollbar-hide px-4 md:col-span-3 md:row-span-2 md:pl-12">
                                <div className="flex items-center justify-start gap-4 md:gap-8 md:grid md:grid-cols-2 md:justify-items-end">
                                    {presentColleges?.map(({ image, name }, index) => (
                                        <div
                                            key={index}
                                            style={{ boxShadow: "0px 2px 15px 2px #F2F4F6" }}
                                            className="rounded-xl bg-white md:rounded-3xl flex flex-col items-center gap-2 justify-center p-3 w-24 md:w-40 h-24 md:h-40 flex-shrink-0"
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

                        {/* CTA */}

                        <div id="cta_2" className="px-4 max-w-6xl mx-auto mt-4">
                            <div className="bg-capabl_primary rounded-xl px-6 md:px-10 py-8 md:py-12 relative md:flex md:items-center md:justify-between md:gap-7">
                                <div className="relative z-[1]">
                                    <p className="text-black text-xl font-medium mb-4 md:mb-2 text-center md:text-left">{`Join the engineering revolution`}</p>
                                    <p className="text-black font-light text-sm mb-8 md:mb-0 text-center md:text-left">{`Join AIC. Talk to our team to know about AIC and the process to join it.`}</p>
                                </div>

                                <button
                                    onClick={() => openCtaForm()}
                                    className="z-[1] bg-black rounded-lg px-4 w-1/2 py-3 text-white text-center max-w-[200px] font-medium text-base whitespace-nowrap absolute md:relative bottom-0 left-1/2 md:left-auto md:bottom-auto transform -translate-x-1/2 md:translate-x-0 translate-y-1/2 md:translate-y-0 hover_animation"
                                >
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <CtaForm />

            <Footer />
        </div>
    );
}
