import React from 'react';
import sampleImage from '../assets/webitech.jpg'; //Verify this path
import sampleImage1 from '../assets/Vinci.png';   //Verify this path
import sampleImage2 from '../assets/NDDGC.jpg';  //Verify this path

const EcoleEntreprise = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>École et Entreprise</h2>
      <div style={styles.container}>
        <Card
          title="Webitech Paris"
          link="https://www.webitech.fr/"
          image={sampleImage}
          description="Formation BTS SIO SLAM.  Mon rôle était de [décrivez précisément votre rôle et responsabilités].  Webitech m'a permis d'apprendre [listez les compétences acquises]."
        />
        <Card
          title="Vinci SA"
          link="https://www.vinci.com/"
          image={sampleImage1}
          description="Alternance Support applicatif. Mes responsabilités incluaient [décrivez précisément vos tâches et responsabilités].  J'ai acquis de l'expérience en [listez les compétences acquises]."
        />
        <Card
          title="Notre Dame du Grand-Champ"
          link="https://www.ndgc.fr/"
          image={sampleImage2}
          description="Stage Technicienne Informatique.  J'étais en charge de [décrivez précisément vos tâches et responsabilités].  Ce stage m'a permis de développer mes compétences en [listez les compétences acquises]."
        />
      </div>
    </div>
  );
};

const Card = ({ title, link, image, description }) => {
  return (
    <div style={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={styles.cardTitleLink}>
        <h2 style={styles.cardTitle}>{title}</h2>
      </a>
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
    marginBottom: '20px',
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
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  cardTitleLink: {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
  },
  image: {
    width: '60%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
  },
};

export default EcoleEntreprise;