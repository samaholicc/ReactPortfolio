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
          description="React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur, notamment pour les applications à page unique. Développée par Facebook, elle permet de créer des composants UI réutilisables, de gérer efficacement l'état des applications via un DOM virtuel et d'utiliser JSX pour écrire du code semblable à HTML."
        />
        <div className="flex-1 max-w-3xl">
          <h3 className="text-3xl mb-4">Mon flux RSS Inoreader</h3>
          <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-lg">
            <button className="text-2xl" onClick={prevArticle}>‹</button>
            <div className="text-center flex-1">
              <h3 className="text-xl font-bold">{articles[currentIndex].title}</h3>
              <p>{articles[currentIndex].description}</p>
              <a href={articles[currentIndex].link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Lire l'article
              </a>
            </div>
            <button className="text-2xl" onClick={nextArticle}>›</button>
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
      <img src={image} alt={`${title} Icon`} className="w-25 h-50 rounded mb-4" />
      <p className="text-white-700">{description}</p>
    </div>
  );
};

export default VeilleTechnologique;