import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  const projects = [];

  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Mes Projets</h4>
      <h2 className="text-center text-5xl font-Ovo">Derniers Projets</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Voici quelques-uns de mes projets récents, mettant en valeur mon
        expertise dans le développement web et d'applications mobiles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {projects.map((project, index) => (
          <div key={index} className="relative group w-full h-64">
            {/* Conteneur de Carte */}
            <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Face avant */}
              <div className="absolute w-full h-full bg-white shadow-lg rounded-lg backface-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-center text-lg font-semibold mt-4 text-gray-800">
                  {project.name}
                </h3>
              </div>

              {/* Face arrière */}
              <div className="absolute w-full h-full bg-purple-600 text-white text-center p-6 rounded-lg rotate-y-180 backface-hidden flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold mb-4">{project.name}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
