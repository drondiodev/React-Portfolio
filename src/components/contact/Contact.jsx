import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7pn0mkg",
      "template_syi0us8",
      form.current,
      "iIZw1eWtNmQH0eKjh"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contactez-moi</h2>
      <p className="section__subtitle">
        Discutons de la façon dont mes compétences peuvent apporter
      </p>
      <p className="section__subtitle">
        une touche de fraîcheur et de créativité à votre équipe !
      </p>
      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i
                className="contact__card-icon"
                id="icone-email"
                aria-hidden="true"
              />
              <a
                href="mailto:drondiodev@icloud.com"
                className="contact__card-icon"
                rel="noreferrer"
                target="_blank"
                aria-labelledby="icone-email texte-email"
                aria-label="Lien pour m'envoyer un email"
              >
                <span id="texte-email">drondiodev@icloud.com</span>
              </a>
            </div>
          </div>
          <h3 className="contact__title">Que puis-je faire pour vous ?</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__form-input"
                aria-required="true"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__form-input"
                aria-required="true"
                placeholder="Votre adresse e-mail"
                required
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label htmlFor="message" className="contact__form-tag">
                Message
              </label>
              <textarea
                name="query"
                id="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                aria-required="true"
                placeholder="Votre message ici"
                required
              ></textarea>
            </div>
            <button className="button">Envoyez le message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
