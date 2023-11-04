import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <h3 className="section__subtitle">Mon parcours personnel</h3>

        <div className="qualification__container container">
            <div className="qualification__tabs">
            <div
                className={
                toggleState === 1
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"
                }
                onClick={() => toggleTab(1)}
            >
                <i className="uil uil-university qualification__icon"></i>
                Formations
            </div>
            <div
                className={
                toggleState === 2
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"
                }
                onClick={() => toggleTab(2)}
            >
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Expériences
            </div>
            </div>

            <div className="qualification__sections">
            <div
                className={
                toggleState === 1
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"
                }
            >
                <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Développeur Web et Web Mobile</h3>
                    <span className="qualification__subtitle">
                    Ecole O&apos;Clock
                    </span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 11/2022 - 10/2023
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                </div>

                <div className="qualification__data">
                <div></div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title"> BAC S</h3>
                    <span className="qualification__subtitle">
                    LYCEE GEORGES IMBERT
                    </span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 1995
                    </div>
                </div>
                </div>
            </div>

            <div
                className={
                toggleState === 2
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"
                }
            >
                <div className="qualification__data">
                <div></div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">
                    DÉVELOPPEUR WEB ET ACCESSIBILITÉ
                    </h3>
                    <span className="qualification__subtitle">
                    Projet tutoré en partenariat avec l&apos;entreprise ATI4 GROUP
                    </span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 06/2023 - 08/2023
                    </div>
                </div>
                </div>

                <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">
                    CONSEILLER COMMERCIAL SOCIÉTÉ ET UTILITAIRES
                    </h3>
                    <span className="qualification__subtitle">
                    Grand Est Automobiles VW
                    </span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 04/2021 - 06/2021
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                </div>
                <div className="qualification__data">
                <div></div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">
                    VENDEUR RÉFÉRENT VÉHICULES NEUFS
                    </h3>
                    <span className="qualification__subtitle">
                    TOYOTA Toys Motors Strasbourg
                    </span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 02/2007 - 04/2021
                    </div>
                </div>
                </div>
                <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">
                    COMMERCIAL SÉDENTAIRE
                    </h3>
                    <span className="qualification__subtitle">
                    MACWAY-JV2R
                    </span>
                    <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 08/2002 - 01/2007
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Qualifications;