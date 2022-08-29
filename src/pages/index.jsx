import Head from "next/head";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExposureAccordian from "../components/homePage/ExposureAccordian";
import { studentTestimonials } from "../utils/data/student_testimonials";
import HelpingAreasSlider from "../components/homePage/HelpingAreasSlider";

export default function Home() {
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
                        <Link href="/">
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
                                <Link href="/">
                                    <a
                                        style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
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

            <main className="min-h-screen w-full">
                {/* Hero Section */}
                <section
                    id="hero"
                    className="flex flex-col md:flex-row md:gap-14 items-center md:items-start md:justify-between my-10 md:mt-24 px-4 container mx-auto max-w-7xl w-full"
                >
                    {/* Hero Image */}
                    <div className="relative md:order-2 flex-shrink-0 pt-5 md:pt-0">
                        <div className="z-[2] relative bg-capabl_primary rounded-md mb-6 w-[14rem] md:w-[22.5rem] h-[17.5rem] md:h-[28rem] p-4 transform translate-x-[7.5%] md:translate-x-0">
                            <p className="text-xs md:text-lg text-black font-normal">Become real engineering via learning from experts</p>

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
                            Where Engineering Students become Industry Ready Engineers
                        </h1>
                        <p className="text-[#636363] text-center md:text-left text-xs md:text-lg mt-4 md:mt-6">
                            {`Aim for (s)kills and take the prize of success with you - we make you a `}
                            <span className="text-capabl_primary">{`'Bond'`}</span> in Engineering
                        </p>
                        <div className="mt-4 md:mt-10 flex items-center gap-3">
                            <Link href="/">
                                <a className="text-[#272727] font-medium border border-capabl_primary bg-capabl_primary rounded-md px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-base">
                                    Talk to Counselor
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="text-[#ff696d] font-medium bg-transparent border border-[#ff696d] rounded-md px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-base">
                                    Explore Courses
                                </a>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="rounded-lg relative z-[2] md:rounded-2xl py-5 md:py-8 px-4 md:px-8 light_shadow md:shadow-none bg-white md:bg-[#f2f4f7] flex items-start justify-between gap-4 md:gap-6 mt-5 md:mt-10">
                                <p className="flex flex-col items-center justify-start md:items-start gap-1">
                                    <span className="text-[#371B69] font-semibold text-xs md:text-xl md:bold">1 lakh+</span>
                                    <span className="text-[#898989] md:text-black text-[9px] md:text-sm text-center md:text-left">Careers Transformed</span>
                                </p>
                                <p className="flex flex-col items-center justify-start md:items-start gap-1">
                                    <span className="text-[#371B69] font-semibold text-xs md:text-xl md:bold flex gap-0.5 items-center">
                                        4.6 <img src="/images/svgs/star_orange.svg" alt="star" className="w-full object-contain max-w-[1rem]" />
                                    </span>
                                    <span className="text-[#898989] md:text-black text-[9px] md:text-sm text-center md:text-left">Rating</span>
                                </p>
                                <p className="flex flex-col items-center justify-start md:items-start gap-1">
                                    <span className="text-[#371B69] font-semibold text-xs md:text-xl md:bold">500+</span>
                                    <span className="text-[#898989] md:text-black text-[9px] md:text-sm text-center md:text-left">Industry Experts</span>
                                </p>
                                <p className="flex flex-col items-center justify-start md:items-start gap-1">
                                    <span className="text-[#371B69] font-semibold text-xs md:text-xl md:bold">18+</span>
                                    <span className="text-[#898989] md:text-black text-[9px] md:text-sm text-center md:text-left">Years in Education</span>
                                </p>
                                <p className="flex flex-col items-center justify-start md:items-start gap-1">
                                    <span className="text-[#371B69] font-semibold text-xs md:text-xl md:bold">400+</span>
                                    <span className="text-[#898989] md:text-black text-[9px] md:text-sm text-center md:text-left">College Partners</span>
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
                                        A better than IIT <br />
                                        Ecosystem!
                                    </h3>
                                    <img
                                        className="absolute top-[2rem] md:top-[4rem] left-[4rem] md:left-[9rem] max-w-[3rem] md:max-w-[7rem] w-full"
                                        src="/images/svgs/arrow_curved.svg"
                                        alt="curved arrow"
                                    />
                                </div>
                                <p className="text-[#636363] font-medium text-[9px] md:text-base max-w-xs">
                                    1 in 100 engineers qualify for IIT. Can anything be better? Yes, Stanford/MIT kind of ecosystem focused on projects and
                                    industrial exposure.
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

                {/* We help you make a career */}
                <section id="helps_you_make_career" className="p-2 pt-8 md:pt-20">
                    <div className="max-w-xs md:max-w-3xl mx-auto mb-3">
                        <h3 className="font-medium text-base md:text-5xl text-center mb-3 md:mb-8">We help you make a Career</h3>
                        <p className="font-medium text-[10px] md:text-base text-center text-[#636363] md:px-20 md:mb-10">
                            {`We don't just teach a course - Only platform that has programs defined as per outcome you are looking for - because it matters to
                            you!`}
                        </p>
                    </div>

                    <HelpingAreasSlider />
                </section>

                <section id="cta" className="px-4 pt-0 pb-8 md:pt-0 md:pb-16 flex items-center justify-center">
                    <Link href="/">
                        <a className="bg-capabl_primary rounded-lg py-2 px-6 font-medium text-base text-[#272727] border-2 border-transparent hover:border-capabl_primary hover:bg-transparent transition duration-300">
                            Join Our Tribe
                        </a>
                    </Link>
                </section>

                {/* Choose you domain */}
                <section id="choose_your_domain" className="container mx-auto max-w-7xl px-0 md:px-4 relative mb-40 mt-20">
                    {/* Top Circle */}
                    <div
                        style={{ background: "radial-gradient(147.01% 539.45% at 50% 50%, #FFAF00 0%, #FF0000 100%)" }}
                        className="rounded-full absolute top-0 left-0 transform -translate-x-[30%] md:-translate-x-[10%] -translate-y-[25%] md:translate-y-[17%] z-0 w-1/2 min-w-[200px] max-w-md aspect-square transition duration-300"
                    />

                    {/* Bottom Circle */}
                    <div
                        style={{ background: "radial-gradient(400.82% 264.77% at 50% 50%, #FFAF00 0%, #FF0000 100%)" }}
                        className="rounded-full absolute bottom-0 right-0 transform translate-x-[7%] -translate-y-[90%] z-0 w-1/2 min-w-[200px] max-w-xs aspect-square transition duration-300"
                    />

                    {/* Content */}
                    <div
                        style={{ background: "linear-gradient(180deg, rgba(255, 175, 0, 0.32) 0%, rgba(243, 243, 243, 0.73) 100%)" }}
                        className="w-full backdrop-blur-md py-8 md:px-12 md:py-12 md:rounded-xl relative z-[1]"
                    >
                        <div className="px-6">
                            <div className="md:grid md:grid-cols-3 md:gap-10">
                                <div className="max-w-sm flex-shrink-0">
                                    <h3 className="font-semibold text-lg md:text-4xl text-[#002639] mb-3 md:mb-8">Choose your domain</h3>
                                    <p className="font-medium text-sm md:text-base text-[#002639]">
                                        Designed Specially for College Students. And, we provide you 'licence to skill' - pay for one, get them all!!!
                                    </p>
                                </div>
                                <div className="md:col-span-2 hidden w-full min-h-[13rem] relative md:block flex-grow overflow-hidden rounded-tr-3xl">
                                    <img
                                        className="absolute object-cover w-full h-full rounded-bl-[9.5rem]"
                                        src="/images/raw_images/discussion.jpg"
                                        alt="discussion"
                                    />
                                </div>
                            </div>

                            <hr className="border-[#CBC09B] my-3 md:my-6" />
                        </div>

                        <div className="overflow-x-scroll w-full mt-6 md:mt-8 mb-8 md:mb-12 flex items-start justify-start lg:justify-between gap-4 px-4">
                            {[
                                {
                                    title: "Electric Vehicle",
                                    description:
                                        "The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank.The experience and knowledge I learned at Coding Ninjas greatly sharpened.",
                                    target: "/",
                                    image: "",
                                },
                                {
                                    title: "Vehicle Dynamics",
                                    description:
                                        "The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank.The experience and knowledge I learned at Coding Ninjas greatly sharpened.",
                                    target: "/",
                                    image: "",
                                },
                                {
                                    title: "Engineering Design (CAD)",
                                    description:
                                        "The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank.The experience and knowledge I learned at Coding Ninjas greatly sharpened.",
                                    target: "/",
                                    image: "",
                                },
                            ]?.map(({ title, description, image, target }, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-4 w-full max-w-[250px] min-h-[380px] md:max-w-xs flex-shrink-0 hover:transform hover:scale-[0.96] group transition duration-1000"
                                >
                                    <div
                                        className={`w-full rounded-2xl h-[150px] md:h-[160px] ${index % 2 === 0 ? "bg-[#F6E372]" : "bg-[#FF4949]"} mb-4`}
                                    ></div>
                                    <div className="pr-6">
                                        <h4 className="font-medium text-base md:text-xl mb-2 md:mb-4 text-black">{title}</h4>
                                        <p className="font-normal text-[10px] md:text-sm text-black mb-4 md:mb-6">{description}</p>

                                        <Link href={target}>
                                            <a className="flex w-fit items-center justify-start gap-2 text-sm md:text-[15px] text-[#1F28CF] hover:transform hover:translate-x-2 transition duration-500">
                                                Explore <img src="/images/svgs/arrow_right.svg" alt="arrow right" className="h-3 object-contain" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="overflow-x-scroll w-full mt-6 mb-8 md:mb-12 flex items-start justify-start lg:justify-between gap-4 px-4">
                            {[
                                {
                                    title: "Electric Vehicle",
                                    description:
                                        "The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank.The experience and knowledge I learned at Coding Ninjas greatly sharpened.",
                                    target: "/",
                                    image: "",
                                },
                                {
                                    title: "Vehicle Dynamics",
                                    description:
                                        "The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank.The experience and knowledge I learned at Coding Ninjas greatly sharpened.",
                                    target: "/",
                                    image: "",
                                },
                                {
                                    title: "Engineering Design (CAD)",
                                    description:
                                        "The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank.The experience and knowledge I learned at Coding Ninjas greatly sharpened.",
                                    target: "/",
                                    image: "",
                                },
                            ]?.map(({ title, description, image, target }, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-4 w-full max-w-[250px] min-h-[380px] md:max-w-xs flex-shrink-0 hover:transform hover:scale-[0.96] group transition duration-1000"
                                >
                                    <div
                                        className={`w-full rounded-2xl h-[150px] md:h-[160px] ${index % 2 === 0 ? "bg-[#F6E372]" : "bg-[#FF4949]"} mb-4`}
                                    ></div>
                                    <div className="pr-6">
                                        <h4 className="font-medium text-base md:text-xl mb-2 md:mb-4 text-black">{title}</h4>
                                        <p className="font-normal text-[10px] md:text-sm text-black mb-4 md:mb-6">{description}</p>

                                        <Link href={target}>
                                            <a className="flex w-fit items-center justify-start gap-2 text-sm md:text-[15px] text-[#1F28CF] hover:transform hover:translate-x-2 transition duration-500">
                                                Explore <img src="/images/svgs/arrow_right.svg" alt="arrow right" className="h-3 object-contain" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="px-4 mb-4 md:mt-20">
                            <div className="bg-[#14213D] rounded-xl px-6 md:px-10 py-8 md:py-12 relative md:flex md:items-center md:justify-between md:gap-7">
                                <div>
                                    <p className="text-white font-medium text-2xl mb-4 md:mb-2 text-center md:text-left">
                                        Book a counseling session with Mentor.
                                    </p>
                                    <p className="text-white font-light text-sm mb-8 md:mb-0 text-center md:text-left">{`Only thing you need to start is a will to do great. Everything else, we will take care of :)`}</p>
                                </div>
                                <Link href="/">
                                    <a className="bg-capabl_primary rounded-lg px-4 py-3 text-black font-medium text-base whitespace-nowrap absolute md:relative bottom-0 left-1/2 md:left-auto md:bottom-auto transform -translate-x-1/2 md:translate-x-0 translate-y-1/2 md:translate-y-0">
                                        Talk to Counselor
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
