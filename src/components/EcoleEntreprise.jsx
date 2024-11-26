import React, { useState } from 'react';
import webitechImage from '../assets/webitech.jpg'; 
import vinciImage from '../assets/Vinci.png';     
import ndgcImage from '../assets/NDDGC.jpg';      

const EcoleEntreprise = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to handle modal popup
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div id ="EcoleEntreprise" style={styles.wrapper}>
      <h2 style={styles.heading}>École et Entreprise</h2>
      <div style={styles.container}>
        <Card
          title="Webitech Paris"
          link="https://webitechparis.com/"
          image={webitechImage}
          description="Formation BTS SIO SLAM."
          onMissionClick={handleShowModal} // Pass the modal function as prop
        />
        <Card
          title="Vinci SA"
          link="https://www.vinci.com/"
          image={vinciImage}
          description="Alternance Support applicatif."
          onMissionClick={handleShowModal}
        />
        <Card
          title="Notre Dame du Grand-Champ"
          link="https://www.nd-grandchamp.fr/"
          image={ndgcImage}
          description="Stage Technicienne Informatique."
          onMissionClick={handleShowModal}
        />
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h3 style={modalStyles.modalTitle}>Détails des missions</h3>
            <p>Voici les détails concernant les missions.</p>
            <button onClick={handleCloseModal} style={modalStyles.closeButton}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Card = ({ title, link, image, description, onMissionClick }) => {
  return (
    <div style={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 style={styles.cardTitle}>{title}</h2>
      </a>
      <img src={image} alt={title} style={styles.image} />
      <p style={styles.description}>{description}</p>
      <button onClick={onMissionClick} style={styles.missionButton}>
        Mes missions 
      </button>
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
  missionButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },missionButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease', // Transition for smooth animation
},

// Add a hover effect in a separate style or within the style definition if using a CSS-in-JS library
missionButtonHover: {
    backgroundColor: '#45a049', // Slightly darker color
    transform: 'scale(1.05)', // Scale effect on hover
}
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '400px',
  },
  modalTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  closeButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#F44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default EcoleEntreprise;