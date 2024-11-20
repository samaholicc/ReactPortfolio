import React from 'react';
import webitechImage from '../assets/webitech.jpg'; // **Verify this path!**
import vinciImage from '../assets/Vinci.png';     // **Verify this path!**
import ndgcImage from '../assets/NDDGC.jpg';      // **Verify this path!**


const EcoleEntreprise = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>École et Entreprise</h2>
      <div style={styles.container}>
        <Card
          title="Webitech Paris"
          link="https://www.webitech.fr/"
          image={webitechImage}
          description="Formation BTS SIO SLAM. Mon apprentissage portait sur le développement des applications web . J'ai acquis des compétences en JavaScript, React et SQL. <br/>J'ai beaucoup apprécié l'environnement d'apprentissage."
        />
        <Card
          title="Vinci SA"
          link="https://www.vinci.com/"
          image={vinciImage}
          description="Alternance Support applicatif. <br/> Mes responsabilités incluaient la résolution d'incidents et le support technique aux utilisateurs. J'ai amélioré mes compétences en résolution de problèmes et en communication. L'expérience chez Vinci m'a permis de travailler dans un grand environnement professionnel."
        />
        <Card
          title="Notre Dame du Grand-Champ"
          link="https://www.ndgc.fr/"
          image={ndgcImage}
          description="Stage Technicienne Informatique. <br/> J'étais en charge de la maintenance du réseau informatique et de la gestion des serveurs. Ce stage m'a permis de développer mes compétences en administration système et en sécurité informatique. J'ai beaucoup appris sur les infrastructures informatiques."
        />
      </div>
    </div>
  );
};

const Card = ({ title, link, image, description }) => {
  return (
    <div style={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer"> {/* No extra styling needed */}
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