const Hero = () => {
  return (
    <section style={styles.hero}>
      
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <p style={styles.greeting}>Hi, I’m</p>

        <h1 style={styles.name}>
          Neaha N S <span>👋</span>
        </h1>

        <h2 style={styles.role}>
          B.Tech CSE Student | Aspiring Software Engineer
        </h2>

        <p style={styles.description}>
          Passionate about Full Stack Development, Machine Learning,
          and Cyber Security. I enjoy building real-world projects
          and continuously improving my skills.
        </p>

        <div style={styles.buttons}>
          <a href="#projects" style={styles.primaryBtn}>
            View Projects
          </a>
          <a href="#contact" style={styles.secondaryBtn}>
            Contact Me
          </a>
          <a href="#certificates" style={styles.secondaryBtn}>
            Certificates
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <img
          src="/images/profile.jpg"
          alt="Developer animation"
          style={styles.gif}
        />
      </div>

    </section>
  );
};


const styles = {
  hero: {
    height: "100vh",
    padding: "0 10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#020617",
  },

  left: {
  maxWidth: "600px",
},

right: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},

gif: {
  width: "360px",
  maxWidth: "100%",
  borderRadius: "50%",  
  objectFit: "cover" as const,
  border: "3px solid #38bdf8",
},


  greeting: {
    fontSize: "1.1rem",
    color: "#38bdf8",
  },
  name: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    margin: "10px 0",
  },
  role: {
    fontSize: "1.5rem",
    color: "#94a3b8",
    marginBottom: "20px",
  },
  description: {
    maxWidth: "600px",
    lineHeight: "1.6",
    color: "#cbd5f5",
  },
  buttons: {
    display: "flex",
    gap: "15px",
    marginTop: "30px",
  },
  primaryBtn: {
    backgroundColor: "#38bdf8",
    color: "#020617",
    padding: "12px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  secondaryBtn: {
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    padding: "12px 20px",
    borderRadius: "6px",
    textDecoration: "none",
  },
};

export default Hero;
