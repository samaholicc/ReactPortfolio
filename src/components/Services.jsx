import React, { useState } from "react";
import { motion } from "framer-motion"; // Importation de framer-motion pour l'animation

// Importation des images depuis le dossier assets
import cloudImage from "../assets/pwa.png";
import interestImage from "../assets/ia.png";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Applications Web Progressives (PWA)",
      desc: "Les PWA offrent une expérience utilisateur similaire aux applications natives en utilisant des technologies web modernes.",
      image: cloudImage, // Utilisation de l'image importée
      details:
        "Les PWA combinent les meilleures fonctionnalités des applications web et mobiles pour créer une expérience utilisateur unique et engageante. Elles peuvent être installées sur n’importe quel appareil, fonctionner hors ligne, envoyer des notifications push, et s’adapter aux différentes tailles d’écran.",
      advantages: [
        "🚀 Installation facile et rapide",
        "📶 Fonctionnement hors ligne grâce aux service workers",
        "🔔 Notifications push pour maintenir l’engagement",
        "💻 Compatibilité multiplateforme",
        "💰 Réduction des coûts de développement",
      ],
      moreInfoLink1:
        "https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps",
      moreInfoLink2: "https://web.dev/progressive-web-apps/",
    },
    {
      title: "Intelligence Artificielle (IA)",
      desc: "L'IA permet aux machines d'apprendre et de prendre des décisions intelligentes en utilisant des algorithmes avancés.",
      image: interestImage, // Utilisation de l'image importée
      details:
        "L'IA englobe diverses technologies comme l'apprentissage automatique, le traitement du langage naturel, et la vision par ordinateur pour créer des systèmes capables de réaliser des tâches complexes.",
      advantages: [
        "🤖 Automatisation des tâches répétitives",
        "📈 Amélioration de la prise de décision",
        "📊 Analyse de grandes quantités de données",
        "🎯 Personnalisation des expériences utilisateur",
        "🛡️ Détection et prévention des fraudes",
      ],
      moreInfoLink1: "https://fr.wikipedia.org/wiki/Intelligence_artificielle",
      moreInfoLink2:
        "https://www.ibm.com/fr-fr/cloud/learn/what-is-artificial-intelligence",
    },
  ];

  // Fonction pour afficher la modale avec les détails du service sélectionné
  const handleShowDetails = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  // Fonction pour fermer la modale
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Ce que j'offre</h4>
      <h2 className="text-center text-5xl font-Ovo">Veille Technologique</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        J'apporte mon expertise dans le support informatique, le développement
        web, les technologies cloud et les méthodologies agiles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 my-10">
        {services.map((service, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-22 h-22 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-lg my-4 text-center text-gray-700 dark:text-white">
              {service.title}
            </h3>
            <p className="text-center text-gray-600 dark:text-white/80 mb-4">
              {service.desc}
            </p>
            <div className="text-center">
              <a
                href={service.moreInfoLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Plus d'informations 1
              </a>
              <br />
              <a
                href={service.moreInfoLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Plus d'informations 2
              </a>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 mx-auto block"
              onClick={() => handleShowDetails(service)}
            >
              Voir les détails
            </button>
          </motion.div>
        ))}
      </div>

      {/* Popup Modale */}
      {showModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 w-[90%] md:w-[40%] shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Détails sur {selectedService.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {selectedService.details}
            </p>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Avantages
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              {selectedService.advantages.map((advantage, idx) => (
                <li key={idx}>• {advantage}</li>
              ))}
            </ul>
            <button
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={handleCloseModal}
            >
              Fermer
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Services;
