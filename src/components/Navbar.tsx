const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>Neaha N S</h2>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "70px", 
    backgroundColor: "#020617",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "0 10%",
    zIndex: 1000,
  },
};

export default Navbar;
