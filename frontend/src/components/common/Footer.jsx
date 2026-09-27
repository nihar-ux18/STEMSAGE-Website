import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/StemSage_Footer_Logo.avif";
import logoFallback from "/images/logo.png";

// Gmail Colorful M Icon
const GmailIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M6 36V16.8L24 28.8L42 16.8V36C42 37.6569 40.6569 39 39 39H9C7.34315 39 6 37.6569 6 36Z" fill="#ea4335" />
        <path d="M42 12V16.8L24 28.8L6 16.8V12C6 10.3431 7.34315 9 9 9H39C40.6569 9 42 10.3431 42 12Z" fill="#4285f4" />
        <path d="M6 12L24 24L42 12" stroke="#fbbc05" strokeWidth="2" />
        <path d="M6 12V36L18 27V15.5L6 12Z" fill="#34a853" />
        <path d="M42 12V36L30 27V15.5L42 12Z" fill="#4285f4" />
    </svg>
);

// WhatsApp Circle Green Icon
const WhatsappCircleIcon = () => (
    <svg viewBox="0 0 64 64" width="48" height="48" className="shrink-0">
        <circle cx="32" cy="32" r="30" fill="#25D366" />
        <path fill="#FFFFFF" d="M32 14c-9.9 0-18 8.1-18 18 0 3.2.8 6.3 2.4 9L14 50l9.3-2.4c2.6 1.4 5.6 2.2 8.7 2.2 9.9 0 18-8.1 18-18S41.9 14 32 14zm10.4 25.5c-.4 1.2-2.3 2.4-3.2 2.5-.9.1-2 .5-6.7-1.4-5.7-2.3-9.4-8.1-9.7-8.5-.3-.4-2.4-3.2-2.4-6.1 0-2.9 1.5-4.3 2-4.9.5-.6 1.2-.7 1.6-.7.4 0 .8 0 1.2.1.4.1.9-.2 1.4 1 .5 1.2 1.7 4.2 1.9 4.5.1.3.2.7 0 1.1-.2.4-.3.7-.6 1-.3.3-.7.7-1 1-.3.3-.7.7-.3 1.4.4.7 1.8 3 3.9 4.9 2.7 2.4 5 3.1 5.7 3.5.7.4 1.1.3 1.5-.1.4-.4 1.7-2 2.1-2.7.4-.7.9-.6 1.5-.3.6.3 3.8 1.8 4.4 2.1.6.3 1 .5 1.2.8.2.4.2 1.9-.2 3.1z" />
    </svg>
);

function Footer() {
    return (
        <footer className="w-full bg-white text-slate-800 font-sans border-t border-slate-100">
            {/* Top Contact Section */}
            <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 text-left">
                {/* Email Info */}
                <div className="flex items-center gap-4">
                    <GmailIcon />
                    <div>
                        <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                            Email us at:
                        </div>
                        <a
                            href="mailto:stemsage.techworld.llp@gmail.com"
                            className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-red-600 transition-colors"
                        >
                            stemsage.techworld.llp@gmail.com
                        </a>
                    </div>
                </div>

                {/* WhatsApp Info */}
                <div className="flex items-center gap-4">
                    <WhatsappCircleIcon />
                    <div>
                        <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                            Whatsapp or Call us on:
                        </div>
                        <a
                            href="tel:+917620894562"
                            className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-red-600 transition-colors"
                        >
                            +91-XXXXXXXXXX
                        </a>
                    </div>
                </div>
            </div>

            {/* Red Horizontal Separator Line */}
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="h-[2px] w-full bg-red-600" />
            </div>

            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-6 pt-12 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
                    {/* Column 1: Logo from src/assets/ */}
                    <div className="md:col-span-5 flex flex-col items-start">
                        <Link to="/" className="inline-block">
                            <img
                                src={logoImg}
                                alt="STEMSAGE — Once Step Towards DIGITAL !"
                                className="h-28 w-auto object-contain"
                                onError={(e) => {
                                    e.currentTarget.src = logoFallback;
                                }}
                            />
                        </Link>
                    </div>

                    {/* Column 2: Company */}
                    <div className="md:col-span-2 text-left">
                        <h3 className="text-base font-bold text-slate-900 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm font-medium text-slate-700">
                            <li>
                                <Link to="/" className="hover:text-red-600 underline-offset-2 hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-red-600 underline-offset-2 hover:underline">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-red-600 underline-offset-2 hover:underline">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className="hover:text-red-600 underline-offset-2 hover:underline">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-red-600 underline-offset-2 hover:underline">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="md:col-span-2 text-left">
                        <h3 className="text-base font-bold text-slate-900 mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3 text-sm font-medium text-slate-700">
                            <li>
                                <Link to="/projects" className="hover:text-red-600 underline-offset-2 hover:underline">
                                    Our projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/student-projects" className="hover:text-red-600 underline-offset-2 hover:underline">
                                    Student projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/workshops" className="hover:text-red-600 underline-offset-2 hover:underline">
                                    Workshops
                                </Link>
                            </li>
                            <li>
                                <Link to="/learning" className="hover:text-red-600 underline-offset-2 hover:underline">
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Address */}
                    <div className="md:col-span-3 text-left">
                        <h3 className="text-base font-bold text-slate-900 mb-4">
                            Address
                        </h3>
                        <div className="flex items-start gap-2 text-sm font-medium text-slate-700 leading-relaxed">
                            <span className="text-red-600 shrink-0 mt-0.5">📌</span>
                            <span>
                                2nd Floor, R. C. Patel Institute of Technology, Shirpur, 425405
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar (Copyright, Privacy policy, Terms and Conditions) */}
                <div className="mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-700">
                    <div className="w-full md:w-1/3 text-left">
                        © Copyright 2024 STEMSAGE TECHWORLD LLP
                    </div>
                    <div className="w-full md:w-1/3 text-center">
                        <Link to="/contact" className="hover:text-red-600 hover:underline">
                            Privacy policy
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 text-right">
                        <Link to="/contact" className="hover:text-red-600 hover:underline">
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
