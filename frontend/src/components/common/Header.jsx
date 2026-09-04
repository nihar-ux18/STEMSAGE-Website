import { Link } from "react-router-dom";

const links = [
    ["Home", "/"], ["About", "/about"], ["Courses", "/courses"],
    ["Services", "/services"], ["Our Store", "/store"], ["Projects", "/projects"],
    ["Student Projects", "/student-projects"], ["Workshops", "/workshops"], ["Our Forum", "/forum"],
];

function Header() {
    return <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f172a] text-white shadow-sm">
        <div className="mx-auto flex min-h-[88px] w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
            <Link to="/" className="flex items-center gap-3"><img src="/images/logo.png" alt="STEMSAGE" className="h-14 w-auto object-contain" /><div className="hidden sm:block"><div className="text-[24px] font-extrabold leading-none tracking-tight text-red-500">STEMSAGE</div><div className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">TECHWORLD LLP</div></div></Link>
            <nav className="hidden items-center gap-7 xl:flex">{links.map(([label, path]) => <Link key={path} to={path} className="text-sm font-semibold text-slate-300 transition-colors hover:text-white">{label}</Link>)}</nav>
            <button type="button" aria-label="Open menu" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 xl:hidden">☰</button>
        </div>
    </header>;
}

export default Header;
