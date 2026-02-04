const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact Me</h2>

      <p style={styles.text}>
        I am open to internships, entry-level roles, and project opportunities.
      </p>

      <div style={styles.links}>
        <a href="mailto:neaha.official@gmail.com">📧 Email</a>
        <a href="https://github.com/Neahans/" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/neaha-ns/" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 10%",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "20px",
    color: "#38bdf8",
  },
  text: {
    marginBottom: "25px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
};

export default Contact;
