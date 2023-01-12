import React from "react";
import { FaPlay } from "react-icons/fa";

const data1 = {
    image: "/images/courses/testimonial_1.jpg",
    video: "",
    quote: "Thanks to Capabl, I changed my career path from Business Intelligence Executive to Senior Analyst with a 30% hike in my salary.",
    name: "Muzammil Thottathil",
    organization: "Qutyme Solutions",
    role: "ReactJS Developer",
};
const data2 = {
    image: "/images/courses/testimonial_2.jpg",
    video: "",
    quote: "Thanks to Capabl, I changed my career path from Business Intelligence Executive to Senior Analyst with a 30% hike in my salary.",
    name: "Muzammil Thottathil",
    organization: "Qutyme Solutions",
    role: "ReactJS Developer",
};
const data3 = {
    image: "/images/courses/testimonial_3.jpg",
    video: "",
    quote: "Thanks to Capabl, I changed my career path from Business Intelligence Executive to Senior Analyst with a 30% hike in my salary.",
    name: "Muzammil Thottathil",
    organization: "Qutyme Solutions",
    role: "ReactJS Developer",
};
const data4 = {
    image: "/images/courses/testimonial_4.jpg",
    video: "",
    quote: "Thanks to Capabl, I changed my career path from Business Intelligence Executive to Senior Analyst with a 30% hike in my salary.",
    name: "Muzammil Thottathil",
    organization: "Qutyme Solutions",
    role: "ReactJS Developer",
};

