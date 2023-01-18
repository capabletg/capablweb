import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";

export default function VerticalPathAnimation() {
    const [progress, setProgress] = useState(0);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end 70%"],
    });

    scrollYProgress.onChange((val) => {
        setProgress(Number(val * 100)?.toFixed(2));
    });

    return (
        <div className="w-[70%] max-w-sm mx-auto pl-4">
            <div ref={ref} className="relative h-[140rem]">
                <div className="sticky top-28">
                    <svg className="w-full object-contain" viewBox="0 0 673 1351" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 375.373L89.5 375.373V378.373L0 378.373V375.373Z" className="fill-[#d9d9d9]" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M504 566.373L656 566.373V569.373L504 569.373L504 566.373Z" className="fill-[#d9d9d9]" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M588 942.373L673 942.372L673 945.372L588 945.373L588 942.373Z"
                            className="fill-[#d9d9d9]"
                        />
                        <path fillRule="evenodd" clipRule="evenodd" d="M56 764.373L184 764.373V767.373L56 767.373L56 764.373Z" className="fill-[#d9d9d9]" />
                        <path
                            d="M134 1146.37H293.812L249.177 1022.39L252 1021.37L297 1146.37H371.5V1149.37H296.313L252 1278.37L249.163 1277.4L293.141 1149.37H134V1146.37Z"
                            className="fill-[#d9d9d9]"
                        />
                        <path d="M507 339.373H294L294 473.873H297V342.373L507 342.373V339.373Z" className="fill-[#d9d9d9]" />
                        <path d="M552 729.373H397V857.373H400V732.373L552 732.373V729.373Z" className="fill-[#d9d9d9]" />
                        <path
                            d="M360.779 1L365.779 237C365.946 247 359.479 266.9 332.279 266.5C305.079 266.1 179.279 266.333 119.779 266.5C109.446 267 88.7793 274.1 88.7793 298.5V446.5C89.1126 455.833 96.2793 474.5 122.279 474.5H473.779C483.779 474.333 503.879 480 504.279 504C504.679 528 504.446 594.333 504.279 624.5C504.113 634 497.479 653 472.279 653H215.279C204.613 652.667 183.279 658.7 183.279 685.5V828C183.613 837.667 190.279 857 214.279 857H557.279C567.279 856.833 587.379 862.6 587.779 887C588.179 911.4 587.946 972.833 587.779 1000.5C587.946 1010.17 581.979 1029.5 556.779 1029.5H402.279C392.279 1029.5 372.179 1035.9 371.779 1061.5C371.379 1087.1 371.613 1265.17 371.779 1351"
                            stroke="#F2F6F7"
                            fill="transparent"
                            strokeWidth="35"
                        />
                        <motion.path
                            className="stroke-capabl_primary"
                            d="M360.779 1L365.779 237C365.946 247 359.479 266.9 332.279 266.5C305.079 266.1 179.279 266.333 119.779 266.5C109.446 267 88.7793 274.1 88.7793 298.5V446.5C89.1126 455.833 96.2793 474.5 122.279 474.5H473.779C483.779 474.333 503.879 480 504.279 504C504.679 528 504.446 594.333 504.279 624.5C504.113 634 497.479 653 472.279 653H215.279C204.613 652.667 183.279 658.7 183.279 685.5V828C183.613 837.667 190.279 857 214.279 857H557.279C567.279 856.833 587.379 862.6 587.779 887C588.179 911.4 587.946 972.833 587.779 1000.5C587.946 1010.17 581.979 1029.5 556.779 1029.5H402.279C392.279 1029.5 372.179 1035.9 371.779 1061.5C371.379 1087.1 371.613 1265.17 371.779 1351"
                            fill="transparent"
                            strokeWidth="35"
                            pathLength="1"
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>

                    {/* Point 0 */}
                    <>
                        <div
                            style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)", top: "11%", left: "54%" }}
                            className={`absolute z-[2] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[10%] max-w-[3.2rem] aspect-square border sm:border-2 transition duration-100 ${
                                progress > 3.7 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                            }`}
                        />
                    </>

                    {/* Point 1 */}
                    <>
                        <div
                            style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)", top: "27.6%", left: "13%" }}
                            className={`absolute z-[2] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[10%] max-w-[3.2rem] aspect-square border sm:border-2 transition duration-100 ${
                                progress > 21 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                            }`}
                        />

                        <span
                            style={{ top: "25.5%", left: "-21%" }}
                            className={`text-xs font-medium transform -translate-x-1/2 text-center absolute w-[6rem] transition-all duration-200 ${
                                progress > 21 ? "text-black" : "text-[#bbb]"
                            }`}
                        >{`400+ Hrs of Technical Training`}</span>
                    </>

                    {/* Point 2 */}
                    <>
                        <div
                            style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)", top: "34.9%", left: "44.5%" }}
                            className={`absolute z-[2] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[10%] max-w-[3.2rem] aspect-square border sm:border-2 transition duration-100 ${
                                progress > 31 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                            }`}
                        />
                        <span
                            style={{ top: "23%", left: "98%" }}
                            className={`text-xs font-medium transform -translate-x-1/2 text-center absolute w-[7.5rem] transition-all duration-200 ${
                                progress > 31 ? "text-black" : "text-[#bbb]"
                            }`}
                        >{`400+ Hrs of Technical Training`}</span>
                    </>

                    {/* Point 3 */}
                    <>
                        <div
                            style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)", top: "42.2%", left: "75%" }}
                            className={`absolute z-[2] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[10%] max-w-[3.2rem] aspect-square border sm:border-2 transition duration-100 ${
                                progress > 41 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                            }`}
                        />
                        <span
                            style={{ top: "38%", left: "113%" }}
                            className={`text-xs font-medium transform -translate-x-1/2 text-center absolute w-[3rem] transition-all duration-200 ${
                                progress > 41 ? "text-black" : "text-[#bbb]"
                            }`}
                        >{`Industry Visits`}</span>
                    </>

                    {/* Point 4 */}
                    <>
                        <div
                            style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)", top: "56.7%", left: "27.2%" }}
                            className={`absolute z-[2] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[10%] max-w-[3.2rem] aspect-square border sm:border-2 transition duration-100 ${
                                progress > 58 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                            }`}
                        />
                        <span
                            style={{ top: "54.5%", left: "0%" }}
                            className={`text-xs font-medium transform -translate-x-1/2 text-center absolute w-[3rem] transition-all duration-200 ${
                                progress > 58 ? "text-black" : "text-[#bbb]"
                            }`}
                        >{`40+ Projects`}</span>
                    </>

                    {/* Point 5 */}
                    <>
                        <div
                            style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)", top: "63.3%", left: "59.5%" }}
                            className={`absolute z-[2] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[10%] max-w-[3.2rem] aspect-square border sm:border-2 transition duration-100 ${
                                progress > 69 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                            }`}
                        />
                        <span
                            style={{ top: "52%", left: "98%" }}
                            className={`text-xs font-medium transform -translate-x-1/2 text-center absolute w-[5rem] transition-all duration-200 ${
                                progress > 69 ? "text-black" : "text-[#bbb]"
                            }`}
                        >{`Industry Internships`}</span>
                    </>

                    {/* Point 6 */}
                    <>
                        <div
                            style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)", top: "70%", left: "87%" }}
                            className={`absolute z-[2] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[10%] max-w-[3.2rem] aspect-square border sm:border-2 transition duration-100 ${
                                progress > 78 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                            }`}
                        />
                        <span
                            style={{ top: "68%", left: "111.5%" }}
                            className={`text-xs font-medium transform -translate-x-1/2 text-center absolute w-[5rem] transition-all duration-200 ${
                                progress > 78 ? "text-black" : "text-[#bbb]"
                            }`}
                        >{`Mock Interviews`}</span>
                    </>

                    {/* Point 7 */}
                    <>
                        <div
                            style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)", top: "84.8%", left: "55%" }}
                            className={`absolute z-[2] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[10%] max-w-[3.2rem] aspect-square border sm:border-2 transition duration-100 ${
                                progress > 92 ? "bg-capabl_primary border-white" : "bg-white border-transparent"
                            }`}
                        />
                        <span
                            style={{ top: "71%", left: "30%" }}
                            className={`text-xs font-medium transform -translate-x-1/2 text-center absolute w-[5rem] transition-all duration-200 ${
                                progress > 92 ? "text-black" : "text-[#bbb]"
                            }`}
                        >{`Your dream job`}</span>
                        <span
                            style={{ top: "82.5%", left: "-10%" }}
                            className={`text-xs font-medium transform -translate-x-1/2 text-center absolute w-[7.5rem] transition-all duration-200 ${
                                progress > 93.5 ? "text-black" : "text-[#bbb]"
                            }`}
                        >{`Higher Studies at you dream college`}</span>
                        <span
                            style={{ top: "96%", left: "21%" }}
                            className={`text-xs font-medium transform -translate-x-1/2 text-center absolute w-[6rem] transition-all duration-200 ${
                                progress > 95 ? "text-black" : "text-[#bbb]"
                            }`}
                        >{`A Successfull Startup`}</span>
                    </>

                    {/* Point EXIT */}
                    <>
                        <div
                            style={{ boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)", top: "99.5%", left: "55.3%" }}
                            className={`absolute z-[2] transform -translate-x-1/2 -translate-y-1/2 top-[40%] left-[97.5%] rounded-full w-[10%] max-w-[3.2rem] aspect-square border sm:border-2 transition duration-100 bg-white ${
                                progress >= 99 ? "border-capabl_primary" : "border-transparent"
                            }`}
                        />

                        <div style={{ top: "99.5%", left: "55.3%" }} className={`absolute z-[3] transform -translate-x-1/2 -translate-y-1/2 w-36 h-36`}>
                            <div className="relative w-full h-full">
                                <LottiePlayer progress={progress} />

                                <div style={{ top: "40%", left: "50%" }} className="absolute transform -translate-x-1/2 -translate-y-1/2 w-12">
                                    <LottiePlayerCup progress={progress} />
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>
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
