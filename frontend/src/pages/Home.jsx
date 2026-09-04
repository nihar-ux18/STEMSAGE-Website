import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/common/Footer";

const innovationDoors = [
    {
        number: "01",
        title: "Electronics",
        description: "Master circuits, components and embedded systems.",
        icon: "fa-microchip",
        color: "text-red-500",
    },
    {
        number: "02",
        title: "Robotics",
        description: "Build intelligent machines and autonomous systems.",
        icon: "fa-robot",
        color: "text-cyan-500",
    },
    {
        number: "03",
        title: "Internet of Things",
        description: "Create connected and smart ecosystems.",
        icon: "fa-wifi",
        color: "text-blue-500",
    },
    {
        number: "04",
        title: "3D Design",
        description: "Turn ideas into real-world digital designs.",
        icon: "fa-cube",
        color: "text-green-500",
    },
    {
        number: "05",
        title: "Programming",
        description: "Learn coding and build powerful applications.",
        icon: "fa-code",
        color: "text-yellow-500",
    },
];

const testimonials = [
    {
        quote:
            "The workshops by STEMSAGE not only inspired our students but also provided them with the technical foundation to excel at the national level.",
        author: "Dr. Sharma",
        role: "Principal, SVKM School",
    },
    {
        quote:
            "STEMSAGE has been instrumental in bridging the gap between academic knowledge and practical application.",
        author: "Prof. Patel",
        role: "Head of Engineering, RCPIT",
    },
    {
        quote:
            "My son has become more curious and confident after attending STEMSAGE workshops.",
        author: "Ms. Reddy",
        role: "Parent",
    },
];

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    /*
     * hero-1 is repeated at the end so that the automatic
     * carousel can continuously move:
     *
     * hero-1 → hero-2 → hero-3 → hero-1
     *
     * Always moving from right to left.
     */
    const heroImages = [
        "/images/hero-1.png",
        "/images/hero-2.png",
        "/images/hero-3.png",
        "/images/hero-1.png",
    ];

    /*
     * Automatic carousel.
     */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    /*
     * Reset after the duplicated hero-1 slide.
     */
    useEffect(() => {
        if (currentSlide === heroImages.length - 1) {
            const resetTimer = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentSlide(0);

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setTransitionEnabled(true);
                    });
                });
            }, 1000);

            return () => clearTimeout(resetTimer);
        }
    }, [currentSlide, heroImages.length]);

    /*
     * Manual next button.
     */
    const nextSlide = () => {
        if (currentSlide < heroImages.length - 1) {
            setCurrentSlide((prev) => prev + 1);
        }
    };

    /*
     * Manual previous button.
     */
    const previousSlide = () => {
        if (currentSlide === 0) {
            /*
             * Temporarily jump to hero-3 without animation.
             */
            setTransitionEnabled(false);
            setCurrentSlide(heroImages.length - 2);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransitionEnabled(true);
                });
            });
        } else {
            setCurrentSlide((prev) => prev - 1);
        }
    };

    return (
        /*
         * Natural page scrolling.
         *
         * IMPORTANT:
         * No h-screen
         * No snap-y
         * No snap-mandatory
         *
         * This allows the user to naturally see part of
         * the next section while scrolling.
         */
        <main className="w-full overflow-x-hidden bg-[var(--bg-primary)]">
            {/* =========================================================
                HERO
            ========================================================== */}
            <section className="relative w-full overflow-hidden bg-white">
                {/*
                 * Desktop:
                 * approximately 80-85% viewport height.
                 *
                 * Mobile:
                 * approximately 65-70% viewport height.
                 *
                 * The minimum height prevents the hero from
                 * becoming too short on smaller screens.
                 */}
                <div className="relative h-[68vh] min-h-[480px] w-full sm:h-[74vh] sm:min-h-[520px] md:h-[78vh] lg:h-[89vh] lg:min-h-[600px]">
                    {/* =================================================
                        IMAGE TRACK
                    ================================================== */}
                    <div
                        className={`absolute inset-0 flex ${transitionEnabled
                            ? "transition-transform duration-1000 ease-in-out"
                            : ""
                            }`}
                        style={{
                            transform: `translateX(-${currentSlide * 100
                                }%)`,
                        }}
                    >
                        {heroImages.map((image, index) => (
                            <div
                                key={`${image}-${index}`}
                                className="relative h-full w-full min-w-full flex-shrink-0 bg-black"
                            >
                                <img
                                    src={image}
                                    alt={`STEMSAGE hero slide ${index + 1}`}
                                    className="
                                        h-full
                                        w-full
                                        object-contain
                                        object-center
                                        opacity-100
                                        sm:object-cover
                                    "
                                />

                                {/* Blackish image overlay */}
                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                        ))}
                    </div>

                    {/* =================================================
                        LEFT ARROW
                    ================================================== */}
                    <button
                        type="button"
                        onClick={previousSlide}
                        aria-label="Previous slide"
                        className="
                            absolute
                            left-3
                            top-1/2
                            z-30
                            flex
                            h-10
                            w-10
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            bg-black/40
                            text-3xl
                            font-light
                            leading-none
                            text-white
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            hover:scale-110
                            hover:bg-black/70
                            sm:left-5
                            sm:h-12
                            sm:w-12
                        "
                    >
                        ‹
                    </button>

                    {/* =================================================
                        RIGHT ARROW
                    ================================================== */}
                    <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="
                            absolute
                            right-3
                            top-1/2
                            z-30
                            flex
                            h-10
                            w-10
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            bg-black/40
                            text-3xl
                            font-light
                            leading-none
                            text-white
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            hover:scale-110
                            hover:bg-black/70
                            sm:right-5
                            sm:h-12
                            sm:w-12
                        "
                    >
                        ›
                    </button>

                    {/* =================================================
                        HERO BUTTONS
                    ================================================== */}
                    <div
                        className="
                            absolute
                            left-[7%]
                            top-[58%]
                            z-20
                            flex
                            max-w-[85%]
                            flex-wrap
                            items-center
                            gap-3
                            sm:left-[8%]
                            sm:top-[60%]
                            md:left-[9%]
                            lg:left-[10%]
                        "
                    >
                        <Link
                            to="/services"
                            className="
                                rounded-full
                                bg-red-600
                                px-5
                                py-3
                                text-xs
                                font-bold
                                text-white
                                shadow-lg
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:bg-red-700
                                sm:px-7
                                sm:py-3.5
                                sm:text-sm
                                md:px-8
                            "
                        >
                            Explore More
                        </Link>

                        <Link
                            to="/contact"
                            className="
                                rounded-full
                                border-2
                                border-gray-800
                                bg-white
                                px-5
                                py-3
                                text-xs
                                font-bold
                                text-gray-900
                                shadow-lg
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:bg-gray-100
                                sm:px-7
                                sm:py-3.5
                                sm:text-sm
                                md:px-8
                            "
                        >
                            Book a call
                        </Link>
                    </div>

                    {/* =================================================
                        BOTTOM FADE
                    ================================================== */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-x-0
                            bottom-0
                            z-10
                            h-20
                            sm:h-24
                            md:h-28
                        "
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.85) 80%, #ffffff 100%)",
                        }}
                    />
                </div>
            </section>

            {/* =========================================================
    WELCOME TO STEMSAGE / INTRODUCTION SECTION
========================================================= */}
            <section className="relative min-h-[760px] overflow-hidden bg-white">

                {/* =====================================================
        BACKGROUND GRID
    ====================================================== */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                        backgroundImage: `
                linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px)
            `,
                        backgroundSize: "32px 32px",
                    }}
                />

                {/* =====================================================
        TOP LEFT RED GLOW
    ====================================================== */}
                <div
                    className="
            pointer-events-none absolute
            -left-28 -top-24
            h-[350px] w-[350px]
            rounded-full
            bg-red-400/25
            blur-3xl
        "
                />

                <div
                    className="
            pointer-events-none absolute
            -left-16 -top-16
            h-[300px] w-[300px]
            rounded-full
            border-[18px]
            border-red-100/60
        "
                />

                {/* =====================================================
        BOTTOM RIGHT RED GLOW
    ====================================================== */}
                <div
                    className="
            pointer-events-none absolute
            -right-32 bottom-20
            h-[380px] w-[380px]
            rounded-full
            bg-red-400/20
            blur-3xl
        "
                />

                <div
                    className="
            pointer-events-none absolute
            -right-16 bottom-28
            h-[280px] w-[280px]
            rounded-full
            border-[16px]
            border-red-100/60
        "
                />

                {/* =====================================================
        DECORATIVE PLUS SYMBOLS
    ====================================================== */}
                <span className="pointer-events-none absolute left-[23%] top-[18%] text-2xl font-light text-red-500">
                    +
                </span>

                <span className="pointer-events-none absolute right-[20%] top-[20%] text-2xl font-light text-red-500">
                    +
                </span>

                <span className="pointer-events-none absolute left-[19%] top-[48%] text-2xl font-light text-red-500">
                    +
                </span>

                <span className="pointer-events-none absolute right-[27%] top-[45%] text-2xl font-light text-red-500">
                    +
                </span>

                {/* =====================================================
        DECORATIVE DOT MATRIX - TOP RIGHT
    ====================================================== */}
                <div
                    className="
            pointer-events-none absolute
            right-[15%] top-[7%]
            hidden
            h-16 w-20
            opacity-40
            sm:block
        "
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, #64748b 1.5px, transparent 1.5px)",
                        backgroundSize: "10px 10px",
                    }}
                />

                {/* =====================================================
        DECORATIVE DOT MATRIX - LEFT
    ====================================================== */}
                <div
                    className="
            pointer-events-none absolute
            left-[11%] top-[58%]
            hidden
            h-16 w-20
            opacity-35
            sm:block
        "
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, #64748b 1.5px, transparent 1.5px)",
                        backgroundSize: "10px 10px",
                    }}
                />

                {/* =====================================================
        DECORATIVE CIRCUIT LINES - LEFT
    ====================================================== */}
                <svg
                    className="pointer-events-none absolute left-0 top-[24%] hidden h-64 w-44 opacity-30 lg:block"
                    viewBox="0 0 180 260"
                    fill="none"
                >
                    <path
                        d="M0 30H45V75H95V120H145"
                        stroke="#64748b"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M0 130H30V165H75V210H140"
                        stroke="#64748b"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M0 215H55V240H110"
                        stroke="#64748b"
                        strokeWidth="1.5"
                    />

                    <circle cx="45" cy="75" r="4" fill="#64748b" />
                    <circle cx="95" cy="120" r="4" fill="#64748b" />
                    <circle cx="30" cy="165" r="4" fill="#64748b" />
                    <circle cx="75" cy="210" r="4" fill="#64748b" />
                </svg>

                {/* =====================================================
        DECORATIVE CIRCUIT LINES - RIGHT
    ====================================================== */}
                <svg
                    className="pointer-events-none absolute right-0 top-[17%] hidden h-72 w-56 opacity-30 lg:block"
                    viewBox="0 0 220 300"
                    fill="none"
                >
                    <path
                        d="M220 30H175L140 65H95L60 100H0"
                        stroke="#64748b"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M220 100H185L145 140H110L70 180H25"
                        stroke="#64748b"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M220 185H175L135 225H90L55 260H10"
                        stroke="#64748b"
                        strokeWidth="1.5"
                    />

                    <circle cx="175" cy="30" r="4" fill="#64748b" />
                    <circle cx="140" cy="65" r="4" fill="#64748b" />
                    <circle cx="145" cy="140" r="4" fill="#64748b" />
                    <circle cx="135" cy="225" r="4" fill="#64748b" />
                </svg>

                {/* =====================================================
        MAIN CONTENT
    ====================================================== */}
                <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl flex-col items-center px-5 pb-12 pt-20 text-center sm:px-8 sm:pt-24 lg:pt-24">

                    {/* =================================================
            LABEL
        ================================================== */}
                    <div className="flex items-center gap-5">

                        <span className="h-px w-10 bg-red-500 sm:w-14" />

                        <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-red-500 sm:text-sm">
                            Welcome to STEMSAGE
                        </span>

                        <span className="h-px w-10 bg-red-500 sm:w-14" />

                    </div>

                    {/* =================================================
            MAIN HEADING
        ================================================== */}
                    <h2
                        className="
                mt-8
                max-w-5xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                text-slate-950
                sm:text-5xl
                md:text-6xl
                lg:text-[68px]
            "
                    >
                        <span className="block">
                            Where curiosity
                        </span>

                        <span className="block">
                            becomes{" "}
                            <span className="text-red-500">
                                innovation
                            </span>
                        </span>
                    </h2>

                    {/* =================================================
            SMALL RED DIVIDER
        ================================================== */}
                    <div className="mt-7 flex items-center gap-4">

                        <span className="h-px w-10 bg-red-500" />

                        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />

                        <span className="h-px w-10 bg-red-500" />

                    </div>

                    {/* =================================================
            DESCRIPTION
        ================================================== */}
                    <p
                        className="
                mt-7
                max-w-3xl
                text-sm
                font-medium
                leading-7
                text-slate-500
                sm:text-base
                sm:leading-8
                lg:text-lg
            "
                    >
                        STEMSAGE provides practical learning experiences across science,
                        technology, engineering and mathematics. Our programs focus on
                        hands-on learning, creativity and real-world problem solving.
                    </p>

                    {/* =================================================
            FEATURE CARDS
        ================================================== */}
                    <div
                        className="
                mt-12
                grid
                w-full
                max-w-4xl
                grid-cols-1
                gap-5
                sm:grid-cols-3
            "
                    >

                        {/* =============================================
                EXPLORE
            ============================================== */}
                        <div
                            className="
                    group
                    relative
                    min-h-[285px]
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/90
                    p-6
                    text-left
                    shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-red-200
                    hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                "
                        >

                            {/* Number */}
                            <span className="absolute right-6 top-6 text-xl font-bold text-slate-300">
                                01
                            </span>

                            {/* Icon */}
                            <div
                                className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-red-50
                        text-red-500
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                            >
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 3h6" />
                                    <path d="M10 3v4l-4.5 8.5A3 3 0 0 0 8.15 20h7.7a3 3 0 0 0 2.65-4.5L14 7V3" />
                                    <path d="M8 14h8" />
                                    <path d="M9 17h6" />
                                </svg>
                            </div>

                            <h3 className="mt-7 text-2xl font-extrabold tracking-tight text-slate-950">
                                Explore
                            </h3>

                            <p className="mt-3 max-w-[220px] text-base leading-7 text-slate-500">
                                Discover new ideas and explore endless possibilities.
                            </p>

                            <div className="absolute bottom-7 left-6 h-1.5 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-16" />

                        </div>

                        {/* =============================================
                BUILD
            ============================================== */}
                        <div
                            className="
                    group
                    relative
                    min-h-[285px]
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/90
                    p-6
                    text-left
                    shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-slate-300
                    hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                "
                        >

                            {/* Number */}
                            <span className="absolute right-6 top-6 text-xl font-bold text-slate-300">
                                02
                            </span>

                            {/* Icon */}
                            <div
                                className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-slate-100
                        text-slate-900
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                            >
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.41 1.41-.06-.06A1.7 1.7 0 0 0 16.45 18a1.7 1.7 0 0 0-1.45 1.7V20h-2v-.3A1.7 1.7 0 0 0 11.55 18a1.7 1.7 0 0 0-1.88.34l-.06.06-1.41-1.41.06-.06A1.7 1.7 0 0 0 8 15.05a1.7 1.7 0 0 0-1.7-1.45H6v-2h.3A1.7 1.7 0 0 0 8 10.15a1.7 1.7 0 0 0-.34-1.88L7.6 8.21l1.41-1.41.06.06A1.7 1.7 0 0 0 10.95 7a1.7 1.7 0 0 0 1.45-1.7V5h2v.3A1.7 1.7 0 0 0 15.85 7a1.7 1.7 0 0 0 1.88-.34l.06-.06 1.41 1.41-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 20.3 11H20v2h-.3a1.7 1.7 0 0 0-1.7 2z" />
                                </svg>
                            </div>

                            <h3 className="mt-7 text-2xl font-extrabold tracking-tight text-slate-950">
                                Build
                            </h3>

                            <p className="mt-3 max-w-[220px] text-base leading-7 text-slate-500">
                                Build skills through hands-on projects and real experiences.
                            </p>

                            <div className="absolute bottom-7 left-6 h-1.5 w-10 rounded-full bg-slate-950 transition-all duration-300 group-hover:w-16" />

                        </div>

                        {/* =============================================
                INNOVATE
            ============================================== */}
                        <div
                            className="
                    group
                    relative
                    min-h-[285px]
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/90
                    p-6
                    text-left
                    shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-red-200
                    hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                "
                        >

                            {/* Number */}
                            <span className="absolute right-6 top-6 text-xl font-bold text-slate-300">
                                03
                            </span>

                            {/* Icon */}
                            <div
                                className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-red-50
                        text-red-500
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                            >
                                <svg
                                    width="34"
                                    height="34"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4.5 16.5c-1.5-1.5-.5-4.5 1.5-6 2-1.5 4-2 6-2.5 1-2 2.5-3.5 4.5-4.5 1.5 2.5 1.5 5.5 0 8-1 1.5-2.5 3-4.5 3.5-1.5 1.5-4.5 3-6 1.5l-1.5 1.5z" />
                                    <path d="M7 17l-2 2" />
                                    <path d="M8.5 12.5l-3-1" />
                                    <path d="M15.5 8.5l2 2" />
                                    <circle cx="15.5" cy="7.5" r="1" />
                                </svg>
                            </div>

                            <h3 className="mt-7 text-2xl font-extrabold tracking-tight text-slate-950">
                                Innovate
                            </h3>

                            <p className="mt-3 max-w-[220px] text-base leading-7 text-slate-500">
                                Turn concepts into innovations that shape tomorrow.
                            </p>

                            <div className="absolute bottom-7 left-6 h-1.5 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-16" />

                        </div>

                    </div>

                    {/* =================================================
            SCROLL INDICATOR
        ================================================== */}
                    <div className="mt-9 flex flex-col items-center">

                        {/* Mouse */}
                        <div
                            className="
                    flex
                    h-12
                    w-7
                    items-start
                    justify-center
                    rounded-full
                    border-2
                    border-red-500
                    p-1.5
                "
                        >
                            <span className="h-2 w-1 rounded-full bg-red-500" />
                        </div>

                        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 sm:text-xs">
                            Scroll to explore
                        </p>

                        {/* Arrow */}
                        <svg
                            className="mt-2 h-6 w-6 text-red-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>

                    </div>

                </div>

                {/* =====================================================
        TRANSITION TO NEXT SECTION
    ====================================================== */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-50" />

            </section>

            {/* =========================================================
    INNOVATION SECTION
========================================================= */}
            <section
                className="
        relative
        flex
        min-h-[80vh]
        items-center
        overflow-hidden
        bg-white
        px-5
        py-16
        sm:px-8
        md:px-10
        lg:min-h-[90vh]
    "
            >
                {/* =====================================================
        GRID BACKGROUND
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            opacity-70
        "
                    style={{
                        backgroundImage: `
                linear-gradient(to right, rgba(15,23,42,0.055) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(15,23,42,0.055) 1px, transparent 1px)
            `,
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* =====================================================
        TOP LEFT GLOW
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            -left-20
            -top-24
            h-72
            w-72
            rounded-full
            bg-red-300/40
            blur-3xl
            sm:h-80
            sm:w-80
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -left-24
            -top-24
            h-72
            w-72
            rounded-full
            border-[24px]
            border-red-100/60
        "
                />

                {/* =====================================================
        BOTTOM RIGHT GLOW
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            -bottom-28
            -right-24
            h-72
            w-72
            rounded-full
            bg-red-300/35
            blur-3xl
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -bottom-24
            -right-24
            h-64
            w-64
            rounded-full
            border-[24px]
            border-red-100/60
        "
                />

                {/* =====================================================
        DECORATIVE RED PLUS
    ====================================================== */}
                <div className="pointer-events-none absolute left-[12%] top-[45%] text-xl font-bold text-red-500">
                    +
                </div>

                <div className="pointer-events-none absolute right-[15%] top-[28%] text-xl font-bold text-red-500">
                    +
                </div>

                <div className="pointer-events-none absolute bottom-[12%] right-[13%] text-xl font-bold text-red-500">
                    +
                </div>

                {/* =====================================================
        DECORATIVE CIRCUIT LINES
    ====================================================== */}
                <div className="pointer-events-none absolute left-0 top-[25%] hidden opacity-30 sm:block">
                    <div className="flex items-center">
                        <div className="h-px w-20 bg-slate-400" />
                        <div className="h-3 w-3 rounded-full border-2 border-slate-400 bg-white" />
                        <div className="h-px w-12 bg-slate-400" />
                        <div className="h-10 w-px bg-slate-400" />
                        <div className="h-px w-16 bg-slate-400" />
                        <div className="h-3 w-3 rounded-full bg-slate-400" />
                    </div>

                    <div className="ml-8 mt-5 flex items-center">
                        <div className="h-px w-14 bg-slate-400" />
                        <div className="h-3 w-3 rounded-full border-2 border-slate-400 bg-white" />
                        <div className="h-px w-16 bg-slate-400" />
                    </div>
                </div>

                <div className="pointer-events-none absolute right-0 top-[20%] hidden opacity-30 sm:block">
                    <div className="flex items-center">
                        <div className="h-px w-16 bg-slate-400" />
                        <div className="h-3 w-3 rounded-full bg-slate-400" />
                        <div className="h-px w-12 bg-slate-400" />
                        <div className="h-10 w-px bg-slate-400" />
                        <div className="h-px w-20 bg-slate-400" />
                    </div>

                    <div className="mt-5 flex items-center">
                        <div className="h-px w-12 bg-slate-400" />
                        <div className="h-3 w-3 rounded-full border-2 border-slate-400 bg-white" />
                        <div className="h-px w-20 bg-slate-400" />
                    </div>
                </div>

                {/* =====================================================
        MAIN CONTENT
    ====================================================== */}
                <div className="relative z-10 mx-auto w-full max-w-[1300px]">

                    {/* =================================================
            SECTION HEADING
        ================================================== */}
                    <div className="mx-auto max-w-4xl text-center">

                        {/* Label */}
                        <div className="mb-5 flex items-center justify-center gap-4">

                            <span className="hidden h-[2px] w-12 bg-red-500 sm:block" />

                            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-red-500 sm:text-xs">
                                Innovation
                            </span>

                            <span className="hidden h-[2px] w-12 bg-red-500 sm:block" />

                        </div>

                        {/* Heading */}
                        <h2
                            className="
                    text-3xl
                    font-extrabold
                    leading-tight
                    tracking-tight
                    text-[#111827]
                    sm:text-4xl
                    md:text-5xl
                    lg:text-[52px]
                "
                        >
                            Open the doors to{" "}
                            <span className="text-red-500">
                                innovation
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            className="
                    mx-auto
                    mt-5
                    max-w-3xl
                    text-sm
                    leading-7
                    text-slate-500
                    sm:text-base
                    sm:leading-8
                "
                        >
                            Explore the technologies and skills that help transform ideas
                            into real-world solutions.
                        </p>

                    </div>


                    {/* =================================================
            INNOVATION CARDS
        ================================================== */}
                    <div
                        className="
                mx-auto
                mt-10
                grid
                w-full
                max-w-[1200px]
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-5
            "
                    >

                        {/* =================================================
                CARD 01
            ================================================== */}
                        <div
                            className="
                    group
                    flex
                    min-h-[270px]
                    flex-col
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/95
                    p-6
                    shadow-[0_4px_15px_rgba(15,23,42,0.08)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_15px_35px_rgba(15,23,42,0.12)]
                "
                        >

                            <div className="flex items-start justify-between">

                                {/* Icon */}
                                <div
                                    className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#111827]
                            text-2xl
                        "
                                >
                                    ⚙️
                                </div>

                                <span className="text-xs font-bold text-slate-400">
                                    DOOR 01
                                </span>

                            </div>

                            <div className="mt-7">

                                <h3 className="text-lg font-bold text-[#111827]">
                                    Electronics
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    Master circuits, components and embedded systems.
                                </p>

                            </div>

                            <div className="mt-auto pt-6">

                                <a
                                    href="#"
                                    className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-bold
                            text-red-500
                            transition-all
                            duration-200
                            group-hover:gap-3
                        "
                                >
                                    Explore
                                    <span className="text-lg leading-none">
                                        ›
                                    </span>
                                </a>

                            </div>

                        </div>


                        {/* =================================================
                CARD 02
            ================================================== */}
                        <div
                            className="
                    group
                    flex
                    min-h-[270px]
                    flex-col
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/95
                    p-6
                    shadow-[0_4px_15px_rgba(15,23,42,0.08)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_15px_35px_rgba(15,23,42,0.12)]
                "
                        >

                            <div className="flex items-start justify-between">

                                <div
                                    className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#111827]
                            text-2xl
                        "
                                >
                                    🤖
                                </div>

                                <span className="text-xs font-bold text-slate-400">
                                    DOOR 02
                                </span>

                            </div>

                            <div className="mt-7">

                                <h3 className="text-lg font-bold text-[#111827]">
                                    Robotics
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    Build intelligent machines and autonomous systems.
                                </p>

                            </div>

                            <div className="mt-auto pt-6">

                                <a
                                    href="#"
                                    className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-bold
                            text-red-500
                            transition-all
                            duration-200
                            group-hover:gap-3
                        "
                                >
                                    Explore
                                    <span className="text-lg leading-none">
                                        ›
                                    </span>
                                </a>

                            </div>

                        </div>


                        {/* =================================================
                CARD 03
            ================================================== */}
                        <div
                            className="
                    group
                    flex
                    min-h-[270px]
                    flex-col
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/95
                    p-6
                    shadow-[0_4px_15px_rgba(15,23,42,0.08)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_15px_35px_rgba(15,23,42,0.12)]
                "
                        >

                            <div className="flex items-start justify-between">

                                <div
                                    className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#111827]
                            text-2xl
                        "
                                >
                                    📡
                                </div>

                                <span className="text-xs font-bold text-slate-400">
                                    DOOR 03
                                </span>

                            </div>

                            <div className="mt-7">

                                <h3 className="text-lg font-bold leading-6 text-[#111827]">
                                    Internet of Things
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    Create connected and smart ecosystems.
                                </p>

                            </div>

                            <div className="mt-auto pt-6">

                                <a
                                    href="#"
                                    className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-bold
                            text-red-500
                            transition-all
                            duration-200
                            group-hover:gap-3
                        "
                                >
                                    Explore
                                    <span className="text-lg leading-none">
                                        ›
                                    </span>
                                </a>

                            </div>

                        </div>


                        {/* =================================================
                CARD 04
            ================================================== */}
                        <div
                            className="
                    group
                    flex
                    min-h-[270px]
                    flex-col
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/95
                    p-6
                    shadow-[0_4px_15px_rgba(15,23,42,0.08)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_15px_35px_rgba(15,23,42,0.12)]
                "
                        >

                            <div className="flex items-start justify-between">

                                <div
                                    className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#111827]
                            text-xl
                            font-bold
                            text-white
                        "
                                >
                                    ◈
                                </div>

                                <span className="text-xs font-bold text-slate-400">
                                    DOOR 04
                                </span>

                            </div>

                            <div className="mt-7">

                                <h3 className="text-lg font-bold text-[#111827]">
                                    3D Design
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    Turn ideas into real-world digital designs.
                                </p>

                            </div>

                            <div className="mt-auto pt-6">

                                <a
                                    href="#"
                                    className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-bold
                            text-red-500
                            transition-all
                            duration-200
                            group-hover:gap-3
                        "
                                >
                                    Explore
                                    <span className="text-lg leading-none">
                                        ›
                                    </span>
                                </a>

                            </div>

                        </div>


                        {/* =================================================
                CARD 05
            ================================================== */}
                        <div
                            className="
                    group
                    flex
                    min-h-[270px]
                    flex-col
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/95
                    p-6
                    shadow-[0_4px_15px_rgba(15,23,42,0.08)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_15px_35px_rgba(15,23,42,0.12)]
                "
                        >

                            <div className="flex items-start justify-between">

                                <div
                                    className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#111827]
                            text-xl
                            font-bold
                            text-white
                        "
                                >
                                    {"</>"}
                                </div>

                                <span className="text-xs font-bold text-slate-400">
                                    DOOR 05
                                </span>

                            </div>

                            <div className="mt-7">

                                <h3 className="text-lg font-bold text-[#111827]">
                                    Programming
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    Learn coding and build powerful applications.
                                </p>

                            </div>

                            <div className="mt-auto pt-6">

                                <a
                                    href="#"
                                    className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-bold
                            text-red-500
                            transition-all
                            duration-200
                            group-hover:gap-3
                        "
                                >
                                    Explore
                                    <span className="text-lg leading-none">
                                        ›
                                    </span>
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* =================================================
            SCROLL INDICATOR
        ================================================== */}
                    <div className="mt-9 flex flex-col items-center">

                        {/* Mouse */}
                        <div
                            className="
                    flex
                    h-12
                    w-7
                    items-start
                    justify-center
                    rounded-full
                    border-2
                    border-red-500
                    p-1.5
                "
                        >
                            <span className="h-2 w-1 rounded-full bg-red-500" />
                        </div>

                        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 sm:text-xs">
                            Scroll to explore
                        </p>

                        {/* Arrow */}
                        <svg
                            className="mt-2 h-6 w-6 text-red-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>

                    </div>

                </div>

                {/* =====================================================
        TRANSITION TO NEXT SECTION
    ====================================================== */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-50" />

            </section>

            {/* =========================================================
    WHY STEMSAGE — LEARNING BEYOND THE CLASSROOM
========================================================= */}
            <section
                className="
        relative
        flex
        min-h-[80vh]
        items-center
        overflow-hidden
        bg-white
        px-5
        py-16
        sm:px-8
        md:px-10
        md:py-20
        lg:min-h-[96vh]
        lg:px-12
        lg:py-24
    "
            >

                {/* =====================================================
        BACKGROUND GRID
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            opacity-70
        "
                    style={{
                        backgroundImage: `
                linear-gradient(#e5e7eb 1px, transparent 1px),
                linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
            `,
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Soft white overlay to keep the grid subtle */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            bg-white/70
        "
                />


                {/* =====================================================
        DECORATIVE ELEMENTS
    ====================================================== */}

                {/* Red circle — left */}
                <div
                    className="
            pointer-events-none
            absolute
            -left-24
            top-1/2
            hidden
            h-48
            w-48
            -translate-y-1/2
            rounded-full
            border-[18px]
            border-red-100
            opacity-60
            lg:block
        "
                />

                {/* Small red line */}
                <div
                    className="
            pointer-events-none
            absolute
            left-[8%]
            top-[18%]
            hidden
            h-px
            w-20
            bg-red-500
            opacity-40
            lg:block
        "
                />

                {/* Bottom-right circle */}
                <div
                    className="
            pointer-events-none
            absolute
            -bottom-24
            -right-24
            hidden
            h-64
            w-64
            rounded-full
            border-[18px]
            border-gray-100
            opacity-80
            lg:block
        "
                />


                {/* =====================================================
        MAIN CONTENT
    ====================================================== */}
                <div
                    className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
        "
                >

                    <div
                        className="
                grid
                items-center
                gap-12
                lg:grid-cols-[0.95fr_1.05fr]
                lg:gap-16
                xl:gap-20
            "
                    >


                        {/* =================================================
                LEFT — TEXT CONTENT
            ================================================== */}
                        <div className="w-full">

                            {/* Eyebrow */}
                            <p
                                className="
                        mb-4
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.35em]
                        text-red-500
                        sm:text-xs
                    "
                            >
                                Why STEMSAGE
                            </p>


                            {/* Heading */}
                            <h2
                                className="
                        max-w-xl
                        text-3xl
                        font-extrabold
                        leading-[1.08]
                        tracking-tight
                        text-[#111827]
                        sm:text-4xl
                        md:text-5xl
                        lg:text-[50px]
                    "
                            >
                                Learning beyond the
                                <br />
                                <span className="text-[#111827]">
                                    classroom
                                </span>
                            </h2>


                            {/* Description */}
                            <p
                                className="
                        mt-6
                        max-w-2xl
                        text-sm
                        leading-7
                        text-slate-500
                        sm:text-base
                        sm:leading-8
                    "
                            >
                                We believe that students learn best when they experiment,
                                build, fail, improve and create. STEMSAGE combines technical
                                knowledge with practical experiences to make learning meaningful.
                            </p>


                            {/* =================================================
                    FEATURE CARDS
                ================================================== */}
                            <div
                                className="
                        mt-8
                        grid
                        grid-cols-1
                        gap-3
                        sm:grid-cols-2
                    "
                            >

                                {/* Card 01 */}
                                <div
                                    className="
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            p-5
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-red-100
                            hover:shadow-md
                        "
                                >
                                    <h3
                                        className="
                                text-sm
                                font-bold
                                text-[#111827]
                                sm:text-base
                            "
                                    >
                                        Practical Learning
                                    </h3>

                                    <p
                                        className="
                                mt-2
                                text-xs
                                leading-6
                                text-slate-500
                                sm:text-sm
                            "
                                    >
                                        Learn by building and experimenting.
                                    </p>
                                </div>


                                {/* Card 02 */}
                                <div
                                    className="
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            p-5
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-red-100
                            hover:shadow-md
                        "
                                >
                                    <h3
                                        className="
                                text-sm
                                font-bold
                                text-[#111827]
                                sm:text-base
                            "
                                    >
                                        Creative Thinking
                                    </h3>

                                    <p
                                        className="
                                mt-2
                                text-xs
                                leading-6
                                text-slate-500
                                sm:text-sm
                            "
                                    >
                                        Turn ideas into innovative solutions.
                                    </p>
                                </div>


                                {/* Card 03 */}
                                <div
                                    className="
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            p-5
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-red-100
                            hover:shadow-md
                        "
                                >
                                    <h3
                                        className="
                                text-sm
                                font-bold
                                text-[#111827]
                                sm:text-base
                            "
                                    >
                                        Collaboration
                                    </h3>

                                    <p
                                        className="
                                mt-2
                                text-xs
                                leading-6
                                text-slate-500
                                sm:text-sm
                            "
                                    >
                                        Work together and learn from others.
                                    </p>
                                </div>


                                {/* Card 04 */}
                                <div
                                    className="
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            p-5
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-red-100
                            hover:shadow-md
                        "
                                >
                                    <h3
                                        className="
                                text-sm
                                font-bold
                                text-[#111827]
                                sm:text-base
                            "
                                    >
                                        Future Ready
                                    </h3>

                                    <p
                                        className="
                                mt-2
                                text-xs
                                leading-6
                                text-slate-500
                                sm:text-sm
                            "
                                    >
                                        Build skills for tomorrow's technology.
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* =================================================
                RIGHT — IMAGE AREA
            ================================================== */}
                        <div
                            className="
                    relative
                    mx-auto
                    w-full
                    max-w-2xl
                "
                        >

                            {/* Red circular background */}
                            <div
                                className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-[45%]
                        h-[65%]
                        w-[65%]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-red-400
                        opacity-90
                    "
                            />


                            {/* Image container */}
                            <div
                                className="
                        relative
                        z-10
                        overflow-hidden
                        rounded-2xl
                        bg-white
                    "
                            >

                                {/* Replace this src with your existing image path */}
                                <img
                                    src="/images/hero-2.png"
                                    alt="Students learning through practical STEM activities"
                                    className="
                            block
                            h-auto
                            w-full
                            object-contain
                        "
                                />

                            </div>

                        </div>

                    </div>


                    {/* =================================================
            SCROLL INDICATOR
        ================================================== */}
                    <div className="mt-9 flex flex-col items-center">

                        {/* Mouse */}
                        <div
                            className="
                    flex
                    h-12
                    w-7
                    items-start
                    justify-center
                    rounded-full
                    border-2
                    border-red-500
                    p-1.5
                "
                        >
                            <span className="h-2 w-1 rounded-full bg-red-500" />
                        </div>

                        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 sm:text-xs">
                            Scroll to explore
                        </p>

                        {/* Arrow */}
                        <svg
                            className="mt-2 h-6 w-6 text-red-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>

                    </div>

                </div>

                {/* =====================================================
        TRANSITION TO NEXT SECTION
    ====================================================== */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-50" />

            </section>

            {/* =========================================================
    TESTIMONIALS SECTION
========================================================= */}
            <section
                className="
        relative
        flex
        min-h-[80vh]
        items-center
        overflow-hidden
        bg-[#0f172a]
        px-5
        py-20
        sm:px-8
        sm:py-24
        md:px-10
        lg:min-h-[96vh]
        lg:py-28
    "
            >
                {/* =====================================================
        SUBTLE BACKGROUND GRID
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.07]
        "
                    style={{
                        backgroundImage: `
                linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
                        backgroundSize: "48px 48px",
                    }}
                />

                {/* =====================================================
        DECORATIVE CIRCLES
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            -left-24
            top-20
            h-56
            w-56
            rounded-full
            border-[18px]
            border-red-500/10
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -right-24
            bottom-10
            h-64
            w-64
            rounded-full
            border-[18px]
            border-white/5
        "
                />

                {/* =====================================================
        MAIN CONTENT
    ====================================================== */}
                <div className="relative mx-auto w-full max-w-6xl">

                    {/* =================================================
            SECTION HEADING
        ================================================== */}
                    <div className="mx-auto max-w-5xl text-center">

                        <p
                            className="
                    mb-5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.35em]
                    text-red-400
                    sm:text-xs
                "
                        >
                            Testimonials
                        </p>

                        <h2
                            className="
                    text-3xl
                    font-extrabold
                    leading-tight
                    tracking-tight
                    text-white
                    sm:text-4xl
                    md:text-5xl
                    lg:text-[52px]
                "
                        >
                            What people say about STEMSAGE
                        </h2>

                    </div>


                    {/* =================================================
            TESTIMONIAL CARDS
        ================================================== */}
                    <div
                        className="
                mx-auto
                mt-12
                grid
                w-full
                max-w-5xl
                grid-cols-1
                gap-5
                md:grid-cols-3
                lg:mt-14
            "
                    >

                        {/* =================================================
                TESTIMONIAL 01
            ================================================== */}
                        <div
                            className="
                    group
                    flex
                    min-h-[270px]
                    flex-col
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-[#1b2537]
                    p-7
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-red-400/30
                    hover:shadow-2xl
                "
                        >

                            <p
                                className="
                        text-sm
                        leading-7
                        text-slate-300
                        sm:text-[15px]
                    "
                            >
                                "The workshops by STEMSAGE not only inspired our
                                students but also provided them with the technical
                                foundation to excel at the national level."
                            </p>

                            <div className="mt-auto pt-8">

                                <h3
                                    className="
                            text-sm
                            font-bold
                            text-white
                        "
                                >
                                    — Dr. Sharma
                                </h3>

                                <p
                                    className="
                            mt-1
                            text-sm
                            text-slate-400
                        "
                                >
                                    Principal, SVKM School
                                </p>

                            </div>

                        </div>


                        {/* =================================================
                TESTIMONIAL 02
            ================================================== */}
                        <div
                            className="
                    group
                    flex
                    min-h-[270px]
                    flex-col
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-[#1b2537]
                    p-7
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-red-400/30
                    hover:shadow-2xl
                "
                        >

                            <p
                                className="
                        text-sm
                        leading-7
                        text-slate-300
                        sm:text-[15px]
                    "
                            >
                                "STEMSAGE has been instrumental in bridging the gap
                                between academic knowledge and practical application."
                            </p>

                            <div className="mt-auto pt-8">

                                <h3
                                    className="
                            text-sm
                            font-bold
                            text-white
                        "
                                >
                                    — Prof. Patel
                                </h3>

                                <p
                                    className="
                            mt-1
                            text-sm
                            text-slate-400
                        "
                                >
                                    Head of Engineering, RCPIT
                                </p>

                            </div>

                        </div>


                        {/* =================================================
                TESTIMONIAL 03
            ================================================== */}
                        <div
                            className="
                    group
                    flex
                    min-h-[270px]
                    flex-col
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-[#1b2537]
                    p-7
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-red-400/30
                    hover:shadow-2xl
                "
                        >

                            <p
                                className="
                        text-sm
                        leading-7
                        text-slate-300
                        sm:text-[15px]
                    "
                            >
                                "My son has become more curious and confident after
                                attending STEMSAGE workshops."
                            </p>

                            <div className="mt-auto pt-8">

                                <h3
                                    className="
                            text-sm
                            font-bold
                            text-white
                        "
                                >
                                    — Ms. Reddy
                                </h3>

                                <p
                                    className="
                            mt-1
                            text-sm
                            text-slate-400
                        "
                                >
                                    Parent
                                </p>

                            </div>

                        </div>

                    </div>
                    {/* =================================================
            SCROLL INDICATOR
        ================================================== */}
                    <div className="mt-9 flex flex-col items-center">

                        {/* Mouse */}
                        <div
                            className="
                    flex
                    h-12
                    w-7
                    items-start
                    justify-center
                    rounded-full
                    border-2
                    border-red-500
                    p-1.5
                "
                        >
                            <span className="h-2 w-1 rounded-full bg-red-500" />
                        </div>

                        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 sm:text-xs">
                            Scroll to explore
                        </p>

                        {/* Arrow */}
                        <svg
                            className="mt-2 h-6 w-6 text-red-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>

                    </div>

                </div>

                {/* =====================================================
        TRANSITION TO NEXT SECTION
    ====================================================== */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-50" />

            </section>

            {/* =========================================================
    CTA / START BUILDING SECTION
========================================================= */}
            <section
                id="start-building"
                className="
        relative
        flex
        min-h-[80vh]
        items-center
        justify-center
        overflow-hidden
        bg-white
        px-5
        py-20
        sm:px-8
        md:min-h-[96vh]
        md:px-10
        lg:py-24
    "
            >

                {/* =====================================================
        BACKGROUND GRID
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            opacity-70
        "
                    style={{
                        backgroundImage: `
                linear-gradient(to right, #eef0f3 1px, transparent 1px),
                linear-gradient(to bottom, #eef0f3 1px, transparent 1px)
            `,
                        backgroundSize: "36px 36px",
                    }}
                />


                {/* =====================================================
        BACKGROUND DECORATION — LEFT TOP CIRCLE
    ====================================================== */}
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
            border-red-100
            opacity-70
            sm:h-72
            sm:w-72
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -left-16
            -top-16
            h-48
            w-48
            rounded-full
            border
            border-red-100
            opacity-60
        "
                />


                {/* =====================================================
        BACKGROUND DECORATION — RIGHT BOTTOM CIRCLE
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            -bottom-32
            -right-28
            h-72
            w-72
            rounded-full
            border-[16px]
            border-slate-100
            opacity-90
            sm:h-80
            sm:w-80
        "
                />

                <div
                    className="
            pointer-events-none
            absolute
            -bottom-20
            -right-16
            h-48
            w-48
            rounded-full
            border
            border-slate-100
            opacity-70
        "
                />


                {/* =====================================================
        CIRCUIT DECORATION — TOP RIGHT
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            right-5
            top-8
            hidden
            opacity-50
            sm:block
            lg:right-16
            lg:top-12
        "
                >
                    <div className="relative h-28 w-44">

                        <div
                            className="
                    absolute
                    right-0
                    top-2
                    h-px
                    w-24
                    bg-slate-300
                "
                        />

                        <div
                            className="
                    absolute
                    right-8
                    top-10
                    h-px
                    w-28
                    rotate-[25deg]
                    bg-slate-300
                "
                        />

                        <div
                            className="
                    absolute
                    right-0
                    top-20
                    h-px
                    w-20
                    rotate-[-25deg]
                    bg-slate-300
                "
                        />

                        <span className="absolute right-20 top-0 h-2 w-2 rounded-full border border-slate-300 bg-white" />
                        <span className="absolute right-5 top-9 h-2 w-2 rounded-full border border-slate-300 bg-white" />
                        <span className="absolute right-14 top-[72px] h-2 w-2 rounded-full border border-slate-300 bg-white" />

                    </div>
                </div>


                {/* =====================================================
        CIRCUIT DECORATION — BOTTOM LEFT
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            bottom-10
            left-4
            hidden
            opacity-40
            sm:block
            lg:left-12
        "
                >
                    <div className="relative h-24 w-44">

                        <div
                            className="
                    absolute
                    bottom-5
                    left-0
                    h-px
                    w-20
                    bg-slate-300
                "
                        />

                        <div
                            className="
                    absolute
                    bottom-10
                    left-8
                    h-px
                    w-24
                    rotate-[-25deg]
                    bg-slate-300
                "
                        />

                        <div
                            className="
                    absolute
                    bottom-20
                    left-20
                    h-px
                    w-24
                    bg-slate-300
                "
                        />

                        <span className="absolute bottom-4 left-1 h-2 w-2 rounded-full border border-slate-300 bg-white" />
                        <span className="absolute bottom-9 left-8 h-2 w-2 rounded-full border border-slate-300 bg-white" />
                        <span className="absolute bottom-[74px] left-20 h-2 w-2 rounded-full border border-slate-300 bg-white" />

                    </div>
                </div>


                {/* =====================================================
        RED BACK PANEL
    ====================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[440px]
            w-[calc(100%-40px)]
            max-w-[1040px]
            -translate-x-1/2
            -translate-y-1/2
            rotate-[-0.8deg]
            rounded-[34px]
            bg-[#f50916]
            shadow-[0_25px_70px_rgba(239,68,68,0.22)]
            sm:h-[480px]
            sm:w-[calc(100%-80px)]
            lg:h-[520px]
        "
                >

                    {/* Red panel grid */}
                    <div
                        className="
                absolute
                inset-0
                overflow-hidden
                rounded-[34px]
                opacity-20
            "
                        style={{
                            backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)
                `,
                            backgroundSize: "36px 36px",
                        }}
                    />

                    {/* Red decorative circle — top right */}
                    <div
                        className="
                absolute
                -right-12
                -top-20
                h-52
                w-52
                rounded-full
                border-[18px]
                border-white/10
                sm:h-60
                sm:w-60
            "
                    />

                    {/* Red decorative circle — bottom left */}
                    <div
                        className="
                absolute
                -bottom-20
                -left-16
                h-48
                w-48
                rounded-full
                border-[14px]
                border-white/10
            "
                    />

                    {/* Dot pattern */}
                    <div
                        className="
                absolute
                right-8
                top-8
                h-20
                w-20
                opacity-30
            "
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                            backgroundSize: "12px 12px",
                        }}
                    />

                    <div
                        className="
                absolute
                bottom-8
                left-8
                h-20
                w-20
                opacity-20
            "
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                            backgroundSize: "12px 12px",
                        }}
                    />

                </div>


                {/* =====================================================
        MAIN WHITE CARD
    ====================================================== */}
                <div
                    className="
            relative
            z-10
            w-full
            max-w-[900px]
            rounded-[28px]
            bg-white
            px-6
            py-12
            shadow-[0_25px_70px_rgba(15,23,42,0.13)]
            sm:px-10
            sm:py-14
            md:px-16
            md:py-16
            lg:px-20
            lg:py-[70px]
        "
                >

                    {/* =================================================
            INNER DOT PATTERN — LEFT
        ================================================== */}
                    <div
                        className="
                pointer-events-none
                absolute
                left-7
                top-8
                hidden
                h-20
                w-20
                opacity-60
                sm:block
            "
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, #dfe4ea 1.5px, transparent 1.5px)",
                            backgroundSize: "13px 13px",
                        }}
                    />


                    {/* =================================================
            INNER DOT PATTERN — RIGHT
        ================================================== */}
                    <div
                        className="
                pointer-events-none
                absolute
                bottom-8
                right-7
                hidden
                h-20
                w-20
                opacity-60
                sm:block
            "
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, #dfe4ea 1.5px, transparent 1.5px)",
                            backgroundSize: "13px 13px",
                        }}
                    />


                    {/* =================================================
            SECTION LABEL
        ================================================== */}
                    <div className="relative text-center">

                        <div className="mb-6 flex items-center justify-center gap-4">

                            <span
                                className="
                        hidden
                        h-px
                        w-14
                        bg-red-500
                        sm:block
                    "
                            />

                            <span
                                className="
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.38em]
                        text-red-500
                        sm:text-xs
                    "
                            >
                                Start Building
                            </span>

                            <span
                                className="
                        hidden
                        h-px
                        w-14
                        bg-red-500
                        sm:block
                    "
                            />

                        </div>


                        {/* =================================================
                HEADING
            ================================================== */}
                        <h2
                            className="
                    mx-auto
                    max-w-3xl
                    text-4xl
                    font-extrabold
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-[#111827]
                    sm:text-5xl
                    md:text-6xl
                    lg:text-[64px]
                "
                        >
                            Ready to start
                            <br />

                            <span className="text-red-500">
                                building?
                            </span>
                        </h2>


                        {/* =================================================
                DESCRIPTION
            ================================================== */}
                        <p
                            className="
                    mx-auto
                    mt-7
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-500
                    sm:text-base
                    sm:leading-8
                "
                        >
                            Explore our courses, workshops and projects
                            <br className="hidden sm:block" />
                            and discover your path into technology.
                        </p>


                        {/* =================================================
                BUTTONS
            ================================================== */}
                        <div
                            className="
                    mt-9
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    sm:flex-row
                "
                        >

                            {/* Explore Courses */}
                            <a
                                href="/courses"
                                className="
                        group
                        flex
                        min-w-[220px]
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        bg-red-500
                        px-8
                        py-4
                        text-sm
                        font-bold
                        text-white
                        shadow-lg
                        shadow-red-500/20
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-red-600
                        hover:shadow-xl
                        hover:shadow-red-500/25
                    "
                            >
                                <span>
                                    Explore Courses
                                </span>

                                <span
                                    className="
                            text-lg
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                                >
                                    →
                                </span>
                            </a>


                            {/* Contact Us */}
                            <a
                                href="/contact"
                                className="
                        group
                        flex
                        min-w-[220px]
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        border-2
                        border-red-500
                        bg-white
                        px-8
                        py-[14px]
                        text-sm
                        font-bold
                        text-red-500
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-red-50
                    "
                            >
                                <span>
                                    Contact Us
                                </span>

                                <span
                                    className="
                            text-lg
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                                >
                                    →
                                </span>
                            </a>

                        </div>

                    </div>


                    {/* =================================================
            FLOATING ROCKET BADGE
        ================================================== */}
                    <div
                        className="
                absolute
                -left-8
                top-1/2
                hidden
                -translate-y-1/2
                items-center
                justify-center
                sm:flex
            "
                    >

                        {/* Outer ring */}
                        <div
                            className="
                    absolute
                    h-28
                    w-28
                    rounded-full
                    border-[12px]
                    border-red-100
                "
                        />

                        {/* Badge */}
                        <div
                            className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-lg
                "
                        >
                            <span className="text-3xl">
                                🚀
                            </span>
                        </div>

                    </div>


                    {/* =================================================
            FLOATING LIGHTBULB BADGE
        ================================================== */}
                    <div
                        className="
                absolute
                -right-8
                top-1/2
                hidden
                -translate-y-1/2
                items-center
                justify-center
                sm:flex
            "
                    >

                        {/* Outer ring */}
                        <div
                            className="
                    absolute
                    h-28
                    w-28
                    rounded-full
                    border-[12px]
                    border-red-100
                "
                        />

                        {/* Badge */}
                        <div
                            className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-lg
                "
                        >
                            <span className="text-3xl">
                                💡
                            </span>
                        </div>

                    </div>

                </div>


                {/* =====================================================
        BOTTOM TAGLINE
    ====================================================== */}
                <div
                    className="
            absolute
            bottom-14
            left-1/2
            z-10
            flex
            -translate-x-1/2
            items-center
            gap-4
            whitespace-nowrap
        "
                >

                    <span className="h-px w-10 bg-red-400 sm:w-14" />

                    <span
                        className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-slate-400
                sm:text-[11px]
                sm:tracking-[0.35em]
            "
                    >
                        Learn
                        <span className="mx-2 text-red-400">•</span>
                        Build
                        <span className="mx-2 text-red-400">•</span>
                        Innovate
                    </span>

                    <span className="h-px w-10 bg-red-400 sm:w-14" />

                </div>


                {/* =====================================================
        SCROLL UP BUTTON
    ====================================================== */}
                <button
                    type="button"
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: "smooth",
                        });
                    }}
                    aria-label="Scroll up"
                    className="
            absolute
            bottom-4
            left-1/2
            z-20
            flex
            h-9
            w-9
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            text-red-500
            shadow-sm
            transition-all
            duration-300
            hover:-translate-x-1/2
            hover:translate-y-1
            hover:border-red-200
            hover:shadow-md
        "
                >
                    <span className="animate-bounce text-xl">
                        ↑
                    </span>
                </button>

            </section>

            {/* =========================================================
                FOOTER
            ========================================================== */}
            <Footer />
        </main>
    );
}

export default Home;