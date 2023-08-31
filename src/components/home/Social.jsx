import React from "react";
import "./social.css";
const Social = () => {
    return (
            <nav aria-label="Liens de mes réseaux sociaux" className="home__social">
                <a href="https://www.linkedin.com/in/david-rondio/"
                    className="home__social-icon"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Lien vers mon profil LinkedIn">
                    <i className='bx bxl-linkedin' aria-hidden="true"></i>
                </a>

                <a href="mailto:drondiodev@icloud.com"
                    className="home__social-icon"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Lien pour m'envoyer un email">
                    <i className="uil uil-envelope-alt" aria-hidden="true"></i>
                </a>

                <a href="https://github.com/drondiodev"
                    className="home__social-icon"
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="Lien vers ma page Github">
                    <i className="uil uil-github" aria-hidden="true"></i>
                </a>
            </nav>
    );
};

export default Social;