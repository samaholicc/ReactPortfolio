import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaCloud,
  FaTools,
  FaUserFriends,
} from "react-icons/fa"; // Importer les icônes de FontAwesome
import {
  SiVisualstudiocode,
  SiFigma,
  SiGit,
  SiPython,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiHtml5,
  SiCss3,
} from "react-icons/si"; // Importer les autres icônes d'outils
import user_image from "../assets/samia.jpg";
import circular_text from "../assets/ev.png";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-2 mt-36">
      {" "}
      {/* Ajouté une marge supérieure */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">À propos de moi</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src={user_image}
            alt=""
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img
              src={circular_text}
              alt=""
              className="w-full animate-spin_slow"
            />
            <FaLaptopCode className="text-purple-500 w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Je m'appelle BOUTEZROUT Samia, je suis étudiante en BTS SIO. Je me
            spécialise dans la conception de Solutions Logicielles et
            d'Applications Métiers.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {/* Carte Support IT */}
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <FaCode className="w-7 h-7 mt-3 text-gray-700 dark:text-white" />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Support IT
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                Easy Vista, Power BI, VmWare HyperV, Excel
              </p>
            </li>

            {/* Carte Web Dev */}
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <FaLaptopCode className="w-7 h-7 mt-3 text-gray-700 dark:text-white" />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Développement Web
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                HTML, CSS, JavaScript, Python, PHP, Java
              </p>
            </li>

            {/* Carte Cloud */}
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <FaCloud className="w-7 h-7 mt-3 text-gray-700 dark:text-white" />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Cloud
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                Windows Azure, Google Cloud, AWS
              </p>
            </li>

            {/* Nouvelle Carte Intérêts */}
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <FaUserFriends className="w-7 h-7 mt-3 text-gray-700 dark:text-white" />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Intérêts
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                Agile, Ingénierie Full Stack, Cybersécurité
              </p>
            </li>
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Outils que j'utilise
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {/* Icône Python */}

            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <SiVisualstudiocode className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />{" "}
              {/* VSCode - Bleu */}
            </li>

            {/* Icône JavaScript */}
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <SiJavascript className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-400" />{" "}
              {/* JavaScript - Jaune */}
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <SiHtml5 className="w-5 h-5 sm:w-7 sm:h-7 text-orange-500" />{" "}
              {/* HTML - Orange */}
            </li>

            {/* Icône CSS */}
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <SiCss3 className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />{" "}
              {/* CSS - Bleu */}
            </li>

            {/* Icône VSCode */}

            {/* Icône PHP */}
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <SiPhp className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-600" />{" "}
              {/* PHP - Indigo */}
            </li>

            {/* Icône Laravel */}
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <SiLaravel className="w-5 h-5 sm:w-7 sm:h-7 text-red-600" />{" "}
              {/* Laravel - Rouge */}
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <SiPython className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400" />{" "}
              {/* Python - Bleu */}
            </li>

            {/* Icône HTML */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
