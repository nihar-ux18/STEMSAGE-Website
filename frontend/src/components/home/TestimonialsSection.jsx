import React from "react";
import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
    {
        id: "test-1",
        quote: "The workshops by STEMSAGE not only inspired our students but also provided them with the technical foundation to explore technology and innovation.",
        name: "Dr. Sharma",
        role: "Principal, SVKM School",
        rating: 5,
        badge: "Institutional Partner",
    },
    {
        id: "test-2",
        quote: "STEMSAGE has been instrumental in bridging the gap between academic theory and practical engineering applications through high quality hardware kits.",
        name: "Prof. Patel",
        role: "Head of Engineering, RCPIT",
        rating: 5,
        badge: "Faculty Educator",
    },
    {
        id: "test-3",
        quote: "My daughter built her first autonomous robotics project after attending the 3-day STEMSAGE workshop. The mentors are genuinely passionate and supportive!",
        name: "Ms. Reddy",
        role: "Parent of High School Student",
        rating: 5,
        badge: "Parent Feedback",
    },
];

export function TestimonialCard({ item }) {
    return (
        <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl hover:shadow-red-500/10">
            {/* Top quote icon & rating stars */}
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                        <Quote className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                    </div>
                </div>

                {/* Quote Text */}
                <p className="mt-6 text-base leading-relaxed text-slate-700 italic">
                    "{item.quote}"
                </p>
            </div>

            {/* Author details */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                        {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                        {item.role}
                    </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600">
                    {item.badge}
                </span>
            </div>
        </div>
    );
}

function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-24 md:px-10 lg:px-12 border-b border-slate-200/80">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Testimonial"
                    title="What Educators & Parents"
                    highlightTitle="Say About Us"
                    description="Feedback from school leaders, engineering professors, and parents who have experienced STEMSAGE programs."
                />

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;
