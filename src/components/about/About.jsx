import React from "react";
import "./about.css";
import Photo from "../../assets/photo.png";
// import Info from "./info";

const About = () => {
    return (
        <section className="about section" id="about">
        <h2 className="section__title">Qui suis-je ?</h2>
        <span className="section__subtitle">Présentation</span>
            <div className="about__container container grid">
                <div className="about__border">
                    <div className="about__perfil">
                        <img src={Photo} alt="" />
                    </div>
                </div>
            <div className="about__data">
                {/* <Info /> */}
                    <p className="about__description">
                    Avec mes 18 années d&apos;expertise en commerce et vente, j&apos;ai pris le virage décisif vers le développement web. 
                    </p>
                    <p className="about__description">Mon objectif : créer des sites d&apos;excellence, alliant accessibilité et expérience utilisateur remarquable.</p>
                    <p className="about__description">Je m&apos;engage à fournir des solutions fonctionnelles et innovantes, adaptées à chaque projet.</p>
                </div>
        </div>
        </section>
    );
};

export default About;