import React from "react";
import sampleImage5 from "../assets/atom.png";

const Card = ({ title, image, description }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <img src={image} alt={title} style={styles.image} />
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const VeilleTechnologique = () => {
  return (
    <div style={styles.wrapper} id="VeilleTechnologique">
      <h2 style={styles.heading}>Veille technologique</h2>
      <p className="mb-10 max-w-2xl font-Ovo">
        La veille technologique est une démarche active de recherche et de surveillance de l'évolution des technologies, permettant de rester informé des nouveautés, tendances et innovations. Pour un développeur, et plus spécifiquement dans le domaine du développement web avec React, la veille technologique sert à suivre les nouvelles fonctionnalités de la librairie, les bonnes pratiques, les outils connexes, et les tendances qui enrichissent ou optimisent le travail.
      </p>
      <div style={styles.container}>
        <Card title="React" image={sampleImage5} description="React Icon" />
      </div>
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
    flexDirection: 'row',
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
