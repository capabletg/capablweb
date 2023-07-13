import Link from "next/link";
import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { HiOutlineChevronDown, HiOutlineMinus } from "react-icons/hi2";
import useGeneralStore from "../store/generalStore";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const navs = [
  {
    label: "About Us",
    href: "/about",
    key: "about",
    subMenu: [],
  },
  {
    label: "Placements",
    href: "https://placements.capabl.in/",
    key: "placements",
    subMenu: [],
  },
  {
    label: "Programs",
    key: "programs",
    href: "",
    subMenu: [
      { label: "Electric Vehicle", href: "/courses/electric-vehicle" },
      { label: "Data Science", href: "/courses/data-science" },
      // { label: "Mechatronics", href: "/courses/mechatronics" },
      { label: "Design & CAE", href: "/courses/design" },
      {
        label: "Full Stack Development",
        href: "/courses/full-stack-development",
      },
    ],
  },
  {
    label: "Capabl-Adda",
    key: "capabl",
    href: "",
    subMenu: [
      { label: "Community", href: "https://discord.gg/BFZHCgJ2eR", target: "_blank", rel: "noopener noreferrer" },
      { label: "Bootcamps", href: "/bootcamp/bootcampLandingPage" },
      { label: "Summer Internship", href: "https://intern-training.capabl.in", target: "_blank", rel: "noopener noreferrer" },
  
    ],
  },
  // {
  //   label: "Capabl Events",
  //   href: "/bootcamp/bootcampLandingPage",
  //   key: "about",
  //   subMenu: [],
  // },


  // {
  //   label: "Placements",
  //   href: "https://placements.capabl.in/",
  //   key: "placements",
  //   subMenu: [],
  // },
];

