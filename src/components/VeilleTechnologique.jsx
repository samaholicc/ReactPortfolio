import React, { useEffect, useState } from "react";
import sampleImage5 from "../assets/atom.png";
import Inoreader from "../assets/Inoreader.jpg"

const VeilleTechnologique = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch('http://localhost:3000/rss'); // Fetch articles from the server
        const data = await response.json();
        setArticles(data); // Store the articles in state
      } catch (error) {
        console.error("Error fetching RSS articles:", error);
      }
    };

    fetchRSS();
  }, []);

  const nextArticle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevArticle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="VeilleTechnologique" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
      <h2 className="text-5xl font-Ovo">Veille technologique</h2>
      <p className="max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        La veille technologique est un processus systématique de collecte, d'analyse et de diffusion d'informations pertinentes
        sur les évolutions techniques et les innovations dans un domaine spécifique. Elle permet aux professionnels de rester informés
        des tendances, des nouvelles technologies et des meilleures pratiques, afin d'anticiper les changements et d'améliorer
        leur prise de décision.
      </p>
      <div className="flex items-start gap-20">
        <Card 
          title="React" 
          image={sampleImage5} 
          description="React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur, notamment pour les applications à page unique. Développée par Facebook, elle permet de créer des composants UI réutilisables, de gérer efficacement l'état des applications via un DOM virtuel et d'utiliser JSX pour écrire du code semblable à HTML. J'utilise Inoreader comme outil de veille technologique pour rester informé des dernières tendances et nouveautés dans le domaine."
        />
            <div className="flex-1 max-w-3xl">
              <div className="flex flex-col items-stretch p-4 border border-gray-300 rounded-lg shadow-lg">
              <h3 className="text-3xl mb-4">Mon flux RSS INOREADER</h3>
                <img src={Inoreader} alt="Inoreader" className="mb-4 w-full" />
                <div className="flex items-center justify-between">
                  <button className="text-2xl" onClick={prevArticle}>‹</button>
                  <div className="text-center flex-1">
                    {articles.length === 0 ? (
                      <p>Chargement des articles...</p>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold">{articles[currentIndex].title}</h3>
                        <p>{articles[currentIndex].description}</p>
                        <a 
                          href={articles[currentIndex].link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-500 hover:underline">
                          Lire l'article
                        </a>
                      </>
                    )}

                  </div>
                <button className="text-2xl" onClick={nextArticle}>›</button>

                </div>
              </div>
          </div>
        </div>
      </div>
    
  );
};

const Card = ({ title, image, description }) => {
  return (
    <div className="relative w-full max-w-md p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <img src={image} alt={`${title} Icon`} className="w-full h-auto rounded mb-4" />
      <p className="text-white-700">{description}</p>
    </div>
  );
};

export default VeilleTechnologique;