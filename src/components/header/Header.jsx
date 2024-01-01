import { useState } from "react";
import { navLinks } from "../../constants";
import "./header.css";
import pastille from "../../assets/pastille.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header role="banner" className="header">
      <a href="#about" className="skip-link">
        Vers le contenu principal
      </a>
      <nav className="nav container">
        <a href="/" title="Retour à l'accueil" className="nav__logo">
          <span>&#123;D&#125;</span>rondio<span>dev</span>
        </a>
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            {navLinks.map((link) => (
              <li key={link.id} className="nav__item">
                <a
                  href={link.href}
                  className="nav__link"
                  aria-label={link.arialabel}
                >
                  <i className={link.icon}></i> {link.label}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>
        <div
          className="nav__toggle"
          aria-expanded={showMenu}
          aria-controls="primary-navigation"
          aria-label="Menu principal"
          onClick={toggleMenu}
        >
          <i className="uil uil-circle"></i>
        </div>
        <div className="nav__appointment">
          <a
            href="https://calendly.com/drondiodev/"
            target="_blank"
            rel="noreferrer"
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
