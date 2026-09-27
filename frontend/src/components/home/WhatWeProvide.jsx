import React from "react";
import { Link } from "react-router-dom";
import { Wrench, Package, Boxes, School, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import workshopImg from "../../assets/workshop-img.jpg";
import eduKitImg from "../../assets/Edu-kit.webp";

const servicesProvided = [
    {
        id: "01",
        title: "STEM Workshops",
        category: "Interactive Learning",
        description: "Engaging, practical hands-on workshops for students, schools, and colleges covering robotics, IoT, AI, and electronics.",
        image: workshopImg,
        fallbackImg: "/images/hero-2.png",
        icon: Wrench,
        link: "/workshops",
        btnText: "Explore Workshops",
    },
    {
        id: "02",
        title: "Educational Kits",
        category: "Hardware & Kits",
        description: "Modular, curriculum-aligned DIY STEM kits equipped with microcontrollers, sensors, and guided project instructions.",
        image: eduKitImg,
        fallbackImg: "/images/hero-1.png",
        icon: Package,
        link: "/store",
        btnText: "View STEM Kits",
    },
    {
        id: "03",
        title: "STEM Product Supply",
        category: "Components & Hardware",
        description: "Reliable sourcing and supply of high-quality electronic components, sensors, 3D printing filaments, and lab modules.",
        image: "/images/hero-1.png",
        icon: Boxes,
        link: "/store",
        btnText: "Explore Store",
    },
    {
        id: "04",
        title: "STEM Lab Setup Service",
        category: "Institutional Solution",
        description: "Turnkey establishment of modern STEM & Innovation Labs, robotics centers, and makerspaces for schools and colleges.",
        image: "/images/hero-3.png",
        icon: School,
        link: "/services",
        btnText: "Lab Setup Services",
    },
];

export function ServiceCard({ item }) {
    const Icon = item.icon;

    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl hover:shadow-red-500/10">
            {/* Image Container with Badge */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                        if (item.fallbackImg) {
                            e.currentTarget.src = item.fallbackImg;
                        }
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-slate-900 shadow-sm">
                    <Icon className="h-3.5 w-3.5 text-red-600" />
                    <span>{item.category}</span>
                </div>

                {/* Card Title Overlay on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.title}
                    </h3>
                </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                        to={item.link}
                        className="inline-flex items-center gap-2 text-sm font-bold text-red-600 transition-colors hover:text-red-700"
                    >
                        <span>{item.btnText}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

function WhatWeProvide() {
    return (
        <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-24 md:px-10 lg:px-12 border-b border-slate-200/80">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="What We Provide"
                    title="Empowering Education with"
                    highlightTitle="End-to-End Solutions"
                    description="From hands-on workshops and DIY kits to full-scale institutional lab setups, we deliver practical STEM tools."
                />

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {servicesProvided.map((service) => (
                        <ServiceCard key={service.id} item={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhatWeProvide;
