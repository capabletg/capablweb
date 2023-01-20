import React from "react";

export default function CompaniesUniversities({ companies = [], roles = [], moreCount = "20", universities = [], theme = { primary: "", text: "" } }) {
    return (
        <div className="w-full px-4 md:px-6 pt-6 pb-16 md:pt-8 md:pb-20 bg-[#14213D] rounded-xl md:rounded-2xl relative">
            {/* illustration */}
            <img className="w-full object-contain z-0 absolute top-0 left-0" src="/images/courses/circuit_illustration.svg" alt="circuit illustration" />

            <div className="max-w-5xl mx-auto relative z-[1]">
                <h2 className="text-center text-white font-normal text-lg sm:text-xl md:text-2xl mb-2 md:mb-3">Companies Actively Hiring</h2>
                {/* <p className="text-xs md:text-sm text-center italic text-white font-light">Actively Hiring</p> */}

                <div className="flex items-center justify-evenly flex-wrap gap-4 md:gap-8 my-8 md:mt-10">
                    {companies.map((img, index) => (
                        <img key={index} src={img} alt="Company" className="w-full flex-shrink-0 max-w-[8rem] lg:max-w-[8.5rem] object-contain" />
                    ))}
                </div>

                <p className="text-sm text-center italic text-white font-light mb-6">for roles like</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-center gap-y-2 gap-x-4 text-white text-opacity-75 text-sm">
                    {roles.map((role, index) => (
                        <p key={index} className="font-light">
                            {role}
                        </p>
                    ))}
                </div>

                <p className="mt-6 font-light text-sm text-white text-center">{`& ${moreCount} More Roles`}</p>

                <div className="mt-4 flex items-center justify-center">
                    <button
                        onClick={() => openCtaForm()}
                        style={{ background: theme.primary, color: theme.text }}
                        className="text-center rounded-md px-4 md:px-8 py-1.5 md:py-2 text-[0.8rem] md:text-sm hover_animation"
                    >
                        Explore More
                    </button>
                </div>

                <hr className="border-t-[0.025rem] border-t-[#434d64] my-5 md:my-8" />

                <h3 className="text-center text-white font-normal text-base md:text-lg mb-7 md:mb-9">Apply to best Universities</h3>

                <div className="flex items-start justify-evenly gap-4">
                    {universities.map(({ image, degree, courses }, index) => (
                        <div key={index} className="flex items-center flex-col justify-start gap-2.5">
                            <div className="bg-white rounded-lg p-2 md:p-3 w-16 h-16 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center">
                                <img className="w-full object-contain" src={image} alt="university" />
                            </div>
                            <p className="italic text-[0.7rem] md:text-xs text-[#a1a6b1]">{degree}</p>

                            <div className="flex items-start justify-start gap-1 flex-col text-xs md:text-sm text-white text-opacity-80 font-light">
                                {courses?.map((item, indx) => (
                                    <p key={`${index}_${indx}`}>{item}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
