import React from "react";
import "./social.css";
const Social = () => {
    return (
            <div className="home__social">
                <a href="https://www.linkedin.com/in/david-rondio/" title="Mon profil linkedin" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className='bx bxl-linkedin' alt="Linkedin"></i>
            </a>

            <a href="mailto:drondiodev@icloud.com" title="M'envoyer un mail" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-envelope-alt" alt="Email"></i>
            </a>

            <a href="https://github.com/drondiodev" title="Ma page Github" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github" alt="GitHub"></i>
            </a>
            </div>
    );
};

export default Social;