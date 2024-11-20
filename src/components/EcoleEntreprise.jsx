import React from "react";
import Webitech from '../assets/webitech.jpg';
import Vinci from '../assets/Vinci.png';
import NDDGC from '../assets/NDDGC.jpg';

const EcoleEntreprise = () => {
  const cards = [
    {
      title: "Webitech Paris",
      image: Webitech,
      description: "BTS SIO option SLAM"
    },
    {
      title: "Vinci SA",
      image: Vinci,
      description: "Alternante en support applicatif transverse"
    },
    {
      title: "Notre Dame du Grand Champ",
      image: NDDGC,
      description: "Stagiaire technicienne informatique"
    },
  ];

  const Card = ({ title, image, description }) => (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <img src={image} alt={title} style={styles.image} />
      <p style={styles.description}>{description}</p>
    </div>
  );

  const styles = {
    // ... (styles remain the same)
  };

  return (
    <div id="EcoleEntreprise" style={styles.container}> {/* Moved container styling here */}
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default EcoleEntreprise;