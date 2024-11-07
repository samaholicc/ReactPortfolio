import React from "react";
import Webitech from 'assets/webitech.jpg'
import Vinci from 'assets/Vinci.png'
import NDDGC from 'assets/NDDGC.jpg'

const Card = ({ title, image, description }) => {
  const cards = [
  {
    title:  "Webitech Paris",
    image : Webitech,
    description : "BTS SIO option SLAM"


  },
  {
    title:  "Vinci SA",
    image : Vinci,
    description : "Alternante en support applicatf transverse"
  },
  {
    title:  "Notre Dame du Grand Champ",
    image : NDDGC, 
    description : "Stagiaire technicienne informatique"
  },
];
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <img src={image} alt={title} style={styles.image} />
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
