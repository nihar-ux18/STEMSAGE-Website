import { NavLink } from "react-router-dom";

const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Courses", "/courses"],
    ["Services", "/services"],
    ["Our Store", "/store"],
    ["Our Forum", "/forum"],
];

function Header() {
    return <>
        <div className="flex h-8 items-center justify-center bg-[#242223] text-[11px] text-white">Welcome to STEMSAGE</div>
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
            <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
                <NavLink to="/" className="flex items-center gap-3"><img src="/images/logo.png" alt="STEMSAGE logo" className="h-10 w-10 object-contain" /><span className="text-[22px] font-extrabold tracking-tight text-red-600">STEMSAGE</span></NavLink>
                <nav className="hidden items-center gap-7 lg:flex">
                    {links.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => `text-[13px] font-semibold transition-colors ${isActive ? "text-red-600" : "text-slate-700 hover:text-red-600"}`}>{label}{(label === "Courses" || label === "Our Forum") && <span className="ml-1 text-[10px]">▼</span>}</NavLink>)}
                </nav>
                <button type="button" aria-label="Open menu" className="rounded border border-slate-200 px-3 py-2 text-slate-700 lg:hidden">☰</button>
            </div>
        </header>
    </>;
}

export default Header;
