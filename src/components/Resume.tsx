const Resume = () => {
  return (
    <section style={styles.section} id="resume">
      <h2 style={styles.heading}>Resume</h2>

      <p style={styles.text}>
        Download or view my resume to learn more about my skills, education, and experience.
      </p>

      <div style={styles.buttons}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          View Resume
        </a>

        <a
          href="/resume.pdf"
          download
          style={styles.buttonOutline}
        >
          Download Resume
        </a>
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
    marginBottom: "16px",
  },
  text: {
    maxWidth: "600px",
    marginBottom: "24px",
    color: "#cbd5f5",
  },
  buttons: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap" as const,
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
  },
  buttonOutline: {
    padding: "10px 20px",
    border: "1px solid #2563eb",
    color: "#2563eb",
    borderRadius: "8px",
    textDecoration: "none",
  },
};

export default Resume;
