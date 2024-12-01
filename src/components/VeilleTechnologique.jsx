import React, { useEffect, useState } from "react";
import sampleImage5 from "../assets/atom.png";
import Inoreader from "../assets/Inoreader.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ title, image, description }) => (
  <div className="relative w-full max-w-md p-6 border border-gray-300 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <img src={image} alt={`${title} Icon`} className="w-full h-auto rounded mb-4" />
    <p className="text-gray-700">{description}</p>
  </div>
);

const FeaturedCard = ({ title, description, link }) => (
  <div className="p-6 border border-gray-300 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Lire l'article</a>
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

  const reactArticles = [
    {
      title: "Article React 1",
      description: "Description de l'article 1 sur React.",
      link: "https://www.example.com/react-article-1",
    },
    {
      title: "Article React 2",
      description: "Description de l'article 2 sur React.",
      link: "https://www.example.com/react-article-2",
    },
    {
      title: "Article React 3",
      description: "Description de l'article 3 sur React.",
      link: "https://www.example.com/react-article-3",
    },
  ];

  const reactCommands = [
    { title: "Importer React", code: `import React from 'react';` },
    {
      title: "Composant Fonctionnel",
      code: `function MonComposant() { return <h1>Bonjour, monde!</h1>; }`,
    },
    {
      title: "useState Hook",
      code: `function Compteur() { const [count, setCount] = useState(0); 
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
        useEffect(() => { /* effect code here*/ }, []);
        return <div>Regardez la console!</div>;
      }`,
    },
  ];

  return (
    <div id="VeilleTechnologique" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
      {/* Main heading */}
      <h2 className="text-4xl font-bold mb-4">Veille Technologique</h2>
      <p className="mb-8">Découvrez les dernières actualités et articles concernant React.</p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="col-span-1 md:col-span-2 mb-10">
          {/* React Intro Section - occupying all columns */}
          <Card
            title="Ma veille technologique : React"
            image={sampleImage5}
            description="React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur, notamment pour les applications à page unique. Développée par Facebook, elle permet de créer des composants UI réutilisables, de gérer efficacement l'état des applications via un DOM virtuel et d'utiliser JSX pour écrire du code semblable à HTML."
          />
        </div>

        <div className="md:w-1/2">
          {/* RSS Feed Section - left column */}
          <h3 className="text-3xl mb-4 font-semibold">Flux RSS Inoreader</h3>
          <img src={Inoreader} alt="Inoreader" className="mb-4 w-full" />
          {isLoading ? (
            <p>Chargement des articles...</p>
          ) : error ? (
            <p>Erreur lors du chargement des articles : {error.message}</p>
          ) : (
            <div className="p-4 border border-gray-300 rounded-lg shadow-lg">
              {articles.map((article, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-bold">{article.title}</h3>
                  <p>{article.description}</p>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Lire l'article</a>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="md:w-1/2">
          {/* React Commands Section - right column */}
          <h4 className="text-3xl mb-4 font-semibold">Commandes de base en React</h4>
          <div className="grid gap-6">
            {reactCommands.map((command, index) => (
              <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-lg">
                <h5 className="text-lg font-bold">{command.title}</h5>
                <pre className="text-sm"><code>{command.code}</code></pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeilleTechnologique;