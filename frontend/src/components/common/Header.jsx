import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, User, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Learning", path: "/learning", hasDropdown: true },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects", hasDropdown: true },
  { label: "Community", path: "/forum" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActiveRoute = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Technical Spec Area */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-slate-900 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
          >
            <img
              src="/images/logo.png"
              alt="STEMSAGE"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                // Fallback to text logo if image fails
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="flex flex-col">
              <span className="text-lg font-extrabold leading-none tracking-tight text-slate-900">
                STEMSAGE
              </span>
            </div>
          </Link>

          {/* Technical Spec Badge */}
          <span className="hidden sm:inline-flex items-center gap-1 rounded border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            v2.4 // STUDIO-SPEC
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
          {navItems.map((item) => {
            const active = isActiveRoute(item.path);
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`inline-flex items-center gap-1 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-1 ${
                  active
                    ? "font-bold text-slate-900"
                    : "font-medium text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="text-slate-400" />}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden items-center gap-3.5 lg:flex">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700 active:scale-98 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-xs"
          >
            GET STARTED
          </Link>
          
          <button
            type="button"
            aria-label="User profile account"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <User size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between border-t border-slate-200 bg-white px-6 py-6 lg:hidden overflow-y-auto shadow-2xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                v2.4 // STUDIO-SPEC
              </span>
            </div>

            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const active = isActiveRoute(item.path);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex h-11 items-center justify-between rounded-lg px-3 text-base transition-colors ${
                      active
                        ? "bg-red-50 font-bold text-red-600"
                        : "font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDown size={16} className="text-slate-400" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-11 w-full items-center justify-center rounded-md bg-red-600 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
            >
              GET STARTED
            </Link>

            <div className="flex items-center justify-between px-2 text-xs font-mono text-slate-500">
              <span>STEMSAGE TECHWORLD</span>
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <User size={14} /> Account
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

