import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Services", "Projects", "Skills", "Contact"];

const SERVICES = [
  {
    icon: "📊",
    title: "Data Analysis",
    desc: "Transform raw datasets into meaningful insights that guide business strategy and unlock hidden growth opportunities.",
    accent: "#F24E1E",
  },
  {
    icon: "🔧",
    title: "SQL Data Engineering",
    desc: "Design efficient ETL pipelines, optimize complex queries, and build analytics-ready databases built for scale.",
    accent: "#FFB800",
  },
  {
    icon: "📈",
    title: "Dashboard Development",
    desc: "Create interactive Power BI dashboards for executives and stakeholders that drive confident decision-making.",
    accent: "#F24E1E",
  },
];

const SQL_PROJECTS = [
  "Malta Guinness Sales Analysis",
  "Real Estate Analytics",
  "Healthcare Analytics",
  "Netflix SQL Analysis",
  "Spotify SQL Analysis",
];

const SQL_CAPABILITIES = [
  "ETL (Extract, Transform, Load)",
  "Data Cleaning & Transformation",
  "KPI Pipeline Development",
  "Query Optimization (CTEs, Window Functions)",
  "Data Validation & Quality Checks",
];

const POWER_BI_DASHBOARDS = [
  { name: "Fintech Dashboard", url: "https://app.fabric.microsoft.com/links/o_emDkB2Sx" },
  { name: "Banking Dashboard", url: "https://app.fabric.microsoft.com/links/aVTGMqvSI5" },
  { name: "Sales Dashboard", url: "https://app.fabric.microsoft.com/links/gE5AgM149U" },
  { name: "Customer Dashboard", url: "https://app.fabric.microsoft.com/links/YlYMFYnoij" },
  { name: "Financial Dashboard", url: "https://app.fabric.microsoft.com/links/VRkeILcHVy" },
];

const GITHUB_PROJECTS = [
  { name: "Chatbot", lang: "Python", color: "#3572A5" },
  { name: "Titanic Analysis", lang: "Jupyter Notebook", color: "#DA5B0B" },
  { name: "House Price Analysis", lang: "Python", color: "#3572A5" },
  { name: "Fraud Detection", lang: "Python", color: "#3572A5" },
  { name: "Telco Churn Analysis", lang: "Python", color: "#3572A5" },
];

const SKILLS = [
  "SQL", "PostgreSQL", "Python", "Power BI",
  "ETL Pipelines", "Data Engineering", "Data Analytics",
];

