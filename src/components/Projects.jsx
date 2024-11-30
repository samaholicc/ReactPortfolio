import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import "../components/style.css";

const Projects = () => {
  const projects = [
    {
      name: "Client leger",
      desc: "zfhzefhz",
      image: project1,
    },
    {
      name: "Client lourd",
      desc: "Description for project two",
      image: project2,
    },
  ];

  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">Projets</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Voici quelques-uns de mes projets récents, mettant en valeur mon
        expertise dans le développement web et d'applications mobiles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {projects.map((project, index) => (
          <div key={index} className="relative project-card w-full h-64">
            {/* Card Container */}
            <div className="card-container">
              {/* Front Face */}
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

              {/* Back Face */}
              <div className="absolute w-full h-full bg-purple-600 text-white text-center p-6 rounded-lg backface-hidden flex flex-col justify-center items-center rotate-y-180">
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