export default function VideoGridTestimonials() {
    return (
        <div className="relative z-0 mt-10 sm:mt-12 md:mt-16 lg:mt-[4.5rem]">
            {/* Top illustration */}
            <svg
                className="absolute hidden md:block z-0 top-0 left-0 transform translate-y-[-45%] w-full object-contain"
                viewBox="0 0 1365 437"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path opacity="0.4" d="M1126.34 355.482L1235.75 112.58H1347.89" stroke="#89C5CC" strokeWidth="2.83266" />
                <path
                    d="M1363.83 111.554C1363.83 116.206 1360.06 119.977 1355.41 119.977C1350.77 119.977 1347 116.206 1347 111.554C1347 106.902 1350.77 103.131 1355.41 103.131C1360.06 103.131 1363.83 106.902 1363.83 111.554Z"
                    fill="#89C5CC"
                    stroke="white"
                    strokeWidth="0.94422"
                />
                <path opacity="0.4" d="M323.367 366.366L174.693 15.0859H22.3017" stroke="#89C5CC" strokeWidth="2.83266" />
                <path
                    d="M0.472691 13.6016C0.472691 20.4737 5.69715 25.9932 12.0804 25.9932C18.4636 25.9932 23.688 20.4737 23.688 13.6016C23.688 6.72944 18.4636 1.2099 12.0804 1.2099C5.69715 1.2099 0.472691 6.72944 0.472691 13.6016Z"
                    fill="#89C5CC"
                    stroke="white"
                    strokeWidth="0.94422"
                />
                <path opacity="0.4" d="M442.034 435.633L293.36 84.353H140.969" stroke="#89C5CC" strokeWidth="2.83266" />
                <path
                    d="M119.139 82.8687C119.139 89.7408 124.363 95.2603 130.746 95.2603C137.13 95.2603 142.354 89.7408 142.354 82.8687C142.354 75.9965 137.13 70.477 130.746 70.477C124.363 70.477 119.139 75.9965 119.139 82.8687Z"
                    fill="#89C5CC"
                    stroke="white"
                    strokeWidth="0.94422"
                />
            </svg>

            {/* Bottom illustration */}
            <svg
                className="absolute hidden md:block z-0 top-0 bottom-0 transform translate-y-[100%] w-full object-contain"
                viewBox="0 0 1376 436"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path opacity="0.4" d="M344.589 30.7912L186.367 382.071L24.1889 382.071" stroke="#89C5CC" strokeWidth="2.83266" />
                <path
                    d="M0.92702 383.556C0.927021 376.712 6.47156 371.164 13.3105 371.164C20.1494 371.164 25.6939 376.712 25.6939 383.556C25.6939 390.4 20.1494 395.947 13.3105 395.947C6.47156 395.947 0.92702 390.4 0.92702 383.556Z"
                    fill="#89C5CC"
                    stroke="white"
                    strokeWidth="0.94422"
                />
                <path opacity="0.4" d="M371.914 81.2568L262.507 324.158L150.365 324.158" stroke="#89C5CC" strokeWidth="2.83266" />
                <path
                    d="M134.426 325.185C134.426 320.532 138.195 316.762 142.843 316.762C147.492 316.762 151.26 320.532 151.26 325.185C151.26 329.837 147.492 333.607 142.843 333.607C138.195 333.607 134.426 329.837 134.426 325.185Z"
                    fill="#89C5CC"
                    stroke="white"
                    strokeWidth="0.94422"
                />
                <path opacity="0.4" d="M1052.63 70.3717L1201.31 421.652L1353.7 421.652" stroke="#89C5CC" strokeWidth="2.83266" />
                <path
                    d="M1375.53 423.136C1375.53 416.264 1370.3 410.745 1363.92 410.745C1357.54 410.745 1352.31 416.264 1352.31 423.136C1352.31 430.008 1357.54 435.528 1363.92 435.528C1370.3 435.528 1375.53 430.008 1375.53 423.136Z"
                    fill="#89C5CC"
                    stroke="white"
                    strokeWidth="0.94422"
                />
                <path opacity="0.4" d="M933.965 1.10514L1082.64 352.385L1235.03 352.385" stroke="#89C5CC" strokeWidth="2.83266" />
                <path
                    d="M1256.86 353.87C1256.86 346.997 1251.63 341.478 1245.25 341.478C1238.87 341.478 1233.64 346.997 1233.64 353.87C1233.64 360.742 1238.87 366.261 1245.25 366.261C1251.63 366.261 1256.86 360.742 1256.86 353.87Z"
                    fill="#89C5CC"
                    stroke="white"
                    strokeWidth="0.94422"
                />
            </svg>

            <div className="rounded-2xl md:rounded-3xl overflow-hidden relative z-[1] grid grid-cols-1 md:grid-cols-2">
                {/* set 1 */}
                <div className="grid grid-cols-2 md:order-1">
                    <div className="w-full h-full overflow-hidden relative group cursor-pointer">
                        <img className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500" src={data1?.image} alt="testimonial" />

                        {/* fader */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[#12A5EE] bg-opacity-20" />

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 flex items-center justify-center">
                            <span className="text-xs sm:text-sm md:text-base ml-0.5 text-black">
                                <FaPlay />
                            </span>
                        </div>
                    </div>
                    <div className="bg-[#12A5EE] text-white flex flex-col items-center justify-center gap-4 md:gap-5 px-4 md:px-6 py-10 relative">
                        {/* arrow */}
                        <span className="absolute top-5 -left-[3rem] w-0 h-0 border-[1.3rem] border-r-[2rem] border-l-transparent border-r-[#12A5EE] border-t-transparent border-b-transparent" />

                        <svg className="w-5 md:w-8 object-contain fill-white" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.082 16.5374C33.082 17.5615 32.8862 18.5254 32.4946 19.4291C32.1331 20.3026 31.6211 21.0858 30.9584 21.7786C30.2957 22.4412 29.5126 22.9684 28.6089 23.3599C27.7354 23.7515 26.7866 23.9473 25.7624 23.9473C24.4672 23.9473 23.3226 23.6612 22.3286 23.0889C21.3647 22.5165 20.5363 21.7786 19.8435 20.8749C19.1809 19.9411 18.6688 18.8869 18.3073 17.7121C17.976 16.5073 17.8103 15.2874 17.8103 14.0524C17.8103 12.6969 17.9911 11.3565 18.3525 10.0311C18.714 8.70579 19.226 7.4708 19.8887 6.32618C20.5815 5.18156 21.4249 4.14237 22.4189 3.2086C23.4129 2.27483 24.5274 1.50673 25.7624 0.904297L29.7385 3.02787C28.9553 3.81103 28.2776 4.71468 27.7053 5.73881C27.1631 6.76295 26.892 7.83226 26.892 8.94676V9.3534C27.7655 9.50401 28.5788 9.79017 29.3318 10.2119C30.0849 10.6336 30.7325 11.1607 31.2747 11.7933C31.847 12.4258 32.2837 13.1487 32.585 13.962C32.9163 14.7753 33.082 15.6338 33.082 16.5374ZM15.506 16.5374C15.506 17.5615 15.3102 18.5254 14.9187 19.4291C14.5572 20.3026 14.0451 21.0858 13.3825 21.7786C12.7198 22.4412 11.9366 22.9684 11.033 23.3599C10.1594 23.7515 9.21061 23.9473 8.18648 23.9473C6.89125 23.9473 5.74663 23.6612 4.75261 23.0889C3.78872 22.5165 2.96038 21.7786 2.26758 20.8749C1.60491 19.9411 1.09284 18.8869 0.731381 17.7121C0.400044 16.5073 0.234375 15.2874 0.234375 14.0524C0.234375 12.6969 0.415105 11.3565 0.776564 10.0311C1.13802 8.70579 1.65009 7.4708 2.31276 6.32618C3.00556 5.18156 3.84897 4.14237 4.84298 3.2086C5.83699 2.27483 6.95149 1.50673 8.18648 0.904297L12.1625 3.02787C11.3794 3.81103 10.7016 4.71468 10.1293 5.73881C9.58713 6.76295 9.31604 7.83226 9.31604 8.94676V9.3534C10.1896 9.50401 11.0028 9.79017 11.7559 10.2119C12.5089 10.6336 13.1565 11.1607 13.6987 11.7933C14.271 12.4258 14.7078 13.1487 15.009 13.962C15.3404 14.7753 15.506 15.6338 15.506 16.5374Z"
                                fill="inherit"
                            />
                        </svg>
                        <p className="text-center text-xs sm:text-sm">
                            <span>{data1?.quote || "..."}</span>
                            <span className="text-sm block mt-4 font-semibold leading-6">{data1?.name || "..."}</span>
                            <span className="text-xs block leading-4">{data1?.organization || "..."}</span>
                            <span className="text-xs block leading-4">{data1?.role || "..."}</span>
                        </p>
                    </div>
                </div>

                {/* set 2 */}
                <div className="grid grid-cols-2 md:order-3">
                    <div className="bg-[#CF2323] text-white flex flex-col items-center justify-center gap-4 md:gap-5 px-4 md:px-6 py-10 relative">
                        {/* arrow */}
                        <span className="absolute z-[2] top-5 -right-[3rem] w-0 h-0 border-[1.3rem] border-l-[2rem] border-l-[#CF2323] border-r-transparent border-t-transparent border-b-transparent" />

                        <svg className="w-5 md:w-8 object-contain fill-white" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.082 16.5374C33.082 17.5615 32.8862 18.5254 32.4946 19.4291C32.1331 20.3026 31.6211 21.0858 30.9584 21.7786C30.2957 22.4412 29.5126 22.9684 28.6089 23.3599C27.7354 23.7515 26.7866 23.9473 25.7624 23.9473C24.4672 23.9473 23.3226 23.6612 22.3286 23.0889C21.3647 22.5165 20.5363 21.7786 19.8435 20.8749C19.1809 19.9411 18.6688 18.8869 18.3073 17.7121C17.976 16.5073 17.8103 15.2874 17.8103 14.0524C17.8103 12.6969 17.9911 11.3565 18.3525 10.0311C18.714 8.70579 19.226 7.4708 19.8887 6.32618C20.5815 5.18156 21.4249 4.14237 22.4189 3.2086C23.4129 2.27483 24.5274 1.50673 25.7624 0.904297L29.7385 3.02787C28.9553 3.81103 28.2776 4.71468 27.7053 5.73881C27.1631 6.76295 26.892 7.83226 26.892 8.94676V9.3534C27.7655 9.50401 28.5788 9.79017 29.3318 10.2119C30.0849 10.6336 30.7325 11.1607 31.2747 11.7933C31.847 12.4258 32.2837 13.1487 32.585 13.962C32.9163 14.7753 33.082 15.6338 33.082 16.5374ZM15.506 16.5374C15.506 17.5615 15.3102 18.5254 14.9187 19.4291C14.5572 20.3026 14.0451 21.0858 13.3825 21.7786C12.7198 22.4412 11.9366 22.9684 11.033 23.3599C10.1594 23.7515 9.21061 23.9473 8.18648 23.9473C6.89125 23.9473 5.74663 23.6612 4.75261 23.0889C3.78872 22.5165 2.96038 21.7786 2.26758 20.8749C1.60491 19.9411 1.09284 18.8869 0.731381 17.7121C0.400044 16.5073 0.234375 15.2874 0.234375 14.0524C0.234375 12.6969 0.415105 11.3565 0.776564 10.0311C1.13802 8.70579 1.65009 7.4708 2.31276 6.32618C3.00556 5.18156 3.84897 4.14237 4.84298 3.2086C5.83699 2.27483 6.95149 1.50673 8.18648 0.904297L12.1625 3.02787C11.3794 3.81103 10.7016 4.71468 10.1293 5.73881C9.58713 6.76295 9.31604 7.83226 9.31604 8.94676V9.3534C10.1896 9.50401 11.0028 9.79017 11.7559 10.2119C12.5089 10.6336 13.1565 11.1607 13.6987 11.7933C14.271 12.4258 14.7078 13.1487 15.009 13.962C15.3404 14.7753 15.506 15.6338 15.506 16.5374Z"
                                fill="inherit"
                            />
                        </svg>
                        <p className="text-center text-xs sm:text-sm">
                            <span>{data2?.quote || "..."}</span>
                            <span className="text-sm block mt-4 font-semibold leading-6">{data2?.name || "..."}</span>
                            <span className="text-xs block leading-4">{data2?.organization || "..."}</span>
                            <span className="text-xs block leading-4">{data2?.role || "..."}</span>
                        </p>
                    </div>

                    <div className="w-full h-full overflow-hidden relative group cursor-pointer">
                        <img
                            className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
                            src="/images/courses/testimonial_2.jpg"
                            alt="testimonial"
                        />

                        {/* fader */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[#CF2323] bg-opacity-20" />

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 flex items-center justify-center">
                            <span className="text-xs sm:text-sm md:text-base ml-0.5 text-black">
                                <FaPlay />
                            </span>
                        </div>
                    </div>
                </div>

                {/* set 3 */}
                <div className="grid grid-cols-2 md:order-2">
                    <div className="w-full h-full overflow-hidden relative group cursor-pointer">
                        <img
                            className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
                            src="/images/courses/testimonial_3.jpg"
                            alt="testimonial"
                        />

                        {/* fader */}
                        <div className="absolute top-0 left-0 w-full h-full bg-capabl_primary bg-opacity-10" />

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 flex items-center justify-center">
                            <span className="text-xs sm:text-sm md:text-base ml-0.5 text-black">
                                <FaPlay />
                            </span>
                        </div>
                    </div>
                    <div className="bg-capabl_primary text-[#090909] flex flex-col items-center justify-center gap-4 md:gap-5 px-4 md:px-6 py-10 relative">
                        {/* arrow */}
                        <span className="absolute z-[2] top-5 -left-[3rem] w-0 h-0 border-[1.3rem] border-r-[2rem] border-l-transparent border-r-capabl_primary border-t-transparent border-b-transparent" />

                        <svg className="w-5 md:w-8 object-contain fill-[#090909]" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.082 16.5374C33.082 17.5615 32.8862 18.5254 32.4946 19.4291C32.1331 20.3026 31.6211 21.0858 30.9584 21.7786C30.2957 22.4412 29.5126 22.9684 28.6089 23.3599C27.7354 23.7515 26.7866 23.9473 25.7624 23.9473C24.4672 23.9473 23.3226 23.6612 22.3286 23.0889C21.3647 22.5165 20.5363 21.7786 19.8435 20.8749C19.1809 19.9411 18.6688 18.8869 18.3073 17.7121C17.976 16.5073 17.8103 15.2874 17.8103 14.0524C17.8103 12.6969 17.9911 11.3565 18.3525 10.0311C18.714 8.70579 19.226 7.4708 19.8887 6.32618C20.5815 5.18156 21.4249 4.14237 22.4189 3.2086C23.4129 2.27483 24.5274 1.50673 25.7624 0.904297L29.7385 3.02787C28.9553 3.81103 28.2776 4.71468 27.7053 5.73881C27.1631 6.76295 26.892 7.83226 26.892 8.94676V9.3534C27.7655 9.50401 28.5788 9.79017 29.3318 10.2119C30.0849 10.6336 30.7325 11.1607 31.2747 11.7933C31.847 12.4258 32.2837 13.1487 32.585 13.962C32.9163 14.7753 33.082 15.6338 33.082 16.5374ZM15.506 16.5374C15.506 17.5615 15.3102 18.5254 14.9187 19.4291C14.5572 20.3026 14.0451 21.0858 13.3825 21.7786C12.7198 22.4412 11.9366 22.9684 11.033 23.3599C10.1594 23.7515 9.21061 23.9473 8.18648 23.9473C6.89125 23.9473 5.74663 23.6612 4.75261 23.0889C3.78872 22.5165 2.96038 21.7786 2.26758 20.8749C1.60491 19.9411 1.09284 18.8869 0.731381 17.7121C0.400044 16.5073 0.234375 15.2874 0.234375 14.0524C0.234375 12.6969 0.415105 11.3565 0.776564 10.0311C1.13802 8.70579 1.65009 7.4708 2.31276 6.32618C3.00556 5.18156 3.84897 4.14237 4.84298 3.2086C5.83699 2.27483 6.95149 1.50673 8.18648 0.904297L12.1625 3.02787C11.3794 3.81103 10.7016 4.71468 10.1293 5.73881C9.58713 6.76295 9.31604 7.83226 9.31604 8.94676V9.3534C10.1896 9.50401 11.0028 9.79017 11.7559 10.2119C12.5089 10.6336 13.1565 11.1607 13.6987 11.7933C14.271 12.4258 14.7078 13.1487 15.009 13.962C15.3404 14.7753 15.506 15.6338 15.506 16.5374Z"
                                fill="inherit"
                            />
                        </svg>
                        <p className="text-center text-xs sm:text-sm">
                            <span>{data3?.quote || "..."}</span>
                            <span className="text-sm block mt-4 font-semibold leading-6">{data3?.name || "..."}</span>
                            <span className="text-xs block leading-4">{data3?.organization || "..."}</span>
                            <span className="text-xs block leading-4">{data3?.role || "..."}</span>
                        </p>
                    </div>
                </div>

                {/* set 4 */}
                <div className="grid grid-cols-2 md:order-4">
                    <div className="bg-[#31B6AC] text-white flex flex-col items-center justify-center gap-4 md:gap-5 px-4 md:px-6 py-10 relative">
                        {/* arrow */}
                        <span className="absolute z-[2] top-5 -right-[3rem] w-0 h-0 border-[1.3rem] border-l-[2rem] border-l-[#31B6AC] border-r-transparent border-t-transparent border-b-transparent" />

                        <svg className="w-5 md:w-8 object-contain fill-white" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.082 16.5374C33.082 17.5615 32.8862 18.5254 32.4946 19.4291C32.1331 20.3026 31.6211 21.0858 30.9584 21.7786C30.2957 22.4412 29.5126 22.9684 28.6089 23.3599C27.7354 23.7515 26.7866 23.9473 25.7624 23.9473C24.4672 23.9473 23.3226 23.6612 22.3286 23.0889C21.3647 22.5165 20.5363 21.7786 19.8435 20.8749C19.1809 19.9411 18.6688 18.8869 18.3073 17.7121C17.976 16.5073 17.8103 15.2874 17.8103 14.0524C17.8103 12.6969 17.9911 11.3565 18.3525 10.0311C18.714 8.70579 19.226 7.4708 19.8887 6.32618C20.5815 5.18156 21.4249 4.14237 22.4189 3.2086C23.4129 2.27483 24.5274 1.50673 25.7624 0.904297L29.7385 3.02787C28.9553 3.81103 28.2776 4.71468 27.7053 5.73881C27.1631 6.76295 26.892 7.83226 26.892 8.94676V9.3534C27.7655 9.50401 28.5788 9.79017 29.3318 10.2119C30.0849 10.6336 30.7325 11.1607 31.2747 11.7933C31.847 12.4258 32.2837 13.1487 32.585 13.962C32.9163 14.7753 33.082 15.6338 33.082 16.5374ZM15.506 16.5374C15.506 17.5615 15.3102 18.5254 14.9187 19.4291C14.5572 20.3026 14.0451 21.0858 13.3825 21.7786C12.7198 22.4412 11.9366 22.9684 11.033 23.3599C10.1594 23.7515 9.21061 23.9473 8.18648 23.9473C6.89125 23.9473 5.74663 23.6612 4.75261 23.0889C3.78872 22.5165 2.96038 21.7786 2.26758 20.8749C1.60491 19.9411 1.09284 18.8869 0.731381 17.7121C0.400044 16.5073 0.234375 15.2874 0.234375 14.0524C0.234375 12.6969 0.415105 11.3565 0.776564 10.0311C1.13802 8.70579 1.65009 7.4708 2.31276 6.32618C3.00556 5.18156 3.84897 4.14237 4.84298 3.2086C5.83699 2.27483 6.95149 1.50673 8.18648 0.904297L12.1625 3.02787C11.3794 3.81103 10.7016 4.71468 10.1293 5.73881C9.58713 6.76295 9.31604 7.83226 9.31604 8.94676V9.3534C10.1896 9.50401 11.0028 9.79017 11.7559 10.2119C12.5089 10.6336 13.1565 11.1607 13.6987 11.7933C14.271 12.4258 14.7078 13.1487 15.009 13.962C15.3404 14.7753 15.506 15.6338 15.506 16.5374Z"
                                fill="inherit"
                            />
                        </svg>
                        <p className="text-center text-xs sm:text-sm">
                            <span>{data4?.quote || "..."}</span>
                            <span className="text-sm block mt-4 font-semibold leading-6">{data4?.name || "..."}</span>
                            <span className="text-xs block leading-4">{data4?.organization || "..."}</span>
                            <span className="text-xs block leading-4">{data4?.role || "..."}</span>
                        </p>
                    </div>

                    <div className="w-full h-full overflow-hidden relative group cursor-pointer">
                        <img
                            className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
                            src="/images/courses/testimonial_4.jpg"
                            alt="testimonial"
                        />

                        {/* fader */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[#31B6AC] bg-opacity-20" />

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 flex items-center justify-center">
                            <span className="text-xs sm:text-sm md:text-base ml-0.5 text-black">
                                <FaPlay />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
