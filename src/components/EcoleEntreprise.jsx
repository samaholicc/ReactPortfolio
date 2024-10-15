// EcoleEntreprise.jsx
import React from 'react';
import sampleImage from '../assets/Webitech.png'; 
import sampleImage1 from '../assets/Vinci.png'

const EcoleEntreprise = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Webitech Paris </h2>
        <img src={sampleImage} alt="Webitech" style={styles.image} />
        <p>Mon  école</p>
      </div>
      <div style={styles.card}>
        <h2>Vinci Sa</h2>
        <img src={sampleImage1} alt="Vinci" style={styles.image} />
        <p>Alternance Support applicatif transverse</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '16px',
    boxShadow: '2px 2px 12px #aaa',
    width: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
};

export default EcoleEntreprise;
