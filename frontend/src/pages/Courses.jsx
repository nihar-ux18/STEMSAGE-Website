import { useState } from "react";
import Footer from "../components/common/Footer";
import PageHero from "../components/mock/PageHero";
import FilterBar from "../components/mock/FilterBar";
import MockModal from "../components/mock/MockModal";
import StatusBadge from "../components/mock/StatusBadge";
import { courses, courseCategories } from "../data/courses";

const levelColor = { Beginner: "#16a34a", Intermediate: "#d97706", Advanced: "#dc2626" };
const modeColor = { Online: "#2563eb", Offline: "#7c3aed", Hybrid: "#0891b2" };

const ICON_MAP = {
  Robotics: "🤖",
  Electronics: "⚡",
  Programming: "💻",
  IoT: "📡",
  "3D Design": "🖨️",
  "AI/ML": "🧠",
};

function CourseCard({ course, onView }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "14px",
        border: "1px solid #e2e8f0",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Visual */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          height: "140px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "52px",
          position: "relative",
        }}
      >
        {ICON_MAP[course.category] || "📚"}
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: "#e11d48",
            color: "white",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "3px 10px",
            borderRadius: "9999px",
          }}
        >
          {course.category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.25,
          }}
        >
          {course.title}
        </h3>
        <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: 1.6 }}>
          {course.description}
        </p>

        {/* Meta */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "6px",
              background: "#f0fdf4",
              color: levelColor[course.level] || "#475569",
              border: "1px solid #dcfce7",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {course.level}
          </span>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "6px",
              background: "#eff6ff",
              color: modeColor[course.mode] || "#475569",
              border: "1px solid #bfdbfe",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {course.mode}
          </span>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "6px",
              background: "#f8fafc",
              color: "#475569",
              border: "1px solid #e2e8f0",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            ⏱ {course.duration}
          </span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {course.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "10px",
                color: "#64748b",
                background: "#f1f5f9",
                padding: "2px 8px",
                borderRadius: "4px",
                border: "1px solid #e2e8f0",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: "14px",
            borderTop: "1px solid #f1f5f9",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 900, color: "#0f172a" }}>
            ₹{course.price.toLocaleString("en-IN")}
          </span>
          <button
            onClick={() => onView(course)}
            style={{
              padding: "9px 20px",
              background: "#0f172a",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#e11d48")}
            onMouseLeave={(e) => (e.target.style.background = "#0f172a")}
          >
            View Course
          </button>
        </div>
      </div>
    </div>
  );
}

function CourseDetailModal({ course, onClose }) {
  if (!course) return null;
  return (
    <MockModal isOpen={!!course} onClose={onClose} title={course.title}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <StatusBadge status={course.level} />
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: "9999px",
              background: "#f1f5f9",
              color: "#475569",
              border: "1px solid #e2e8f0",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {course.mode} • {course.duration}
          </span>
        </div>
        <p style={{ margin: 0, color: "#475569", fontSize: "14px", lineHeight: 1.7 }}>
          {course.detail.overview}
        </p>
        <div>
          <h4 style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            What you'll learn
          </h4>
          <ul style={{ margin: 0, paddingLeft: "18px", color: "#475569", fontSize: "13px", lineHeight: 2 }}>
            {course.detail.syllabus.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h4 style={{ margin: "0 0 6px", fontSize: "13px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Outcome
          </h4>
          <p style={{ margin: 0, color: "#475569", fontSize: "13px", lineHeight: 1.7 }}>{course.detail.outcome}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "16px",
            borderTop: "1px solid #f1f5f9",
          }}
        >
          <span style={{ fontSize: "22px", fontWeight: 900, color: "#0f172a" }}>₹{course.price.toLocaleString("en-IN")}</span>
          <button
            onClick={() => alert("Enrollment coming soon! This is a demo page.")}
            style={{
              padding: "11px 24px",
              background: "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Enroll Now (Demo)
          </button>
        </div>
      </div>
    </MockModal>
  );
}

function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filtered = courses.filter((c) => {
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <PageHero
        label="STEMSAGE LEARNING // COURSE CATALOG"
        heading="Learn. Build."
        headingAccent="Master."
        subtext="Hands-on STEM courses designed to turn curiosity into practical skills."
        cta={{ label: "Explore Courses", href: "#course-catalog" }}
      />

      {/* Why STEMSAGE */}
      <section style={{ background: "#0f172a", padding: "60px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e11d48",
              marginBottom: "12px",
            }}
          >
            Why Learn With STEMSAGE
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
              marginTop: "32px",
            }}
          >
            {[
              { icon: "🛠️", title: "Hands-on Learning", desc: "Every concept is taught through doing, not just reading." },
              { icon: "⚙️", title: "Industry-Relevant Tools", desc: "Work with tools and platforms used by real engineers." },
              { icon: "📦", title: "Project-Based Curriculum", desc: "Each course ends with a portfolio-ready project." },
              { icon: "🎯", title: "Mentor Guidance", desc: "Expert mentors available throughout your learning journey." },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{item.icon}</div>
                <h4 style={{ margin: "0 0 8px", color: "white", fontSize: "14px", fontWeight: 800 }}>{item.title}</h4>
                <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section id="course-catalog" style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "32px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 900, color: "#0f172a" }}>
            All Courses
          </h2>
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px 18px",
              border: "2px solid #e2e8f0",
              borderRadius: "9999px",
              fontSize: "13px",
              outline: "none",
              minWidth: "220px",
              color: "#0f172a",
            }}
          />
        </div>

        <FilterBar categories={courseCategories} active={activeCategory} onChange={setActiveCategory} />

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#94a3b8" }}>
            No courses found for "{search}" in {activeCategory}.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} onView={setSelectedCourse} />
            ))}
          </div>
        )}
      </section>

      <CourseDetailModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      <Footer />
    </div>
  );
}

export default Courses;
