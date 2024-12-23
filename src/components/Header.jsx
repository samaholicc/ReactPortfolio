import React from "react";
import profile_img from "../assets/Samia2.jpg"; // Import profile image
import right_arrow_white from "../assets/right-arrow-white.png"; // Import right arrow image
import resume_pdf from "../assets/resume.pdf"; // Link to your resume PDF
import these_pdf from "../assets/these.pdf"; // Ensure this file exists in assets
import hand_icon from "../assets/hand-icon.png"; // Import hand icon

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img src={profile_img} alt="Profile of Samia Boutezrout" className="rounded-full w-32 mt-40" />

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Bonjour ! Je suis Samia Boutezrout{" "}
        <img src={hand_icon} alt="Hand Icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Étudiante en BTS SIO SLAM
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
          <img src={right_arrow_white} alt="Arrow pointing right" className="w-4" />
        </a>

        <a
          href={resume_pdf}
          download="resume.pdf"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          Mon CV{" "}
          <img src={right_arrow_white} alt="CV download icon" className="w-4" />
        </a>

        <a
          href={these_pdf}
          download="these.pdf"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          Tableau de synthèse{" "}
          <img
            src={right_arrow_white} alt="Download Thesis icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
