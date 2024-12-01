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
    <div id="projects" className="flex flex-col items-center w-full px-4 py-2 scroll-mt-20 bg-white">
      {/* ... title and description ... */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10 justify-items-center">
        {projects.map((project, index) => (
          <div key={index} className="flip-card w-64 h-64 relative">
            <div className="flip-card-inner bg-white"> {/* Added bg-white */}
              {/* Front Face */}
              <div className="flip-card-front card-content flex flex-col justify-between h-full bg-white rounded-lg shadow-md p-4"> {/* Added p-4 */}
                {/* ... image and title ... */}
              </div>

              {/* Back Face */}
              <div className="flip-card-back card-content flex flex-col justify-center items-center text-center h-full bg-white rounded-lg shadow-md p-4"> {/* Added p-4 */}
                {/* ... content ... */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;