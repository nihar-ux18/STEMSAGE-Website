import React from "react";
import { Users, School, GraduationCap, Building2, Cpu, PhoneCall, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const associations = [
    {
        id: "assoc-1",
        title: "Students",
        desc: "Interactive hands-on learning, hardware kits, and national-level project competitions.",
        icon: GraduationCap,
    },
    {
        id: "assoc-2",
        title: "Schools & K-12",
        desc: "Curriculum integration, STEM lab installations, and interactive student workshops.",
        icon: School,
    },
    {
        id: "assoc-3",
        title: "Educators",
        desc: "Teacher training programs, instructional manuals, and continuous mentor enablement.",
        icon: Users,
    },
    {
        id: "assoc-4",
        title: "Institutions & Colleges",
        desc: "Advanced robotics labs, IoT innovation centers, and research project collaboration.",
        icon: Building2,
    },
    {
        id: "assoc-5",
        title: "Industry Partners",
        desc: "Aligning academic learning with real-world technological skill demands.",
        icon: Cpu,
    },
];

// SVG Components for Social Icons
const InstagramIcon = (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const YoutubeIcon = (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
);

const LinkedinIcon = (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const WhatsappIcon = (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
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
        name: "WhatsApp Community",
        icon: WhatsappIcon,
        handle: "Join STEM Group",
        link: "#",
        color: "hover:bg-emerald-600 hover:text-white hover:border-transparent",
    },
];

function AssociationSocials() {
    return (
        <section className="relative overflow-hidden bg-slate-50/70 px-5 py-16 sm:px-8 sm:py-24 md:px-10 lg:px-12 border-b border-slate-200/80">
            <div className="relative mx-auto max-w-7xl">
                {/* Section Header */}
                <SectionHeading
                    eyebrow="Our Association"
                    title="Bridging Ecosystems for"
                    highlightTitle="Impactful Education"
                    description="STEMSAGE connects students, schools, educators, institutions, and industry to foster a sustainable ecosystem of innovation."
                />

                {/* Association Pillars Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {associations.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg"
                            >
                                <div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-transform duration-300 group-hover:scale-110">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Community & Socials Area */}
                <div className="mt-16 rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
                    <div className="text-center max-w-2xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
                            Join Our Community
                        </span>
                        <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
                            Connect With STEMSAGE Across Platforms
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Follow our social channels to get regular updates on STEM workshops, student projects, coding tips, and hardware releases.
                        </p>
                    </div>

                    {/* Social Buttons Row */}
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {socialPlatforms.map((platform) => {
                            const Icon = platform.icon;
                            return (
                                <a
                                    key={platform.name}
                                    href={platform.link}
                                    onClick={(e) => {
                                        if (platform.link === "#") e.preventDefault();
                                    }}
                                    className={`group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 ${platform.color} shadow-xs`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="h-5 w-5 shrink-0" />
                                        <div>
                                            <div className="text-xs font-bold">{platform.name}</div>
                                            <div className="text-[11px] opacity-75">{platform.handle}</div>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
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
