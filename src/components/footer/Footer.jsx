import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title"><span>&lt;</span> Drondiodev. /<span>&gt;</span></h1>
            <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">
                A propos
                </a>
            </li>

            <li>
                <a href="#portfolio" className="footer__link">
                Projets
                </a>
            </li>

            <li>
                <a href="#skills" className="footer__link">
                Skills
                </a>
            </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/david-rondio/" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className='bx bxl-linkedin' ></i>
            </a>

            <a href="mailto:drondiodev@icloud.com" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-envelope-alt"></i>
            </a>

            <a href="https://github.com/drondiodev" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github"></i>
            </a>
            </div>

            <span className="footer__copy">
                &#169; 2023 David Rondio | All rights reserved

            </span>
        </div>
        </footer>
    );
};

export default Footer;