import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import useGeneralStore from "../../store/generalStore";

const data = [
  {
    image: "/images/home/electric_vehicle.jpg",
    target: "/courses/electric-vehicle",
    id: "electric-vehicle",
    title: "Electric Vehicle",
    background: "#74cf5a",
    short_desc:
      "Passionate about Electric Vehicles? This is the only program you need.",
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
    target: "/courses/data-science",
    id: "data-science",
    background: "#a442d7",
    title: "Data Science",
    short_desc:
      "From statistics to advanced algorithm, cover the entire data science domain.",
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
  // {
  //   image: "/images/home/mechatronics.jpg",
  //   target: "/courses/mechatronics",
  //   id: "mechatronics",
  //   title: "Mechatronics",
  //   background: "#fec749",
  //   short_desc:
  //     "Be a master of Robotics, Mechatronics, IoT, etc. - start from scratch & become a pro!",
  //   stat: {
  //     rating: "4.7",
  //     projects: "45+",
  //     companies: "300+",
  //   },
  //   points: [
  //     `Embedded Systems, Robot Operating System, Industrial Automation, Robotics, Internet of Things & IIoT, AI/ML in Mechatronix`,
  //     `Get a firm grip on digital control systems, Real-time OS's, Robotics, IoT device design and automation techniques.`,
  //     `PLC, Scada, ROS, STM Cube MX, factory automation, robodk, polyscope etc.`,
  //   ],
  // },
  {
    image: "/images/home/design_cae.jpg",
    target: "/courses/design",
    id: "design-and-engineering",
    title: "Design & CAE ",
    background: "#fd6768",
    short_desc:
      "A ferrari, water bottle or may be a rocket - be the engineer who can design it all!",
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
    target: "/courses/full-stack-development",
    id: "full-stack-development",
    title: "Full Stack Development",
    background: "#627ffd",
    short_desc:
      "Completet Full-Stack made easy for students - Learn, code, practice under guidance!",
    stat: {
      rating: "4.8",
      projects: "60+",
      companies: "3000+",
    },
    points: [
      `Design In Automotive Industry, Plastic Design, BIW & Sheet Metail, Solid Modeling, Surface Modeling, FEA, CFD`,
      `Learn BIW, GDnT, Plastic Design, Turbomachinery analysis and more`,
      `Siemens NX, Solidworks, Hypermesh, StarCCM and ANSYS workbench.`,
    ],
  },
];

export default function IndustrialPrograms() {
  const openCtaForm = useGeneralStore((state) => state.openCtaForm);

  return (
    <section
      id="programs"
      className="container mx-auto max-w-7xl px-0 md:px-4 relative mb-10 md:mb-20 mt-20"
    >
      {/* Top Circle */}
      <div
        style={{
          background:
            "radial-gradient(147% 539.45% at 50% 50%, rgba(255, 175, 0, 0.4) 0%, rgba(255, 0, 0, 0.4) 100%)",
        }}
        className="rounded-full absolute top-0 left-0 transform -translate-x-[30%] md:translate-x-0 -translate-y-[25%] md:translate-y-[17%] z-0 w-1/2 min-w-[200px] max-w-md aspect-square transition duration-300"
      />

      {/* Bottom Circle */}
      <div
        style={{
          background:
            "radial-gradient(147% 539.45% at 50% 50%, #FFAF00 0%, #FF0000 100%)",
        }}
        className="rounded-full absolute bottom-0 right-0 transform -translate-x-[10%] -translate-y-[90%] z-0 w-1/2 min-w-[200px] max-w-xs aspect-square transition duration-300"
      />

      {/* Content */}
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(243, 243, 243, 0.73) 100%)",
        }}
        className="w-full backdrop-blur-md py-8 md:px-12 md:py-12 border-[0.05rem] border-[#d2d2d2] md:rounded-xl relative z-[1]"
      >
        <div className="px-6">
          <div className="md:grid md:grid-cols-5 md:gap-10 items-end">
            <div className="order-2 max-w-sm flex-shrink-0 md:col-span-2 pb-4">
              <h3 className="font-semibold text-lg md:text-4xl text-[#002639] mb-3 md:mb-6">
                <span className="relative">
                  <span className="relative z-[1]">Industrial Programs</span>
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
                </span>
                <br /> for a Capabl you!
              </h3>
              <p className="font-normal text-sm md:text-base text-[#002639]">
                {`With Capabl. You get license to (S)kill - skill in top domains all together. Specially designed for college students to make you `}
                <span className="font-semibold">the Bond</span>
                {` of the Industry!`}
              </p>
            </div>
            <div className="order-1 md:col-span-3 hidden w-full min-h-[13rem] relative md:block flex-grow overflow-hidden rounded-tr-3xl -mb-1.5">
              <img
                className="absolute object-contain w-full h-full rounded-bl-[9.5rem]"
                src="/images/home/discussion.svg"
                alt="discussion"
              />
            </div>
          </div>

          <hr className="border-t-[0.05rem] border-t-[#d2d2d2] mb-3 md:mb-6" />
        </div>

        <div className="w-full mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {data.map((item, index) => (
            <Card key={index} details={item} />
          ))}
        </div>

        <div className="px-4 mb-4 mt-8 md:mt-16">
          <div className="bg-[#14213D] rounded-xl px-6 md:px-10 py-8 md:py-12 relative md:flex md:items-center md:justify-between md:gap-7">
            <div>
              <p className="text-white font-medium text-2xl mb-4 md:mb-2 text-center md:text-left">
                Book a counseling session with Mentor.
              </p>
              <p className="text-white font-light text-sm mb-8 md:mb-0 text-center md:text-left">{`Only thing you need to start is a will to do great. Everything else, we will take care of :)`}</p>
            </div>

            <button
              onClick={() => openCtaForm()}
              className="bg-capabl_primary rounded-lg px-4 py-3 text-black font-medium text-base whitespace-nowrap absolute md:relative bottom-0 left-1/2 md:left-auto md:bottom-auto transform -translate-x-1/2 md:translate-x-0 translate-y-1/2 md:translate-y-0 hover_animation"
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
    <Link href={details?.target}>
      <div className="bg-white border-[0.05rem] border-[#f1efef] rounded-2xl p-4 w-full mx-auto md:h-[440px] md:max-w-xs flex-shrink-0 group md:hover:shadow-lg cursor-pointer">
        <div
          style={{ background: details?.background }}
          className={`w-full rounded-2xl h-[300px] md:h-[250px] md:group-hover:h-[190px] mb-4 relative overflow-hidden transition-all duration-500`}
        >
          {!!details?.image && (
            <img
              src={details?.image}
              alt={details.title}
              className="w-full h-full object-contain"
            />
          )}
        </div>
        <div className="pr-6">
          <h4 className="font-medium text-md md:text-lg mb-2 md:mb-3 text-black">
            {details.title}
          </h4>
          <div className="font-normal text-[10px] md:text-md text-black mb-4 md:mb-6">
            <p className="text-xs mb-4 overflow-hidden h-12 opacity-100 md:opacity-0 md:h-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500">
              {details.short_desc}
            </p>
            <div className="flex items-start justify-start gap-5 font-semibold text-xs">
              <p>
                <span className="flex items-center justify-start gap-0.5">
                  {details.stat.rating}{" "}
                  <AiFillStar className="text-capabl_primary" />
                </span>
                <span className="font-normal">Rating</span>
              </p>
              <p>
                {details.stat.projects} <br />
                <span className="font-normal">Projects</span>
              </p>
              <p>
                {details.stat.companies} <br />
                <span className="font-normal">Companies hiring</span>
              </p>
            </div>
          </div>

          {/* <ol className="flex flex-col items-start gap-2 text-xs md:text-sm font-light list-disc pl-3 max-h-0 overflow-hidden group-hover:max-h-screen transition-all duration-300">
                    {details.points.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ol> */}

          <a className="mt-4 flex w-fit items-center font-medium justify-start gap-2 text-sm text-[#1F28CF]">
            Explore{" "}
            <HiArrowLongRight className="text-xl group-hover:transform group-hover:translate-x-1 transition duration-500" />
          </a>
        </div>
      </div>
    </Link>
  );
}
