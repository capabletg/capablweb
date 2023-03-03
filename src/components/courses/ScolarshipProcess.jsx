import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, useScroll, motion } from "framer-motion";
import useGeneralStore from "../../store/generalStore";

export default function ScolarshipProcess({ data }) {
  const openCtaForm = useGeneralStore((state) => state.openCtaForm);

  const [activeItem, setActiveItem] = useState(null);
  const [activeIndex, setActiveIdex] = useState(0);
  const [progress, setProgress] = useState(0);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0%", "end 100%"],
  });

  scrollYProgress.onChange((val) => {
    setProgress(Number(val * 100)?.toFixed(2));
  });

  const getMaxMinValue = (val) => (val >= 100 ? 100 : val <= 0 ? 0 : val);

  useEffect(() => {
    setActiveIdex(parseInt((progress * (data?.length - 1)) / 100));
  }, [progress]);

  useEffect(() => {
    if (activeIndex >= 0) setActiveItem(data?.[activeIndex]);
    else setActiveItem(data?.[0]);
  }, [activeIndex]);

  return (
    <div
      ref={ref}
      style={{ height: `${33 * data?.length}rem` }}
      className="relative"
    >
      <div className="bg-transparent  text-[#231f20] sticky top-36 z-[1] md:bg-white mt-10 md:mt-8 md:rounded-2xl p-0 md:px-10 md:pt-16 md:pb-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div
          style={{ boxShadow: "0px 8px 20px rgba(177, 194, 193, 0.2)" }}
          className="hidden md:block absolute z-0 top-0 left-0 w-full h-full rounded-2xl"
        />

        <svg
          className="hidden xl:block absolute top-[-10%] left-[-4.5%] w-16 object-contain fill-capabl_primary"
          viewBox="0 0 108 238"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M105.593 3.79062C63.0871 8.94795 29.3178 35.3969 17.1444 65.5382C1.99134 103.044 16.6213 142.818 41.0084 176.18C52.7232 192.206 66.7477 207.205 81.569 221.712C82.6224 208.124 86.6182 194.315 95.355 182.433C97.5159 179.503 102.938 182.081 101.22 185.001C93.5762 197.993 87.1858 210.697 84.6012 224.663C86.3597 226.364 88.1277 228.06 89.903 229.75C94.3697 234.007 86.7246 240.022 82.0062 236.274C81.334 237.002 80.1842 237.453 78.8421 237.109C67.1519 234.119 55.2206 231.43 43.1949 229.313C37.9717 228.396 32.6959 227.645 27.4216 226.895L27.4206 226.894C20.5111 225.911 13.6044 224.928 6.82275 223.574C2.21913 222.65 3.17217 217.393 7.93685 217.383C31.354 217.345 55.6996 223.848 76.8691 231.411C44.6689 200.512 14.6101 167.044 3.97832 128.078C-6.11475 91.0739 2.08577 50.6481 39.1026 23.236C56.7923 10.1319 80.0792 1.69368 104.909 0.00801261C107.768 -0.192662 108.466 3.43944 105.593 3.79062Z" />
        </svg>

        <PreviewImage src={activeItem?.image} />

        <div className="col-span-1 md:pt-8 max-w-lg mr-auto relative z-[3]">
          <div className="mb-5 flex items-center justify-start gap-2">
            <span className="w-3 h-3 rounded-full bg-capabl_primary flex-shrink-0" />
            <span className="text-black text-base font-light">
              Process to get Scholarship
            </span>
          </div>

          <h3 className="text-xl md:text-3xl font-light text-[#14213D] mb-3 md:mb-4">
            {activeItem?.titleComponent || ""}
          </h3>

          <p className="text-sm text-[#808080] font-light mb-6 md:mb-7 max-w-sm">
            {activeItem?.description || ""}
          </p>

          <button
            onClick={() => openCtaForm()}
            className="rounded-lg px-6 md:px-8 py-2.5 bg-capabl_primary text-[#272727] text-center font-normal text-sm border-2 border-transparent hover_animation"
          >
            {activeItem?.cta || ""}
          </button>
        </div>

        <>
          <div className="pb-10 px-10 mt-10 hidden md:inline-block col-span-2 md:order-2">
            <div className="w-full flex items-center justify-between relative z-[3]">
              <span className="h-1 bg-[#f2f4f7]  absolute top-1/2 transform -translate-y-1/2 left-0 w-full" />
              <span
                style={{ width: `${getMaxMinValue(progress)}%` }}
                className="h-1 bg-capabl_primary  absolute top-1/2 transform -translate-y-1/2 left-0"
              />

              {data?.map(({ title }, index) => (
                <Process
                  key={index}
                  label={title}
                  active={
                    progress >= parseInt((index * 100) / (data?.length - 1))
                  }
                />
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

function Process({ label, active }) {
  return (
    <div
      className={`relative flex-shrink-0 w-4 h-4 rounded-full ${
        active ? "bg-capabl_primary" : "bg-[#f2f4f7]"
      }`}
    >
      <span
        className={`absolute whitespace-nowrap top-[150%] left-1/2 transform -translate-x-1/2 text-xs lg:text-sm ${
          active ? "font-medium" : "font-light"
        } text-[#14213d] text-center`}
      >
        {label}
      </span>
    </div>
  );
}

function PreviewImage({ src }) {
  return (
    <AnimatePresence>
      <div className="col-span-1 md:order-1 max-w-lg md:max-w-md mx-auto md:ml-auto md:mr-0">
        <motion.img
          key={`process_${src}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full object-contain"
          alt="process"
          src={src}
        />
      </div>
    </AnimatePresence>
  );
}
