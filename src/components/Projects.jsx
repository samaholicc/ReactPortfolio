
import React from "react";
import project1 from "../assets/project1.jpg"; // Ensure these image paths are correct
import project2 from "../assets/project2.jpg"; // Ensure these image paths are correct
import '../index.css'; // Ensure this file includes Tailwind and your custom styles

const Projects = () => {
  const projects = [
    {
      name: "Client leger",
      desc: "Description for project one",
      image: project1,
    },
    {
      name: "Client lourd",
      desc: "Description for project two",
      image: project2,
    },
  ];

  return (
    <div id="projects" className="flex flex-col items-center w-full px-[5%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">Projets</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Voici quelques-uns de mes projets récents, mettant en valeur mon expertise dans le développement web et d'applications mobiles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10 justify-items-center">
        {projects.map((project, index) => (
          <div key={index} className="flip-card w-80 h-80"> {/* Adjust height and width here */}
            <div className="flip-card-inner">
              {/* Front Face */}
              <div className="flip-card-front card-content flex flex-col justify-between h-full bg-white rounded-lg shadow-md">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-center text-lg font-semibold mt-4 text-gray-800">
                  {project.name}
                </h3>
              </div>

              {/* Back Face */}
              <div className="flip-card-back card-content flex flex-col justify-center items-center text-center h-full bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                <p className="mb-4">{project.desc}</p>
                <button className="flip-button bg-blue-500 text-white py-2 px-4 rounded">Lien Github</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;