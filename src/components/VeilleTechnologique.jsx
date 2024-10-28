import React from 'react';

const VeilleTechnologique = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Veille Technologique</h1>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Définition de la Veille Technologique</h2>
        <p style={styles.text}>
          La veille technologique est un processus systématique de collecte et d'analyse d'informations sur les évolutions techniques, les innovations et les tendances émergentes dans un secteur donné. Elle vise à anticiper les changements, à identifier les opportunités et à minimiser les risques pour les entreprises. Cela inclut le suivi des nouvelles technologies, des produits concurrents, des évolutions réglementaires et de la sécurité.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Logiciels de Gestion de Tickets avec Flux RSS</h2>
        <p style={styles.text}>
          Les logiciels de gestion de tickets permettent de centraliser la gestion des demandes, des incidents et des problèmes au sein d'une organisation. L'intégration d'un flux RSS dans ces outils est particulièrement utile, car elle permet aux utilisateurs de recevoir des mises à jour en temps réel sur les nouvelles demandes ou les changements d'état des tickets. Cela améliore la réactivité et l'efficacité du service client et de l'équipe technique.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Outils de Veille : Meltwater</h2>
        <p style={styles.text}>
          Meltwater est une plateforme de veille médiatique qui offre des solutions d'analyse et de surveillance de la presse et des réseaux sociaux. Elle permet de suivre les actualités, de surveiller la réputation de la marque et d'analyser les tendances. En intégrant Meltwater dans votre stratégie de veille technologique, vous pouvez rester informé des évolutions réglementaires, des questions de sécurité et des actualités générales qui impactent votre secteur.
        </p>
      </section>

      <footer style={styles.footer}>
        <p style={styles.text}>
          La mise en place d'une veille technologique efficace est essentielle pour toute organisation souhaitant rester compétitive et pro-active.
        </p>
      </footer>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  section: {
    marginBottom: '24px',
  },
  subHeading: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '8px',
  },
  text: {
    color: '#4a5568', // Tailwind equivalent of text-gray-700
    lineHeight: '1.5',
  },
  footer: {
    marginTop: '24px',
  },
};

export default VeilleTechnologique;
