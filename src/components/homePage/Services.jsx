import React from "react";

const data = [
    {
        title: "Jobs",
        image: "/images/home/job.png",
        points: [
            {
                label: "Industrial Projects",
                image: "/images/home/industrial_projects.png",
            },
            {
                label: "Industrial Certification",
                image: "/images/home/industrial_certification.png",
            },
            {
                label: "Personalized Resume Support",
                image: "/images/home/personal_supprt.png",
            },
            {
                label: "Soft-Skill & Interview Support",
                image: "/images/home/soft_skill.png",
            },
            {
                label: "Guaranteed Internship & Job",
                image: "/images/home/bag.png",
            },
        ],
        extra: "& 10+ more services",
    },
    {
        title: "Higher Studies",
        image: "/images/home/masters.png",
        points: [
            {
                label: "Letter of Recommendation (LoR)",
                image: "/images/home/letter.png",
            },
            {
                label: "Help in Statement of Purpose (SoP)",
                image: "/images/home/statement.png",
            },
            {
                label: "Projects and competitions",
                image: "/images/home/project.png",
            },
            {
                label: "Research Paper Guidance",
                image: "/images/home/research.png",
            },
            {
                label: "Strong profile making",
                image: "/images/home/profile.png",
            },
        ],
        extra: "& 8+ more services",
    },
    {
        title: "Startups",
        image: "/images/home/startup.png",
        points: [
            {
                label: "Product market fit",
                image: "/images/home/product.png",
            },
            {
                label: "User Profiling",
                image: "/images/home/user_profiling.png",
            },
            {
                label: "Team Building",
                image: "/images/home/team.png",
            },
            {
                label: "Investor Pitch Support",
                image: "/images/home/investor.png",
            },
            {
                label: "Tech Support and sponsorship",
                image: "/images/home/tech_support.png",
            },
        ],
        extra: "& 5+ more services",
    },
];

export default function Services() {
    return (
        <section id="helps_you_make_career" className="p-2 pt-8 md:pt-20 mb-12">
            <div className="max-w-xs md:max-w-3xl mx-auto mb-3">
                <h3 className="font-medium text-base md:text-4xl text-center mb-3 md:mb-8">Power Your Career the Capabl Way!</h3>
                <p className="font-normal text-[10px] md:text-sm text-center text-[#636363] md:px-20 md:mb-10">
                    {`No matter what path you choose, we help you enhance your skills at every step of the way`}
                </p>
            </div>

            <div className="mt-10 w-full max-w-7xl mx-auto px-2 md:px-4 grid grid-cols-3 md:grid-cols-1 gap-2.5 md:gap-4">
                {data.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-6 bg-[#f2f4f7] rounded-xl overflow-hidden">
                        <div className="h-40 md:h-auto flex flex-col items-center justify-center gap-1.5 p-4 pb-6 md:pb-4 md:pl-4 md:pr-6 bg-capabl_primary relative after:w-0 after:h-0 after:absolute after:bottom-0 md:after:right-0 after:top-auto md:after:top-1/2 after:transform after:left-1/2 md:after:left-auto after:translate-y-0 md:after:-translate-y-1/2 after:-translate-x-1/2 md:after:translate-x-0 after:border-[#f2f4f7] after:border-[1.2rem] md:after:border-[1.5rem] after:border-t-transparent after:border-l-transparent after:border-r-transparent md:after:border-r-[#f2f4f7] md:after:border-b-transparent">
                            <img className="w-full max-w-[5rem] md:w-auto md:h-20 object-contain" src={item.image} alt={item.title} />
                            <p className="mt-2 font-semibold text-center text-xs md:text-sm">{item.title}</p>
                        </div>

                        <div className="col-span-5 grid grid-cols-1 md:grid-cols-5">
                            {item.points.map((el, indx) => (
                                <div
                                    key={`${index}_${indx}`}
                                    className="h-40 md:h-auto flex flex-col items-center justify-start gap-1.5 md:gap-2 px-6 py-4 bg-transparent"
                                >
                                    <img className="h-[4.5rem] object-contain" src={el.image} alt={el.label} />
                                    <p className="mt-2 text-xs md:text-sm font-normal text-center">{el.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
