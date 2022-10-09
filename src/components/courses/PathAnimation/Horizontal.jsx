import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";

export default function HorizontalPathAnimation() {
    const [progress, setProgress] = useState(0);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center 85%", "end 82%"],
    });

    scrollYProgress.onChange((val) => {
        setProgress(Number(val * 100)?.toFixed(2));
    });

    return (
        <div ref={ref} className="relative">
            <svg className="w-full object-contain" viewBox="0 0 1351 673" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    id="point_1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M375.373 673L375.373 583.5H378.373L378.373 673H375.373Z"
                    className="fill-[#d9d9d9]"
                />
                <path
                    id="point_3"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M566.373 169L566.373 17L569.373 17L569.373 169L566.373 169Z"
                    className="fill-[#d9d9d9]"
                />
                <path
                    id="point_5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M942.373 85L942.372 6.66509e-06L945.372 0L945.373 85L942.373 85Z"
                    className="fill-[#d9d9d9]"
                />
                <path
                    id="point_4"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M764.373 617L764.373 489L767.373 489L767.373 617L764.373 617Z"
                    className="fill-[#d9d9d9]"
                />
                <path
                    id="point_6"
                    d="M1145.37 539V379.188L1021.39 423.823L1020.37 421L1145.37 376V301.5H1148.37V376.687L1277.37 421L1276.4 423.837L1148.37 379.859V539H1145.37Z"
                    className="fill-[#d9d9d9]"
                />
                <path id="point_2" d="M339.373 166V379L473.873 379V376H342.373L342.373 166H339.373Z" className="fill-[#d9d9d9]" />
                <path id="point_5_2" d="M729.373 121V276H857.373V273H732.373L732.373 121H729.373Z" className="fill-[#d9d9d9]" />
                <path
                    id="main_path"
                    d="M1 312.221L237 307.221C247 307.054 266.9 313.521 266.5 340.721C266.1 367.921 266.333 493.721 266.5 553.221C267 563.554 274.1 584.221 298.5 584.221C322.9 584.221 407.333 584.221 446.5 584.221C455.833 583.888 474.5 576.721 474.5 550.721C474.5 524.721 474.5 305.554 474.5 199.221C474.333 189.221 480 169.121 504 168.721C528 168.321 594.333 168.554 624.5 168.721C634 168.888 653 175.521 653 200.721C653 225.921 653 382.554 653 457.721C652.667 468.388 658.7 489.721 685.5 489.721C712.3 489.721 791.667 489.721 828 489.721C837.667 489.388 857 482.721 857 458.721C857 434.721 857 220.054 857 115.721C856.833 105.721 862.6 85.6209 887 85.2209C911.4 84.8209 972.833 85.0542 1000.5 85.2209C1010.17 85.0542 1029.5 91.0208 1029.5 116.221C1029.5 141.421 1029.5 229.721 1029.5 270.721C1029.5 280.721 1035.9 300.821 1061.5 301.221C1087.1 301.621 1265.17 301.387 1351 301.221"
                    stroke="#F2F6F7"
                    fill="transparent"
                    strokeWidth="35"
                />
                <motion.path
                    className="stroke-capabl_primary"
                    d="M1 312.221L237 307.221C247 307.054 266.9 313.521 266.5 340.721C266.1 367.921 266.333 493.721 266.5 553.221C267 563.554 274.1 584.221 298.5 584.221C322.9 584.221 407.333 584.221 446.5 584.221C455.833 583.888 474.5 576.721 474.5 550.721C474.5 524.721 474.5 305.554 474.5 199.221C474.333 189.221 480 169.121 504 168.721C528 168.321 594.333 168.554 624.5 168.721C634 168.888 653 175.521 653 200.721C653 225.921 653 382.554 653 457.721C652.667 468.388 658.7 489.721 685.5 489.721C712.3 489.721 791.667 489.721 828 489.721C837.667 489.388 857 482.721 857 458.721C857 434.721 857 220.054 857 115.721C856.833 105.721 862.6 85.6209 887 85.2209C911.4 84.8209 972.833 85.0542 1000.5 85.2209C1010.17 85.0542 1029.5 91.0208 1029.5 116.221C1029.5 141.421 1029.5 229.721 1029.5 270.721C1029.5 280.721 1035.9 300.821 1061.5 301.221C1087.1 301.621 1265.17 301.387 1351 301.221"
                    fill="transparent"
                    strokeWidth="35"
                    pathLength="1"
                    style={{ pathLength: scrollYProgress }}
                />
            </svg>

            {/* Point 0 */}
            <>
                <div
                    style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)" }}
                    className={`absolute z-[2] top-[41%] left-[8%] rounded-full w-[4.8%] aspect-square border-2 transition duration-100 ${
                        progress > 3.7 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                    }`}
                />
            </>

            {/* Point 1 */}
            <>
                <div
                    style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)" }}
                    className={`absolute z-[2] top-[81.9%] left-[25.4%] rounded-full w-[4.8%] aspect-square border-2 transition duration-100 ${
                        progress > 21 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                    }`}
                />

                <span
                    style={{ top: "101.5%", left: "28%" }}
                    className={`text-sm font-medium transform -translate-x-1/2 text-center absolute w-[9rem] transition-all duration-200 ${
                        progress > 21 ? "text-black" : "text-[#bbb]"
                    }`}
                >{`400+ Hrs of Technical Training`}</span>
            </>

            {/* Point 2 */}
            <>
                <div
                    style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)" }}
                    className={`absolute z-[2] top-[51%] left-[32.7%] rounded-full w-[4.8%] aspect-square border-2 transition duration-100 ${
                        progress > 31 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                    }`}
                />
                <span
                    style={{ top: "17%", left: "25.5%" }}
                    className={`text-sm font-medium transform -translate-x-1/2 text-center absolute w-[9rem] transition-all duration-200 ${
                        progress > 31 ? "text-black" : "text-[#bbb]"
                    }`}
                >{`400+ Hrs of Technical Training`}</span>
            </>

            {/* Point 3 */}
            <>
                <div
                    style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)" }}
                    className={`absolute z-[2] top-[20.2%] left-[39.7%] rounded-full w-[4.8%] aspect-square border-2 transition duration-100 ${
                        progress > 41 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                    }`}
                />
                <span
                    style={{ top: "-5%", left: "42%" }}
                    className={`text-sm font-medium transform -translate-x-1/2 text-center absolute w-[4rem] transition-all duration-200 ${
                        progress > 41 ? "text-black" : "text-[#bbb]"
                    }`}
                >{`Industry Visits`}</span>
            </>

            {/* Point 4 */}
            <>
                <div
                    style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)" }}
                    className={`absolute z-[2] top-[67.8%] left-[54.3%] rounded-full w-[4.8%] aspect-square border-2 transition duration-100 ${
                        progress > 58 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                    }`}
                />
                <span
                    style={{ top: "93%", left: "57%" }}
                    className={`text-sm font-medium transform -translate-x-1/2 text-center absolute w-[3rem] transition-all duration-200 ${
                        progress > 58 ? "text-black" : "text-[#bbb]"
                    }`}
                >{`40+ Projects`}</span>
            </>

            {/* Point 5 */}
            <>
                <div
                    style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)" }}
                    className={`absolute z-[2] top-[35.8%] left-[61.1%] rounded-full w-[4.8%] aspect-square border-2 transition duration-100 ${
                        progress > 69 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                    }`}
                />
                <span
                    style={{ top: "10.5%", left: "54%" }}
                    className={`text-sm font-medium transform -translate-x-1/2 text-center absolute w-[5rem] transition-all duration-200 ${
                        progress > 69 ? "text-black" : "text-[#bbb]"
                    }`}
                >{`Industry Internships`}</span>
            </>

            {/* Point 6 */}
            <>
                <div
                    style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)" }}
                    className={`absolute z-[2] top-[7.75%] left-[67.5%] rounded-full w-[4.8%] aspect-square border-2 transition duration-100 ${
                        progress > 78 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                    }`}
                />
                <span
                    style={{ top: "-7.5%", left: "69.5%" }}
                    className={`text-sm font-medium transform -translate-x-1/2 text-center absolute w-[5rem] transition-all duration-200 ${
                        progress > 78 ? "text-black" : "text-[#bbb]"
                    }`}
                >{`Mock Interviews`}</span>
            </>

            {/* Point 7 */}
            <>
                <div
                    style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)" }}
                    className={`absolute z-[2] top-[40%] left-[82.5%] rounded-full w-[4.8%] aspect-square border-2 transition duration-100 ${
                        progress > 92 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                    }`}
                />
                <span
                    style={{ top: "64.5%", left: "75%" }}
                    className={`text-sm font-medium transform -translate-x-1/2 text-center absolute w-[6rem] transition-all duration-200 ${
                        progress > 92 ? "text-black" : "text-[#bbb]"
                    }`}
                >{`Your dream job`}</span>
                <span
                    style={{ top: "82%", left: "85%" }}
                    className={`text-sm font-medium transform -translate-x-1/2 text-center absolute w-[9rem] transition-all duration-200 ${
                        progress > 93.5 ? "text-black" : "text-[#bbb]"
                    }`}
                >{`Higher Studies at you dream college`}</span>
                <span
                    style={{ top: "65%", left: "97.5%" }}
                    className={`text-sm font-medium transform -translate-x-1/2 text-center absolute w-[6rem] transition-all duration-200 ${
                        progress > 95 ? "text-black" : "text-[#bbb]"
                    }`}
                >{`A Successfull Startup`}</span>
            </>

            {/* Point EXIT */}
            <>
                <div
                    style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)" }}
                    className={`absolute z-[2] top-[40%] left-[97.5%] rounded-full w-[4.8%] aspect-square border-2 transition duration-100 bg-white ${
                        progress >= 99 ? "border-capabl_primary" : "border-transparent"
                    }`}
                />

                <div className={`absolute z-[3] top-[44%] left-[99%] transform -translate-x-1/2 -translate-y-1/2 w-48 h-48`}>
                    <div className="relative w-full h-full">
                        <LottiePlayer progress={progress} />

                        <div style={{ top: "43%", left: "54%" }} className="absolute transform -translate-x-1/2 -translate-y-1/2 w-16">
                            <LottiePlayerCup progress={progress} />
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

function LottiePlayer({ progress = 0 }) {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        import("../../lotties/cracker.json").then(setAnimationData);
    }, []);

    if (progress < 99) return <></>;

    return <Lottie loop={false} animationData={animationData} play={true} className="w-full h-full" />;
}
function LottiePlayerCup({ progress = 0 }) {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        import("../../lotties/cup.json").then(setAnimationData);
    }, []);

    if (progress < 99) return <></>;

    return <Lottie loop={false} animationData={animationData} play={true} className="w-full" />;
}
