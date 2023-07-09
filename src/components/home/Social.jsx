import React from "react";
import "./social.css";
const Social = () => {
    return (
            <div className="home__social">
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
    );
};

export default Social;