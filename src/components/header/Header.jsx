import { useState } from "react";
import "./header.css";
import pastille from "../../assets/pastille.svg";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header role="banner" className="header">
      <a href="#about" className="skip-link">
        Vers le contenu principal
      </a>
      <nav className="nav container">
        <a href="/" title="Retour à l'accueil" className="nav__logo">
          <span>&#123;D&#125;</span>rondio<span>dev</span>
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav_item">
              <a href="#home" aria-label="Accueil" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Accueil
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" aria-label="Skills" className="nav__link">
                <i className="uil uil-constructor nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" aria-label="Portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" aria-label="Contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div
          className="nav__toggle"
          aria-expanded={Toggle}
          aria-controls="primary-navigation"
          aria-label="Menu principal"
          onClick={() => showMenu(!Toggle)}
        >
          <i className="uil uil-circle"></i>
        </div>
        <div className="nav__appointment">
          <a
            href="#contact"
            title="Prendre un RDV"
            className="nav__appointmentlink"
          >
            <span>Prendre un RDV</span>
          </a>
          <img src={pastille} alt="" className="nav__pastille" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
