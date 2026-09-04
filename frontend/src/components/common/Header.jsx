function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f172a] text-white shadow-sm">

            <div className="mx-auto flex h-[88px] w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">

                {/* =====================================================
                    LOGO / BRAND
                ====================================================== */}
                <a
                    href="/"
                    className="flex -translate-x-45 items-center gap-3"
                >
                    <img
                        src="/images/logo.png"
                        alt="STEMSAGE"
                        className="h-14 w-auto object-contain"
                    />

                    <div className="hidden sm:block">
                        <div className="text-[24px] font-extrabold leading-none tracking-tight text-red-500">
                            STEMSAGE
                        </div>

                        <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                            TECHWORLD LLP
                        </div>
                    </div>
                </a>


                {/* =====================================================
                    NAVIGATION
                ====================================================== */}
                <nav className="hidden -translate-x-30 items-center gap-10 lg:flex">

                    <a
                        href="/"
                        className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                        Home
                    </a>

                    <a
                        href="/about"
                        className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                        About
                    </a>

                    <a
                        href="/courses"
                        className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                        Courses
                    </a>

                    <a
                        href="/services"
                        className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                        Services
                    </a>

                    <a
                        href="/store"
                        className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                        Our Store
                    </a>

                    <a
                        href="/projects"
                        className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                        Projects
                    </a>

                    <a
                        href="/student-projects"
                        className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                        Student Projects
                    </a>

                    <a
                        href="/workshops"
                        className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                        Workshops
                    </a>

                    <a
                        href="/forum"
                        className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                        Our Forum
                    </a>

                </nav>


                {/* =====================================================
                    MOBILE MENU BUTTON
                ====================================================== */}
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 lg:hidden"
                    aria-label="Open menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

            </div>
        </header>
    );
}

export default Header;