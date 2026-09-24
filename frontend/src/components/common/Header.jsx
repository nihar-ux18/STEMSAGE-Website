import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

/* ─── Nav structure ─── */
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Learning",
    path: "/learning",
    dropdown: [
      { label: "Courses", path: "/courses", desc: "Structured STEM learning programs", icon: "📚" },
      { label: "Workshops", path: "/workshops", desc: "Short hands-on sessions", icon: "🛠️" },
      { label: "Project-Based Learning", path: "/projects", desc: "Learn by building real projects", icon: "🔬" },
      { label: "STEM Resources", path: null, desc: "Materials & activities — coming soon", icon: "📖", disabled: true },
    ],
  },
  { label: "Services", path: "/services" },
  {
    label: "Projects",
    path: "/projects",
    dropdown: [
      { label: "Our Projects", path: "/projects", desc: "STEMSAGE institutional projects", icon: "🚀" },
      { label: "Student Projects", path: "/student-projects", desc: "Projects built by our students", icon: "🎓" },
    ],
  },
  { label: "Community", path: "/forum" },
];

/* ─── Desktop Dropdown ─── */
function DropdownMenu({ items }) {
  return (
    /* Outer wrapper: starts flush at 100% with paddingTop to bridge the gap */
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        paddingTop: "10px",  /* invisible bridge — keeps hover active over the gap */
        zIndex: 100,
        minWidth: "260px",
      }}
    >
      {/* Visible panel */}
      <div
        style={{
          background: "white",
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          padding: "8px",
        }}
      >
        {/* Arrow */}
        <div style={{ position: "absolute", top: "5px", left: "50%", transform: "translateX(-50%) rotate(45deg)", width: "10px", height: "10px", background: "white", border: "1px solid #e2e8f0", borderBottom: "none", borderRight: "none" }} />

        {items.map((item) =>
          item.disabled ? (
            <div
              key={item.label}
              style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "8px", opacity: 0.5, cursor: "not-allowed" }}
            >
              <span style={{ fontSize: "20px", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#94a3b8", display: "flex", alignItems: "center", gap: "6px" }}>
                  {item.label}
                  <span style={{ fontSize: "9px", fontWeight: 700, background: "#f1f5f9", color: "#94a3b8", padding: "1px 6px", borderRadius: "9999px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Soon</span>
                </div>
                <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "1px" }}>{item.desc}</div>
              </div>
            </div>
          ) : (
            <Link
              key={item.label}
              to={item.path}
              style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "8px", textDecoration: "none", transition: "background 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <span style={{ fontSize: "20px", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>{item.label}</div>
                <div style={{ fontSize: "11px", color: "#64748b", marginTop: "1px" }}>{item.desc}</div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

/* ─── Main Header ─── */
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close everything on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActiveRoute = (path) => {
    if (!path) return false;
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const isGroupActive = (item) => {
    if (isActiveRoute(item.path)) return true;
    if (item.dropdown) return item.dropdown.some((d) => d.path && isActiveRoute(d.path));
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-slate-900 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 rounded"
          >
            <img
              src="/images/logo.png"
              alt="STEMSAGE"
              className="h-8 w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <span className="text-lg font-extrabold leading-none tracking-tight text-slate-900">
              STEMSAGE
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation" ref={dropdownRef}>
          {navItems.map((item) => {
            const active = isGroupActive(item);

            /* ── Item with dropdown ── */
            if (item.dropdown) {
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`inline-flex items-center gap-1 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded px-1 ${
                      active
                        ? "font-bold text-red-600 underline decoration-red-500 decoration-2 underline-offset-4"
                        : "font-medium text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className="text-slate-400 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </Link>
                  {isOpen && <DropdownMenu items={item.dropdown} />}
                </div>
              );
            }

            /* ── Regular link ── */
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`inline-flex items-center gap-1 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded px-1 ${
                  active
                    ? "font-bold text-red-600 underline decoration-red-500 decoration-2 underline-offset-4"
                    : "font-medium text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-3.5 lg:flex">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 shadow-sm"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between border-t border-slate-200 bg-white px-6 py-6 lg:hidden overflow-y-auto shadow-2xl">
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = isGroupActive(item);

              /* ── Item with dropdown (expandable in mobile) ── */
              if (item.dropdown) {
                const isOpen = openDropdown === item.label;
                return (
                  <div key={item.label}>
                    {/* Parent row */}
                    <div
                      className={`flex h-11 items-center justify-between rounded-lg px-3 cursor-pointer transition-colors ${
                        active
                          ? "border-l-4 border-red-500 bg-red-50/60 font-bold text-red-600 pl-4"
                          : "font-medium text-slate-700 hover:bg-slate-50"
                      }`}
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    >
                      <span className="text-base">{item.label}</span>
                      <ChevronDown
                        size={16}
                        className="text-slate-400 transition-transform duration-200"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </div>
                    {/* Dropdown children */}
                    {isOpen && (
                      <div className="ml-4 mt-1 border-l-2 border-slate-100 pl-3 space-y-0.5">
                        {item.dropdown.map((child) =>
                          child.disabled ? (
                            <div
                              key={child.label}
                              className="flex h-10 items-center gap-2 px-3 text-sm text-slate-400 cursor-not-allowed"
                            >
                              <span>{child.icon}</span>
                              <span>{child.label}</span>
                              <span className="ml-auto text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded-full">Soon</span>
                            </div>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`flex h-10 items-center gap-2 rounded-lg px-3 text-sm transition-colors ${
                                isActiveRoute(child.path)
                                  ? "font-bold text-red-600 bg-red-50/60"
                                  : "font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                              }`}
                            >
                              <span>{child.icon}</span>
                              <span>{child.label}</span>
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              /* ── Regular link ── */
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex h-11 items-center justify-between rounded-lg px-3 text-base transition-colors ${
                    active
                      ? "border-l-4 border-red-500 bg-red-50/60 font-bold text-red-600 pl-4"
                      : "font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-100">
            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-11 w-full items-center justify-center rounded-md bg-red-600 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
