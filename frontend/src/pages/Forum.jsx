import { useState } from "react";
import { Eye, MessageCircle, Pencil, Tag, UserRound } from "lucide-react";
import Footer from "../components/common/Footer";

const filters = ["All", "Electronics", "Robotics", "Programming", "IoT", "3D Design"];
const posts = [
    ["Getting Started with Arduino", "admin", "Electronics", "I'm new to Arduino and electronics. Where should I start? What components do I need for basic projects?...", "2"],
    ["Best Robotics Project Ideas", "admin", "Robotics", "Share your favorite robotics project ideas! I'm looking for inspiration for my next project....", "1"],
    ["AI and Machine Learning in STEM", "john_doe", "Programming", "How can we integrate AI and machine learning into STEM education? Share your thoughts and resources....", "1"],
    ["IoT Smart Home Projects", "john_doe", "IoT", "I'm working on a smart home project. Any suggestions for sensors and automation ideas?...", "1"],
    ["3D Printing Tips", "admin", "3D Design", "What are your best tips for successful 3D printing? Share your experiences with different materials and settings....", "0"],
];

function Forum() {
    const [active, setActive] = useState("All");
    const visiblePosts = posts.filter((post) => active === "All" || post[2] === active);
    return <main className="bg-white text-slate-600"><section className="mx-auto max-w-4xl px-6 pb-20 pt-20 sm:px-8 lg:pt-24"><h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">Our <span className="text-red-600">Forum</span></h1><div className="mx-auto mt-4 h-1 w-14 bg-red-600" /><p className="mt-7 text-center text-sm sm:text-base">Connect, share, and learn with the STEMSAGE community.</p><div className="mt-8 flex flex-wrap justify-center gap-3">{filters.map((filter) => <button type="button" key={filter} onClick={() => setActive(filter)} className={`rounded-full px-5 py-2 text-xs font-medium transition ${active === filter ? "bg-red-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600"}`}>{filter}</button>)}</div><div className="mt-6 space-y-4">{visiblePosts.map(([title, author, category, description, comments]) => <article key={title} className="rounded-xl border border-slate-100 px-5 py-6 shadow-sm sm:px-6"><h2 className="text-base font-bold text-slate-700">{title}</h2><div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500"><span className="inline-flex items-center gap-1"><UserRound size={13} fill="currentColor" />{author}</span><span>◷ Aug 03, 2026</span><span className="inline-flex items-center gap-1 font-semibold text-red-600"><Tag size={13} fill="currentColor" />{category}</span></div><p className="mt-3 text-sm leading-6">{description}</p><div className="mt-4 flex items-center gap-5 text-xs text-slate-500"><span className="inline-flex items-center gap-1"><MessageCircle size={14} fill="currentColor" />{comments} comments</span><span className="inline-flex items-center gap-1"><Eye size={14} />0 views</span></div></article>)}</div><div className="mt-6 flex flex-col items-center justify-center rounded-md bg-slate-50 py-5 text-center text-sm"><Pencil className="text-red-600" size={27} fill="currentColor" /><p className="mt-2">Please create a new post.</p></div></section><Footer /></main>;
}

export default Forum;
