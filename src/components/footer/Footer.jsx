import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" className="footer">
      <nav className="footer__container container" role="navigation">
        <h2 className="footer__title">
          <span>&#123;D&#125;</span>rondio<span>dev</span>.studio
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
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i
              className="bx bxl-linkedin"
              role="img"
              alt="Linkedin"
              aria-label="LinkedIn"
            ></i>
          </a>
          <a
            href="mailto:drondiodev@icloud.com"
            aria-label="Mail"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-envelope-alt" alt="Email" role="img"></i>
          </a>
          <a
            href="https://github.com/drondiodev"
            aria-label="Github"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github" alt="GitHub" role="img"></i>
          </a>
        </section>
        <section className="footer__copy">
          &copy; {year} - <span>David Rondio.</span> All rights reserved
        </section>
        <section className="footer__terms">
          <a href="/" target="_blank">
            Mentions légale
          </a>{" "}
          - <a href="/">Politique de confidentialité</a>
        </section>
      </nav>
    </footer>
  );
};

export default Footer;
