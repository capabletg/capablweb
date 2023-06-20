import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const exposure = [
  {
    title: `Internships/Jobs`,
    description: `Your search for a fortune 500 company, tech startups or a core role ends here. A dedicated product, an award winning placement team and 1000+ companies are waiting for you! That too with Soft-Skill & Interview Training.`,
    image: "/images/home/internship_jobs.png",
  },
  // {
  //   title: "Tech Guru Mentor",
  //   description: `A dedicated mentor assigned to you to look at your career growth, 1:1 counselling on performance, projects, internships, jobs and competitions to stay on top! Skilling made personal - that too life long!`,
  //   image: "/images/home/tech_guru_mentor.png",
  // },
  {
    title: `Meet All Tech Needs`,
    description: `Industry 4.0 and Industry 5.0 technologies taught under one platfform be it EV, Data Science or Full Stack, Design & CAE. So be it Multidisciplinary technologies or placement prep, all are covered`,
    image: "/images/home/multidisciplinary_specializations.svg",
  },
  // {
  //   title: `Scholarship Support`,
  //   description: `Worried about a World-class quality skilling ecosystem costing a bomb! Well, we've got you covered - scholarships worth 2 Lakhs+ from industries and organizations to give students the best platform at affordable prices.`,
  //   image: "/images/home/scholarship_support.svg",
  // },
  {
    title: `Industrial Projects`,
    description: `Multiple industry projects = better industrial insights = Career growth. Simple equations made simpler via easy access. We provide you with top-notch industry projects, exciting boot camp, and 1-1 mentorship from industry experts.`,
    image: "/images/home/industry_projects.png",
  },
  {
      title: `Industrial Exposure`,
      description: `Talk to Industry Leaders, CEOs, Scientiests, know the latest tech changes, understand different roles & what future path you can take. We ensure you become an engineer by making best use of your college time.`,
      image: "/images/home/scholarship_support.svg",
    },
  {
    title: `Community`,
    description: `Join an ever-evolving and growing community of 1.5 Lakh+ students and industry experts, who are at the forefront of a new revolution. Learn, compete, work together, get exposure and a lot more!`,
    image: "/images/svgs/community.svg",
  },
  // {
  //   title: `Internships/Jobs`,
  //   description: `Your search for a fortune 500 company ends here. With our projects and mentorship, you're just a few steps away from your dream placement.`,
  //   image: "/images/home/internship_jobs.png",
  // },
];

export default function ExposureAccordian() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    if (activeIndex >= 0) setActiveImage(exposure?.[activeIndex]?.image);
  }, [activeIndex]);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-5 gap-10 py-20">
      <div className="col-span-5 md:col-span-2">
        {exposure?.map(({ title, description }, index) => (
          <div key={index} className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h4 className="font-semibold text-sm md:text-lg text-black text-left">
                {title}
              </h4>
              <button
                className="outline-none border-none ring-0 hover:ring-0 active:ring-0 focus:ring-0"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
              >
                {activeIndex === index ? (
                  <img src="/images/svgs/minus_icon.svg" alt="minus" />
                ) : (
                  <img src="/images/svgs/plus_icon.svg" alt="plus" />
                )}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all max-w-xs duration-300 ${
                activeIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-normal text-xs md:text-sm text-[#555555] text-left">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block md:col-span-3">
        <PreviewImage src={activeImage} />
      </div>
    </div>
  );
}

function PreviewImage({ src }) {
  return (
    <AnimatePresence>
      <div className="relative w-full h-full">
        <motion.img
          key={`accordian_${src}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full absolute object-contain"
          src={src}
          alt="reference"
        />
      </div>
    </AnimatePresence>
  );
}
