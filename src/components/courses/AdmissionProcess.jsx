import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function AdmissionProcess() {
    const [progress, setProgress] = useState(0);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 95%", "end 50%"],
    });

    scrollYProgress.onChange((val) => {
        setProgress(Number(val * 100)?.toFixed(2));
    });

    const getMaxMinValue = (val) => (val >= 100 ? 100 : val <= 0 ? 0 : val);

    return (
        <div className="pb-10 px-10 mt-10 hidden md:inline-block col-span-2 md:order-2">
            <div ref={ref} className="w-full flex items-center justify-between relative z-[3]">
                <span className="h-1 bg-[#f2f4f7]  absolute top-1/2 transform -translate-y-1/2 left-0 w-full" />
                <span style={{ width: `${getMaxMinValue(progress)}%` }} className="h-1 bg-capabl_primary  absolute top-1/2 transform -translate-y-1/2 left-0" />

                <Process label="Talk to Counsellor" active={progress > 0} />
                <Process label="Take Scholarship Test" active={progress > 33} />
                <Process label="Crack the Interview" active={progress > 66} />
                <Process label="Get Admission" active={progress > 99} />
            </div>
        </div>
    );
}

function Process({ label, active }) {
    return (
        <div className={`relative flex-shrink-0 w-4 h-4 rounded-full ${active ? "bg-capabl_primary" : "bg-[#f2f4f7]"}`}>
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
