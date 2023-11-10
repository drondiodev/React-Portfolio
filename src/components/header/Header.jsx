import { useState } from 'react';
import "./header.css";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    return (
        <header role="banner" className="header">
        <nav className="nav container" >
          <a href="/" title="Retour à l'accueil" className="nav__logo"><span>&#123;D&#125;</span>rondio<span>dev</span></a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Accueil
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> A propos
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-constructor nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Projets
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
                    <i className="uil uil-circle"></i>
                </div>

            </nav>
        </header>
    )
}

export default Header;