import React, { useState } from "react";

export default function RegsiterForm() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div
            style={{ boxShadow: "-11px -15px 30px #FFFFFF, 6px 4px 24px rgba(177, 194, 193, 0.61)" }}
            className="px-4 sm:px-8 md:px-6 py-6 sm:py-8 md:py-9 rounded-2xl"
        >
            <div
                style={{ boxShadow: "-11px -15px 30px #FFFFFF, 6px 4px 24px rgba(177, 194, 193, 0.61)" }}
                className="flex items-center justify-center gap-2 rounded-lg sm:rounded-xl py-3 sm:py-4 mb-4"
            >
                {[1, 2].map((_, index) => (
                    <React.Fragment key={index}>
                        <span className={`text-sm ${activeStep === index ? "text-capabl_primary" : "text-[#d9d9d9]"}`}>{index + 1}</span>
                        <span
                            className={`h-[0.3rem] sm:h-[0.34rem] rounded-full w-20 md:w-24 lg:w-28 mr-2 ${
                                activeStep === index ? "bg-capabl_primary" : "bg-[#d2d2d2]"
                            }`}
                        />
                    </React.Fragment>
                ))}
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="flex flex-col items-start justify-start gap-4 mt-6 md:mt-8"
            >
                <label className="flex flex-col w-full items-start justify-start gap-1">
                    <p className="text-xs text-black">Name</p>
                    <input
                        className="rounded-sm text-sm border w-full border-[#CBCBCB] bg-[#EBEBEB] placeholder:text-[#cbcbcb] px-4 py-2.5"
                        type="text"
                        placeholder="Name"
                    />
                </label>
                <label className="flex flex-col w-full items-start justify-start gap-1">
                    <p className="text-xs text-black">Phone Number</p>
                    <input
                        className="rounded-sm text-sm border w-full border-[#CBCBCB] bg-[#EBEBEB] placeholder:text-[#cbcbcb] px-4 py-2.5"
                        type="text"
                        placeholder="Phone Number"
                    />
                </label>
                <label className="flex flex-col w-full items-start justify-start gap-1">
                    <p className="text-xs text-black">Email</p>
                    <input
                        className="rounded-sm text-sm border w-full border-[#CBCBCB] bg-[#EBEBEB] placeholder:text-[#cbcbcb] px-4 py-2.5"
                        type="text"
                        placeholder="Email"
                    />
                </label>
                <label className="flex flex-col w-full items-start justify-start gap-1">
                    <p className="text-xs text-black">I am</p>
                    <input
                        className="rounded-sm text-sm border w-full border-[#CBCBCB] bg-[#EBEBEB] placeholder:text-[#cbcbcb] px-4 py-2.5"
                        type="text"
                        placeholder="2nd Year Student"
                    />
                </label>

                <button
                    className="mt-3 md:mt-4 rounded-lg border-[0.1rem] border-capabl_primary hover:bg-[#F3EDDE] transition-all duration-300 w-full py-3 text-[#231F20] text-sm"
                    type="submit"
                >{`Next : Fill Academic Details`}</button>
            </form>
        </div>
    );
}
