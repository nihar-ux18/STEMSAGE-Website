function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#0f172a] text-white">

            {/* =====================================================
                BACKGROUND GRID
            ====================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute inset-0
                    opacity-[0.07]
                "
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
                    `,
                    backgroundSize: "52px 52px",
                }}
            />

            {/* =====================================================
                DECORATIVE ELEMENTS
            ====================================================== */}

            {/* Top-left circle */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-24
                    -top-24
                    h-64
                    w-64
                    rounded-full
                    border-[18px]
                    border-red-500/10
                "
            />

            {/* Bottom-right circle */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    -right-28
                    h-72
                    w-72
                    rounded-full
                    border-[18px]
                    border-white/5
                "
            />

            {/* Small red accent */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-24
                    top-20
                    h-2
                    w-2
                    rounded-full
                    bg-red-500
                    opacity-70
                "
            />

            {/* =====================================================
                MAIN FOOTER
            ====================================================== */}
            <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">

                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

                    {/* =================================================
                        BRAND
                    ================================================== */}
                    <div className="md:pr-8">

                        <img
                            src="/images/logo.png"
                            alt="STEMSAGE"
                            className="
                                mb-5
                                h-12
                                w-auto
                            "
                        />

                        <p
                            className="
                                max-w-sm
                                text-sm
                                leading-7
                                text-slate-400
                            "
                        >
                            Learn, build and innovate with STEMSAGE.
                            Practical learning experiences designed to
                            prepare learners for the future.
                        </p>

                        {/* Brand accent */}
                        <div className="mt-6 flex items-center gap-3">

                            <span className="h-px w-10 bg-red-500" />

                            <span
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.3em]
                                    text-slate-500
                                "
                            >
                                Learn • Build • Innovate
                            </span>

                        </div>

                    </div>


                    {/* =================================================
                        QUICK LINKS
                    ================================================== */}
                    <div>

                        <h3
                            className="
                                mb-5
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.15em]
                                text-white
                            "
                        >
                            Quick Links
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <a
                                    href="/"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-200
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-3" />
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-200
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-3" />
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/courses"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-200
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-3" />
                                    Courses
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/services"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-200
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-3" />
                                    Services
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* =================================================
                        PROGRAMS
                    ================================================== */}
                    <div>

                        <h3
                            className="
                                mb-5
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.15em]
                                text-white
                            "
                        >
                            Programs
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <a
                                    href="/projects"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-200
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-3" />
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/student-projects"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-200
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-3" />
                                    Student Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/workshops"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-200
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-3" />
                                    Workshops
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/store"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-200
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-3" />
                                    Our Store
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* =================================================
                        CONTACT
                    ================================================== */}
                    <div>

                        <h3
                            className="
                                mb-5
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.15em]
                                text-white
                            "
                        >
                            Contact
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <a
                                    href="/contact"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-200
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-3" />
                                    Contact Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/forum"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-200
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-3" />
                                    Our Forum
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>


                {/* =====================================================
                    BOTTOM DIVIDER
                ====================================================== */}
                <div className="mt-12 border-t border-white/10 pt-6">

                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

                        <p className="text-xs text-slate-500">
                            © {new Date().getFullYear()} STEMSAGE. All rights reserved.
                        </p>

                        <div className="flex items-center gap-3">

                            <span className="h-px w-8 bg-red-500/70" />

                            <span
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-slate-500
                                "
                            >
                                STEM Education • Technology • Innovation
                            </span>

                            <span className="h-px w-8 bg-red-500/70" />

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;