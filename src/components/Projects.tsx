const projects = [
  {
    title: "Automatic Clone Website Detection",
    description:
      "ML-based phishing and clone website detection using Flask and a browser extension.",
    tech: ["Python", "Flask", "Machine Learning"],
    github: "https://github.com/Neahans/clone-website-detection",
  },
  {
   title: "Student Attendance Tracking System",
   description:
    "A web-based student attendance management system to record, track, and manage attendance efficiently.",
   tech: ["Python", "Flask", "SQLite"],
   github: "https://github.com/Neahans/Student-Attendance-Tracker",
  },
  {
  title: "Digit Recognizer",
  description:
    "A machine learning model that recognizes handwritten digits using image processing and classification techniques.",
  tech: ["Python", "TensorFlow", "NumPy", "Pandas"],
  github: "https://github.com/Neahans/digit-recognizer",
 },
];

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div style={styles.tech}>
              {project.tech.map((t) => (
                <span key={t} style={styles.badge}>{t}</span>
              ))}
            </div>

           <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            >
                View Project →
            </a>

          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 10%",
    backgroundColor: "#020617",
    color: "#e5e7eb",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "40px",
    color: "#38bdf8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "24px",
  },
  tech: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    margin: "12px 0",
  },
  badge: {
    fontSize: "0.75rem",
    padding: "4px 10px",
    background: "#0f172a",
    borderRadius: "20px",
    color: "#38bdf8",
  },
  link: {
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: 500,
  },
};

export default Projects;
