import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from 'next/router'
import { FaPlay } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import CrackedSdtSlider from "../../components/courses/CrackedSdtSlider";
import Accordian from "../../components/courses/Accordian";
import HorizontalPathAnimation from "../../components/courses/PathAnimation/Horizontal";
import VerticalPathAnimation from "../../components/courses/PathAnimation/Vertical";
import JourneySlider from "../../components/courses/JourneySlider";
import { journeySlider } from "../../utils/data/courses/journeySliderData";
import AceYourDreamSlider from "../../components/courses/AceYourDreamSlider";
import {
  skillsAcquired,
  toolsLearnt,
} from "../../utils/data/courses/toolsAndSkills";
import DownloadBrochure from "../../components/courses/DownloadBrochure";
import Projects from "../../components/courses/Projects/Projects_design";
import LeadingExpertsSlider from "../../components/courses/LeadingExpertsSlider";
import RegsiterForm from "../../components/courses/RegsiterForm";
import Faqs from "../../components/courses/Faqs_design";
import Footer from "../../components/Footer_intrim";
import Module1 from "../../components/courses/Design/Modules/Module1";
import Modal from "../../components/courses/Module Modal/modal";
import FeatureComparison from "../../components/FeatureComparison";
import Header from "../../components/header_intrim";
import useGeneralStore from "../../store/generalStore";
import CtaForm from "../../components/CtaForm";
import VideoGridTestimonials from "../../components/VideoGridTestimonials";
import ScolarshipProcess from "../../components/courses/ScolarshipProcess";
import CompaniesUniversities from "../../components/courses/CompaniesUniversities";
import { HiOutlineDownload } from "react-icons/hi";
import {
  CompetitionsProjectsSvg,
  LeaderboardLearningEnvironmentSvg,
  MadeForCollegeStudentsSvg,
  OneToOneCounsellingSvg,
  TopCertificationsSvg,
  TrueCareerPlatformSvg,
  WorldClassExposureAndNetworkingSvg,
} from "../../components/courses/svgs";
import Alret from "../../components/alert";

const theme = {
  primary: "#076DE5",
  text: "#FFFFFF",
};

function download(dataurl, filename) {
  const link = document.createElement("a");
  link.href = dataurl;
  link.target = "_blank";
  link.rel = "noreferer";
  if (!!filename) link.download = filename;
  link.click();
  link.remove();
}

const accordianData = [
  {
    title: "Top Certifications",
    description: `Exclusive Certifications only for Capabl Students - Internationally Accredited (UK, ISO) Certification with 5+ Industries and technical organizations that stamps your performance and credibility`,
    image: <TopCertificationsSvg theme={theme} />,
  },
  {
    title: "Made for College Students",
    description: `Talk to experts in live sessions, get your doubts solved over mail, call, portal, msg, etc. Pause your course during your college projects/exams and a lot more features, especially for college students`,
    image: <MadeForCollegeStudentsSvg theme={theme} />,
  },
  {
    title: `1:1 Counselling and Reporting`,
    description: `Our students get an exclusive feature - a dedicated mentor who will help them throughout the program and even after! Furthermore, our experts discuss your performance report on a regular basis!`,
    image: <OneToOneCounsellingSvg theme={theme} />,
  },
  {
    title: `World-Class Exposure & Networking - at home`,
    description: `Live talks with Industry leaders, projects with students from different parts of India, and be in a community with Industry experts, researchers, and like-minded students.`,
    image: <WorldClassExposureAndNetworkingSvg theme={theme} />,
  },
  {
    title: `Competitions, Projects, Credits & More!`,
    description: `Get - updates on national/international events, your major-minor projects done, credits for internships, industrial projects in Design Engineering, and services that help you be Capabl`,
    image: <CompetitionsProjectsSvg theme={theme} />,
  },
  {
    title: `A true Career Platform`,
    description: `Profile on platforms like LinkedIn, etc. Support in interviews, resumes, and profiling. And, finally Internship and Job Guarantee!`,
    image: <TrueCareerPlatformSvg theme={theme} />,
  },
  {
    title: `Leaderboards & Learning Environment`,
    description: `Keep a track of your performance against 1000s of others to stay ahead of the competition. The more you stay ahead of the competition, chances are higher to get noticed by Industry! What more, you get exclusive perks like exclusive skilling, discounts, and more for good performance.`,
    image: <LeaderboardLearningEnvironmentSvg theme={theme} />,
  },
];

const scolarshipProcess = [
  {
    title: `Talk to Counsellor`,
    titleComponent: (
      <>
        Talk to <span className="font-semibold">Counsellor</span>
      </>
    ),
    description: `Confused about which path to choose? Don't worry, our counselors have got you covered, talk to them now.`,
    image: "/images/courses/talk_to_counseller.svg",
    cta: "Talk to Counsellor",
  },
  {
    title: `Take Scholarship Test`,
    titleComponent: (
      <>
        Take <span className="font-semibold">Scholarship</span> Test
      </>
    ),
    description: `All you need to do is take the test, crack it like a pro, and leave the rest to us.`,
    image: "/images/courses/take_scholarship_test.svg",
    cta: "Apply for Scholarship",
  },
  {
    title: `Crack the Interview`,
    titleComponent: (
      <>
        Crack the <span className="font-semibold">Interview</span>
      </>
    ),
    description: `Ace the Interview race with Expert Guidance to prove you really deserve the program.`,
    image: "/images/courses/crack_the_interview.svg",
    cta: "Apply for a Scholarship",
  },
  {
    title: `Get Admission`,
    titleComponent: (
      <>
        Get <span className="font-semibold">Admission</span>
      </>
    ),
    description: `The wait is over! Start your journey to be an industry Capabl engineer.`,
    image: "/images/courses/get_admission.svg",
    cta: "Apply for Scholarship",
  },
];

