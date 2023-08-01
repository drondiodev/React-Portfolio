import React, { useState } from "react";
import "./services.css";
const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
        <h2 className="section__title">Compétences</h2>
        <span className="section__subtitle">Ce que je propose</span>
        <div className="services__container container grid">
            <div className="services__content">
            <div>
                <h3 className="services__title">
                Développeur Web
                </h3>
            </div>
            <span
                className="services__button"
                onClick={() => {
                toggleTab(1);
                }}
            >
                Voir plus
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
                className={
                toggleState === 1
                    ? "services__modal active-modal"
                    : "services__modal"
                }
            >
                <div className="services__modal-content">
                <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Développeur Web</h3>
                <p className="services__modal-description">
                    Actuellement en formation de développement web spécialisé en accessibilité numérique à l’école O’clock, je me lance dans une nouvelle aventure professionnelle.
                </p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Mon super pouvoir :
la résolution de problèmes.</p>
                    </li>

                    <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Grâce à mon parcours, c’est ma maturité, ma faculté d’adaptation et ma persévérance que je peux mettre à votre service.</p>
                    </li>

                    <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Organisé, je sais prendre en compte les priorités, prendre l'initiative si nécessaire et travailler en autonomie.</p>
                    </li>
                </ul>
                </div>
            </div>
            </div>

            <div className="services__content">
            <div>
                <h3 className="services__title">
                Mes atouts
                </h3>
            </div>
            <span
                onClick={() => {
                toggleTab(2);
                }}
                className="services__button"
            >
                Voir plus
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
                className={
                toggleState === 2
                    ? "services__modal active-modal"
                    : "services__modal"
                }
            >
                <div className="services__modal-content">
                <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Mes atouts</h3>
                <p className="services__modal-description">
                    Excellent communicateur et collaborateur, je comprends que vous ne vous souciez pas toujours de <strong>comment</strong> c&apos;est fait, juste que c&apos;est bien fait et à temps.
                </p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Je monte en compétences pour encadrer toutes les phases d&apos;un projet.</p>
                    </li>

                    <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Si vous cherchez un développeur web qui est passionné par son travail, prêt à relever de nouveaux défis avec enthousiasme, et ouvert à la reconversion de carrière, je vous invite à nous rencontrer dès maintenant.
                    </p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Services;