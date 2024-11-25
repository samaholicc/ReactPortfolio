import React from 'react';
import webitechImage from '../assets/webitech.jpg'; 
import vinciImage from '../assets/Vinci.png';     
import ndgcImage from '../assets/NDDGC.jpg';      


const EcoleEntreprise = () => {
  return (
    <div id ="EcoleEntreprise" style={styles.wrapper}>
      <h2 style={styles.heading}>École et Entreprise</h2>
      <div style={styles.container}>
        <Card
          title="Webitech Paris"
          link="https://webitechparis.com/"
          image={webitechImage}
          description="Formation BTS SIO SLAM. "
          
        />
        <Card
          title="Vinci SA"
          link="https://www.vinci.com/"
          image={vinciImage}
          description="Alternance Support applicatif. "
        />
        <Card
          title="Notre Dame du Grand-Champ"
          link="https://www.nd-grandchamp.fr/"
          image={ndgcImage}
          description="Stage Technicienne Informatique."
        />
      </div>
    </div>
  );
};

const Card = ({ title, link, image, description }) => {
  return (
    <div style={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 style={styles.cardTitle}>{title}</h2>
      </a>
      <img src={image} alt={title} style={styles.image} />
      <p style={styles.description}>{description}</p>
      <a
      class="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      href="#"
    >
      <span
        class="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
      >
        Mes missions 
      </span>
    </a>
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