import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations

const Experience = () => {
  const experiences = [
    {
      company: "VINCI SA",
      date: "October 2023 - Present",
      title: "Support Engineer Alternance",
      tasks: [
        "Réceptionner les appels des utilisateurs pour qualifier et orienter les incidents et les demandes.",
        "Traiter, suivre et résoudre les incidents et les demandes.",
        "Assurer la relance et l’escalade des tickets.",
        "Contribuer à la formalisation des procédures liées au support d’assistance.",
        "Escalade des tickets auprès du support niveau 2.",
        "Reporting et diffusion des indicateurs de performance et de qualité.",
        "Environment: EasyVista, Power BI, Excel, Teams, VmWare",
      ],
    },
    {
      company: "CGI",
      date: "January 2022 - March 2023",
      title: "Consulting Stage",
      tasks: [
        "Etre proactive sur la qualité de service en réalisant un monitoring des applications afin d’identifier et résoudre en amont les éventuels anomalies du quotidien.",
        "Garantir une qualité de service continue sur les différentes applications par la prise en charge, la communication, l’analyse, et la résolution d’incidents applicatifs remontés par nos clients.",
        "Gérer et prioriser les urgences liées au Run et leurs impacts.",
        "Faciliter la collaboration avec les différentes équipes applicatives chez le client.",
        "Environment: Windows 10/11, Linux, ITIL, SQL, Microsoft 365",
      ],
    },
  ];

  return (
    <div className="w-full px-[5%] py-10">
      <h2 className="text-center text-5xl font-Ovo mb-10">
        Expériences Professionnelles
      </h2>
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden md:block absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                    ? "md:ml-8 text-left" // Left alignment for VINCI
                    : "md:mr-8 text-right md:text-left" // Right alignment for CGI, but text is aligned left inside
                }`}
              >
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                  {exp.company}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {exp.date}
                </p>
                <p className="font-semibold mt-2 text-gray-700 dark:text-white">
                  {exp.title}
                </p>
                <ul className="list-disc ml-5 mt-3 text-gray-600 dark:text-white/80">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
