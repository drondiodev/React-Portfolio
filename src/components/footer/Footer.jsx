import "./footer.css";

const Footer = () => {
  return (
    <footer role="contentinfo" className="footer">
      <nav className="footer__container container" role="navigation">
        <h2 className="footer__title">
          <span>&#123;D&#125;</span>rondio<span>dev</span>
        </h2>
        <h3 className="footer__subtitle">
          Développeur <span>Web</span>
        </h3>
        <ul className="footer__list">
          <li>
            <a
              href="#about"
              className="footer__link"
              aria-label="Aller à la section À propos"
            >
              A propos
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="footer__link"
              aria-label="Aller à la section Portfolio"
            >
              Projets
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="footer__link"
              aria-label="Aller à la section Skills"
            >
              Skills
            </a>
          </li>
        </ul>
        <section className="footer__social" aria-label="Réseaux sociaux">
          <a
            href="https://www.linkedin.com/in/david-rondio/"
            title="Mon profil linkedin"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="Profil LinkedIn"
          >
            <i
              className="bx bxl-linkedin"
              alt="Linkedin"
              aria-label="Profil LinkedIn"
            ></i>
          </a>
          <a
            href="mailto:drondiodev@icloud.com"
            title="M'envoyer un mail"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-envelope-alt" alt="Email"></i>
          </a>
          <a
            href="https://github.com/drondiodev"
            title="Ma page Github"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github" alt="GitHub"></i>
          </a>
        </section>
        <span className="footer__copy">
          Copyright &#169; 2023, <span>David Rondio.</span> All rights reserved.
        </span>
      </nav>
    </footer>
  );
};

export default Footer;
