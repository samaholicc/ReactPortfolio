import React from "react";
import sampleImage5 from "../assets/atom.png";

const VeilleTechnologique = () => {
  return (
    <div style={styles.wrapper} id="VeilleTechnologique">
      <h2 style={styles.heading}>Veille technologique</h2>
      <p>La veille technologique est un processus systématique de collecte, d'analyse et de diffusion d'informations pertinentes sur les évolutions techniques et les innovations dans un domaine spécifique. Elle permet aux professionnels de rester informés des tendances, des nouvelles technologies et des meilleures pratiques, afin d'anticiper les changements et d'améliorer leur prise de décision.

Pour mes recherches, j'utilise Inoreader, un outil efficace qui centralise mes sources d'information et me permet de suivre facilement les actualités et les développements liés à la technologie, en particulier dans le domaine de React.</p>
      <div style={styles.container}>
        <Card title="React" image={sampleImage5} description="Dans ma veille technologique, je me concentre sur les dernières innovations et meilleures pratiques en matière de développement avec React, afin d'améliorer mes compétences en création d'interfaces utilisateurs dynamiques et performantes." />
      </div>
    </div>
  );
};
const Card = ({ title, image, description }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <img src={image} alt={`${title} Icon`} style={styles.image} />
      <p style={styles.description}>{description}</p>
    </div>
  );
};



const styles = {
  wrapper: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontFamily: 'Ovo, serif',
    marginBottom: '40px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', // Use wrap to make it responsive
    gap: '20px',
    padding: '50px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '16px',
    boxShadow: '2px 2px 12px #aaa',
    width: '300px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
  },
};

export default VeilleTechnologique;
