import React from 'react';
import sampleImage from '../assets/webitech.jpg'; 
import sampleImage1 from '../assets/Vinci.png';

const EcoleEntreprise = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Ecole et Entreprise</h2>
      <div style={styles.container}>
        <Card title="Webitech Paris" image={sampleImage} description="Formation BTS SIO SLAM" />
        <Card title="Vinci Sa" image={sampleImage1} description="Alternance Support applicatif" />
      </div>
    </div>
  );
};

const Card = ({ title, image, description }) => {
  return (
    <div id="EcoleEntreprise" style={styles.card}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <img src={image} alt={title} style={styles.image} />
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  wrapper: {
    textAlign: 'center', // Centers the heading
  },
  heading: {
    fontSize: '2.5rem', // Matches the text-5xl class roughly
    fontFamily: 'Ovo, serif', // Assumes Ovo is loaded correctly
    marginBottom: '20px', // Adds some space between heading and cards
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row', 
    gap: '20px', 
    padding: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '16px',
    boxShadow: '2px 2px 12px #aaa',
    width: '300px',
    textAlign: 'center', // Center text inside the card
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
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
    color: '#333',
  },
};

export default EcoleEntreprise;
