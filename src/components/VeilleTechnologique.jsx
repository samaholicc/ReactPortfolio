import React, { useEffect, useState } from "react";
import Slider from "react-slick";
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
    // Add more React articles here...
  ];

  


  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} absolute right-4 top-1/2 transform -translate-y-1/2`} onClick={onClick}>
        Next
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} absolute left-4 top-1/2 transform -translate-y-1/2`} onClick={onClick}>
        Previous
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  return (
    <div id="VeilleTechnologique" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
      {/* Main heading */}
      <h2 className="text-4xl font-bold mb-4">Veille Technologique</h2>
      <p className="mb-8">Découvrez les dernières actualités et articles concernant React.</p>
  
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          {/* React Intro Section */}
          <Card
            title="Ma veille technologique : React"
            image={sampleImage5}
            description="React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur, notamment pour les applications à page unique. Développée par Facebook, elle permet de créer des composants UI réutilisables, de gérer efficacement l'état des applications via un DOM virtuel et d'utiliser JSX pour écrire du code semblable à HTML."
          />
        </div>
        <div className="md:w-1/2">
          {/* RSS Feed Section and React Commands Carousel */}
          <div className="flex flex-col items-stretch border border-gray-300 rounded-lg shadow-lg max-w-xs min-h-[100px] relative mb-10">
            <h3 className="text-3xl mb-4 font-semibold">Flux RSS Inoreader</h3>
            <img src={Inoreader} alt="Inoreader" className="mb-4 w-full" />
            {isLoading ? (
              <p>Chargement des articles...</p>
            ) : error ? (
              <p>Erreur lors du chargement des articles : {error.message}</p>
            ) : (
              <Slider {...settings} className="w-full relative">
                {articles.map((article, index) => (
                  <div key={index} className="p-4">
                    <h3 className="text-xl font-bold">{article.title}</h3>
                    <p>{article.description}</p>
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Lire l'article</a>
                  </div>
                ))}
              </Slider>
            )}
          </div>
          
        </div>
      </div>
  
      <h4 className="my-6 text-gray-700 font-bold dark:text-white/80">Articles React</h4>
      <div className="mt-10">
        {/* Articles Carousel */}
        <Slider {...settings}>
          {reactArticles.map((article, index) => (
            <div key={index} className="p-4">
              <h4 className="text-lg font-bold">{article.title}</h4>
              <p>{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Lire l'article</a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
  
  export default VeilleTechnologique;