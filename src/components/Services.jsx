import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import interestImage from "../assets/01-future-cm.png";
import aiBook1 from "../assets/AI_for_Absolute_Beginners_by_Oliver_Theobald.pdf";
import aiBook2 from "../assets/Artificial-Intelligence-The-Ultimate-Guide-to-AI.pdf";
import aiBook3 from "../assets/ChatGPT-Decoded_-A-Beginner_s-Guide-to-AI-Enhanced-Living-by-David-Wiens.pdf";
import aiBook4 from "../assets/Coding_with_AI_For_Dummies_by_Chris_Minnick.pdf";
import aiBook5 from "../assets/Introduction-to-ChatGPT_-The-AI-Behind-the-Conversations-by-Imre-Barta.pdf";
import aiBook6 from "../assets/The_AI_Classroom_The_Ultimate_Guide_to_Artificial_Intelligence_Education_by_Brad_Weinstein.pdf";
import wikipediaLogo from "../assets/wikipedia-logo.png"; 
import techTargetLogo from "../assets/techtarget-logo.png"; 
import salesforceLogo from "../assets/salesforce-logo.png"; 
import googleCloudLogo from "../assets/google-cloud-logo.png"; 
import openAiLogo from "../assets/open-ai-logo.png"; 
import deepMindLogo from "../assets/deep-mind-logo.png"; 
import theGradientLogo from "../assets/the-gradient-logo.png"; 
import cnilLogo from "../assets/cnil-logo.png"; 
import aiBook1Cover from "../assets/aiBook1Cover.jpg"; // Replace with correct cover image path
import aiBook2Cover from "../assets/aiBook2Cover.jpg"; // Replace with correct cover image path
import aiBook3Cover from "../assets/aiBook3Cover.jpeg"; // Replace with correct cover image path
import aiBook4Cover from "../assets/aiBook4Cover.jpg"; // Replace with correct cover image path
import aiBook5Cover from "../assets/aiBook5Cover.jpeg"; // Replace with correct cover image path
import aiBook6Cover from "../assets/aiBook6Cover.jpg"; // Replace with correct cover image path

