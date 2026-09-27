import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, CheckCircle2, Sparkles, Wrench } from "lucide-react";

function BookDemoWorkshop() {
    return (
        <section className="relative overflow-hidden bg-slate-50 px-5 py-16 sm:px-8 sm:py-24 md:px-10 lg:px-12 border-b border-slate-200/80">
            <div className="relative mx-auto max-w-7xl">
                {/* Red Framed Promotional Container */}
                <div className="relative overflow-hidden rounded-3xl bg-white border border-red-100 shadow-xl shadow-red-500/5 p-8 sm:p-12 md:p-16">
                    {/* Top Right Red Decorative Slant / Glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
                    <div className="pointer-events-none absolute left-0 bottom-0 h-40 w-40 rounded-full bg-slate-200/50 blur-2xl" />

                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                        {/* Left Info: 7 cols */}
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3.5 py-1.5 text-xs font-extrabold text-red-600 border border-red-200">
                                <Sparkles className="h-3.5 w-3.5" />
                                <span>Interactive STEM Experience</span>
                            </div>

                            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight">
                                Book a <span className="text-red-600">Demo Workshop</span>
                            </h2>

                            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
                                Experience hands-on STEM learning through engaging workshops, real-world robotics projects,
                                circuit building, and interactive student activities tailored for your institution.
                            </p>

                            {/* Workshop Highlights List */}
                            <div className="mt-8 space-y-3">
                                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0" />
                                    <span>Live Hardware & Robotics Demos for Students & Faculty</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0" />
                                    <span>Customized Curriculum Alignment for Schools & Colleges</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0" />
                                    <span>Interactive Project Building & Q&A Session</span>
                                </div>
                            </div>

                            {/* Primary Action Button */}
                            <div className="mt-10 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/workshops"
                                    className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-red-600/35"
                                >
                                    <Calendar className="h-4 w-4" />
                                    <span>Book Demo Workshop</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 transition-all hover:bg-slate-50 hover:border-slate-400"
                                >
                                    <span>Talk to an Expert</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right Visual Image Card: 5 cols */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-slate-900 shadow-2xl">
                                <img
                                    src="/images/hero-3.png"
                                    alt="STEM Workshop Demo Session"
                                    className="h-64 sm:h-80 w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-slate-950/80 backdrop-blur-md p-4 text-white border border-white/10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs font-bold text-red-400">
                                            <Wrench className="h-4 w-4" />
                                            <span>Onsite & Online Sessions</span>
                                        </div>
                                        <span className="text-[11px] bg-red-600 px-2 py-0.5 rounded text-white font-bold">
                                            Book Now
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookDemoWorkshop;
