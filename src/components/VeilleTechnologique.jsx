import React from "react";
import sampleImage5 from "../assets/atom.png";

const styles = {
  wrapper: {
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
};

const VeilleTechnologique = () => {
  return (
    <div style={styles.wrapper} id="VeilleTechnologique">
      <h2 style={styles.heading}>Veille technologique</h2>
      <div style={styles.container}>
        <Card title="React" image={sampleImage5} description="React Icon" />
      </div>
    </div>
  );
};

export default VeilleTechnologique;
