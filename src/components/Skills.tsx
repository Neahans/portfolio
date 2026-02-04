const skills = [
  "Java",
  "Python",
  "C",
  "React",
  "TypeScript",
  "Django",
  "Flask",
  "Machine Learning",
  "Cyber Security",
];

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.title}>Skills</h2>

      <div style={styles.grid}>
        {skills.map((skill) => (
          <div key={skill} style={styles.card}>
            {skill}
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
    marginBottom: "30px",
    color: "#38bdf8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "20px",
    maxWidth: "800px",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "15px",
    textAlign: "center" as const,
    borderRadius: "8px",
    fontWeight: "500",
  },
};

export default Skills;
