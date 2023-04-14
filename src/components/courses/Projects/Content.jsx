import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function Content({ content = null }) {
  const [progress, setProgress] = useState(0);
  const [showScroll, setShowScroll] = useState(false);
  const contentRef = useRef();
  const { scrollYProgress } = useScroll({ container: contentRef });

  scrollYProgress.onChange((val) => {
    setProgress(Number(val * 100).toFixed(2));
  });

  useEffect(() => {
    setProgress(0);
    if (contentRef.current?.scrollHeight > contentRef.current?.offsetHeight)
      setShowScroll(true);
    else setShowScroll(false);
  }, [content]);

  return (
    <div
      style={{ boxShadow: "-17px 13px 25px rgba(195, 207, 248, 0.22)" }}
      className="md:col-span-8 lg:col-span-9 md:block rounded-2xl md:py-6 md:pr-4 md:pl-6 lg:py-8 lg:pl-10 h-full max-h-[34.5rem] bg-[#f2f4f7]"
    >
      <div className="relative h-full">
        {/* Scrollbar */}
        <div
          className={`rounded-full w-[0.5rem] h-full absolute -right-5 top-0 bg-[#F3EDDE] ${
            showScroll ? "opacity-100" : "opacity-0"
          }`}
        >
          <motion.span
            style={{ height: `${progress}%` }}
            className="rounded-full w-full absolute left-0 top-0 bg-capabl_primary"
          />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="h-full max-h-[30rem] overflow-y-scroll scrollbar-hide relative z-0 pr-4 pb-6"
        >
          <h3 className=" text-base font-bold text-black mb-4">
            {content?.project_title}
          </h3>
          <h6 className="text-base font-normal text-black mb-1">
            Software/Tool
          </h6>
          {Array.isArray(content.project_Softwares) ? (
            content?.project_Softwares?.map((item, index) => (
              <p
                className="text-[#6c6c6c] text-sm font-light mb-4"
                key={index}
              >{`${index + 1}. ${item}`}</p>
            ))
          ) : (
            <p className="text-[#6c6c6c] text-sm mb-4 font-light">
              {content?.project_Softwares}
            </p>
          )}
          <h6 className="text-base font-normal text-black mb-1">Industry</h6>
          {Array.isArray(content.project_industry) ? (
            content?.project_industry?.map((item, index) => (
              <p
                className="text-[#6c6c6c] text-sm font-light mb-4"
                key={index}
              >{`${index + 1}. ${item}`}</p>
            ))
          ) : (
            <p className="text-[#6c6c6c] text-sm mb-4 font-light">
              {content?.project_Industry}
            </p>
          )}
          <h6 className="text-base font-normal text-black mb-1">What to do</h6>
          {Array.isArray(content.project_description) ? (
            content?.project_description?.map((item, index) => (
              <p
                className="text-[#6c6c6c] text-sm font-light mb-4"
                key={index}
              >{`${index + 1}. ${item}`}</p>
            ))
          ) : (
            <p className="text-[#6c6c6c] text-sm mb-4 font-light">
              {content?.project_description}
            </p>
          )}
          <h6 className="text-base font-normal text-black mb-1">Skills</h6>
          {Array.isArray(content.project_Skills) ? (
            content?.project_Skills?.map((item, index) => (
              <p
                className="text-[#6c6c6c] text-sm font-light mb-4"
                key={index}
              >{`${index + 1}. ${item}`}</p>
            ))
          ) : (
            <p className="text-[#6c6c6c] text-sm mb-4 font-light">
              {content?.project_Skills}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
