import React, { useState } from "react";
import sampleImage5 from "../assets/atom.png";

const VeilleTechnologique = () => {
  const articles = [
    {
      title: "Article 1",
      link: "https://article1.com",
      description: "Description of the first article related to technology.",
    },
    {
      title: "Article 2",
      link: "https://article2.com",
      description: "Description of the second article related to technology.",
    },
    {
      title: "Article 3",
      link: "https://article3.com",
      description: "Description of the third article related to technology.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextArticle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevArticle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={styles.wrapper} id="VeilleTechnologique">
      <h2 style={styles.heading}>Veille technologique</h2>
      <p style={styles.paragraph}>
        La veille technologique est un processus systématique de collecte, d'analyse et de diffusion d'informations pertinentes
        sur les évolutions techniques et les innovations dans un domaine spécifique. Elle permet aux professionnels de rester informés
        des tendances, des nouvelles technologies et des meilleures pratiques, afin d'anticiper les changements et d'améliorer
        leur prise de décision.
      </p>
      <div style={styles.container}>
        
        <Card 
          title="React" 
          image={sampleImage5} 
          description="React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur, notamment pour les applications à page unique. Développée par Facebook, elle permet de créer des composants UI réutilisables, de gérer efficacement l'état des applications via un DOM virtuel et d'utiliser JSX pour écrire du code semblable à HTML. React favorise une architecture basée sur les composants et bénéficie d'un écosystème riche et d'un fort soutien communautaire." 
        />
        <div style={styles.carousel}>
          <button style={styles.button} onClick={prevArticle}>‹</button>
          <div style={styles.carouselContent}>
            <h3>{articles[currentIndex].title}</h3>
            <p>{articles[currentIndex].description}</p>
            <a href={articles[currentIndex].link} target="_blank" rel="noopener noreferrer">
              Lire l'article
            </a>
          </div>
          <button style={styles.button} onClick={nextArticle}>›</button>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, image, description }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <img src={image} alt={`${title} Icon`} style={styles.image} />
      <p style={styles.cardDescription}>{description}</p>
    </div>
  );
};

const styles = {
    wrapper: {
      textAlign: 'center',
      padding: '20px',
    },
    heading: {
      fontSize: '2.5rem',
      fontFamily: 'Ovo, serif',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1rem',
      marginBottom: '40px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    container: {
      display: 'flex',
      justifyContent: 'flex-start', // Align items to flex-start
      flexWrap: 'wrap',
      gap: '20px',
      padding: '50px',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '16px',
      boxShadow: '2px 2px 12px #aaa',
      width: '300px', // Fixed width for the card
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
      marginBottom: '10' },
  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Allow the carousel to flex and occupy remaining space
    marginTop: '40px',
    padding: '20px',
    borderTop: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '2px 2px 12px #aaa',
  },
  carouselContent: {
    textAlign: 'center',
    maxWidth: '300px', // Keep as is to maintain size in carousel
  },
  button: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '10px',
    margin: '0 10px',
  },
  cardDescription: {
    fontSize: '1rem',
  },
};



export default VeilleTechnologique;