function About() {
    return (
        <main className="w-full overflow-x-hidden bg-white">

            {/* =========================================================
                ABOUT HERO
            ========================================================== */}
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
                    SAME AS HOME PAGE
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

                {/* White overlay - same Home theme */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-white/70
                    "
                />

                {/* =====================================================
                    TOP LEFT RED CIRCLE
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

                {/* =====================================================
                    BOTTOM RIGHT GREY CIRCLE
                ====================================================== */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-24
                        -right-24
                        h-64
                        w-64
                        rounded-full
                        border-[18px]
                        border-slate-100
                        opacity-80
                        sm:h-72
                        sm:w-72
                    "
                />

                {/* =====================================================
                    SMALL RED DOT
                ====================================================== */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        right-[13%]
                        top-[22%]
                        h-2
                        w-2
                        rounded-full
                        bg-red-500
                        opacity-80
                    "
                />

                {/* =====================================================
                    SMALL GREY DOT
                ====================================================== */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-[25%]
                        left-[13%]
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-slate-300
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
                        flex
                        w-full
                        max-w-6xl
                        flex-col
                        items-center
                        text-center
                    "
                >

                    {/* =================================================
                        SECTION LABEL
                    ================================================== */}
                    <div className="flex items-center gap-4">

                        <span className="h-px w-10 bg-red-500 sm:w-14" />

                        <span
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.35em]
                                text-red-500
                                sm:text-xs
                            "
                        >
                            About STEMSAGE
                        </span>

                        <span className="h-px w-10 bg-red-500 sm:w-14" />

                    </div>


                    {/* =================================================
                        MAIN HEADING
                    ================================================== */}
                    <h1
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
                    </h1>


                    {/* =================================================
                        DIVIDER
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
                        At{" "}
                        <strong className="font-bold text-slate-950">
                            Stemsage Techworld
                        </strong>
                        , we are passionate about empowering young innovators
                        with STEM excellence. Our mission is to provide
                        high-quality education, hands-on training, and
                        innovative solutions in Science, Technology,
                        Engineering, and Mathematics.
                    </p>


                    {/* =================================================
                        LEARN / BUILD / INNOVATE
                    ================================================== */}
                    <div
                        className="
                            mt-10
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-x-7
                            gap-y-3
                        "
                    >

                        <span
                            className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-slate-400
                                sm:text-[10px]
                            "
                        >
                            Learn
                        </span>

                        <span className="h-1 w-1 rounded-full bg-red-500" />

                        <span
                            className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-slate-400
                                sm:text-[10px]
                            "
                        >
                            Build
                        </span>

                        <span className="h-1 w-1 rounded-full bg-red-500" />

                        <span
                            className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-slate-400
                                sm:text-[10px]
                            "
                        >
                            Innovate
                        </span>

                    </div>

                </div>


                {/* =====================================================
                    SECTION END INDICATOR
                ====================================================== */}
                <div
                    className="
                        absolute
                        bottom-7
                        left-1/2
                        z-30
                        flex
                        -translate-x-1/2
                        flex-col
                        items-center
                    "
                >
                    <span
                        className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.32em]
                            text-slate-400
                            sm:text-[10px]
                            sm:tracking-[0.35em]
                        "
                    >
                        Scroll to explore
                    </span>

                    <div
                        className="
                            mt-3
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            shadow-sm
                        "
                    >
                        <svg
                            className="h-4 w-4 text-red-500"
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
                    SMOOTH SECTION TRANSITION
                ====================================================== */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        right-0
                        z-20
                        h-32
                        bg-gradient-to-b
                        from-transparent
                        via-white/60
                        to-white
                    "
                />

            </section>



            {/* =========================================================
                WHAT DRIVES US
            ========================================================== */}
            <section
                className="
                    relative
                    flex
                    min-h-[80vh]
                    items-center
                    overflow-hidden
                    bg-white
                    px-5
                    py-20
                    sm:px-8
                    sm:py-24
                    md:px-10
                    lg:min-h-[96vh]
                    lg:px-12
                    lg:py-28
                "
            >

                {/* =====================================================
                    SMOOTH FADE FROM PREVIOUS SECTION
                ====================================================== */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        left-0
                        right-0
                        top-0
                        z-20
                        h-24
                        bg-gradient-to-b
                        from-white
                        via-white/70
                        to-transparent
                    "
                />


                {/* =====================================================
                    SAME GRID AS HOME
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

                {/* SAME WHITE OVERLAY AS HOME */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-white/70
                    "
                />


                {/* =====================================================
                    LEFT RED CIRCLE
                ====================================================== */}
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
                        opacity-40
                        blur-[1px]
                        lg:block
                    "
                />


                {/* =====================================================
                    SMALL RED LINE
                ====================================================== */}
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


                {/* =====================================================
                    RIGHT GREY CIRCLE
                ====================================================== */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-24
                        -right-24
                        h-64
                        w-64
                        rounded-full
                        border-[18px]
                        border-slate-100
                        opacity-80
                    "
                />


                {/* =====================================================
                    SMALL RED PLUS
                ====================================================== */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        right-[16%]
                        top-[24%]
                        text-xl
                        font-light
                        text-red-500
                    "
                >
                    +
                </div>


                {/* =====================================================
                    SMALL GREY DOT
                ====================================================== */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-[20%]
                        left-[16%]
                        h-2
                        w-2
                        rounded-full
                        bg-slate-300
                    "
                />


                {/* =====================================================
                    CONTENT
                ====================================================== */}
                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        w-full
                        max-w-6xl
                    "
                >

                    {/* =================================================
                        HEADING
                    ================================================== */}
                    <div className="mx-auto max-w-4xl text-center">

                        <div className="mb-5 flex items-center justify-center gap-4">

                            <span className="hidden h-[2px] w-12 bg-red-500 sm:block" />

                            <span
                                className="
                                    text-[11px]
                                    font-bold
                                    uppercase
                                    tracking-[0.35em]
                                    text-red-500
                                    sm:text-xs
                                "
                            >
                                What drives us
                            </span>

                            <span className="hidden h-[2px] w-12 bg-red-500 sm:block" />

                        </div>


                        <h2
                            className="
                                text-3xl
                                font-extrabold
                                leading-tight
                                tracking-tight
                                text-slate-950
                                sm:text-4xl
                                md:text-5xl
                                lg:text-[52px]
                            "
                        >
                            Built around{" "}
                            <span className="text-red-500">
                                purpose
                            </span>
                        </h2>


                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-2xl
                                text-sm
                                leading-7
                                text-slate-500
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            Everything we do is focused on creating meaningful
                            learning experiences for the innovators of tomorrow.
                        </p>

                    </div>


                    {/* =================================================
                        CARDS
                    ================================================== */}
                    <div
                        className="
                            mx-auto
                            mt-12
                            grid
                            w-full
                            max-w-[1200px]
                            grid-cols-1
                            gap-5
                            md:grid-cols-3
                        "
                    >

                        {/* =================================================
                            MISSION
                        ================================================== */}
                        <div
                            className="
                                group
                                relative
                                min-h-[300px]
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-7
                                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-red-200
                                hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                            "
                        >

                            {/* Number */}
                            <span
                                className="
                                    absolute
                                    right-7
                                    top-7
                                    text-xl
                                    font-bold
                                    text-slate-300
                                "
                            >
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
                                    rounded-xl
                                    bg-slate-950
                                    text-white
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            >
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="8" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="12" cy="12" r="1" />
                                </svg>
                            </div>


                            <h3
                                className="
                                    mt-7
                                    text-2xl
                                    font-extrabold
                                    tracking-tight
                                    text-slate-950
                                "
                            >
                                Mission
                            </h3>


                            <div className="mt-3 h-1.5 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-16" />


                            <p
                                className="
                                    mt-5
                                    max-w-[280px]
                                    text-sm
                                    leading-7
                                    text-slate-500
                                "
                            >
                                To make STEM education accessible and engaging
                                for all learners.
                            </p>


                            {/* Bottom accent */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-1.5
                                    w-0
                                    bg-red-500
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                "
                            />

                        </div>


                        {/* =================================================
                            VISION
                        ================================================== */}
                        <div
                            className="
                                group
                                relative
                                min-h-[300px]
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-7
                                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-slate-300
                                hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                            "
                        >

                            {/* Number */}
                            <span
                                className="
                                    absolute
                                    right-7
                                    top-7
                                    text-xl
                                    font-bold
                                    text-slate-300
                                "
                            >
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
                                    rounded-xl
                                    bg-slate-950
                                    text-white
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            >
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                                    <circle cx="12" cy="12" r="2.5" />
                                </svg>
                            </div>


                            <h3
                                className="
                                    mt-7
                                    text-2xl
                                    font-extrabold
                                    tracking-tight
                                    text-slate-950
                                "
                            >
                                Vision
                            </h3>


                            <div className="mt-3 h-1.5 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-16" />


                            <p
                                className="
                                    mt-5
                                    max-w-[280px]
                                    text-sm
                                    leading-7
                                    text-slate-500
                                "
                            >
                                To create a global community of innovators
                                and problem solvers.
                            </p>


                            {/* Bottom accent */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-1.5
                                    w-0
                                    bg-slate-950
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                "
                            />

                        </div>


                        {/* =================================================
                            VALUES
                        ================================================== */}
                        <div
                            className="
                                group
                                relative
                                min-h-[300px]
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-7
                                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-red-200
                                hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                            "
                        >

                            {/* Number */}
                            <span
                                className="
                                    absolute
                                    right-7
                                    top-7
                                    text-xl
                                    font-bold
                                    text-slate-300
                                "
                            >
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
                                    rounded-xl
                                    bg-slate-950
                                    text-white
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            >
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.6Z" />
                                </svg>
                            </div>


                            <h3
                                className="
                                    mt-7
                                    text-2xl
                                    font-extrabold
                                    tracking-tight
                                    text-slate-950
                                "
                            >
                                Values
                            </h3>


                            <div className="mt-3 h-1.5 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-16" />


                            <p
                                className="
                                    mt-5
                                    max-w-[280px]
                                    text-sm
                                    leading-7
                                    text-slate-500
                                "
                            >
                                Innovation, Excellence, Integrity, and
                                Collaboration.
                            </p>


                            {/* Bottom accent */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-1.5
                                    w-0
                                    bg-red-500
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                "
                            />

                        </div>

                    </div>


                    {/* =================================================
                        BOTTOM TAGLINE
                    ================================================== */}
                    <div
                        className="
                            mt-20
                            flex
                            items-center
                            justify-center
                            gap-4
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
                            <span className="mx-2 text-red-400">
                                •
                            </span>
                            Build
                            <span className="mx-2 text-red-400">
                                •
                            </span>
                            Innovate
                        </span>

                        <span className="h-px w-10 bg-red-400 sm:w-14" />

                    </div>

                </div>

            </section>

        </main>
    );
}

export default About;