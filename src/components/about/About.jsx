import Photo from "../../assets/photo.webp";
import "./about.css";
import Info from "./info";

const CV_URL = "src/assets/CV.pdf";

const About = () => {
  return (
    <section className="about section" id="about" aria-labelledby="Qui suis-je">
      {/* <h2 className="section__title">Qui suis-je ?</h2> */}
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
          <i
            className="uil uil-file-download-alt skills__icon"
            id="icone-telechargement"
            alt="Icône de téléchargement"
          ></i>
          <p className="skills__name active-link" id="texte-telechargement">
            <a
              href={CV_URL}
              target="_blank"
              download="CV-David-Rondio"
              rel="noopener noreferrer"
              aria-labelledby="icone-telechargement texte-telechargement"
            >
              Mon CV
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
