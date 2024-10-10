// EcoleEntreprise.jsx
import React from 'react';
import sampleImage from '../assets/Webitech.png'; // Adjust the path as necessary

const EcoleEntreprise = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Card 1 Title</h2>
        <img src={sampleImage} alt="Sample 1" style={styles.image} />
        <p>This is the content of the first card.</p>
      </div>
      <div style={styles.card}>
        <h2>Card 2 Title</h2>
        <img src={sampleImage} alt="Sample 2" style={styles.image} />
        <p>This is the content of the second card.</p>
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
