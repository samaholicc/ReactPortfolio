import React, { useEffect, useState } from "react";
import right_arrow_white from "../assets/right-arrow-white.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const hCaptcha = event.target.querySelector(
      "textarea[name=h-captcha-response]"
    ).value;
    if (!hCaptcha) {
      event.preventDefault();
      setResult("Veuillez remplir le champ du captcha");
      return;
    }
    setResult("Envoi en cours....");
    const formData = new FormData(event.target);

    // ----- Insérez votre clé d'accès Web3 Forms ci-dessous---------

    formData.append("access_key", "d9f8c677-d801-4d5a-9bd3-c1c479b3723f");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Succès", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Erreur", res);
      setResult(res.message);
    }
  };

  function CaptchaLoader() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (captchadiv.length) {
      let lang = null;
      let onload = null;
      let render = null;

      captchadiv.forEach(function (item) {
        const sitekey = item.dataset.sitekey;
        lang = item.dataset.lang;
        onload = item.dataset.onload;
        render = item.dataset.render;

        if (!sitekey) {
          item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
        }
      });

      let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
      if (lang) {
        scriptSrc += `&hl=${lang}`;
      }
      if (onload) {
        scriptSrc += `&onload=${onload}`;
      }
      if (render) {
        scriptSrc += `&render=${render}`;
      }

      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = scriptSrc;
      document.body.appendChild(script);
    }
  }

  useEffect(() => {
    CaptchaLoader();
  }, []);
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Me contacter</h4>
      <h2 className="text-center text-5xl font-Ovo">Entrer en contact</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        J'aimerais avoir de vos nouvelles ! Si vous avez des questions, des
        commentaires ou des retours, veuillez utiliser le formulaire ci-dessous.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <input
          type="hidden"
          name="subject"
          value="Eliana Jade - Nouvelle soumission de formulaire"
        />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Entrez votre nom"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            required
            name="name"
          />

          <input
            type="email"
            placeholder="Entrez votre email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            required
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Entrez votre message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          required
          name="message"
        ></textarea>
        <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Soumettre maintenant
          <img src={right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
