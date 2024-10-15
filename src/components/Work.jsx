import React from "react";
import send_icon from "../assets/send-icon.png";
import right_arrow_blod from "../assets/right-arrow-bold.png";
import right_arrow_blod_dark from "../assets/right-arrow-bold-dark.png";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Mon portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">
        Mes derniers Réalisation
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Bienvenue dans mon portfolio de développement web ! Explorez une
        collection de projets mettant en avant mon expertise en développement
        front-end.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <a href="https://github.com/samaholicc/systeme-de-livraison">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">System de livraison</h2>
                <p className="text-sm text-gray-700">Technologie : Laravel</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send_icon} alt="Send Icon" className="w-5" />
              </div>
            </div>
          </a>
        </div>

        <div className="aspect-square bg-[url('./assets/work-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <a href="https://github.com/samaholicc/star_services_1">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Star Services</h2>
                <p className="text-sm text-gray-700">Application Web</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send_icon} alt="Send Icon" className="w-5" />
              </div>
            </div>
          </a>
        </div>

        <div className="aspect-square bg-[url('./assets/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <a href="https://github.com/samaholicc/seomaster-1.0.0">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Site Vitrine</h2>
                <p className="text-sm text-gray-700">Design Web</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send_icon} alt="Send Icon" className="w-5" />
              </div>
            </div>
          </a>
        </div>

        <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <a href="https://github.com/samaholicc/pfa">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Application Mobile</h2>
                <p className="text-sm text-gray-700">Technologie : Flutter</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send_icon} alt="Send Icon" className="w-5" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <a
        href="https://link-to-more-projects.com"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Voir plus
        <img
          src={right_arrow_blod}
          alt="Right Arrow"
          className="w-4 dark:hidden"
        />
        <img
          src={right_arrow_blod_dark}
          alt="Right Arrow Dark"
          className="w-4 hidden dark:block"
        />
      </a>
    </div>
  );
};

export default Work;
