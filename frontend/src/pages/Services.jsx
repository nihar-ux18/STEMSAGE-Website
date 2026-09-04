import { ArrowRight, Beaker, Box, Users, Wrench } from "lucide-react";
import Footer from "../components/common/Footer";

const services = [
    { title: "STEM Workshops", icon: Users, image: "Add workshop image here", text: "Join our engaging STEM workshops to spark curiosity and foster innovation through hands-on-learning experiences! Our workshops cover electronics, robotics, programming, and more." },
    { title: "Educational Kits", icon: Wrench, image: "Add educational kit image here", text: "Get excited about our amazing kits in Electronics, Robotics, and Drones that spark creativity for future engineers! Each kit includes all components and detailed instructions." },
    { title: "STEM Product Supply", icon: Box, image: "Add product image here", text: "Explore an exciting range of Electronics, IoT, and Robotics parts to effortlessly bring your innovative ideas to life! We supply quality components at competitive prices." },
    { title: "STEM Lab Setup", icon: Beaker, image: "Add lab image here", text: "We're excited to launch STEM labs! Students access amazing technology for a fun learning experience. Complete lab setup including equipment, curriculum, and training." },
];

function Services() {
    return <main className="bg-white text-slate-700"><section className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center sm:px-8 lg:px-10 lg:pt-24"><h1 className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">Our <span className="text-red-600">Services</span></h1><div className="mx-auto mt-4 h-1 w-14 bg-red-600" /><p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">We provide comprehensive STEM services to empower education and innovation.</p><div className="mt-9 grid gap-6 text-center md:grid-cols-2">{services.map(({ title, icon: Icon, image, text }) => <article key={title} className="overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7"><div className="flex h-40 items-center justify-center rounded-md bg-slate-100 text-sm text-slate-400 sm:h-44">{image}</div><div className="mx-auto -mt-[-18px] flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-md"><Icon size={28} strokeWidth={2.5} /></div><h2 className="mt-5 text-base font-extrabold text-slate-800">{title}</h2><p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500">{text}</p><button type="button" className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-red-700">Learn More <ArrowRight size={14} /></button></article>)}</div></section><Footer /></main>;
}

export default Services;
