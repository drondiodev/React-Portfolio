import React, { useRef } from "react";
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
        <p className="section__subtitle">Discutons de la façon dont mes compétences peuvent apporter</p>
        <p className="section__subtitle">une touche de fraîcheur et de créativité à votre équipe</p>
        <div className="contact__container container grid">
            <div className="contact__content">
                <div className="contact__info">
                    <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>
                    <h3 className="contact__card-title">Mail</h3>
                    <span aria-label="adresse email" alt="drondiodev@icloud.com" className="contact__card-data">
                    drondiodev@icloud.com
                    </span>
                    <a href="mailto:drondiodev@icloud.com" title="m'envoyer un mail"
                        className="contact__button" target="_blank" rel="noreferrer"> 
                    </a>
                    </div>
                </div>
            <h3 className="contact__title">Que puis-je faire pour vous ?</h3>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__form-div">
                  <label htmlFor="name" className="contact__form-tag" >Nom (obligatoire)</label>
                    <input
                        type="name"
                        id="name"
                        name="name"
                        className="contact__form-input"
                        placeholder="Entrez votre nom"
                        autoComplete="Entrez votre nom"
                        required
                    />
                </div>
                <div className="contact__form-div">
                  <label htmlFor="email" className="contact__form-tag">E-mail (obligatoire)</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="contact__form-input"
                        placeholder="Entrez votre adresse e-mail"
                        autoComplete="Entrez votre adresse e-mail"
                        required
                    />
                </div>
                <div className="contact__form-div contact__form-area">
                  <label htmlFor="message" className="contact__form-tag">Message (obligatoire)</label>
                    <textarea
                        name="query"
                        id="message"
                        cols="30"
                        rows="10"
                        className="contact__form-input"
                        placeholder="Entrez votre message ici"
                        autoComplete="ntrez votre message ici"
                        required
                    ></textarea>
                </div>
                <button className="button">
                Envoyez le message
                </button>
            </form>
            </div>
        </div>
        </section>
    );
};

export default Contact;
