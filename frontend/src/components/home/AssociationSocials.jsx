import React from "react";

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

// Circular Brand SVG Icons matching reference screenshot
const WhatsappCircleIcon = () => (
    <svg viewBox="0 0 64 64" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-115 drop-shadow-md">
        <circle cx="32" cy="32" r="30" fill="#25D366" />
        <path fill="#FFFFFF" d="M32 14c-9.9 0-18 8.1-18 18 0 3.2.8 6.3 2.4 9L14 50l9.3-2.4c2.6 1.4 5.6 2.2 8.7 2.2 9.9 0 18-8.1 18-18S41.9 14 32 14zm10.4 25.5c-.4 1.2-2.3 2.4-3.2 2.5-.9.1-2 .5-6.7-1.4-5.7-2.3-9.4-8.1-9.7-8.5-.3-.4-2.4-3.2-2.4-6.1 0-2.9 1.5-4.3 2-4.9.5-.6 1.2-.7 1.6-.7.4 0 .8 0 1.2.1.4.1.9-.2 1.4 1 .5 1.2 1.7 4.2 1.9 4.5.1.3.2.7 0 1.1-.2.4-.3.7-.6 1-.3.3-.7.7-1 1-.3.3-.7.7-.3 1.4.4.7 1.8 3 3.9 4.9 2.7 2.4 5 3.1 5.7 3.5.7.4 1.1.3 1.5-.1.4-.4 1.7-2 2.1-2.7.4-.7.9-.6 1.5-.3.6.3 3.8 1.8 4.4 2.1.6.3 1 .5 1.2.8.2.4.2 1.9-.2 3.1z" />
    </svg>
);

const YoutubeCircleIcon = () => (
    <svg viewBox="0 0 64 64" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-115 drop-shadow-md">
        <circle cx="32" cy="32" r="30" fill="#FF0000" />
        <path fill="#FFFFFF" d="M26 21v22l18-11L26 21z" />
    </svg>
);

const InstagramCircleIcon = () => (
    <svg viewBox="0 0 64 64" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-115 drop-shadow-md">
        <defs>
            <linearGradient id="igCircleGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="25%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="90%" stopColor="#285AEB" />
            </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="url(#igCircleGrad)" />
        <rect x="18" y="18" width="28" height="28" rx="8" fill="none" stroke="#FFFFFF" strokeWidth="3" />
        <circle cx="32" cy="32" r="7" fill="none" stroke="#FFFFFF" strokeWidth="3" />
        <circle cx="39.5" cy="24.5" r="2" fill="#FFFFFF" />
    </svg>
);

const LinkedinCircleIcon = () => (
    <svg viewBox="0 0 64 64" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-115 drop-shadow-md">
        <circle cx="32" cy="32" r="30" fill="#0A66C2" />
        <path fill="#FFFFFF" d="M20 27h6v17h-6V27zm3-9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm7 9h5.6v2.4h.1c.8-1.5 2.7-3.1 5.6-3.1 6 0 7.1 3.9 7.1 9V44h-6v-8.7c0-2.1 0-4.8-2.9-4.8-2.9 0-3.4 2.3-3.4 4.6V44h-6V27z" />
    </svg>
);

const FacebookCircleIcon = () => (
    <svg viewBox="0 0 64 64" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-115 drop-shadow-md">
        <circle cx="32" cy="32" r="30" fill="#1877F2" />
        <path fill="#FFFFFF" d="M37 22h-4c-2.8 0-3.5 1.3-3.5 3.5V29h7.5l-1 7h-6.5v18h-8V36h-6v-7h6v-5.2C25 17.8 28.6 15 34.5 15c2.8 0 5.2.2 5.9.3v6.7z" />
    </svg>
);

const socialCirclePlatforms = [
    { name: "WhatsApp", icon: WhatsappCircleIcon, link: "#" },
    { name: "YouTube", icon: YoutubeCircleIcon, link: "#" },
    { name: "Instagram", icon: InstagramCircleIcon, link: "#" },
    { name: "LinkedIn", icon: LinkedinCircleIcon, link: "#" },
    { name: "Facebook", icon: FacebookCircleIcon, link: "#" },
];

function AssociationSocials() {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-b border-slate-100">
            {/* Inline Styles for Slow Dual-Direction Marquee */}
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

                {/* Circular Social Icons Bar matching reference screenshot */}
                <div className="mt-14 py-10 px-5 border-y border-slate-200/80 shadow-xs bg-white">
                    <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 max-w-5xl mx-auto">
                        {socialCirclePlatforms.map((platform) => {
                            const IconComponent = platform.icon;
                            return (
                                <a
                                    key={platform.name}
                                    href={platform.link}
                                    aria-label={platform.name}
                                    onClick={(e) => {
                                        if (platform.link === "#") e.preventDefault();
                                    }}
                                    className="inline-flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
                                >
                                    <IconComponent />
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
