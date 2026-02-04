const About = () => {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.title}>About Me</h2>

      <p style={styles.text}>
        I am a B.Tech Computer Science and Engineering student with a strong
        interest in Full Stack Development, Artificial Intelligence, and
        Cyber Security. I enjoy solving real-world problems through technology
        and continuously upgrading my skill set.
      </p>

      <p style={styles.text}>
        Currently pursuing my degree, I have worked on academic and personal
        projects involving web development, machine learning, and backend
        systems.
      </p>
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
    marginBottom: "20px",
    color: "#38bdf8",
  },
  text: {
    maxWidth: "700px",
    lineHeight: "1.7",
    marginBottom: "15px",
    color: "#cbd5f5",
  },
};

export default About;

