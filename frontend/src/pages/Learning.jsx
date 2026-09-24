import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import { featuredLearning, learningPaths, howWeTeach, learningExperience } from "../data/learning";

const CATEGORY_ICON = {
  Robotics: "🤖", Electronics: "⚡", Programming: "💻",
  IoT: "📡", "3D Design": "🖨️", "AI/ML": "🧠",
};

const LEVEL_COLOR = { Beginner: "#16a34a", Intermediate: "#d97706", Advanced: "#dc2626" };

/* ─── Shared Styles ─── */
const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(226,232,240,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.6) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

function SectionLabel({ children }) {
  return (
    <p style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e11d48", marginBottom: "14px", margin: "0 0 14px" }}>
      {children}
    </p>
  );
}

function RedDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "16px 0" }}>
      <span style={{ height: "1px", width: "40px", background: "#e11d48", display: "block" }} />
      <span style={{ height: "10px", width: "10px", borderRadius: "50%", background: "#e11d48", display: "block" }} />
      <span style={{ height: "1px", width: "40px", background: "#e11d48", display: "block" }} />
    </div>
  );
}

/* ─── Hero ─── */
function LearningHero() {
  return (
    <section style={{ ...gridBg, background: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: "-40px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", border: "20px solid rgba(225,29,72,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "260px", height: "260px", borderRadius: "50%", border: "20px solid rgba(15,23,42,0.05)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 80px" }}>
        <SectionLabel>STEMSAGE LEARNING // KNOWLEDGE HUB</SectionLabel>
        <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#0f172a", margin: "0 0 8px" }}>
          Learn. Explore.{" "}
          <span style={{ color: "#e11d48" }}>Build.</span>
        </h1>
        <RedDivider />
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "#475569", maxWidth: "580px", lineHeight: 1.75, margin: "0 0 36px" }}>
          Discover hands-on learning experiences, structured programs, and resources designed to turn curiosity into practical STEM skills.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
          <Link
            to="/courses"
            style={{ display: "inline-block", padding: "12px 28px", background: "#e11d48", color: "white", fontWeight: 700, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "9999px", textDecoration: "none" }}
          >
            Explore Courses
          </Link>
          <Link
            to="/workshops"
            style={{ display: "inline-block", padding: "12px 28px", background: "white", color: "#0f172a", fontWeight: 700, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "9999px", textDecoration: "none", border: "2px solid #e2e8f0" }}
          >
            View Workshops
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Learning Paths ─── */
function LearningPaths() {
  return (
    <section style={{ background: "#f8fafc", padding: "72px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionLabel>Choose Your Learning Path</SectionLabel>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.02em", margin: "0 0 16px" }}>
            Multiple Ways to Learn
          </h2>
          <p style={{ fontSize: "15px", color: "#475569", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Whether you prefer structured courses or hands-on experimentation, STEMSAGE has a learning path for you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {learningPaths.map((path) => (
            <div
              key={path.id}
              style={{
                background: "white",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                opacity: path.disabled ? 0.7 : 1,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "32px" }}>{path.icon}</span>
                <span style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#e11d48", letterSpacing: "0.15em" }}>{path.number}</span>
              </div>
              <div>
                <h3 style={{ margin: "0 0 8px", fontSize: "17px", fontWeight: 800, color: "#0f172a" }}>{path.title}</h3>
                <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: 1.65 }}>{path.description}</p>
              </div>
              {path.disabled ? (
                <span
                  style={{ display: "inline-block", padding: "9px 20px", background: "#f1f5f9", color: "#94a3b8", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "9999px", textAlign: "center", cursor: "not-allowed", border: "2px dashed #e2e8f0" }}
                >
                  {path.cta}
                </span>
              ) : (
                <Link
                  to={path.href}
                  style={{ display: "inline-block", padding: "9px 20px", background: "#0f172a", color: "white", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "9999px", textDecoration: "none", textAlign: "center" }}
                >
                  {path.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How We Teach ─── */
function HowWeTeach() {
  return (
    <section style={{ background: "#0f172a", padding: "72px 0", position: "relative", overflow: "hidden" }}>
      {/* grid overlay */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />
      {/* decorative circles */}
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "280px", height: "280px", borderRadius: "50%", border: "20px solid rgba(225,29,72,0.08)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <SectionLabel>How STEMSAGE Teaches</SectionLabel>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: "white", letterSpacing: "-0.02em", margin: 0 }}>
            Our Teaching <span style={{ color: "#e11d48" }}>Methodology</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0" }}>
          {howWeTeach.map((step, idx) => (
            <div
              key={step.step}
              style={{
                padding: "36px 32px",
                borderLeft: idx > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                position: "relative",
              }}
            >
              {/* Step number accent bar */}
              <div style={{ width: "32px", height: "3px", background: "#e11d48", borderRadius: "2px", marginBottom: "20px" }} />
              <span style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#e11d48", display: "block", marginBottom: "10px" }}>
                {step.step}
              </span>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: "white", margin: "0 0 12px", letterSpacing: "-0.02em" }}>{step.title}</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8", lineHeight: 1.7 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Learning ─── */
function FeaturedLearning() {
  return (
    <section style={{ background: "white", padding: "72px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
          <div>
            <SectionLabel>Featured Learning</SectionLabel>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.02em", margin: 0 }}>
              Popular Courses
            </h2>
          </div>
          <Link
            to="/courses"
            style={{ fontSize: "12px", fontWeight: 700, color: "#e11d48", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            View All Courses →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
          {featuredLearning.map((item) => (
            <div
              key={item.id}
              style={{ background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              {/* Visual */}
              <div style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "44px", position: "relative" }}>
                {CATEGORY_ICON[item.category] || "📚"}
                <span style={{ position: "absolute", top: "10px", left: "10px", background: "#e11d48", color: "white", fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 8px", borderRadius: "9999px" }}>
                  {item.category}
                </span>
              </div>
              {/* Content */}
              <div style={{ padding: "18px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 800, color: "#0f172a", lineHeight: 1.25 }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: "12px", color: "#64748b", lineHeight: 1.6 }}>{item.description}</p>
                <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "6px", background: "#f0fdf4", color: LEVEL_COLOR[item.level] || "#475569", border: "1px solid #dcfce7", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {item.level}
                  </span>
                  <span style={{ fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "6px", background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0", letterSpacing: "0.06em" }}>
                    ⏱ {item.duration}
                  </span>
                </div>
                <Link
                  to="/courses"
                  style={{ marginTop: "auto", padding: "9px", background: "#0f172a", color: "white", borderRadius: "9999px", fontWeight: 700, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", textAlign: "center", display: "block" }}
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Learning Experience ─── */
function LearningExperience() {
  return (
    <section style={{ ...gridBg, background: "#f8fafc", padding: "72px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionLabel>The STEMSAGE Experience</SectionLabel>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.02em", margin: 0 }}>
            What Every Learner Gets
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" }}>
          {[
            { icon: "🧪", label: "Hands-On", sub: "Lab Experience" },
            { icon: "📦", label: "Project", sub: "Based" },
            { icon: "🎯", label: "Mentor", sub: "Guidance" },
            { icon: "🌍", label: "Real", sub: "Application" },
          ].map((item) => (
            <div
              key={item.label}
              style={{ background: "white", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "28px 20px", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
            >
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{item.icon}</div>
              <div style={{ fontWeight: 900, fontSize: "15px", color: "#0f172a", letterSpacing: "-0.01em" }}>{item.label}</div>
              <div style={{ fontSize: "13px", color: "#e11d48", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */
function LearningCTA() {
  return (
    <section style={{ background: "#0f172a", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "300px", height: "300px", borderRadius: "50%", border: "20px solid rgba(225,29,72,0.08)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "white", letterSpacing: "-0.02em", margin: "0 0 16px" }}>
          Ready to Start <span style={{ color: "#e11d48" }}>Learning?</span>
        </h2>
        <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: 1.75, margin: "0 0 36px" }}>
          Choose your path and start building practical STEM skills today.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
          <Link
            to="/courses"
            style={{ display: "inline-block", padding: "13px 32px", background: "#e11d48", color: "white", fontWeight: 700, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: "9999px", textDecoration: "none" }}
          >
            Explore Courses
          </Link>
          <Link
            to="/workshops"
            style={{ display: "inline-block", padding: "13px 32px", background: "transparent", color: "white", fontWeight: 700, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: "9999px", textDecoration: "none", border: "2px solid rgba(255,255,255,0.25)" }}
          >
            Join a Workshop
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
function Learning() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <LearningHero />
      <LearningPaths />
      <HowWeTeach />
      <FeaturedLearning />
      <LearningExperience />
      <LearningCTA />
      <Footer />
    </div>
  );
}

export default Learning;