export default function Header(props) {
  const openCtaForm = useGeneralStore((state) => state.openCtaForm);

  const [showSideMenu, setShowSideMenu] = useState(false);

  const { showTribe = false } = props;

  return (
    <>
      <header>
        {/* fixed */}
        {/* <div className="bg-[#fbfbfb] fixed top-0 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto container flex items-center justify-end gap-2 px-4 md:py-2 font-medium text-[10px] md:text-sm h-7 md:h-8">
            <a
              href="tel:8998798798"
              target="_blank"
              rel="noreferrer"
              className="pr-2 border-r border-r-[#cdcdcd] text-black"
            >
              <i
                style={{ fontSize: "2em" }}
                className="fa fa-phone "
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=917795940242&text=Hello%20ETG!%0AI%20am%20interested%20in%20your%20course%2Finternship%20on%20">
              <i
                style={{ fontSize: "2em", color: "green" }}
                className="fa fa-whatsapp whatsapp-icon  text-success"
              ></i>
            </a>
          </div>
        </div> */}

        <div className="fixed top-0 lg:top-0 left-0 w-full bg-white md:light_shadow z-20">
          <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 h-10 md:h-20">
            <Link href="/">
              <img
                src="/logo_dark.svg"
                alt="capable logo"
                className="w-full max-w-[6.25rem] md:max-w-[8rem] object-contain cursor-pointer transition-all duration-300"
              />
            </Link>

            <div>
              <button
                onClick={() => setShowSideMenu(true)}
                className="inline-block lg:hidden"
              >
                <img
                  src="/images/svgs/hamburger_icon.svg"
                  alt="hamburger icon"
                />
              </button>

              {/* Nav Items */}

              <div className="hidden lg:flex items-center justify-end gap-4 lg:gap-8">

                {navs?.map(({ label, subMenu, href }, index) => (
                  <React.Fragment key={index}>
                    {!subMenu?.length && (
                <Link href={href} passHref>
                <a className="font-normal text-sm text-black transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-0 hover:after:w-3/4 after:h-0.5 after:opacity-0 hover:after:opacity-100 after:bg-capabl_primary after:rounded-full after:block after:transition-all after:duration-500">
                          {label}
                        </a>
                      </Link>
                    )}

                    {!!subMenu?.length && (
                      <div className="relative group">
                        <p className="font-normal text-sm text-black">
                          {label}
                        </p>
                        <div
                          style={{
                            boxShadow: `0px 10px 14px rgba(0, 0, 0, 0.06)`,
                          }}
                          className="absolute bg-white flex-col items-start justify-start w-fit max-h-0 px-3 overflow-hidden group-hover:py-3 group-hover:max-h-screen transition-all duration-500"
                        >
                          {subMenu?.map((el, indx) => (
                      <Link key={`${index}_${indx}`} href={el?.href} passHref>
                      <a
                                className={`block py-2.5 pr-16 whitespace-nowrap text-sm hover:font-medium hover:pl-4 groups transition-all duration-300 relative ${
                                  indx !== 0 && "border-t border-t-[#e3e3e3]"
                                }
                                 before:content-[''] before:absolute before:bg-capabl_primary before:top-1/2 before:left-0 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:scale-0 hover:before:inline-block hover:before:scale-100 before:transition-all before:duration-300`
                                }
                              >
                                {el?.label}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
            <a
              href="tel:7795940242"
              target="_blank"
              rel="noreferrer"
              className="pr-2 border-r border-r-[#cdcdcd] text-black"
            >
             <FaPhoneAlt size={18} className="mr-1" />

              {/* <i
                style={{ fontSize: "1.5em" }}
                className="fa fa-phone "
                aria-hidden="true"
              ></i> */}
            </a>
            <a href="https://api.whatsapp.com/send?phone=917795940242&text=Hello%20ETG!%0AI%20am%20interested%20in%20your%20course%2Finternship%20on%20"
              target="_blank"
              rel="noopener noreferrer"
            
            >
                <FaWhatsapp style={{ fontSize: "1.5em", color: "green" }} size={28} />

              {/* <i
                style={{ fontSize: "1.5em", color: "green" }}
                className="fa fa-whatsapp whatsapp-icon w-7 h-7 md:h-7  text-success"
              ></i> */}
            </a>

                {showTribe ? (
                  <button
                    onClick={() => openCtaForm()}
                    style={{
                      boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)",
                    }}
                    className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary hover_animation"
                  >
                    Join Our Tribe
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <Drawer
          show={showSideMenu}
          setShow={setShowSideMenu}
          showTribeBtn={showTribe}
          openCtaForm={openCtaForm}
        />


        {/* spacer */}
        <div className="w-full h-10 lg:h-20" />
        <div className="w-full h-7 md:h-8" />
        
      </header>
    </>
  );
}

function Drawer({ show, setShow, showTribeBtn, openCtaForm }) {
  const [activeMenu, setActiveMenu] = useState("programs");

  const close = () => {
    setShow(false);
    setActiveMenu("");
  };

  return (
    <>
      <div
        onClick={() => close()}
        className={`block lg:hidden fixed z-40 top-0 left-0 w-full h-screen bg-black bg-opacity-30 transition-all duration-100 ${
          show
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`block lg:hidden fixed z-50 h-screen top-0 right-0 w-5/6 max-w-xs bg-white transition-all duration-300 ${
          show
            ? "translate-x-0 pointer-events-auto opacity-100"
            : "translate-x-full pointer-events-none opacity-0"
        }`}
      >
        <div
          style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.11)` }}
          className="flex items-center justify-between px-4 py-5"
        >
          <p className="font-medium text-base">Menu</p>
          <button onClick={() => close()} className="text-xl">
            <VscChromeClose />
          </button>
        </div>
        <div className="p-4 text-sm">
          {navs?.map(({ label, subMenu, href, key }, index) => (
            <React.Fragment key={index}>
              {!subMenu?.length && (
                <Link href={href}>
                  <a
                    onClick={() => close()}
                    className={`py-3 flex items-center justify-between cursor-pointer ${
                      index !== 0 && "border-t border-t-[#e3e3e3]"
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              )}
              {!!subMenu?.length && (
                <div
                  onClick={() => setActiveMenu(key)}
                  className={`py-3 cursor-pointer ${
                    index !== 0 && "border-t border-t-[#e3e3e3]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p>{label}</p>
                    {!!subMenu?.length && (
                      <span
                        className={`text-lg transition-all duration-300 ${
                          activeMenu === key ? "-rotate-180" : "rotate-0"
                        }`}
                      >
                        <HiOutlineChevronDown />
                      </span>
                    )}
                  </div>

                  <div
                    className={`flex flex-col items-start justify-start pl-3 font-light transition-all duration-300 overflow-hidden ${
                      activeMenu === key ? "max-h-screen pt-2" : "max-h-0"
                    }`}
                  >
                    {subMenu?.map((el, indx) => (
                      <Link key={`${index}_${indx}`} href={el?.href}>
                        <a
                          onClick={() => close()}
                          className={`py-1.5 pl-1 text-[0.8125rem] w-full relative`}
                        >
                          {el?.label}

                          <span className="absolute text-[0.4rem] top-1/2 -translate-y-1/2 -left-2.5">
                            <HiOutlineMinus />
                          </span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
          {showTribeBtn ? (
            <a
              onClick={() => {
                close();
                openCtaForm();
              }}
              className={`py-3 flex items-center justify-between cursor-pointer border-t border-t-[#e3e3e3]`}
            >
              Join Our Tribe
            </a>
          ) : // <button
          //   onClick={() => openCtaForm()}
          //   style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
          //   className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary hover_animation"
          // >
          //   Join Our Tribe
          // </button>
          null}
        </div>
      </div>
    </>
  );
}
