import React, { useState } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import interestImage from "../assets/ia.png";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const pdfFiles = [
    { name: "AI for Absolute Beginners by Oliver Theobald", url: "/assets/AI_for_Absolute_Beginners_by_Oliver_Theobald-DwB-jSGZ.pdf" },
    { name: "Artificial Intelligence: The Ultimate Guide to AI", url: "/assets/Artificial-Intelligence-The-Ultimate-Guide-to-AI-C93zWY-5.pdf" },
    { name: "ChatGPT Decoded by David Wiens", url: "/assets/ChatGPT-Decoded_-A-Beginner_s-Guide-to-AI-Enhanced-Living-by-David-Wiens-DdxAF4Z7.pdf" },
    { name: "Coding with AI For Dummies by Chris Minnick", url: "/assets/Coding_with_AI_For_Dummies_by_Chris_Minnick-D-MhEjlw.pdf" },
    { name: "Introduction to ChatGPT by Imre Barta", url: "/assets/Introduction-to-ChatGPT_-The-AI-Behind-the-Conversations-by-Imre-Barta-BfLCU8om.pdf" },
    { name: "The AI Classroom by Brad Weinstein", url: "/assets/The_AI_Classroom_The_Ultimate_Guide_to_Artificial_Intelligence_Education_by_Brad_Weinstein-DvMeK8JE.pdf" },
  ];

  const handleShowDetails = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">Veille Technologique</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <img
              src={interestImage}
              alt="Image representing Intelligence Artificielle"
              className="w-22 h-22 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-lg my-4 text-center text-gray-700 dark:text-white">Intelligence Artificielle (IA)</h3>
            <p className="text-center text-gray-600 dark:text-white/80 mb-4">
              L'IA permet aux machines d'apprendre et de prendre des décisions intelligentes en utilisant des algorithmes avancés.
            </p>
            <div className="text-center">
              <a
                href="https://fr.wikipedia.org/wiki/Intelligence_artificielle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                              Plus d'informations 1
              </a>
              <br />
              <a
                href="https://www.ibm.com/fr-fr/cloud/learn/what-is-artificial-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Plus d'informations 2
              </a>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 mx-auto block"
              onClick={() =>
                handleShowDetails({
                  title: "IA",
                  details: "Détails sur l'IA",
                  advantages: ["Automatisation", "Personnalisation"],
                })
              }
            >
              Voir les détails
            </button>
          </motion.div>
        </div>

        <div className="mt-8">
          <h2 className="text-center text-3xl font-semibold mb-6">Livres sur l'IA (PDF)</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
            {pdfFiles.map((pdf, index) => (
              <div
                key={pdf.name} // Use pdf.name instead of index for better key
                className="border border-gray-300 rounded-lg p-4 shadow-md text-center"
              >
                <h3 className="text-lg font-semibold mb-2">{pdf.name}</h3>
                <a
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Télécharger / Voir le PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
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
            <p className="text-gray-600 text-sm mb-4">{selectedService.details}</p>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Avantages</h4>
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