const moduleData = [
  {
    name: "Module 1",
    modulename: "Vehicle Dynamics",
    moduleindex: 0,
    intro:
      " Learn suspension terminologies, load transfer, steering geometry, & tire dynamics",
    heading1: "Projects",
    content1: [
      "Design a steering system for Ackerman geometry",
      "Design & Analysis of Knuckle",
      "Design of Suspension Geometry & Chassis for an ATV",
    ],
    skills: "3-4",
    heading2: "Skills",
    content2: [
      "CAD modeling",
      "Suspension system tuning",
      "Weldments & standards",
      "Design optimization",
    ],
    Sub_topics: "8",
    No_Projects: "11",
    heading3: "Job Roles",
    content3: [
      "MBD engineer",
      "Suspension engineer",
      "Steering engineer",
      "R&D Vehicle Dynamics",
    ],
  },
  {
    name: "Module 2",
    modulename: " Automotive Plastic Design",
    moduleindex: 1,
    intro:
      "Learn the principles of design of automotive plastic components using CATIA V5 with DFA and DFM.",
    heading1: "Projects",
    content1: [
      "Design of Alloy Wheel using Part modeling workbench",
      "Front Fender using Surface workbench",
      "Game controller - Product design using Surface modeling",
    ],
    skills: "3-4",
    heading2: "Skills",
    content2: [
      "CAD modeling",
      "Geometric Dimensioning & Tolerancing",
      "Surface modeling",
      "Self Quality Control (QC)",
    ],
    Sub_topics: "8",
    No_Projects: "7",
    heading3: "Job Roles",
    content3: [
      "Plastic engineer",
      "Trim design engineer",
      "Mechanical draftsman",
      "Product engineer",
    ],
  },
  {
    name: "Module 3",
    modulename: "BIW & Sheet Metal design",
    moduleindex: 2,
    intro:
      "Design sheet metal panels of automobiles using Catia V5 considering DFA",
    heading1: "Projects",
    content1: [
      "BIW upper body sheet metal design",
      "Closers - Hood panel design",
      "Closers - Door panel design (Front)",
    ],
    skills: "3-4",
    heading2: "Skills",
    content2: [
      "Surface modeling",
      "BIW techniques & guidelines",
      "DFA, DFM & DFS",
      "Automotive regulations",
    ],
    Sub_topics: "8",
    No_Projects: "7",
    heading3: "Job Roles",
    content3: [
      "BIW engineer",
      "Sheet metal engineer",
      "R&D engineer",
      "Product engineer",
    ],
  },
  {
    name: "Module 4",
    modulename: "BIW Fixture Design",
    moduleindex: 3,
    intro:
      "Using Siemens UG NX as a tool to learn to model BIW fixtures and units",
    heading1: "Projects",
    content1: [
      "Material Handling fixture design",
      "Unit detailing and (Bill Of Materials) BOM creation",
      "Welding fixture design using Standardized parts",
    ],
    skills: "3-4",
    heading2: "Skills",
    content2: [
      "CAD modeling",
      "Geometric Dimensioning & Tolerancing",
      "Bill Of Material (BOM) creation",
      "Component/Material selection",
    ],
    Sub_topics: "8",
    No_Projects: "8",
    heading3: "Job Roles",
    content3: [
      "BIW Fixture engineer",
      "Assembly-line specialist",
      "R&D engineer",
      "Jigs/Fixture engineer",
    ],
  },
  {
    name: "Module 5",
    modulename: "Engineering Design ",
    moduleindex: 4,
    intro: " Learn to use Solidworks as a tool for various CAD applications.",
    heading1: "Projects",
    content1: [
      "Surface Generation - Impeller Blade & Casing",
      "BLDC Motor design using Solidworks",
      "Design of Plastic Chair with DFM",
    ],
    skills: "3-4",
    heading2: "Skills",
    content2: [
      "CAD modeling",
      "Surface modeling",
      "Sheet metal modeling",
      "Geometric Dimensioning & Tolerancing",
    ],
    Sub_topics: "8",
    No_Projects: "6",
    heading3: "Job Roles",
    content3: [
      "Design Engineer",
      "Product Designer",
      "CAD Drafter",
      "Automotive Engineer",
    ],
  },
  {
    name: "Module 6",
    modulename: "FEA & Optimization",
    moduleindex: 5,
    intro:
      " Learn about FEA meshing, static, transient simulations & Topology Optimization.",
    heading1: "Projects",
    content1: [
      "Topology Optimization of Farming equipment to reduce weight",
      "Tubular Chassis crash simulation",
      "Structural Analysis of Door Panel",
    ],
    skills: "3-4",
    heading2: "Skills",
    content2: [
      "Geometric Cleanup",
      "1D, 2D, & 3D meshing",
      "Static & Transient Analysis",
      "Topology Optimization",
    ],
    Sub_topics: "6",
    No_Projects: "9",
    heading3: "Job Roles",
    content3: [
      "FEA analyst",
      "CAE analyst",
      "Product engineer",
      "R&D engineer",
    ],
  },
  {
    name: "Module 7",
    modulename: " CFD & Aerodynamics ",
    moduleindex: 6,
    intro:
      "Get the knowledge of CFD cases and models for simulating applications like pumps & propellers",
    heading1: "Projects",
    content1: [
      "CFD analysis of a propeller for varying speeds",
      "Thermal Performance analysis of a radiator",
      "Perform Lift Analysis on Airbus Aircraft to evaluate the thrust force",
    ],
    skills: "3-4",
    heading2: "Skills",
    content2: [
      "Mesh generation",
      "Thermal analysis",
      "Aerodynamics, Lift & Drag",
      "Air Flow analysis",
    ],
    Sub_topics: "7",
    No_Projects: "10",
    heading3: "Job Roles",
    content3: [
      "CFD analyst",
      "Heat-flow analyst",
      "Product engineer",
      "R&D engineer",
    ],
  },
];

const moduleDataExtended = [
  [
    "Suspension dynamics",
    "Analysis of suspension systems",
    "Study of steering systems",
    "Application of Automotive chassis",
    "In-depth study of Transmission systems",
    "Automotive Braking System",
    "Effects of Tyre dynamics",
    "Mechanical Design",
    "Engineering Analysis",
  ],
  [
    "Plastics in Automotive industry",
    "Introduction to CATIA",
    "Solid Modeling Workbench",
    "Surface Modeling Workbench",
    "Assembly & Drafting in Catia for Plastic design",
  ],
  [
    "CATIA Workbenches",
    "What is BIW?",
    "BIW Manufacturing",
    "Design for Excellence",
    "Industrial sheet metal design considerations",
  ],
  "Designing of Automobile Sheet Metal Components",
  [
    "Introduction to UG NX",
    "Introduction to BIW Fixture",
    "Prerequisites for BIW fixture design",
    "BIW units design",
    "BIW units design",
    "Other BIW Fixture Aspects",
  ],
  [
    "Introduction to CAD Modeling",
    "Sketching & Constraints",
    "Surface Modeling",
    "Part Modeling",
    "Design for Assembly & Design for Manufacturing",
    "Sheet Metal Modeling",
    "Assembly Modeling",
    "2D Drafting",
  ],
  [
    "Introduction to FEA",
    "Introduction to Hypermesh",
    "1D, 2D & 3D Meshing",
    "Linear Static Structural Analysis",
    "Modal, Transient & Explicit Structural Analysis",
    "Topology Optimization",
  ],
  [
    "Governing equations in CFD",
    "Introduction to Simulation Tool",
    "Procedure used in CFD",
    "Thermal Analysis using Multiple Reference Frames",
    "CFD in Turbomachinery",
    "Aero Acoustics CDF",
    "Key aspects of External Aerodynamics",
  ],
];

