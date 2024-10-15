import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations

const Education = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const education = [
    {
      institution: "Option SISR",
      desc: "Solutions d'Infrastructure, Systèmes et Réseaux. Cette option se concentre sur la gestion des réseaux et des systèmes informatiques.",
      option1: "Réseaux et télécommunications",
      option2: "Administration des systèmes",
      option3: "Sécurité informatique",
      option4: "Gestion des bases de données",
    },
    {
      institution: "Option SLAM",
      desc: "Solutions Logicielles et Applications Métiers. Cette option se concentre sur le développement d’applications et de logiciels.",
      option1: "Développement d’applications",
      option2: "Bases de données",
      option3: "Rédaction de cahier des charges",
      option4: "Maintenance des applications",
    },
  ];

  // Function to handle modal popup
  const handleShowOptions = (eduOptions) => {
    setSelectedOptions(eduOptions);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div id="educations" className="w-full px-[5%] py-10">
      <h2 className="text-center text-5xl font-Ovo mb-10">BTS SIO</h2>
      <div className="relative">
        {/* Vertical Line (Only on larger screens) */}
        <div className="hidden md:block absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 0.5,
                delay: index * 0.2,
              }}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } w-full`}
            >
              {/* Circle Indicator */}
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              </div>

              <div
                className={`w-full md:w-[40%] p-6 border border-gray-400 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 duration-500 ${
                  index % 2 === 0
                    ? "md:ml-8 text-left"
                    : "md:mr-8 text-left md:text-right"
                }`}
              >
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                  {edu.institution}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80 mt-2">
                  {edu.desc}
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  onClick={() =>
                    handleShowOptions([
                      edu.option1,
                      edu.option2,
                      edu.option3,
                      edu.option4,
                    ])
                  }
                >
                  Voir les détails
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 w-[90%] md:w-[40%] shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Options
            </h3>
            <ul className="space-y-2 text-gray-600">
              {selectedOptions.map((option, idx) => (
                <li key={idx} className="text-lg">
                  • {option}
                </li>
              ))}
            </ul>
            <button
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={handleCloseModal}
            >
              Fermer
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Education;
