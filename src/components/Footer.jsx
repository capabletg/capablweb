import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const product = [
    { label: "Employee database", href: "/courses" },
    { label: "Payroll", href: "/courses" },
    { label: "Absences", href: "/courses" },
    { label: "Time tracking", href: "/courses" },
    { label: "Shift planner", href: "/courses" },
    { label: "Recruiting", href: "/courses" },
];

const information = [
    { label: "FAQ", href: "/courses" },
    { label: "Blog", href: "/courses" },
    { label: "Support", href: "/courses" },
];

const company = [
    { label: "About Us", href: "/courses" },
    { label: "Careers", href: "/courses" },
    { label: "Contact us", href: "/courses" },
    { label: "Lift Media", href: "/courses" },
];

const socialMedia = [
    { icon: FaLinkedinIn, href: "#", name: "LinkedIn" },
    { icon: FaFacebookF, href: "#", name: "Facebook" },
    { icon: FaTwitter, href: "#", name: "Twitter" },
];

const other = [
    { label: "Terms", href: "/courses" },
    { label: "Privacy", href: "/courses" },
    { label: "Cookies", href: "/courses" },
];

export default function Footer() {
    return (
        <footer className="bg-[#14213D] min-h-[200px] w-full px-6 pt-4 pb-4">
            <div className="hidden md:block max-w-7xl mx-auto mt-10 mb-8">
                <div className="grid grid-cols-10 gap-4 justify-items-start">
                    <div className="col-span-2 pt-6 flex flex-col items-start justify-start gap-1.5">
                        <h5 className="font-semibold text-sm text-white mb-3">Product</h5>
                        {product?.map(({ label, href }, index) => (
                            <Link key={index} href={href}>
                                <a className="font-normal text-sm text-white text-opacity-75">{label}</a>
                            </Link>
                        ))}
                    </div>
                    <div className="col-span-2 pt-6 flex flex-col items-start justify-start gap-1.5">
                        <h5 className="font-semibold text-sm text-white mb-3">Information</h5>
                        {information?.map(({ label, href }, index) => (
                            <Link key={index} href={href}>
                                <a className="font-normal text-sm text-white text-opacity-75">{label}</a>
                            </Link>
                        ))}
                    </div>
                    <div className="col-span-2 pt-6 flex flex-col items-start justify-start gap-1.5">
                        <h5 className="font-semibold text-sm text-white mb-3">Company</h5>
                        {company?.map(({ label, href }, index) => (
                            <Link key={index} href={href}>
                                <a className="font-normal text-sm text-white text-opacity-75">{label}</a>
                            </Link>
                        ))}
                    </div>

                    <div className="bg-white py-6 px-10 bg-opacity-10 col-span-4 max-w-sm h-fit pb-10 justify-self-end">
                        <h5 className="font-semibold text-white text-sm mb-5">Subscribe to our newsletter</h5>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                            className="flex w-full rounded-md overflow-hidden bg-white mb-5 group"
                        >
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full py-2 lg:py-3 px-3 placeholder:font-normal placeholder:text-[#7A7E92] placeholder:text-[0.8rem] text-[0.8rem] font-normal text-black border-none outline-none ring-0 hover:ring-0 active:ring-0 focus:ring-0"
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center bg-capabl_primary outline-none border-none text-lg lg:text-xl flex-shrink-0 px-3.5 lg:px-5"
                            >
                                <HiArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                            </button>
                        </form>
                        <p className="font-light text-xs text-white text-opacity-60">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <hr className="mt-10 mb-8 border-white border-opacity-20" />
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center justify-start gap-4">
                        <img className="w-full max-w-[8rem] object-contain mr-4" src="/logo_white.svg" alt="capabl logo" />

                        {other?.map(({ label, href }, index) => (
                            <Link key={index} href={href}>
                                <a className="font-normal text-white text-sm">{label}</a>
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center justify-end gap-4">
                        {socialMedia.map(({ icon: Icon, href, name }, index) => (
                            <a
                                key={index}
                                className="w-10 h-10 rounded-full flex items-center justify-center p-3 border text-white border-white border-opacity-25 transition-all duration-300 hover:scale-95 hover:bg-white hover:bg-opacity-10"
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
