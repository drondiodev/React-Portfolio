import React from "react";
import "./about.css";
import Photo from "../../assets/photo.png";
import Info from "./info";

const About = () => {
    return (
        <section className="about section" id="about">
        <h2 className="section__title">Qui suis-je ?</h2>
        <h3 className="section__subtitle">Présentation</h3>
            <div className="about__container container grid">
                <div className="about__border">
                    <div className="about__perfil">
                        <img src={Photo} alt="" />
                    </div>
                </div>
                <div className="about__data">
                    <Info />
                        <p className="about__description">
                        Avec mes 18 années d&apos;expertise en commerce et vente, j&apos;ai pris le virage décisif vers le développement web. 
                        </p>
                        <p className="about__description"><span>Mon objectif :</span> créer des sites d&apos;excellence, alliant accessibilité et expérience utilisateur remarquable.</p>
                        <p className="about__description">Je m&apos;engage à fournir des solutions fonctionnelles et innovantes, adaptées à chaque projet.</p>
                </div>
                <div>
                    <div className="skills__box">
                        <i className="uil uil-file-download-alt skills__icon" alt=""></i>
                        <p className="skills__name active-link"><a href="https://drive.google.com/file/d/1Fr7fwtAYYKdp3VbfSvuXTOWiVbCfspdG/view?usp=drive_link" download="Mon CV en pdf">Téléchargez mon CV ici</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;