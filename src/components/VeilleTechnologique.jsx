import React, { useEffect, useState } from "react";
import sampleImage5 from "../assets/atom.png";
import Inoreader from "../assets/Inoreader.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import flipboard from "../assets/flipboard.png"

import feedly from "../assets/feedly.png"
import getpocket from "../assets/getpocket.png"

// Import the Slider component

const Card = ({ title, image, description }) => (
  <div className="relative w-full p-6 border border-gray-300 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <div className="flex justify-center">
      <img src={image} alt={`${title} Icon`} className="image-small rounded mb-4" />
    </div>
    <p className="text-white-700">{description}</p>
  </div>
);

const VeilleTechnologique = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRSS = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/rss');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRSS();
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const tools = [
    { name: "Inoreader", logo: Inoreader, link: "https://www.inoreader.com" },
    { name: "Feedly", logo: feedly , link: "https://feedly.com" },
    { name: "Pocket", logo: getpocket, link: "https://getpocket.com" },
    { name: "Flipboard", logo: flipboard, link: "https://flipboard.com" },
  ];
  const reactCommands = [
    { title: "Importer React", code: `import React from 'react';` },
    {
      title: "Composant Fonctionnel",
      code: `function MonComposant() { return <h1>Bonjour, monde!</h1>; }`,
    },
    {
      title: "useState Hook",
      code: `function Compteur() {
        const [count, setCount] = useState(0);
        return (
          <div>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
          </div>
        );
      }`,
    },
    {
      title: "useEffect Hook",
      code: `function ExempleEffect() {
        useEffect(() => { /* effect code here */ }, []);
        return <div>Regardez la console!</div>;
      }`,
    },
  ];

  return (
    <div id="VeilleTechnologique" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
      {/* Main heading */}
      <h2 className="text-4xl font-bold mb-4">Veille Technologique</h2>
      <p className="mb-8">La veille technologique est un processus systématique de collecte, d'analyse et d'interprétation d'informations concernant les nouvelles technologies, les innovations et les tendances du marché...</p>
      
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  <div className="col-span-1 mb-10">
          {/* React Intro Section */}
          <Card
            title="React"
            image={sampleImage5}
            description="React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur, notamment pour les applications à page unique. Développée par Facebook, elle permet de créer des composants UI réutilisables, de gérer efficacement l'état des applications via un DOM virtuel et d'utiliser JSX pour écrire du code semblable à HTML."
            tools={tools} // Pass the tools data here
          />
        </div>
        <div className="col-span-1 mb-10"> {/* Allow the RSS feed to occupy the remaining space */}
        {/* RSS Feed Section - left column */}
  {isLoading ? (
    <p>Chargement des articles...</p>
  ) : error ? (
    <p>Erreur lors du chargement des articles : {error.message}</p>
  ) : (
    <div className="p-4 border border-gray-300 rounded-lg shadow-lg">
      <Slider {...sliderSettings}>
        {articles.map((article, index) => (
          <div key={index} className="p-4 max-w-md mx-auto"> {/* Adjusted width */}
            <h3 className="text-3xl mb-4 font-semibold">Flux RSS Inoreader</h3>
            <img src={Inoreader} alt="Inoreader" className="mb-4 w-full" />
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Lire l'article</a>
          </div>
        ))}
      </Slider>
    </div>
  )}
</div>

        <div className="md:w-1/2">
          {/* React Commands Section - right column */}
          <h4 className="text-3xl mb-4 font-semibold">Commandes de base en React</h4>
          <div className="grid gap-6">
            {reactCommands.map((command, index) => (
              <div key={index} className=" p-4 border border-gray-300 rounded-lg shadow-lg">
                <h5 className="text-lg font-bold">{command.title}</h5>
                <pre className="text-sm">
                  <code>{command.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default VeilleTechnologique;



