import React, { useState } from 'react';
import webitechImage from '../assets/webitech.jpg'; 
import vinciImage from '../assets/Vinci.png';     
import ndgcImage from '../assets/NDDGC.jpg';      

const EcoleEntreprise = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMissions, setSelectedMissions] = useState([]);

  // Function to handle modal popup
  const handleShowMissions = (missions) => {
    setSelectedMissions(missions);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const entreprises = [
    {
      desc: "Webitech Paris",
     
      image: webitechImage,
      link: "https://webitechparis.com/"
    },
    {
      desc: "Vinci SA",
      missions: [
        "Réceptionner les appels des utilisateurs pour qualifier et orienter les incidents et les demandes",
        "Traiter, suivre et résoudre les incidents et les demandes",
        "Assurer la relance et l'escalade des tickets",
        "Contribuer à la formalisation des procédures liées au support d'assistance",
        "Escalade des tickets auprès du support niveau 2",
        "Reporting et diffusion des indicateurs de performance et de qualité"
      ],
      image: vinciImage,
      link: "https://www.vinci.com/"
    },
    {
      desc: "Notre Dame du Grand-Champ",
      missions: [
       "Évaluer les besoins en matériel pour chaque salle de réunion ou d’activité.",
        "Documenter les spécifications techniques et les procédures d'utilisation pour chaque pièce d’équipement.",
        "Créer une base de connaissances en ligne avec des FAQ et des guides de dépannage pour des problèmes courants.",
        "Suivre une formation ou un tutoriel sur l’outil ticketing utilisé dans l’entreprise : Mojo Helpdesk",
        "Mettre en place un suivi après l'intervention pour s'assurer que les problèmes sont résolus de manière satisfaisante.",
        "Analyser les données de ticketing pour identifier les tendances et les problèmes récurrents."
      ],
      image: ndgcImage,
      link: "https://www.nd-grandchamp.fr/"
    }
  ]; 

  return (
    <div id="EcoleEntreprise" style={styles.wrapper}>
      <h2 style={styles.heading}>École et Entreprise</h2>
      <div style={styles.container}>
        {entreprises.map((entreprise, index) => (
          <Card
            key={index}
            title={entreprise.desc}
            link={entreprise.link}
            image={entreprise.image}
            description={entreprise.desc}
            onMissionClick={entreprise.missions ? () => handleShowMissions(entreprise.missions) : null}
          />
        ))}
      </div>
  
      {/* Modal Popup */}
      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h3 style={modalStyles.modalTitle}>Missions</h3>
            <ul className="space-y-2 text-gray-600">
              {selectedMissions.map((mission, idx) => (
                <li key={idx} className="text-lg">
                  • {mission}
                </li>
              ))}
            </ul>
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
  const missionButtonStyles = {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    borderRadius: '5px',
    color: '#b820e6',
    cursor: 'pointer',
    transition: 'background-color 0.3s, border 0.3s, color 0.3s',
    outline: 'none',
  };

  const missionButtonMouseOver = (event) => {
    event.currentTarget.style.backgroundColor = 'rgba(184, 32, 230, 0.1)';
    event.currentTarget.style.border = '2px solid #b820e6';
  };

  const missionButtonMouseOut = (event) => {
    event.currentTarget.style.backgroundColor = 'transparent';
    event.currentTarget.style.border = '2px solid transparent';
  };

  return (
    <div style={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 style={styles.cardTitle}>{title}</h2>
      </a>
      <img src={image} alt={title} style={styles.image} />
      <p style={styles.description}>{description}</p>
      {onMissionClick && (
        <button
          onClick={onMissionClick}
          style={missionButtonStyles}
          onMouseOver={missionButtonMouseOver}
          onMouseOut={missionButtonMouseOut}
        >
          Mes missions
        </button>
      )}
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
    alignItems: 'stretch',
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
    color: "black", 
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