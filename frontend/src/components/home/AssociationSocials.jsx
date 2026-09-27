import React from "react";
import { ArrowUpRight } from "lucide-react";

import cpLogo from "../../assets/association_logos/CP.png";
import droniLogo from "../../assets/association_logos/DroniCulture~mv2.webp";
import madariLogo from "../../assets/association_logos/MadariVeda.jpg";
import mentorLogo from "../../assets/association_logos/MentorPrep.webp";
import nmimsLogo from "../../assets/association_logos/NMIMS.svg";
import sesLogo from "../../assets/association_logos/SES.png";

const logosList = [
    { name: "CP", src: cpLogo },
    { name: "Droni Culture", src: droniLogo },
    { name: "Madari Veda", src: madariLogo },
    { name: "Mentor Prep", src: mentorLogo },
    { name: "NMIMS", src: nmimsLogo },
    { name: "SES Education", src: sesLogo },
];

// Duplicate arrays for 100% seamless marquee looping
const row1Items = [...logosList, ...logosList, ...logosList, ...logosList];
const row2Items = [...logosList].reverse().concat([...logosList].reverse(), [...logosList].reverse(), [...logosList].reverse());

// SVG Icons for Socials
const InstagramIcon = (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const YoutubeIcon = (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
);

const LinkedinIcon = (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const WhatsappIcon = (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);

const socialPlatforms = [
    {
        name: "Instagram",
        icon: InstagramIcon,
        handle: "@stemsage_official",
        link: "#",
        color: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent",
    },
    {
        name: "YouTube",
        icon: YoutubeIcon,
        handle: "STEMSAGE Learning",
        link: "#",
        color: "hover:bg-red-600 hover:text-white hover:border-transparent",
    },
    {
        name: "LinkedIn",
        icon: LinkedinIcon,
        handle: "STEMSAGE Education",
        link: "#",
        color: "hover:bg-blue-600 hover:text-white hover:border-transparent",
    },
    {
        name: "WhatsApp",
        icon: WhatsappIcon,
        handle: "STEM Community",
        link: "#",
        color: "hover:bg-emerald-600 hover:text-white hover:border-transparent",
    },
];

function AssociationSocials() {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-b border-slate-100">
            {/* Inline Styles for Slow Dual-Direction Marquee without Hover Pause */}
            <style>{`
                @keyframes marqueeLeftToRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                @keyframes marqueeRightToLeft {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-l2r {
                    display: flex;
                    width: max-content;
                    animation: marqueeLeftToRight 55s linear infinite;
                }
                .animate-marquee-r2l {
                    display: flex;
                    width: max-content;
                    animation: marqueeRightToLeft 55s linear infinite;
                }
            `}</style>

            <div className="relative mx-auto w-full">
                {/* Heading — Our Association */}
                <div className="text-center px-5">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Our <span className="text-red-600">Association</span>
                    </h2>
                    {/* Red line under heading */}
                    <div className="mt-4 mx-auto h-[3px] w-16 bg-red-600 rounded-full" />
                </div>

                {/* Marquee Section Container */}
                <div className="mt-16 bg-slate-50/50 py-10 border-y border-slate-200/60 space-y-10 overflow-hidden">
                    {/* Row 1: Left to Right */}
                    <div className="relative w-full overflow-hidden">
                        <div className="animate-marquee-l2r items-center">
                            {row1Items.map((logo, idx) => (
                                <div
                                    key={`r1-${idx}`}
                                    className="flex items-center justify-center h-20 sm:h-24 w-52 sm:w-64 px-6 mx-6 shrink-0 transition-transform duration-300 hover:scale-105"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="max-h-16 sm:max-h-20 max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Horizontal Divider Line between Row 1 and Row 2 */}
                    <div className="h-[1px] w-full bg-slate-200/80 max-w-6xl mx-auto px-5" />

                    {/* Row 2: Right to Left (Opposite Direction) */}
                    <div className="relative w-full overflow-hidden">
                        <div className="animate-marquee-r2l items-center">
                            {row2Items.map((logo, idx) => (
                                <div
                                    key={`r2-${idx}`}
                                    className="flex items-center justify-center h-20 sm:h-24 w-52 sm:w-64 px-6 mx-6 shrink-0 transition-transform duration-300 hover:scale-105"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="max-h-16 sm:max-h-20 max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Heading — Our Socials */}
                <div className="mt-24 text-center px-5">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Our <span className="text-red-600">Socials</span>
                    </h2>
                    {/* Red line under heading */}
                    <div className="mt-4 mx-auto h-[3px] w-16 bg-red-600 rounded-full" />
                </div>

                {/* Social Buttons Container */}
                <div className="mt-12 max-w-5xl mx-auto px-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {socialPlatforms.map((platform) => {
                            const Icon = platform.icon;
                            return (
                                <a
                                    key={platform.name}
                                    href={platform.link}
                                    onClick={(e) => {
                                        if (platform.link === "#") e.preventDefault();
                                    }}
                                    className={`group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 ${platform.color} shadow-xs`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="h-6 w-6 shrink-0" />
                                        <div>
                                            <div className="text-sm font-extrabold">{platform.name}</div>
                                            <div className="text-xs opacity-75">{platform.handle}</div>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AssociationSocials;
