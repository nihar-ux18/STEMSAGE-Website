import React from "react";
import { Award, Users, BookOpen, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const impactStats = [
    {
        id: "stat-1",
        number: "20+",
        label: "Onsite Workshops",
        sublabel: "Conducted in schools & colleges",
        icon: Award,
        gradient: "from-red-500 to-rose-600",
    },
    {
        id: "stat-2",
        number: "10+",
        label: "Online Workshops",
        sublabel: "Interactive live training sessions",
        icon: BookOpen,
        gradient: "from-amber-400 to-red-500",
    },
    {
        id: "stat-3",
        number: "50+",
        label: "STEM Projects",
        sublabel: "Hardware & software builds",
        icon: Rocket,
        gradient: "from-blue-400 to-indigo-500",
    },
    {
        id: "stat-4",
        number: "1,000+",
        label: "Students Empowered",
        sublabel: "Across engineering & school programs",
        icon: Users,
        gradient: "from-emerald-400 to-teal-500",
    },
];

export function StatCard({ stat }) {
    const Icon = stat.icon;

    return (
        <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-800/80 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-slate-800 hover:shadow-2xl hover:shadow-red-500/10">
            {/* Top Icon Badge */}
            <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-white/10 text-red-500 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-red-500" />
                </div>
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            </div>

            {/* Stat Number */}
            <div className="mt-6">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white block">
                    {stat.number}
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-100">
                    {stat.label}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                    {stat.sublabel}
                </p>
            </div>

            {/* Bottom accent line */}
            <div className="mt-6 h-1 w-full rounded-full bg-slate-700/50 overflow-hidden">
                <div className="h-full w-12 bg-red-500 transition-all duration-500 group-hover:w-full" />
            </div>
        </div>
    );
}

function StemsageImpact() {
    return (
        <section className="relative overflow-hidden bg-[#0f172a] px-5 py-20 sm:px-8 sm:py-28 md:px-10 lg:px-12 text-white border-b border-slate-800">
            {/* Dark background ambient grid pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Red Ambient Glow Orbs */}
            <div className="pointer-events-none absolute -left-28 top-10 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-red-600/15 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="STEMSAGE Impact"
                    title="Real Results & Growing"
                    highlightTitle="Community"
                    description="Our footprint in hands-on STEM workshops, practical project development, and institutional outreach."
                    lightBg={false}
                />

                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {impactStats.map((stat) => (
                        <StatCard key={stat.id} stat={stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StemsageImpact;
