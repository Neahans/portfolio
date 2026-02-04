const certificates = [
  {
    title: "Data Science & AI Internship",
    issuer: "Keltron Knowledge Centre",
    year: "2024",
    file: "/certificates/keltron-ai.jpg",
  },
  {
    title: "AI Internship",
    issuer: "Pacelab Redefining Technology",
    year: "2023",
    file: "/certificates/pacelab-ai.pdf",
  },
  {
    title: "Full Stack Internship",
    issuer: "GP3 Cloud Innovations",
    year: "2025",
    file: "/certificates/gp3-fullstack.pdf",
  },
];


const Certificates = () => {
  return (
    <section style={styles.section} id="certificates">
      <h2 style={styles.heading}>Certificates</h2>

      <div style={styles.grid}>
        {certificates.map((cert, index) => (
             <div key={index} style={styles.card}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <span>{cert.year}</span>

            {/* ✅ VIEW CERTIFICATE BUTTON */}
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              View Certificate →
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
  heading: {
    fontSize: "2rem",
    marginBottom: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#020617",
    border: "1px solid #1e293b",
  },
  link: {
    display: "inline-block",
    marginTop: "12px",
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: 500,
  },
};


export default Certificates;
