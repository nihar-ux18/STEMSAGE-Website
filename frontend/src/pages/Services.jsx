import { Link } from "react-router-dom";
import {
    ArrowRight,
    Bot,
    Check,
    Code2,
    Lightbulb,
    Presentation,
    Wrench,
} from "lucide-react";
import Footer from "../components/common/Footer";

const services = [
    {
        icon: Presentation,
        number: "01",
        title: "STEM Workshops",
        description: "Interactive, age-appropriate sessions that turn complex concepts into memorable hands-on experiences.",
        points: ["School and college programs", "Activity-based learning", "Expert-led sessions"],
        color: "red",
    },
    {
        icon: Bot,
        number: "02",
        title: "Robotics & IoT Labs",
        description: "Help learners move from an idea to a working prototype with guided robotics, electronics, and IoT builds.",
        points: ["Robotics curriculum design", "IoT and embedded systems", "Competition preparation"],
        color: "cyan",
    },
    {
        icon: Code2,
        number: "03",
        title: "Coding Programs",
        description: "Build confident problem-solvers through practical programming tracks designed around real projects.",
        points: ["Web and app development", "Python and block coding", "Project-based assessments"],
        color: "blue",
    },
    {
        icon: Wrench,
        number: "04",
        title: "Innovation Labs",
        description: "Create a future-ready maker space with the right tools, mentorship, and roadmap for your institution.",
        points: ["Lab setup and planning", "Equipment and kit guidance", "Teacher enablement"],
        color: "green",
    },
];

const colorStyles = {
    red: { icon: "bg-red-50 text-red-600", line: "bg-red-500" },
    cyan: { icon: "bg-cyan-50 text-cyan-600", line: "bg-cyan-500" },
    blue: { icon: "bg-blue-50 text-blue-600", line: "bg-blue-500" },
    green: { icon: "bg-green-50 text-green-600", line: "bg-green-500" },
};

function Services() {
    return (
        <main className="w-full overflow-hidden bg-white text-slate-950">
            <section className="relative overflow-hidden border-b border-slate-100 px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
                <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[18px] border-red-100" />
                <div className="relative z-10 mx-auto max-w-6xl">
                    <div className="flex items-center gap-4"><span className="h-px w-12 bg-red-500" /><span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">What we do</span></div>
                    <div className="mt-7 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[76px]">Turn curiosity into <span className="text-red-500">capability.</span></h1>
                        <p className="max-w-xl text-base font-medium leading-8 text-slate-500 lg:pb-2 lg:text-lg">From a single workshop to a complete innovation lab, STEMSAGE brings practical STEM learning to life for schools, colleges, and curious minds.</p>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700">Explore services <ArrowRight size={16} /></a>
                        <Link to="/forum" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:text-red-600">Talk to our community</Link>
                    </div>
                </div>
            </section>

            <section id="services" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
                <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">Built around doing</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Learning that leaves a mark.</h2></div><p className="max-w-sm text-sm leading-7 text-slate-500">Every engagement is designed to make learners ask better questions and build something they are proud of.</p></div>
                <div className="grid gap-5 md:grid-cols-2">
                    {services.map(({ icon: Icon, number, title, description, points, color }) => {
                        const styles = colorStyles[color];
                        return <article key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 sm:p-9"><div className={`absolute left-0 top-0 h-1 w-full ${styles.line}`} /><div className="flex items-start justify-between"><div className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}><Icon size={23} /></div><span className="font-mono text-sm font-bold text-slate-300">{number}</span></div><h3 className="mt-7 text-2xl font-black tracking-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{description}</p><ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">{points.map((point) => <li key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-700"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-red-500"><Check size={13} strokeWidth={3} /></span>{point}</li>)}</ul></article>;
                    })}
                </div>
            </section>

            <section className="bg-[#0f172a] px-6 py-20 text-white sm:px-8 lg:px-10"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><div className="flex items-center gap-3 text-red-400"><Lightbulb size={18} /><span className="text-xs font-bold uppercase tracking-[0.28em]">Have a challenge?</span></div><h2 className="mt-5 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Let’s build the next big idea together.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">Tell us what your learners, team, or institution needs. We’ll help you find the right starting point.</p></div><a href="mailto:hello@stemsage.tech" className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-red-500">Start a conversation <ArrowRight size={17} /></a></div></section>
            <Footer />
        </main>
    );
}

export default Services;