const STATS = [
  { value: "15+", label: "SQL Case Studies" },
  { value: "5+", label: "Executive Dashboards" },
  { value: "3+", label: "Industries Served" },
  { value: "100%", label: "Business-Driven Focus" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("sql");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif", background: "#0A0A0A", color: "#F5F5F0", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=Clash+Display:wght@500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #F24E1E; border-radius: 2px; }

        .grad-text {
          background: linear-gradient(135deg, #F24E1E 0%, #FFB800 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .grad-btn {
          background: linear-gradient(135deg, #F24E1E 0%, #FFB800 100%);
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
          font-size: 15px;
          padding: 14px 32px;
          border-radius: 100px;
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
          display: inline-block;
          text-decoration: none;
        }
        .grad-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(242,78,30,0.45); filter: brightness(1.08); }
        .grad-btn:active { transform: translateY(0); }

        .outline-btn {
          background: transparent;
          color: #F5F5F0;
          border: 1.5px solid rgba(245,245,240,0.3);
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
          font-size: 15px;
          padding: 13px 32px;
          border-radius: 100px;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          display: inline-block;
          text-decoration: none;
        }
        .outline-btn:hover { border-color: #F24E1E; background: rgba(242,78,30,0.08); transform: translateY(-2px); }

        .card {
          background: #111111;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        .card:hover { transform: translateY(-6px); border-color: rgba(242,78,30,0.35); box-shadow: 0 20px 60px rgba(242,78,30,0.12); }

        .nav-link {
          color: rgba(245,245,240,0.65);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          font-family: inherit;
          padding: 0;
        }
        .nav-link:hover { color: #FFB800; }

        .skill-tag {
          padding: 8px 18px;
          border-radius: 100px;
          border: 1px solid rgba(242,78,30,0.3);
          font-size: 13px;
          font-weight: 500;
          color: rgba(245,245,240,0.8);
          background: rgba(242,78,30,0.06);
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
          cursor: default;
        }
        .skill-tag:hover { background: rgba(242,78,30,0.15); border-color: #F24E1E; color: #fff; transform: scale(1.04); }

        .tab-btn {
          background: none;
          border: none;
          font-family: inherit;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 100px;
          transition: background 0.2s, color 0.2s;
          color: rgba(245,245,240,0.5);
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #F24E1E, #FFB800);
          color: #fff;
        }

        .pbi-card {
          background: #111111;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 18px 22px;
          text-decoration: none;
          color: inherit;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .pbi-card:hover { transform: translateY(-4px); border-color: rgba(255,184,0,0.4); box-shadow: 0 12px 40px rgba(255,184,0,0.1); }

        .gh-card {
          background: #111111;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 18px 22px;
          transition: transform 0.2s, border-color 0.2s;
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .gh-card:hover { transform: translateY(-4px); border-color: rgba(242,78,30,0.35); }

        .noise-bg {
          position: relative;
        }
        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        section { position: relative; z-index: 1; }

        .stat-card {
          background: #111;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 28px 24px;
          text-align: center;
          transition: transform 0.2s, border-color 0.2s;
        }
        .stat-card:hover { transform: translateY(-4px); border-color: rgba(242,78,30,0.3); }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(1deg); }
          66% { transform: translateY(6px) rotate(-1deg); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .floating { animation: float 7s ease-in-out infinite; }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.3s, backdrop-filter 0.3s, border 0.3s",
        padding: "0 5%",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 20 }}>
            <span className="grad-text">FP</span>
            <span style={{ color: "rgba(245,245,240,0.4)", fontWeight: 300, fontSize: 16, marginLeft: 6 }}>Data Engineer</span>
          </div>

          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {NAV_LINKS.map(l => (
              <button key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase())} style={{ display: window.innerWidth < 768 ? "none" : "block" }}>{l}</button>
            ))}
            <a href="mailto:oblissman@gmail.com" className="grad-btn" style={{ fontSize: 13, padding: "10px 22px" }}>Hire Me</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="noise-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 80px", overflow: "hidden" }}>
        <div className="hero-glow" style={{ width: 600, height: 600, background: "rgba(242,78,30,0.12)", top: -100, right: -150 }} />
        <div className="hero-glow" style={{ width: 400, height: 400, background: "rgba(255,184,0,0.08)", bottom: 0, left: -100 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(242,78,30,0.1)", border: "1px solid rgba(242,78,30,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F24E1E", position: "relative" }}>
                <div style={{ position: "absolute", inset: -3, borderRadius: "50%", border: "1px solid #F24E1E", animation: "pulse-ring 1.8s ease-out infinite" }} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#FFB800", letterSpacing: "0.06em", textTransform: "uppercase" }}>Available for Work</span>
            </div>

            <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(40px, 5vw, 66px)", fontWeight: 700, lineHeight: 1.08, marginBottom: 24, letterSpacing: "-0.02em" }}>
              I Turn Raw Data Into{" "}
              <span className="grad-text">Revenue-Driving</span>{" "}
              Insights
            </h1>

            <p style={{ fontSize: 18, color: "rgba(245,245,240,0.6)", lineHeight: 1.7, marginBottom: 40, maxWidth: 520 }}>
              I help businesses transform complex data into clear, actionable decisions using SQL, Python, and Power BI dashboards.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="grad-btn" onClick={() => scrollTo("projects")}>View Projects →</button>
              <a href="mailto:oblissman@gmail.com" className="outline-btn">Work With Me</a>
            </div>

            <div style={{ display: "flex", gap: 32, marginTop: 56, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {STATS.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 30, fontWeight: 700 }} className="grad-text">{s.value}</div>
                  <div style={{ fontSize: 12, color: "rgba(245,245,240,0.45)", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="floating" style={{ position: "relative" }}>
              {/* Glow halo */}
              <div style={{ position: "absolute", inset: -8, borderRadius: "50%", background: "linear-gradient(135deg, #F24E1E55, #FFB80044)", filter: "blur(16px)", zIndex: 0 }} />
              <div style={{
                width: 340, height: 340, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(242,78,30,0.18) 0%, rgba(255,184,0,0.12) 100%)",
                border: "2px solid rgba(242,78,30,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", zIndex: 1,
              }}>
                <div style={{
                  width: 300, height: 300, borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid rgba(255,255,255,0.12)",
                  flexShrink: 0,
                }}>
                  <img
                    src="data:image/png;base64,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"
                    alt="Fatolu Peter Oluwadamilare"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>

                {/* Orbiting badges */}
                {[
                  { label: "SQL", top: -20, left: "50%", transform: "translateX(-50%)", color: "#F24E1E" },
                  { label: "Power BI", bottom: -20, left: "50%", transform: "translateX(-50%)", color: "#FFB800" },
                  { label: "Python", top: "50%", left: -20, transform: "translateY(-50%)", color: "#F24E1E" },
                  { label: "ETL", top: "50%", right: -20, transform: "translateY(-50%)", color: "#FFB800" },
                ].map((b, i) => (
                  <div key={i} style={{
                    position: "absolute", ...b,
                    background: "#111", border: `1px solid ${b.color}40`,
                    borderRadius: 100, padding: "6px 14px",
                    fontSize: 11, fontWeight: 700, color: b.color,
                    letterSpacing: "0.06em", whiteSpace: "nowrap",
                  }}>{b.label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 5%", background: "#0D0D0D" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -1, background: "linear-gradient(135deg, #F24E1E, #FFB800)", borderRadius: 24, opacity: 0.3, filter: "blur(1px)" }} />
              <div style={{ position: "relative", background: "#111", borderRadius: 22, padding: 40, border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { icon: "🗄️", label: "SQL Expert" },
                    { icon: "🐍", label: "Python Dev" },
                    { icon: "📊", label: "Power BI" },
                    { icon: "🔄", label: "ETL Pipelines" },
                  ].map((item, i) => (
                    <div key={i} style={{ background: "#0D0D0D", borderRadius: 14, padding: "20px 16px", textAlign: "center", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(245,245,240,0.6)", letterSpacing: "0.05em" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 20, padding: "16px 20px", background: "rgba(242,78,30,0.06)", border: "1px solid rgba(242,78,30,0.15)", borderRadius: 12 }}>
                  <div style={{ fontSize: 12, color: "#FFB800", fontWeight: 600, marginBottom: 4 }}>📍 Location</div>
                  <div style={{ fontSize: 14, color: "rgba(245,245,240,0.7)" }}>Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#F24E1E", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>About Me</div>
              <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 24, letterSpacing: "-0.02em" }}>
                Results-Driven Data<br /><span className="grad-text">Engineer & Analyst</span>
              </h2>
              <div style={{ fontSize: 16, color: "rgba(245,245,240,0.6)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 16 }}>
                <p>I am a results-driven Data Analyst and SQL Data Engineer focused on solving real business problems through data.</p>
                <p>My work goes beyond basic analysis — I design production-ready data pipelines, build optimized SQL workflows, and develop executive dashboards that support decision-making.</p>
                <p>I specialize in turning raw, messy data into structured, high-value insights that drive growth.</p>
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
                <a href="https://github.com/Fatolu-peter" target="_blank" rel="noreferrer" className="outline-btn" style={{ fontSize: 13, padding: "10px 22px" }}>GitHub ↗</a>
                <a href="https://linkedin.com/in/fatolu-peter" target="_blank" rel="noreferrer" className="outline-btn" style={{ fontSize: 13, padding: "10px 22px" }}>LinkedIn ↗</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#F24E1E", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>What I Do</div>
              <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Services That <span className="grad-text">Deliver Value</span>
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {SERVICES.map((s, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="card" style={{ padding: 36, height: "100%" }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: `linear-gradient(135deg, ${s.accent}22, ${s.accent}08)`,
                    border: `1px solid ${s.accent}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, marginBottom: 24,
                  }}>{s.icon}</div>
                  <div style={{ width: 40, height: 3, background: `linear-gradient(90deg, ${s.accent}, #FFB800)`, borderRadius: 2, marginBottom: 20 }} />
                  <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 22, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.01em" }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: "rgba(245,245,240,0.55)", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 5%", background: "#0D0D0D" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#F24E1E", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Featured Work</div>
              <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Projects & <span className="grad-text">Portfolios</span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 48, background: "rgba(255,255,255,0.04)", borderRadius: 100, padding: 6, width: "fit-content", margin: "0 auto 48px" }}>
              {["sql", "powerbi", "github"].map(t => (
                <button key={t} className={`tab-btn${activeTab === t ? " active" : ""}`} onClick={() => setActiveTab(t)}>
                  {{ sql: "SQL Analytics", powerbi: "Power BI Dashboards", github: "GitHub Repos" }[t]}
                </button>
              ))}
            </div>
          </FadeIn>

          {activeTab === "sql" && (
            <FadeIn>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
                <div className="card" style={{ padding: 36 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                    <div style={{ fontSize: 24 }}>🗄️</div>
                    <div>
                      <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 20, fontWeight: 600 }}>SQL Data Analytics Portfolio</h3>
                      <a href="https://github.com/Fatolu-peter/SQL-Data-Analytics-Projects" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#F24E1E", textDecoration: "none" }}>github.com ↗</a>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(245,245,240,0.4)", marginBottom: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Case Studies</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {SQL_PROJECTS.map((p, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "rgba(255,255,255,0.03)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "linear-gradient(135deg, #F24E1E, #FFB800)", flexShrink: 0 }} />
                        <span style={{ fontSize: 14, color: "rgba(245,245,240,0.75)" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card" style={{ padding: 36 }}>
                  <div style={{ fontSize: 13, color: "rgba(245,245,240,0.4)", marginBottom: 20, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Key Capabilities</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {SQL_CAPABILITIES.map((c, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", background: `rgba(242,78,30,${0.04 + i * 0.01})`, border: "1px solid rgba(242,78,30,0.12)", borderRadius: 12 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #F24E1E, #FFB800)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{i + 1}</div>
                        <span style={{ fontSize: 14, color: "rgba(245,245,240,0.75)" }}>{c}</span>
                      </div>
                    ))}
                  </div>
                  <a href="https://github.com/Fatolu-peter/SQL-Data-Analytics-Projects" target="_blank" rel="noreferrer" className="grad-btn" style={{ display: "block", textAlign: "center", marginTop: 28, textDecoration: "none" }}>
                    View on GitHub →
                  </a>
                </div>
              </div>
            </FadeIn>
          )}

          {activeTab === "powerbi" && (
            <FadeIn>
              <div>
                <p style={{ textAlign: "center", color: "rgba(245,245,240,0.5)", marginBottom: 36, fontSize: 15 }}>
                  Executive-level analytics dashboards across multiple industries
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
                  {POWER_BI_DASHBOARDS.map((d, i) => (
                    <a key={i} href={d.url} target="_blank" rel="noreferrer" className="pbi-card">
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, rgba(255,184,0,0.2), rgba(242,78,30,0.15))", border: "1px solid rgba(255,184,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📊</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{d.name}</div>
                        <div style={{ fontSize: 12, color: "#FFB800" }}>View Dashboard ↗</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {activeTab === "github" && (
            <FadeIn>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
                {GITHUB_PROJECTS.map((p, i) => (
                  <a key={i} href="https://github.com/Fatolu-peter" target="_blank" rel="noreferrer" className="gh-card">
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                      <span style={{ fontSize: 18 }}>📁</span>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{p.name}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: p.color }} />
                      <span style={{ fontSize: 12, color: "rgba(245,245,240,0.45)" }}>{p.lang}</span>
                    </div>
                  </a>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#F24E1E", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Tech Stack</div>
            <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 700, marginBottom: 48, letterSpacing: "-0.02em" }}>
              Tools & <span className="grad-text">Technologies</span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {SKILLS.map((s, i) => (
                <div key={i} className="skill-tag" style={{ animationDelay: `${i * 80}ms` }}>{s}</div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* IMPACT */}
      <section style={{ padding: "80px 5%", background: "#0D0D0D" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#F24E1E", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Track Record</div>
              <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Measurable <span className="grad-text">Results & Impact</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {STATS.map((s, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="stat-card">
                  <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 44, fontWeight: 700, marginBottom: 8 }} className="grad-text">{s.value}</div>
                  <div style={{ fontSize: 14, color: "rgba(245,245,240,0.5)" }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: "120px 5%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(242,78,30,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(242,78,30,0.12), rgba(255,184,0,0.08))", border: "1px solid rgba(242,78,30,0.2)", borderRadius: 24, padding: "60px 64px" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#FFB800", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Let's Collaborate</div>
              <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 20, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                Ready to Turn Your Data Into{" "}
                <span className="grad-text">Business Insights?</span>
              </h2>
              <p style={{ fontSize: 17, color: "rgba(245,245,240,0.55)", marginBottom: 40, lineHeight: 1.7 }}>
                Let's work together to unlock the full value of your data.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="mailto:oblissman@gmail.com" className="grad-btn" style={{ fontSize: 16, padding: "16px 40px" }}>Hire Me →</a>
                <a href="https://linkedin.com/in/fatolu-peter" target="_blank" rel="noreferrer" className="outline-btn" style={{ fontSize: 16, padding: "15px 32px" }}>Connect on LinkedIn</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060606", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 6 }}>
              <span className="grad-text">Fatolu Peter</span>
              <span style={{ color: "rgba(245,245,240,0.3)", fontWeight: 300, fontSize: 14, marginLeft: 4 }}>Oluwadamilare</span>
            </div>
            <div style={{ fontSize: 13, color: "rgba(245,245,240,0.35)" }}>Lagos, Nigeria · oblissman@gmail.com</div>
          </div>

          <div style={{ display: "flex", gap: 20 }}>
            <a href="mailto:oblissman@gmail.com" style={{ color: "rgba(245,245,240,0.4)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#F24E1E"} onMouseLeave={e => e.target.style.color = "rgba(245,245,240,0.4)"}>Email</a>
            <a href="https://github.com/Fatolu-peter" target="_blank" rel="noreferrer" style={{ color: "rgba(245,245,240,0.4)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#F24E1E"} onMouseLeave={e => e.target.style.color = "rgba(245,245,240,0.4)"}>GitHub</a>
            <a href="https://linkedin.com/in/fatolu-peter" target="_blank" rel="noreferrer" style={{ color: "rgba(245,245,240,0.4)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#F24E1E"} onMouseLeave={e => e.target.style.color = "rgba(245,245,240,0.4)"}>LinkedIn</a>
          </div>

          <div style={{ fontSize: 12, color: "rgba(245,245,240,0.2)" }}>© 2025 Fatolu Peter Oluwadamilare</div>
        </div>
      </footer>
    </div>
  );
}