export default function Courses() {
  const openCtaForm = useGeneralStore((state) => state.openCtaForm);
  const moduleno = useGeneralStore((state) => state.module_no);
  const router = useRouter();
  const [reqType, setReqType] = useState();

  return (
    <div>
      <Head>
        <title>Design & Engineering - Capabl Courses</title>
        <meta name="description" content="Capable Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className="min-h-screen w-full">
        {/* Hero Section */}
        <section
          id="hero"
          className="px-4 pt-6 md:pt-7 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 max-w-7xl mx-auto overflow-hidden"
        >
          <div className="col-span-1 md:col-span-2 lg:col-span-1 w-full relative flex items-center justify-center md:order-1">
            <img
              className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md md:max-w-2xl"
              src="/images/raw_images/1_0_bg.jpg"
              alt="1 0 bg"
            />
            <div className="w-full h-full max-h-80 max-w-xs md:max-w-md z-[1] relative overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover"
                src={`/images/home/design_cae.jpg`}
                alt="video bg"
              />
            </div>
            {/* <button
              style={{ background: theme.primary, color: theme.text }}
              className="absolute z-[2] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-sm w-10 h-10 rounded-full pl-0.5"
            >
              <FaPlay />
            </button> */}
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-1 mt-12 md:pb-12">
            <h1
              title="From 0 to Hero in Design Engineerings Graduate with a core job, not just a degree!"
              className="relative text-lg md:text-3xl text-center md:text-left text-black font-medium mb-3 md:mb-2.5 max-w-md mx-auto md:max-w-lg md:mx-0 md:leading-[3rem]"
            >
              {`From`}
              <span style={{ color: theme.primary }}>{` 0 `}</span>
              {`to`}
              <span style={{ color: theme.primary }}>{` Hero `}</span>
              {`in `}
              <span className={`relative font-semibold`}>
                {`Design`}

                <span
                  style={{ background: theme.primary }}
                  className="w-full h-0.5 md:h-[0.1875rem] rounded-full absolute bottom-0 left-0"
                />
              </span>
              {` Graduate with a core job, not just a degree!`}

              <svg
                style={{ fill: theme.primary }}
                className="hidden md:block absolute -top-[1.8rem] left-[5ch] object-contain w-20"
                viewBox="0 0 104 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.65812 37.6855C4.52668 22.6386 16.4196 11.0974 29.5704 7.31762C45.9344 2.61241 62.8183 8.55874 76.7951 17.8625C84.7566 23.1621 92.047 29.5919 99.0889 36.2698C100.9 37.9858 103.706 35.1796 101.878 33.4342C88.5658 20.7437 74.0836 8.5109 56.6718 3.78265C40.9097 -0.496352 23.3961 1.67821 11.0392 14.3585C5.13224 20.4181 1.14649 28.5578 0.0415886 37.3719C-0.0884609 38.3866 1.46312 38.7022 1.65812 37.6855Z" />
                <path d="M102.423 32.4658C101.316 28.2461 100.342 23.9461 99.6149 19.6231C98.8888 15.2856 98.5469 10.8643 97.7027 6.56012C97.3761 4.90311 95.1 5.1455 95.0228 6.84265C94.6228 15.7541 97.4175 25.181 100.609 33.2168C101.055 34.3233 102.731 33.6382 102.423 32.4658Z" />
                <path d="M98.9279 33.1836C92.0995 32.9095 84.8485 33.9203 78.6529 37.3377C77.3596 38.0534 78.3858 40.0327 79.668 39.4746C85.9687 36.7323 92.0949 34.5282 98.8917 34.1255C99.4248 34.0957 99.4846 33.2075 98.9279 33.1836Z" />
              </svg>
            </h1>

            <p className="text-[#636363] text-sm text-center md:text-left">{`The best program now comes with the best Scholarship!`}</p>

            <div className="flex items-center justify-center md:justify-start gap-2 mt-6">
              <button
                onClick={() => {
                  setReqType('Talk to Counselor'); 
                  openCtaForm(); 
                }}
                style={{ background: theme.primary, color: theme.text }}
                className="font-normal text-center py-2 px-3 border border-transparent rounded-lg text-sm hover_animation"
              >
                Talk to Counselor
              </button>
              <button
                onClick={() => {
                  setReqType('Apply for Scholarship'); 
                  openCtaForm(); 
                }}
                style={{ borderColor: theme.primary, color: theme.primary }}
                className="font-normal text-center py-2 px-3 border bg-transparent rounded-lg text-sm hover_animation"
              >
                Apply for Scholarship
              </button>
            </div>

            <div className="hidden max-w-xl relative z-[2] rounded-lg p-6 light_shadow shadow-none bg-white md:bg-[#f2f4f7] md:flex items-start justify-between gap-4 md:gap-6 mt-5 md:mt-10">
              {/* <p className="flex flex-col justify-start items-start gap-1">
                                <span className="text-[#371B69] font-semibold text-lg">10,000+</span>
                                <span className="text-black text-xs text-left">Students</span>
                            </p> */}
              <p className="flex flex-col items-center justify-start gap-1">
                <span className="text-[#371B69] font-semibold text-lg flex gap-1 items-center">
                  4.8{" "}
                  <IoStar style={{ color: theme.primary }} className="mb-0.5" />
                </span>
                <span className="text-black text-xs text-left">
                  By 9,000+ Students
                </span>
              </p>
              <p className="flex flex-col items-center justify-start gap-1">
                <p className="flex flex-row items-center justify-start gap-1">
                  <span className="text-[#371B69] font-semibold font-serif text-lg">{`₹`}</span>
                  <span className="text-[#371B69] font-semibold text-lg">{` 10 Crore+`}</span>
                </p>
                <span className="text-black text-xs text-left">
                  Worth of Scholarship
                </span>
              </p>
              <p className="flex flex-col items-center justify-start gap-1">
                <span className="text-[#371B69] font-semibold text-lg">
                  40+
                </span>
                <span className="text-black text-xs text-left">
                  Industrial Projects
                </span>
              </p>
              <p className="flex flex-col items-center justify-start gap-1">
                <span className="text-[#371B69] font-semibold text-lg">6</span>
                <span className="text-black text-xs text-left">
                  Months Min.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Students Cracked Data Science Jobs! */}
        <section className="max-w-7xl hidden mx-auto mt-16 md:mt-20 pl-0 md:pl-4">
          <div className="p-4 md:py-10 md:pl-10 md:rounded-tl-2xl md:rounded-bl-2xl bg-[#14213D] grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-20">
            <div className="col-span-1 md:col-span-2 text-white pt-8 md:pt-0 flex flex-col justify-start md:justify-center max-w-lg">
              <h2 className="font-semibold text-lg md:text-xl mb-3 md:mb-5">{`Our alumni going places in the Design Engineerings Domain!`}</h2>
              <p className="text-sm mb-3 md:mb-6 font-light">
                {`Your success is our reward! Hear it from our alumni who made it to their dream careers with their efforts and our support ❤️`}
              </p>
              <button className="flex items-center justify-start gap-1 text-sm font-normal group">
                <span className="underline">Connect Now</span>
                <span className="transform rotate-90">
                  <FiChevronUp
                    style={{ color: theme.primary }}
                    className={`text-lg group-hover:animate-bounce`}
                  />
                </span>
              </button>
            </div>

            <div className="col-span-1 md:col-span-5">
              <CrackedSdtSlider theme={theme} />
            </div>
          </div>
        </section>

        {/* Take the journey now to be Capabl */}
        <section className="mt-16 hidden md:mt-20 max-w-7xl mx-auto overflow-hidden">
          <h2 className="text-center font-medium text-lg md:text-2xl max-w-xs md:max-w-sm mx-auto px-4">
            Why wait, Take the journey now to be{" "}
            <span style={{ color: theme.primary }}>Capabl</span>
          </h2>

          <JourneySlider arr={journeySlider} theme={theme} />

          <div className="flex items-center justify-center mt-10 sm:mt-14 lg:mt-16">
            <span
              style={{ background: theme.primary }}
              className="w-7 md:w-10 h-1.5 md:h-2"
            />
          </div>
        </section>

        <section className="px-4 lg:px-6 mt-6 lg:mt-8 max-w-7xl mx-auto">
          <h2 className="text-center font-medium text-lg md:text-2xl mb-3 lg:mb-4">
            Become a real Design Engineer with the Capabl Ecosystem!
          </h2>
          <p className="text-center text-[#636363] text-xs md:text-sm max-w-xl mx-auto">
            {`To become the best, you need the best. You need not just a course but an ecosystem of Stanford/IIT that helps you crack your dream EV jobs with the likes of Daimler, Tata, Ather, Honda, etc., or get into your dream university!`}
          </p>

          <Accordian data={accordianData} theme={theme} />
        </section>

        {/* how the scolarship system works */}
        <section className="max-w-7xl mt-20 mx-auto px-4">
          <div className="bg-transparent md:bg-[#F2F6F7] md:rounded-3xl p-0 md:p-6">
            <div className="bg-transparent md:bg-white md:bg-opacity-30 md:rounded-3xl md:px-6 md:pt-10 md:pb-4">
              <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-light mb-4">
                Sponsorship of upto <span className="font-medium">2 Lakhs</span>
              </h3>
              <div className="flex flex-col items-center justify-start text-center">
                <img
                  src="/images/courses/news.png"
                  alt="sponsorship"
                  className="w-4/5 object-contain max-w-xs -mb-0.5"
                />
                <p className="text-lg sm:text-xl md:text-2xl font-extralight border-4 rounded-md border-capabl_primary px-3 py-1.5">
                  {`Because, We Know You're `}
                  <span className="font-semibold">{`Capabl.`}</span>{" "}
                </p>
              </div>

              <div className="flex w-fit mt-10 mb-4 items-center justify-center gap-2 bg-capabl_primary bg-opacity-[0.15] rounded-3xl py-1 pl-3 pr-3">
                <span className="w-3 h-3 rounded-full bg-capabl_primary flex-shrink-0" />
                <span className="text-black text-sm font-light">
                  Our Scolarship Partners
                </span>
              </div>
              <p className="text-sm font-light">{`We're partnered with various organizations, companies and even goverment bodies to make the program affordable and best!. And the list of associates is only growing.`}</p>

              <img
                src="/images/courses/partners.png"
                alt="partners"
                className="mt-8 md:mt-10 mx-auto w-full max-w-5xl object-contain"
              />
            </div>

            {/*  */}
            <div className="hidden">
              <ScolarshipProcess data={scolarshipProcess} />
            </div>
          </div>
        </section>

        {/* Path section */}
        <section className="max-w-7xl  mx-auto px-6 mt-16 mb-10 md:mb-16 md:mt-28 lg:mt-32">
          <div className="hidden md:block w-full px-6">
            <HorizontalPathAnimation />
          </div>
          <div className="block md:hidden w-full px-4">
            <VerticalPathAnimation />
          </div>
        </section>

        {/* Ace your dream career */}
        <section className="mt-32 md:mt-40 mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative mb-8 md:mb-11">
            <svg
              className="w-16 md:w-[4.5rem] object-contain absolute -top-10 md:-top-11 left-1/2 transition-all duration-200 transform -translate-x-1/2 fill-capabl_primary"
              viewBox="0 0 108 58"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.8445 35.5129C9.30516 18.0189 24.767 6.88707 39.1312 5.42451C57.0058 3.60239 72.1618 14.7657 83.3751 29.2976C88.7616 36.2783 93.424 44.117 97.7779 52.2347C91.8514 51.0025 85.4661 50.9979 79.3161 53.2543C77.7989 53.8135 78.2278 56.4457 79.6859 56.0743C86.1741 54.4213 92.3842 53.2676 98.6614 53.8934C99.1698 54.8542 99.6743 55.8184 100.176 56.7849C101.439 59.217 104.95 56.7005 103.936 54.224C104.33 54.0275 104.665 53.5927 104.684 52.9775C104.855 47.6206 105.185 42.1982 105.77 36.8063C106.026 34.4647 106.358 32.1211 106.691 29.7783C107.126 26.7091 107.562 23.641 107.823 20.5805C107.999 18.5024 105.639 18.2583 105.045 20.2895C102.13 30.2743 101.891 41.4647 102.498 51.4313C93.3018 33.871 82.7452 16.9061 67.4389 7.54826C52.9028 -1.33695 34.6432 -2.84197 18.3685 9.55601C10.5893 15.4803 4.10768 24.3696 0.3156 34.7529C-0.123815 35.9476 1.33922 36.6947 1.8445 35.5129Z" />
            </svg>

            <h2 className="text-center font-medium text-lg md:text-2xl mb-3 md:mb-4 text-black">{`Ace your dream career in Design!`}</h2>
            <p className="text-xs md:text-sm max-w-sm md:max-w-lg mx-auto text-center font-light text-[#636363]">{`With expert guidance and your efforts, nothing can stop you from making your dream career a reality.`}</p>
          </div>

          <AceYourDreamSlider />
        </section>

        {/* <section className="max-w-7xl mx-auto px-4 mt-12 md:mt-28">
          <CompaniesUniversities
            companies={[
              "/images/courses/company_tcs.png",
              "/images/courses/company_lg.png",
              "/images/courses/company_ather.png",
              "/images/courses/company_mahle.png",
              "/images/courses/company_hyundai.png",
              "/images/courses/company_mahindra.png",
            ]}
            moreCount="20"
            roles={[
              "Battery Pack Designer",
              "CAE Engineer for EV",
              "Cells & Battery R&D",
              "EV System engineer",
              "BMS Engineer",
              "Battery Simulation Engineer",
              "Thermal Systems Engineer",
              "Motor Controller Designer",
              "EV Testing Engineer",
              "HV Systems Engineer",
            ]}
            universities={[
              {
                image: "/images/courses/university_mit.jpg",
                degree: "for MS/Ph.D. in",
                courses: ["Course #1", "Course #2"],
              },
              {
                image: "/images/courses/university_michigan.jpg",
                degree: "for MS in",
                courses: ["Automotive"],
              },
              {
                image: "/images/courses/university_oxford_brookes.jpg",
                degree: "for MS in",
                courses: ["EV Engineering"],
              },
              {
                image: "/images/courses/university_east_london.jpg",
                degree: "for M.Sc. in",
                courses: ["Automotive with EV"],
              },
              {
                image: "/images/courses/university_conventry.jpg",
                degree: "for M.Sc. in",
                courses: ["EV Technology"],
              },
            ]}
            theme={theme}
          />
        </section> */}

        {/* Pathway to become a kick-ass Data Scientist for college student */}
        <section className="max-w-7xl mx-auto px-4 mt-20">
          <div
            style={{ background: theme.primary }}
            className="w-8 md:w-12 h-1.5 md:h-2 mx-auto mb-6 md:mb-10"
          />

          <h2 className="text-center font-medium text-lg md:text-2xl mb-3 md:mb-4 text-black">{`Pathway to become a kick-ass Design Engineer!`}</h2>
          <p className="text-xs md:text-sm max-w-md md:max-w-2xl mx-auto text-center font-normal text-[#6c6c6c]">
            {`Our Design & CAE module is verified by working professionals from companies like SAE India, Tata, and Daimler and graduates of Standford & IITs, taught by top industry experts in a systematic manner, with practical foundation. `}
          </p>

          <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 relative">
            <svg
              className="w-24 fill-capabl_primary z-10 hidden lg:block absolute -top-7 left-1/2 transform -translate-x-1/2"
              viewBox="0 0 111 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5488 8.96001L31.5488 8.95999C48.1802 2.83538 65.4598 9.76289 79.8854 21.0127C87.9076 27.2688 95.2855 34.8832 102.427 42.8399C96.2437 43.094 89.881 44.6881 84.3293 48.5099L84.3287 48.5103C83.4194 49.1383 83.3767 50.2514 83.6972 51.0164C83.8609 51.4071 84.1402 51.7708 84.5241 51.9761C84.929 52.1926 85.4123 52.2099 85.8829 51.9524C92.3568 48.4097 98.5954 45.5742 105.506 44.9366C106.077 44.886 106.311 44.3672 106.36 44.0298C106.388 43.8401 106.377 43.6326 106.312 43.4403C106.307 43.4274 106.303 43.4144 106.298 43.4013C106.419 43.2768 106.531 43.1408 106.632 42.9955C106.682 43.1465 106.733 43.297 106.783 43.4472L106.784 43.449C106.935 43.8931 107.214 44.2191 107.593 44.3664C107.965 44.511 108.357 44.4537 108.678 44.2873C109.319 43.955 109.767 43.1542 109.559 42.2202C108.395 36.9977 107.368 31.6757 106.597 26.3221C106.263 23.9995 106.004 21.6545 105.743 19.3013L105.742 19.2945C105.402 16.2179 105.059 13.1271 104.55 10.0846L104.55 10.0843C104.448 9.48191 104.191 9.00726 103.817 8.69778C103.442 8.38725 102.978 8.26906 102.529 8.3358C101.618 8.47122 100.889 9.32148 100.848 10.556L100.848 10.5563C100.554 19.5416 102.403 28.8815 104.872 37.3647C91.51 22.5076 76.896 8.42691 59.4709 3.08472L59.4709 3.0847C43.0289 -1.95447 24.7535 1.15519 11.9316 17.3882C5.80926 25.1369 1.71056 35.4455 0.610827 46.5277C0.523706 47.388 1.03872 48.0222 1.69303 48.1654C2.01453 48.2357 2.36792 48.1837 2.66268 47.9739C2.96063 47.7618 3.15244 47.4223 3.21703 47.0028L3.2171 47.0023C6.07135 28.3514 18.1798 13.8815 31.5488 8.96001Z"
                fill="inherit"
                stroke="white"
                strokeWidth="0.94422"
              />
            </svg>

            {moduleData.length % 2 == 0 && (
              <svg
                className="w-24 fill-capabl_primary z-10 hidden lg:block absolute -bottom-7 left-1/2 transform -translate-x-1/2"
                viewBox="0 0 112 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.0177 44.2917L32.0177 44.2917C48.9519 50.5008 66.5447 43.4772 81.2292 32.0751C89.3987 25.7318 96.9118 18.0109 104.184 9.94339C97.8867 9.68786 91.4062 8.07316 85.7523 4.19793L85.7517 4.19754C84.8298 3.56368 84.7856 2.43856 85.1114 1.66413C85.2777 1.26888 85.5613 0.901817 85.9498 0.694912C86.359 0.477009 86.8473 0.459461 87.3234 0.718884C93.9137 4.30964 100.266 7.18438 107.303 7.83054C107.876 7.88181 108.113 8.40172 108.164 8.74384C108.192 8.93551 108.181 9.1451 108.115 9.33916C108.11 9.35313 108.105 9.3672 108.099 9.3813C108.227 9.51212 108.345 9.65554 108.452 9.80901C108.505 9.6506 108.558 9.49262 108.611 9.33508L108.611 9.33327C108.765 8.884 109.048 8.5558 109.431 8.40768C109.806 8.26247 110.202 8.31984 110.527 8.48752C111.176 8.82241 111.632 9.63124 111.42 10.5765C110.235 15.8694 109.19 21.2632 108.404 26.6891C108.065 29.0431 107.801 31.4198 107.535 33.8047L107.535 33.8109C107.188 36.9293 106.84 40.0618 106.321 43.1454L106.321 43.1458C106.218 43.7556 105.956 44.2352 105.577 44.5475C105.197 44.8607 104.728 44.9795 104.274 44.9123C103.353 44.776 102.612 43.9187 102.57 42.6683L102.57 42.6681C102.27 33.5508 104.157 24.0733 106.675 15.4674C93.0669 30.5351 78.1854 44.8179 60.4402 50.2346L60.4402 50.2346C43.7075 55.3406 25.1092 52.1901 12.06 35.7409C5.8289 27.8888 1.65708 17.4421 0.537733 6.21108C0.449199 5.3405 0.972669 4.7018 1.63311 4.55795C1.95769 4.48726 2.31442 4.53946 2.6122 4.7505C2.91341 4.96395 3.10814 5.30639 3.17377 5.73077L3.17384 5.7312C6.07937 24.6347 18.4056 39.3025 32.0177 44.2917Z"
                  fill="inherit"
                  stroke="white"
                  strokeWidth="0.94422"
                />
              </svg>
            )}
            {/* Module 1 */}
            <Module1 data={moduleData[0]} />

            {/* Module 2 */}
            <Module1 data={moduleData[1]} />

            {/* Module 3 */}
            <Module1 data={moduleData[2]} />

            {/* Module 4 */}
            <Module1 data={moduleData[3]} />
            <Module1 data={moduleData[4]} />
            <Module1 data={moduleData[5]} />
            <Module1 data={moduleData[6]} />
          </div>
          <section className="max-w-7xl mx-auto flex items-center justify-center px-4 mt-8 md:mt-[4.5rem]">
            <button
              onClick={() =>
                download("/pdfs/Capabl-Brochure.pdf", "Capabl Brochure")
              }
              style={{ background: theme.primary, color: theme.text }}
              className="flex-shrink-0 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm border border-transparent hover_animation"
            >
              <HiOutlineDownload className="text-xl" />
              Download Brochure
            </button>
          </section>
        </section>

        {/* Minor & Major Projects */}
        <section className="max-w-7xl px-4 mx-auto mt-16 sm:mt-20 lg:mt-24">
          <h2 className="text-center font-medium text-lg md:text-2xl mb-3 md:mb-4 text-black">{`40+ of Minor and Major Projects`}</h2>
          <p className="text-xs md:text-sm max-w-md md:max-w-2xl mx-auto text-center font-normal text-[#6c6c6c]">{`Success isn't really that difficult. Right mentoring, active peers, good opportunities & most importantly, industrial skills to back your interests can help achieve impossible`}</p>

          <Projects />
        </section>

        {/* All tools learnt & Skills Acquired */}
        {/* <section className="max-w-7xl mx-auto px-4 mt-4 md:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-[#f2f4f7] rounded-2xl px-6 pb-8 lg:pb-12 transition-all duration-200">
            <div className="flex items-center justify-start gap-3.5">
              <div className="bg-[#e3e7ec] rounded-b-full px-3 pt-4 pb-2.5 sm:pb-3 w-full max-w-[3rem] sm:max-w-[3.3rem]">
                <svg
                  className="w-full object-contain"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.8825 32.1733C40.4606 30.3457 40.587 28.3975 40.2409 26.4979C39.8108 24.1375 38.6716 21.9642 36.9751 20.2677C35.2786 18.5712 33.1054 17.432 30.745 17.0019C28.3846 16.5719 25.9492 16.8714 23.7634 17.8605C23.4053 18.0225 22.9843 17.9458 22.7064 17.6679L8.02618 2.98766C7.35808 2.31956 6.45194 1.94423 5.50711 1.94423C4.56227 1.94423 3.65613 2.31956 2.98803 2.98766C2.31993 3.65576 1.94459 4.5619 1.94459 5.50674C1.94459 6.45158 2.31993 7.35771 2.98803 8.02582L17.6683 22.7061C17.9462 22.984 18.0229 23.405 17.8609 23.763C16.8717 25.9489 16.5722 28.3842 17.0023 30.7446C17.4324 33.105 18.5716 35.2783 20.2681 36.9748C21.9646 38.6713 24.1378 39.8105 26.4982 40.2405C28.3978 40.5867 30.346 40.4602 32.1737 39.8821L25.1854 32.8939C24.6231 32.3202 24.3082 31.549 24.3082 30.7457C24.3082 29.9425 24.6232 29.1713 25.1854 28.5976L25.1921 28.5909L28.598 25.1851C29.1716 24.6228 29.9428 24.3079 30.7461 24.3079C31.5493 24.3079 32.3206 24.6228 32.8942 25.1851L32.9009 25.1917L39.8825 32.1733ZM42.0988 26.1593C42.5976 28.8974 42.2502 31.7224 41.1028 34.258C40.975 34.5404 40.7168 34.7421 40.4118 34.7977C40.1069 34.8532 39.7941 34.7556 39.5749 34.5364L31.5694 26.5309C31.3491 26.3164 31.0537 26.1963 30.7461 26.1963C30.4385 26.1963 30.1431 26.3164 29.9228 26.5309L26.5313 29.9224C26.3168 30.1427 26.1967 30.4381 26.1967 30.7457C26.1967 31.0533 26.3168 31.3487 26.5313 31.5691L26.5341 31.5719L34.5368 39.5746C34.7559 39.7937 34.8536 40.1065 34.798 40.4115C34.7425 40.7164 34.5408 40.9747 34.2584 41.1025C31.7228 42.2499 28.8977 42.5973 26.1597 42.0984C23.4217 41.5995 20.9007 40.2781 18.9327 38.3101C16.9648 36.3421 15.6433 33.8212 15.1444 31.0831C14.685 28.5617 14.9433 25.9665 15.8831 23.5915L1.6527 9.36114C0.630451 8.33889 0.0561523 6.95242 0.0561523 5.50674C0.0561524 4.06106 0.630451 2.67458 1.6527 1.65233C2.67495 0.630081 4.06142 0.0557861 5.50711 0.0557861C6.95279 0.0557862 8.33926 0.630081 9.36151 1.65233L23.5919 15.8827C25.9669 14.9429 28.5621 14.6847 31.0835 15.1441C33.8215 15.643 36.3425 16.9644 38.3105 18.9324C40.2784 20.9003 41.5999 23.4213 42.0988 26.1593Z"
                    fill={theme.primary}
                  />
                </svg>
              </div>
              <p className="text-base sm:text-lg text-black font-normal">
                Tools You Will Learn
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 sm:gap-5 mt-8 justify-items-center">
              {toolsLearnt?.map((item, index) => (
                <div
                  className="w-full max-w-[5rem] sm:max-w-[6rem] mb-1 aspect-square rounded-full p-2 bg-white flex items-center justify-center relative group"
                  style={{
                    boxShadow: "6px 6px 11px rgba(212, 221, 251, 0.15)",
                  }}
                  key={index}
                >
                  <span
                    style={{ borderColor: theme.primary }}
                    className="bg-transparent absolute top-0 left-0 w-full h-full rounded-full border transition-all duration-200 transform opacity-0 group-hover:opacity-100"
                  />
                  {!!item?.image && (
                    <img
                      className="w-full object-contain transition-all duration-200 group-hover:scale-105"
                      src={item?.image}
                      alt={item?.name}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-[#f2f4f7] rounded-2xl px-6 pb-8 lg:pb-12 transition-all duration-200">
            <div className="flex items-center justify-start gap-3.5">
              <div className="bg-[#e3e7ec] rounded-b-full px-3.5 pt-4 pb-2.5 sm:pb-3 w-full max-w-[3rem] sm:max-w-[3.3rem]">
                <svg
                  className="w-full object-contain"
                  viewBox="0 0 35 51"
                  fill={theme.primary}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8503 0C9.05758 0.0339491 1.88295 5.88756 0.329123 14.102C-0.638081 19.223 0.539101 23.8871 3.694 28.0498C4.06539 28.5408 4.49059 28.6387 4.86199 28.3436C5.23338 28.0485 5.21895 27.6255 4.84362 27.1397C2.51288 24.1222 1.38425 20.7077 1.49056 16.908C1.70972 9.07356 7.70848 2.50701 15.4907 1.59039C19.7769 1.08637 23.6654 2.13357 27.126 4.71632C27.1579 4.74066 27.1892 4.76564 27.2206 4.79064C27.2785 4.83674 27.3364 4.88291 27.3977 4.92524C27.8006 5.20466 28.2324 5.1681 28.4896 4.83514C28.7468 4.50218 28.7179 4.0517 28.2901 3.77619C28.0462 3.61924 27.8034 3.46028 27.5607 3.30136C26.6283 2.69087 25.6968 2.08091 24.7034 1.58778C22.5688 0.550727 20.2259 0.00790414 17.8503 0Z"
                    fill="inherhit"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0964 21.3502C10.2444 20.0961 9.78492 18.6189 9.7761 17.1051C9.77005 16.097 9.96411 15.0977 10.3471 14.1644C10.7302 13.231 11.2946 12.3822 12.0082 11.6664C12.7217 10.9507 13.5702 10.3821 14.5051 9.99343C15.44 9.60472 16.4428 9.40348 17.456 9.40127C18.9774 9.39768 20.4658 9.84273 21.7332 10.6802C23.0006 11.5177 23.9902 12.7101 24.5769 14.1067C25.1637 15.5034 25.3214 17.0417 25.03 18.5275C24.7386 20.0133 24.0113 21.3798 22.9399 22.4546C21.8685 23.5293 20.501 24.2641 19.0101 24.5661C17.5193 24.8682 15.9719 24.7239 14.5634 24.1515C13.1549 23.5791 11.9485 22.6043 11.0964 21.3502ZM19.4928 13.6932C20.8064 14.713 21.0676 16.1154 20.3392 18.0113L22.8983 20.0326C23.981 18.5271 24.3275 15.0159 21.7828 12.6121C20.6718 11.5422 19.1991 10.9239 17.6536 10.8782C16.1082 10.8326 14.6013 11.3629 13.4284 12.3653C10.6764 14.7391 10.8798 18.3155 12.0845 20.1018C12.2092 19.9847 12.3318 19.8638 12.4545 19.743C12.7243 19.4772 12.9943 19.2112 13.2866 18.9841C13.5796 18.7564 13.8925 18.5611 14.2065 18.365C14.3482 18.2765 14.4901 18.1879 14.6305 18.0962C13.9034 15.9195 14.1751 14.5942 15.5557 13.6175C16.1329 13.2072 16.8276 12.9929 17.5368 13.0065C18.2461 13.0202 18.932 13.261 19.4928 13.6932ZM13.0662 21.3553C14.9651 23.6756 19.3563 24.1052 21.9022 21.3853C21.3017 20.453 20.4106 19.7421 19.3655 19.3614C19.1566 19.2929 18.9312 19.2929 18.7224 19.3614C17.9171 19.6532 17.0342 19.6532 16.2289 19.3614C16.0046 19.2897 15.7629 19.292 15.54 19.368C14.5224 19.7491 13.655 20.4459 13.0662 21.3553ZM16.4705 17.8196C16.7734 18.0181 17.1287 18.123 17.4914 18.121V18.1197C17.7338 18.1183 17.9735 18.0692 18.1968 17.9753C18.42 17.8813 18.6224 17.7444 18.7922 17.5723C18.962 17.4002 19.0959 17.1963 19.1862 16.9725C19.2765 16.7487 19.3213 16.5093 19.3182 16.2681C19.3133 15.9072 19.2011 15.5559 18.9958 15.2583C18.7904 14.9608 18.5012 14.7303 18.1645 14.5961C17.8277 14.4618 17.4586 14.4298 17.1036 14.5039C16.7486 14.5781 16.4235 14.7552 16.1695 15.0128C15.9155 15.2705 15.7438 15.5972 15.6761 15.9518C15.6084 16.3064 15.6477 16.673 15.7891 17.0054C15.9304 17.3378 16.1675 17.6211 16.4705 17.8196Z"
                    fill="inherhit"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.6772 17.595C4.67896 17.4701 4.68071 17.3451 4.68071 17.2202L4.67546 17.2188V16.4863C4.6807 15.1897 5.20696 14.6048 6.50356 14.388C6.60417 14.3586 6.69748 14.3085 6.77749 14.241C6.85749 14.1736 6.92243 14.0902 6.96813 13.9963C7.25648 13.3779 7.51144 12.7445 7.73193 12.0991C7.7609 11.9922 7.76723 11.8804 7.75051 11.771C7.73379 11.6615 7.69439 11.5567 7.63481 11.4632C6.96026 10.5766 6.98913 9.66255 7.76605 8.86866C8.20043 8.43124 8.63876 7.99252 9.08627 7.56293C9.85137 6.8291 10.7766 6.77296 11.6047 7.42583C11.8527 7.62299 12.043 7.61646 12.312 7.49242C12.9183 7.20516 13.5365 6.94662 14.1611 6.70898C14.4499 6.5993 14.6034 6.46872 14.6415 6.13054C14.753 5.13165 15.4892 4.5049 16.5089 4.49184C17.1459 4.484 17.7841 4.484 18.4237 4.49184C19.4434 4.50359 20.1822 5.13034 20.2964 6.12531C20.3344 6.45958 20.4775 6.60191 20.7701 6.71159C21.3804 6.93748 21.988 7.18035 22.5759 7.45978C22.8765 7.60471 23.0838 7.61777 23.3634 7.39318C24.1376 6.77557 25.0838 6.83563 25.8083 7.52376C26.2794 7.97293 26.744 8.43516 27.198 8.90392C27.9487 9.67692 27.9907 10.6118 27.2925 11.4462C27.2016 11.5369 27.1435 11.6552 27.1276 11.7824C27.1117 11.9096 27.1388 12.0385 27.2046 12.1487C27.4613 12.6924 27.6874 13.2499 27.8818 13.8187C28.0091 14.2091 28.1849 14.3932 28.6219 14.4337C29.622 14.5356 30.2361 15.2302 30.2598 16.233C30.2716 16.8676 30.2676 17.5022 30.2598 18.1381C30.2414 19.3015 29.6036 19.9818 28.4225 20.051C28.0878 20.0706 27.9382 20.209 27.8253 20.5093C27.6159 21.0727 27.3763 21.6245 27.1075 22.1624C26.9434 22.494 26.9828 22.7108 27.2387 22.9798C27.9855 23.7645 27.9631 24.7712 27.2072 25.5547C26.7807 25.9999 26.3385 26.4347 25.8949 26.8682C25.0353 27.7078 24.0431 27.7274 23.1599 26.893C22.8975 26.6502 22.6783 26.6384 22.3725 26.7808C21.8584 27.0303 21.3294 27.2483 20.7885 27.4336C20.4342 27.5498 20.3029 27.7287 20.3029 28.0982C20.2911 29.2434 19.5365 29.972 18.3777 29.9903C17.9877 29.9955 17.5947 29.9937 17.2015 29.992C17.0048 29.9911 16.8078 29.9903 16.6113 29.9903C15.3869 29.9811 14.6467 29.2734 14.6257 28.0604C14.6205 27.6987 14.4814 27.5472 14.1506 27.4375C13.6222 27.268 13.1072 27.0593 12.6099 26.8134C12.2425 26.628 12.0049 26.6698 11.707 26.957C10.9314 27.7065 9.89468 27.6895 9.11514 26.9479C8.6532 26.5092 8.20437 26.0574 7.75948 25.603C6.95764 24.783 6.92745 23.7854 7.71486 22.9549C7.9629 22.6938 7.97077 22.4757 7.81854 22.1715C7.56262 21.6814 7.34075 21.1745 7.15449 20.6542C7.02325 20.2455 6.83165 20.0523 6.36708 20.0405C5.42087 20.0157 4.72795 19.291 4.68071 18.3431C4.67021 18.0942 4.67371 17.8447 4.6772 17.595ZM22.4463 25.225C22.5707 25.185 22.7047 25.142 22.8528 25.0924C22.9604 25.1478 23.0745 25.2008 23.1911 25.2548C23.4728 25.3855 23.7685 25.5226 24.0182 25.7166L24.0696 25.7552C24.5402 26.11 24.5618 26.1263 25.0182 25.6735C25.138 25.5548 25.2568 25.4354 25.3757 25.316C25.6136 25.0769 25.852 24.8374 26.097 24.6041C26.3503 24.3625 26.3398 24.1588 26.1049 23.8977C25.3804 23.0868 25.3279 22.4679 25.8148 21.4899C26.0645 20.9962 26.2836 20.4877 26.471 19.9674C26.7702 19.1161 27.3477 18.6382 28.2466 18.6095C28.6876 18.5951 28.8136 18.4097 28.7991 18.0088C28.7821 17.4709 28.786 16.9329 28.7991 16.3962C28.807 16.0528 28.6692 15.8805 28.3188 15.8648C27.3516 15.823 26.8201 15.2694 26.5261 14.3945C26.3315 13.8258 26.1063 13.2679 25.8516 12.7232C25.5012 11.9502 25.5327 11.2347 26.114 10.5909C26.3713 10.3076 26.3345 10.0934 26.072 9.84536C25.6665 9.46539 25.2754 9.07105 24.8909 8.67019C24.656 8.42472 24.4474 8.39729 24.1744 8.62449C23.5116 9.17421 22.7977 9.20032 22.0248 8.82166C21.4371 8.53783 20.8343 8.28632 20.219 8.06825C19.4145 7.78099 18.9342 7.25608 18.8528 6.40213C18.8252 6.10703 18.6927 5.95687 18.3882 5.95687H16.5719C16.2727 5.95426 16.1205 6.08745 16.0955 6.38777C16.0234 7.29525 15.4892 7.80971 14.652 8.09959C14.0664 8.30322 13.494 8.54262 12.938 8.81643C12.1703 9.19379 11.4551 9.17421 10.7884 8.6271C10.5207 8.40774 10.3094 8.40774 10.0692 8.65714C9.67289 9.06844 9.26475 9.47453 8.85398 9.86625C8.62957 10.0817 8.56921 10.2854 8.80018 10.5374C9.44848 11.2438 9.44979 12.0063 9.03771 12.8381C8.78117 13.3826 8.5581 13.942 8.36973 14.5134C8.08888 15.319 7.55869 15.8008 6.68992 15.8504C6.30146 15.8726 6.13348 16.0345 6.1466 16.4263C6.15623 16.8068 6.15302 17.1873 6.14981 17.5674C6.14821 17.7573 6.1466 17.9471 6.1466 18.1368C6.14529 18.4345 6.27259 18.5912 6.58624 18.5912C7.62956 18.6082 8.22799 19.1683 8.53771 20.1319C8.7105 20.6231 8.91929 21.101 9.16239 21.5617C9.59809 22.4431 9.53772 23.1417 8.87367 23.8455C8.57577 24.1601 8.60201 24.3834 8.90123 24.6615C9.17157 24.9149 9.43142 25.1786 9.69126 25.4424C9.82109 25.5742 9.9512 25.7062 10.0823 25.8367C10.3107 26.0678 10.5312 26.0783 10.7582 25.8445C11.5194 25.0611 12.3632 25.0245 13.3042 25.5142C13.7595 25.7346 14.2296 25.9235 14.711 26.0796C15.631 26.4047 16.0811 26.9662 16.089 27.9259C16.0916 28.3751 16.2675 28.5422 16.7045 28.5252C17.2294 28.5082 17.7544 28.5148 18.2793 28.5252C18.6625 28.5331 18.8423 28.3946 18.8541 27.9859C18.883 26.9179 19.2977 26.4086 20.3174 26.0495C20.6124 25.9453 20.9008 25.8226 21.1893 25.6997C21.396 25.6117 21.6028 25.5236 21.8122 25.4424C22.0089 25.3654 22.2103 25.3008 22.4463 25.225Z"
                    fill="inherhit"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.98 49.93C22.8798 49.9671 22.7796 50.0042 22.6809 50.0438H12.2674L12.2327 50.0301L12.181 50.0094C12.1065 49.9794 12.0321 49.9495 11.9563 49.925C10.6527 49.4985 9.88238 48.6145 9.64528 47.2731C9.61928 47.1299 9.6084 46.9834 9.59774 46.8402C9.59334 46.781 9.58898 46.7223 9.5836 46.6646C7.1715 46.3512 6.41952 44.5349 7.73187 42.2734C7.2883 41.7694 6.95364 41.1792 7.05601 40.5054C7.12226 40.063 7.26758 39.6349 7.42254 39.1784C7.49166 38.9748 7.56272 38.7655 7.62951 38.5468C6.63081 37.2502 6.7896 36.015 8.25025 34.6949C8.21731 34.5908 8.17606 34.4895 8.12689 34.392C7.48821 33.2952 6.84735 32.1996 6.20429 31.1054C6.18186 31.0673 6.15504 31.0311 6.12823 30.9949C6.10642 30.9655 6.0846 30.9361 6.06518 30.9057C5.79221 30.48 5.84077 30.0817 6.19642 29.8271C6.27902 29.765 6.37425 29.7216 6.47546 29.6999C6.57667 29.6782 6.68142 29.6787 6.7824 29.7015C6.88338 29.7242 6.97814 29.7687 7.06008 29.8316C7.14202 29.8946 7.20916 29.9746 7.2568 30.0661C8.0534 31.3705 8.82112 32.6932 9.57572 34.0224C9.70958 34.2601 9.81195 34.3907 10.1138 34.3907C15.0045 34.3854 19.8996 34.3854 24.799 34.3907C25.0484 34.3907 25.2177 34.3515 25.3345 34.0903C26.3765 31.7257 27.904 29.6952 29.5852 27.7366C32.6744 24.1446 33.912 19.9597 33.3083 15.259C32.9356 12.3485 31.786 9.75795 29.9566 7.45855C29.5537 6.95323 29.5405 6.5145 29.9251 6.2181C30.3096 5.9217 30.6967 6.03791 31.1206 6.5602C33.592 9.63073 34.9394 13.4468 34.941 17.3805C34.9427 21.3143 33.5986 25.1315 31.1298 28.2041C30.8663 28.5296 30.5991 28.8509 30.3324 29.1718C29.6693 29.9695 29.0089 30.7639 28.4145 31.6094C27.9428 32.2751 27.5447 32.9927 27.1505 33.7033C26.9756 34.0186 26.8014 34.3327 26.6219 34.6401C28.1639 35.9863 28.2991 37.0518 27.2137 38.7414C27.6608 39.2214 27.9125 39.8497 27.9198 40.5041C27.925 41.2066 27.6403 41.7942 27.1927 42.3165C27.9277 43.16 28.135 44.0858 27.7059 45.1029C27.2767 46.1201 26.4329 46.5797 25.3725 46.662C25.1652 48.2928 24.6704 49.1324 23.5798 49.6821C23.3873 49.7792 23.1835 49.8547 22.98 49.93ZM14.7096 45.1682H17.4656C20.0518 45.17 22.638 45.1695 25.2242 45.1669C25.8541 45.1656 26.2741 44.8875 26.4053 44.4083C26.4518 44.2553 26.4624 44.0937 26.4363 43.9359C26.4101 43.7782 26.3479 43.6286 26.2545 43.4985C26.161 43.3685 26.0389 43.2615 25.8973 43.1858C25.7558 43.1101 25.5987 43.0678 25.4381 43.0621C25.2001 43.0398 24.9598 43.0419 24.7194 43.044C24.5502 43.0454 24.381 43.0469 24.2124 43.0399C23.7124 43.0203 23.4027 42.7278 23.4105 42.3034C23.4184 41.9026 23.7216 41.6101 24.1888 41.5853C24.3923 41.5746 24.5966 41.5763 24.801 41.578C24.9735 41.5794 25.1463 41.5808 25.3187 41.5748C26.0011 41.5474 26.4355 41.1413 26.4355 40.5302C26.4421 39.8943 26.0064 39.4648 25.2964 39.4648H9.97206C9.77576 39.4582 9.57925 39.466 9.38412 39.4883C9.13781 39.5254 8.91279 39.6485 8.74929 39.8355C8.58579 40.0225 8.49446 40.2613 8.49162 40.5091C8.48878 40.757 8.57461 40.9978 8.73379 41.1885C8.89296 41.3792 9.1151 41.5073 9.3605 41.55C9.57151 41.577 9.78436 41.5871 9.99699 41.58H20.3121C20.5076 41.5718 20.7033 41.588 20.8948 41.6284C21.0518 41.6721 21.1892 41.7678 21.2843 41.8996C21.3794 42.0314 21.4265 42.1915 21.418 42.3536C21.4094 42.5156 21.3457 42.6699 21.2372 42.7911C21.1287 42.9123 20.9821 42.9931 20.8213 43.0203C20.6424 43.0421 20.462 43.0495 20.2819 43.0425H10.0114C9.84775 43.0375 9.68392 43.041 9.52061 43.0529C8.88805 43.1195 8.49041 43.5622 8.50878 44.1537C8.52716 44.7452 8.9563 45.1682 9.60197 45.1682C10.7363 45.1726 11.8695 45.1711 13.0043 45.1697C13.5722 45.1689 14.1406 45.1682 14.7096 45.1682ZM24.1953 35.8531H17.4748C14.8903 35.8496 12.3067 35.8505 9.72402 35.8557C8.98779 35.857 8.54159 36.2344 8.51403 36.852C8.491 37.1061 8.56527 37.3594 8.72199 37.5614C8.8787 37.7633 9.10629 37.8989 9.35919 37.941C9.58468 37.9778 9.81319 37.9931 10.0416 37.9867H24.9053C25.1337 37.9931 25.3622 37.9778 25.5877 37.941C25.8429 37.8986 26.0734 37.764 26.235 37.5629C26.3965 37.3618 26.4778 37.1085 26.4631 36.8515C26.4485 36.5945 26.339 36.3519 26.1556 36.1703C25.9723 35.9887 25.728 35.8809 25.4696 35.8675C25.1501 35.8467 24.8284 35.8491 24.5066 35.8515C24.4028 35.8523 24.299 35.8531 24.1953 35.8531ZM23.8279 46.6633H11.1164C11.0508 47.7418 11.7674 48.5644 12.7962 48.5697C15.9188 48.5862 19.0413 48.5862 22.1638 48.5697C23.1901 48.5631 23.9053 47.7209 23.8279 46.6633Z"
                    fill="inherhit"
                  />
                </svg>
              </div>
              <p className="text-base sm:text-lg text-black font-normal">
                Skills You Will Learn
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 sm:gap-5 mt-8 justify-items-center">
              {skillsAcquired?.map((item, index) => (
                <div
                  className="w-full max-w-[5rem] sm:max-w-[6rem] mb-1 aspect-square rounded-full p-2 bg-white flex items-center justify-center relative group"
                  style={{
                    boxShadow: "6px 6px 11px rgba(212, 221, 251, 0.15)",
                  }}
                  key={index}
                >
                  <span
                    style={{ borderColor: theme.primary }}
                    className="bg-transparent absolute top-0 left-0 w-full h-full rounded-full border transition-all duration-200 transform opacity-0 group-hover:opacity-100"
                  />
                  {!!item?.image && (
                    <img
                      className="w-full object-contain transition-all duration-200 group-hover:scale-105"
                      src={item?.image}
                      alt={item?.name}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Download Brochure */}
        <section className="max-w-7xl mx-auto px-4 mt-8 md:mt-[4.5rem]">
          <DownloadBrochure theme={theme} />
        </section>

        {/* Leading Experts  */}
        <section className="max-w-5xl hidden mx-auto px-4 mt-16 md:mt-20">
          <h1 className="text-center text-xl md:text-2xl font-light text-[#14213D]">
            {`Hear from our`}{" "}
            <span className="font-semibold">{`Leading Experts !`}</span>
          </h1>
          <LeadingExpertsSlider theme={theme} />
        </section>

        {/* Form Section */}
        <section className="max-w-7xl mx-auto px-4 mt-16 md:mt-20">
          <div
            style={{
              boxShadow:
                "-11px -15px 30px #FFFFFF, 6px 4px 24px rgba(177, 194, 193, 0.61)",
            }}
            className="bg-[url('/images/courses/image.png')] bg-contain rounded-2xl py-9 sm:py-10 md:py-12 px-1 md:px-4"
          >
            <h2 className="text-center text-white font-medium text-lg sm:text-xl md:text-2xl mb-10 md:mb-12">
              {`We're better than the rest! If not,`}
              <br />
              <span className="text-capabl_primary">{`take the program for free`}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-0 md:px-2 lg:px-8">
              <div className="hidden md:grid col-span-1 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-4 px-2 sm:px-6 md:px-0">
                {[
                  {
                    count: "1.5 Crore",
                    label: "Scholarship Budget",
                    icon: "/images/courses/pig.svg",
                  },
                  {
                    count: "100",
                    label: "No. of Seats",
                    icon: "/images/courses/pig.svg",
                  },
                  {
                    count: "55",
                    label: "Applications Received",
                    icon: "/images/courses/pig.svg",
                  },
                  {
                    count: "25",
                    label: "Seats Allocated",
                    icon: "/images/courses/pig.svg",
                  },
                  {
                    count: "75",
                    label: "Seats Vacant",
                    icon: "/images/courses/pig.svg",
                  },
                ]?.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center justify-start gap-2 sm:gap-4 mb-4 md:mb-3"
                  >
                    <div className="bg-white w-20 sm:w-16 md:w-[4.5rem] lg:w-20 h-20 sm:h-16 md:h-[4.5rem] lg:h-20 flex-shrink-0 flex items-center justify-center p-1 md:p-2 rounded-xl">
                      <img
                        className="w-full object-contain mt-1"
                        src={item?.icon}
                        alt="count"
                      />
                    </div>

                    <div className="flex flex-col items-center sm:items-start justify-start gap-0.5 mt-1.5 sm:mt-0">
                      <p className="text-capabl_primary font-semibold text-base lg:text-xl">
                        {item?.count}
                      </p>
                      <p className="text-xs lg:text-sm text-white text-center sm:text-left">
                        {item?.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* form */}
              <div className="col-span-1 md:col-span-2 px-2 sm:px-6 md:px-0">
                <RegsiterForm source={router.pathname} reqType = {'program_request'}/>
              </div>

              <div className="col-span-1 md:col-span-3 px-10 sm:px-6 md:px-0">
                <div className="bg-white rounded-2xl px-6 py-10 flex flex-col sm:flex-row items-center justify-start sm:justify-evenly gap-6">
                  <div className="flex flex-col items-center justify-start gap-2">
                    <p className="text-[#545D61] text-sm font-light text-center">{`Get India’s Biggest Scholarship`}</p>
                    <p className="text-[#CF2323] text-base sm:text-lg md:text-xl text-center font-semibold">{`Societies`}</p>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-2">
                    <p className="text-[#545D61] text-sm font-light text-center">{`Get Scholarships up to`}</p>
                    <p className="text-[#CF2323] text-base sm:text-lg md:text-xl text-center font-semibold">{`2.5 Lakhs`}</p>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-2">
                    <p className="text-[#545D61] text-sm font-light text-center">{`Limited Seats Only`}</p>
                    <p className="text-[#CF2323] text-base sm:text-lg md:text-xl text-center font-semibold">{`100 Left`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hear from our Students */}
        <section className="max-w-7xl hidden mx-auto px-4 md:px-6 mt-16 md:mt-24">
          <h2 className="text-center font-medium text-lg md:text-2xl mb-3 md:mb-4 text-black">{`Hear From Our Alumni`}</h2>
          <p className="text-xs md:text-sm max-w-md md:max-w-2xl mx-auto text-center font-normal text-[#6c6c6c]">{`Before putting your faith in us, read some of our success stories!`}</p>

          <VideoGridTestimonials />
        </section>

        {/* Feature Comparison */}
        <section className="mt-16 md:mt-52 max-w-7xl mx-auto px-4">
          <div className="bg-[#F2F4F7] w-full rounded-3xl pl-2 sm:px-4 py-10 pb-28 md:py-16">
            <h2 className="text-center font-medium text-lg md:text-2xl mb-4 md:mb-5 text-black pr-4 pl-2 sm:px-0">
              {`We're better than the rest!`}
              <br />
              {`Don't believe us? Take a program for free.`}
            </h2>
            <p className="text-xs md:text-sm max-w-md md:max-w-2xl mx-auto text-center font-normal text-[#6c6c6c] pr-4 pl-2 sm:px-0">
              {`We're not just an education company, we're a knowledge ecosystem!`}
            </p>

            <FeatureComparison showAllFeatures={false} showCount={4} />
          </div>
        </section>

        {/* faqs */}
        <section className="max-w-2xl lg:max-w-4xl mx-auto px-4 mt-24 sm:mt-28 md:mt-40 relative mb-12 md:mb-20">
          <h2 className="text-center font-medium text-lg md:text-2xl mb-2 md:mb-3 text-black">{`Frequently Asked Questions`}</h2>
          <p className="text-xs md:text-sm max-w-md md:max-w-2xl mx-auto text-center font-light text-[#959595]">{`Have question ? We're here to help.`}</p>

          <img
            className="w-full max-w-[6.5rem] md:max-w-[8rem] object-contain absolute -top-[2.6rem] md:-top-[3.7rem] left-1/2 transform -translate-x-1/2"
            src="/images/courses/faq.svg"
            alt="faq"
          />

          <Faqs />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      <CtaForm source={router.pathname} reqType = {reqType} />
      <Alret />
      <Modal
        moduleData={{
          moduleData: moduleData[moduleno],
          moduleDataExtended: moduleDataExtended[moduleno],
        }}
      />
    </div>
  );
}
