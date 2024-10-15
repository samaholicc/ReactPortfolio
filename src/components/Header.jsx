import React from "react";
import profile_img from "../assets/samia.jpg";
import right_arrow_white from "../assets/right-arrow-white.png";
import resume_pdf from "../assets/resume.pdf"; // Chemin correct vers votre CV
import these_pdf from "../assets/resume.pdf";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Déplacer l'image légèrement vers le bas avec margin-top */}
      <img src={profile_img} alt="Profil" className="rounded-full w-32 mt-40" />

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Bonjour ! Je suis Samia Boutezrout{" "}
        <img src="./assets/hand-icon.png" alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Etudiante en BTS SIO SLAM
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Je me permets de vous présenter mon portfolio où vous pourrez découvrir
        mes réalisations, projets et parcours. Vous y trouverez des exemples des
        détails sur les projets sur lesquels j’ai travaillé et les technologies
        que j’ai utilisées.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          Contactez-moi{" "}
          <img src={right_arrow_white} alt="Flèche" className="w-4" />
        </a>

        <a
          href={resume_pdf} // Lien correct vers le CV PDF
          download="Samia_Boutezrout_CV.pdf" // Définir un nom de fichier correct pour le téléchargement
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          Mon CV{" "}
          <img
            src={right_arrow_white}
            alt="Icône de téléchargement"
            className="w-4"
          />
        </a>
        <a
          href={these_pdf} // Lien correct vers le PDF du tableau de thèse
          download="Samia_Boutezrout_These.pdf" // Définir un nom de fichier correct pour le téléchargement
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          Tableau de Thèse{" "}
          <img
            src={right_arrow_white}
            alt="Icône de téléchargement"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
