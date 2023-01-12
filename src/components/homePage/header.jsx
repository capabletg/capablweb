import Link from "next/link";
import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { HiOutlineChevronDown, HiOutlineMinus } from "react-icons/hi2";

const navs = [
    {
        label: "Programs",
        key: "programs",
        href: "",
        subMenu: [
            { label: "Electric Vehicle", href: "/#electric-vehicle" },
            { label: "Data Science", href: "/#data-science" },
            { label: "Mechatronics", href: "/#mechatronics" },
            { label: "Design Engineering", href: "/#design-and-engineering" },
            { label: "Full Stack Development", href: "/#full-stack-development" },
        ],
    },
    {
        label: "Careers Transformed",
        href: "/",
        key: "careers_transformed",
        subMenu: [],
    },
    {
        label: "Hire With Us",
        href: "/",
        key: "hire_with_us",
        subMenu: [],
    },
    {
        label: "Capabl In Colleges",
        href: "/",
        key: "capabl_in_colleges",
        subMenu: [],
    },
    {
        label: "Others",
        href: "",
        key: "others",
        subMenu: [
            { label: "Other #1", href: "/" },
            { label: "Other #2", href: "/" },
        ],
    },
];

export default function Header() {
    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <>
            <div className="fixed top-7 lg:top-8 left-0 w-full bg-white md:light_shadow z-20">
                <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 h-10 md:h-20">
                    <Link href="/">
                        <img
                            src="/logo_dark.svg"
                            alt="capable logo"
                            className="w-full max-w-[6.25rem] md:max-w-[8rem] object-contain cursor-pointer transition-all duration-300"
                        />
                    </Link>

                    <div>
                        <button onClick={() => setShowSideMenu(true)} className="inline-block lg:hidden">
                            <img src="/images/svgs/hamburger_icon.svg" alt="hamburger icon" />
                        </button>

                        {/* Nav Items */}
                        <div className="hidden lg:flex items-center justify-end gap-4 lg:gap-8">
                            {navs?.map(({ label, subMenu, href }, index) => (
                                <React.Fragment key={index}>
                                    {!subMenu?.length && (
                                        <Link href={href}>
                                            <a className="font-normal text-sm text-black transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-0 hover:after:w-3/4 after:h-0.5 after:opacity-0 hover:after:opacity-100 after:bg-capabl_primary after:rounded-full after:block after:transition-all after:duration-500">
                                                {label}
                                            </a>
                                        </Link>
                                    )}

                                    {!!subMenu?.length && (
                                        <div className="relative group">
                                            <p className="font-normal text-sm text-black">{label}</p>
                                            <div
                                                style={{ boxShadow: `0px 10px 14px rgba(0, 0, 0, 0.06)` }}
                                                className="absolute bg-white flex-col items-start justify-start w-fit max-h-0 px-3 overflow-hidden group-hover:py-3 group-hover:max-h-screen transition-all duration-500"
                                            >
                                                {subMenu?.map((el, indx) => (
                                                    <Link key={`${index}_${indx}`} href={el?.href}>
                                                        <a
                                                            className={`block py-2.5 pr-16 whitespace-nowrap text-sm hover:font-medium hover:pl-4 groups transition-all duration-300 relative ${
                                                                indx !== 0 && "border-t border-t-[#e3e3e3]"
                                                            } before:content-[''] before:absolute before:bg-capabl_primary before:top-1/2 before:left-0 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:scale-0 hover:before:inline-block hover:before:scale-100 before:transition-all before:duration-300`}
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

                            <button
                                onClick={() => setShowCtaForm(true)}
                                style={{ boxShadow: "0px 9px 15px rgba(255, 190, 49, 0.6)" }}
                                className="relative z-10 font-medium text-sm text-[#272727] rounded-lg py-3 px-6 bg-capabl_primary"
                            >
                                Join Our Tribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer */}
            <div className="w-full h-10 lg:h-20" />
            <Drawer show={showSideMenu} setShow={setShowSideMenu} />
        </>
    );
}

function Drawer({ show, setShow }) {
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
                    show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            <div
                className={`block lg:hidden fixed z-50 h-screen top-0 right-0 w-5/6 max-w-xs bg-white transition-all duration-300 ${
                    show ? "translate-x-0 pointer-events-auto opacity-100" : "translate-x-full pointer-events-none opacity-0"
                }`}
            >
                <div style={{ boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.11)` }} className="flex items-center justify-between px-4 py-5">
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
                                        className={`py-3 flex items-center justify-between cursor-pointer ${index !== 0 && "border-t border-t-[#e3e3e3]"}`}
                                    >
                                        {label}
                                    </a>
                                </Link>
                            )}
                            {!!subMenu?.length && (
                                <div onClick={() => setActiveMenu(key)} className={`py-3 cursor-pointer ${index !== 0 && "border-t border-t-[#e3e3e3]"}`}>
                                    <div className="flex items-center justify-between">
                                        <p>{label}</p>
                                        {!!subMenu?.length && (
                                            <span className={`text-lg transition-all duration-300 ${activeMenu === key ? "-rotate-180" : "rotate-0"}`}>
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
                                                <a onClick={() => close()} className={`py-1.5 pl-1 text-[0.8125rem] w-full relative`}>
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
                </div>
            </div>
        </>
    );
}
