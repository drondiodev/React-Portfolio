import "./about.css";
import Photo from "../../assets/photo.webp";
import Info from "./info";

const CV_URL = "src/assets/CV.pdf";

const About = () => {
  return (
    <section className="about section" id="about" aria-labelledby="Qui suis-je">
      <h2 className="section__title">Qui suis-je ?</h2>
      <div className="container">
        <div className="about__border">
          <div className="about__photo">
            <img src={Photo} alt="Photo de David Rondio" />
          </div>
        </div>
      </div>
      <div className="about__data">
        <Info />
      </div>
      <div>
        <div className="skills__box">
          <i className="uil uil-file-download-alt skills__icon" alt=""></i>
          <p className="skills__name active-link">
            <a
              href={CV_URL}
              download="CV Rondio David.pdf"
              rel="noopener noreferrer"
              aria-label="Télécharger mon CV au format PDF"
            >
              Téléchargez mon CV ici
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
