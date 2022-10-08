import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Test() {
    const ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    useEffect(() => {
        const el = ref.current;
        // gsap.fromTo(
        //     el,
        //     { rotation: 0 },
        //     {
        //         rotation: 180,
        //         duration: 3,
        //         scrollTrigger: {
        //             trigger: el,
        //         },
        //     }
        // );
        // gsap.to(
        //     el,

        //     {
        //         x: 800,
        //         rotation: 360,
        //         duration: 3,
        //         scrollTrigger: {
        //             trigger: el,
        //             start: "top center",
        //             end: "top top",
        //             scrub: true,
        //             markers: true,
        //             pin: true,
        //             toggleActions: "restart pause reverse pause",
        //         },
        //     }
        // );

        ScrollTrigger.create({
            trigger: el,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            markers: true,

            onEnter: () => {
                console.log("Enter");
            },
            onLeave: () => {
                console.log("leave");
            },
        });
        // gsap.to(
        //     el,

        //     {
        //         x: 800,
        //         rotation: 360,
        //         duration: 3,
        //         scrollTrigger: {
        //             trigger: el,
        //             start: "top center",
        //             end: "top top",
        //             scrub: true,
        //             markers: true,
        //             pin: true,
        //             toggleActions: "restart pause reverse pause",
        //         },
        //     }
        // );
    }, []);

    return (
        <div>
            <div className="w-full h-screen bg-green-500" />

            <div ref={ref} style={{ height: "100vh", width: "100%", backgroundColor: "yellow" }} />

            <div className="w-full h-screen bg-blue-500" />
            <div className="w-full h-screen bg-red-500" />
            <div className="w-full h-screen bg-gray-500" />
            <div className="w-full h-screen bg-purple-500" />
            <div className="w-full h-screen bg-indigo-500" />
            <div className="w-full h-screen bg-teal-500" />
        </div>
    );
}
