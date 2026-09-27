import React from "react";
import { Link } from "react-router-dom";

import electronicsGif from "../../assets/innovations/electronics.gif";
import roboticsGif from "../../assets/innovations/robotics.gif";
import iotGif from "../../assets/innovations/InternetOfThings.gif";
import printingGif from "../../assets/innovations/3DPrinting.gif";
import programmingGif from "../../assets/innovations/Programming.gif";

const innovationDoors = [
    {
        name: "Electronics",
        gif: electronicsGif,
        link: "/courses",
    },
    {
        name: "Robotics",
        gif: roboticsGif,
        link: "/workshops",
    },
    {
        name: "Internet of Things",
        gif: iotGif,
        link: "/projects",
    },
    {
        name: "3D Printing",
        gif: printingGif,
        link: "/services",
    },
    {
        name: "Programming",
        gif: programmingGif,
        link: "/courses",
    },
];

function DoorsOfInnovation() {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-24 px-5 border-b border-slate-100">
            <div className="relative mx-auto max-w-6xl">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        5 Doors of <span className="text-red-600">Innovation</span>
                    </h2>
                    {/* Small Red Line below heading */}
                    <div className="mt-4 mx-auto h-[3px] w-16 bg-red-600 rounded-full" />
                </div>

                {/* 5 Items Row */}
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-6 items-start text-center">
                    {innovationDoors.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className="group flex flex-col items-center justify-start p-3 transition-all duration-300 hover:-translate-y-1.5"
                        >
                            {/* Animated GIF Container */}
                            <div className="h-28 w-28 sm:h-32 sm:w-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src={item.gif}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {/* Title Label */}
                            <span className="mt-6 text-base sm:text-lg font-bold text-slate-800 group-hover:text-red-600 transition-colors leading-snug max-w-[140px]">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DoorsOfInnovation;