const PdfCarousel = ({ pdfFiles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  
  return (
    <div className="mt-8">
      <h2 className="text-center text-3xl font-semibold mb-6">Livres sur l'IA (PDF)</h2>
      <Slider {...settings}>
        {pdfFiles.map((pdf) => (
          <div
            key={pdf.name}
            className="border border-gray-300 rounded-lg p-4 shadow-md text-centerflex flex-col justify-between"
            style={{ height: '300px' }}
          >
            <img
              src={pdf.cover}
              alt={`${pdf.name} Cover`}
              className="w-full h-auto mb-2 rounded-md"
              style={{ maxHeight: '150px', objectFit: 'cover' }} 
            />
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
      </Slider>
    </div>
  );
};

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // List of AI PDF files
  const pdfFiles = [
    { name: "AI for Absolute Beginners by Oliver Theobald", url: aiBook1, cover: aiBook1Cover },
    { name: "Artificial Intelligence: The Ultimate Guide to AI", url: aiBook2, cover: aiBook2Cover },
    { name: "ChatGPT Decoded by David Wiens", url: aiBook3, cover: aiBook3Cover },
    { name: "Coding with AI For Dummies by Chris Minnick", url: aiBook4, cover: aiBook4Cover },
    { name: "Introduction to ChatGPT by Imre Barta", url: aiBook5, cover: aiBook5Cover },
    { name: "The AI Classroom by Brad Weinstein", url: aiBook6, cover: aiBook6Cover },
  ];

  const handleShowDetails = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const timelineEvents = [
    { year: '1950-1980', description: "Les premiers concepts d'intelligence artificielle émergent avec des travaux sur les algorithmes et la logique." },
    { year: '1980-2010', description: "Introduction des réseaux de neurones simples et des premières applications de l'apprentissage automatique." },
    { year: '2014', description: "Ian Goodfellow propose les réseaux antagonistes génératifs (GAN)." },
    { year: '2018', description: "Lancement de modèles de langage comme BERT et GPT, révolutionnant le traitement du langage naturel." },
    { year: '2020', description: "Publication de GPT-3, démontrant des capacités impressionnantes en génération de texte." },
    { year: '2021-2023', description: "Applications dans la création d'art, de musique, et d'autres domaines avec des outils comme DALL-E et Codex." },
  ];

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">Veille Technologique</h2>

      <div className="gap-8 my-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow"
        >
          <img
            src={interestImage}
            alt="Image representing Intelligence Artificielle"
            className="w-22 h-22 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-center text-3xl font-semibold mb-6">Generative AI</h2>
          <p className="text-center text-gray-600 dark:text-white/80 mb-4">
            Les machines sont aujourd’hui aussi compétentes que l’humain dans la création de tous types de concepts et de contenus. Cela est possible grâce à la technologie de calculs informatiques de données produits par la Generative AI.
          </p>
          <h3 className="text-center text-3xl font-semibold mb-6">Sources d'actualités sur l'IA Générative</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {[
              { logo: wikipediaLogo, name: "Wikipedia", link: "https://en.wikipedia.org/wiki/Generative_artificial_intelligence" },
              { logo: techTargetLogo, name: "TechTarget", link: "https://www.techtarget.com/searchenterpriseai/definition/generative-AI" },
              { logo: salesforceLogo, name: "SalesForce", link: "https://www.salesforce.com/fr/resources/definition/ia-generative/" },
              { logo: googleCloudLogo, name: "Google Cloud", link: "https://cloud.google.com/use-cases/generative-ai?hl=fr" },
              { logo: openAiLogo, name: "OpenAI Blog", link: "https://openai.com/news/" },
              { logo: theGradientLogo, name: "The Gradient", link: "https://thegradient.pub/" },
              { logo: deepMindLogo, name: "DeepMind Blog", link: "https://deepmind.google/discover/blog/" },
              { logo: cnilLogo, name: "Cnil", link: "https://www.cnil.fr/fr/comment-deployer-une-ia-generative-la-cnil-apporte-de-premieres-precisions" },
            ].map(({ logo, name, link }) => (
              <div key={name} className="flex items-center justify-center mb-2">
                <img src={logo} alt={`${name} Logo`} className="h-6 w-6 mr-2" />
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {name}
                </a>
              </div>
            ))}
          </div>

          {/* Button to show details */}
          <button
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 mx-auto block"
            onClick={() =>
              handleShowDetails({
                title: "IA générative",
                details: "L'IA générative désigne une catégorie d'intelligence artificielle capable de créer de nouveaux contenus, tels que des textes, des images, de la musique ou même des vidéos, en se basant sur des données existantes.",
                advantages: ["Créativité", "Automatisation", "Efficacité", "Précision"],
                emergence: timelineEvents,
              })
            }
          >
            Voir les détails
          </button>
        </motion.div>
      </div>

      {/* Render the PDF Carousel */}
      <PdfCarousel pdfFiles={pdfFiles} />

      {/* Popup Modal */}
      {showModal && selectedService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg p-8 w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] max-h-screen overflow-auto shadow-lg"
                >
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{selectedService.details}</p>
                  
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">Avantages</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {selectedService.advantages.map((advantage, idx) => (
                      <li key={idx}>• {advantage}</li>
                    ))}
                  </ul>
      
                  {/* Emergence Section - Animated Timeline */}
                  <div className="text-gray-600 text-sm mb-4">
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">Émergence</h4>
                    <p>Voici une chronologie des événements marquants qui ont conduit à l'émergence de l'IA générative :</p>
                    <ol className="list-decimal list-inside space-y-2">
                      {selectedService.emergence.map((event, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          className="text-gray-600"
                        >
                          <strong>{event.year} :</strong> {event.description}
                        </motion.li>
                      ))}
                    </ol>
                  </div>
      
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
      }
      
      export default Services;
      