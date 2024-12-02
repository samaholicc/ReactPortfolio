import React, { useEffect, useState } from "react";
import sampleImage5 from "../assets/atom.png";
import Inoreader from "../assets/Inoreader.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import flipboard from "../assets/flipboard.png";
import feedly from "../assets/feedly.png";

// Typing effect function
const useTypingEffect = (text, speed) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
};

const Card = ({ title, image, description, tools }) => (
  <div className="relative w-full p-6 border border-gray-300 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <div className="flex justify-center">
      <img src={image} alt={`${title} Icon`} className="image-small rounded mb-4" />
    </div>
    <p className="text-black-700">{description}</p> {/* Fixed color for visibility */}

    <p className="mt-8 text-lg font-semibold">Outils de ma veille:</p>
    <div className="flex justify-center flex-wrap mt-4">
      {tools.map((tool, index) => (
        <a key={index} href={tool.link} target="_blank" rel="noopener noreferrer" className="mx-2 mb-2">
          <img src={tool.logo} alt={tool.name} className="w-16 h-16 object-contain" />
        </a>
      ))}
    </div>
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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const tools = [
    { name: "Inoreader", logo: Inoreader, link: "https://www.inoreader.com" },
    { name: "Feedly", logo: feedly, link: "https://feedly.com" },
    { name: "Flipboard", logo: flipboard, link: "https://flipboard.com" },
  ];

 

  return (
    <div id="VeilleTechnologique" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
      {/* Main heading */}
      <h2 className="text-4xl font-bold mb-4">Veille Technologique</h2>
      <p className="mb-8">La veille technologique est un processus systématique et continu de surveillance des avancées technologiques, des innovations et des tendances dans un domaine spécifique. Elle vise à collecter, analyser et diffuser des informations pertinentes pour aider les entreprises, les organisations ou les individus à prendre des décisions éclairées.</p>
      
       {/* Grid layout */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* React Card */}
        <div className="col-span-1 mb-10">
          <Card
            title="React"
            image={sampleImage5}
            description="React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur, 
            notamment pour les applications à page unique. Développée par Facebook, elle permet de créer des composants UI 
            réutilisables, de gérer efficacement l'état des applications via un DOM virtuel et d'utiliser JSX pour écrire 
            du code semblable à HTML."
            tools={tools}
          />
        </div>

        {/* RSS Feed Slider */}
        <div className="col-span-1 mb-10">
          {isLoading ? (
            <p>Chargement des articles...</p>
          ) : error ? (
            <p>Erreur lors du chargement des articles : {error.message}</p>
          ) : (
            <div className="p-4 border border-gray-300 rounded-lg shadow-lg">
              <Slider {...sliderSettings}>
                {articles.map((article, index) => (
                  <div key={index} className="p-4 max-w-md mx-auto">
                    <h3 className="text-3xl mb-4 font-semibold">Flux RSS Inoreader</h3>
                    <img src={Inoreader} alt="Inoreader" className="mb-4 w-full" />
                    <h3 className="text-xl font-bold">{article.title}</h3>
                    <p>{article.description}</p>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Lire l'article
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    
      
    </div>
  );
};

export default VeilleTechnologique;