
import React from 'react';
import sampleImage from '../assets/webitech.jpg'; 
import sampleImage1 from '../assets/Vinci.png'

const EcoleEntreprise = () => {
  return (
    <div style={styles.container}>
      <Card title="Webitech Paris" image={sampleImage} description="Mon école" />
      <Card title="Vinci Sa" image={sampleImage1} description="Alternance Support applicatif transverse" />
    </div>
  );
};

const Card = ({ title, image, description }) => {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <img src={image} alt={title} style={styles.image} />
      <p>{description}</p>
    </div>
  );
};

const styles = {
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
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
};


export default EcoleEntreprise;
