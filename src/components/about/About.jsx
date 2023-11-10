import "./about.css";
import Photo from "../../assets/photo.png";
import Info from "./info";

const About = () => {
  return (
      <section className="about section" id="about">
        <h2 className="section__title">Qui suis-je ?</h2>
          <div className="container">
            <div className="about__border">
                <div className="about__photo">
                    <img src={Photo} alt="" />
                </div>
            </div>
          </div>
            <div className="about__data">
                <Info />
            </div>
            <div>
              <div className="skills__box">
                  <i className="uil uil-file-download-alt skills__icon" alt=""></i>
                  <p className="skills__name active-link"><a href="https://drive.google.com/file/d/1Fr7fwtAYYKdp3VbfSvuXTOWiVbCfspdG/view?usp=drive_link" download="Mon CV en pdf">Téléchargez mon CV ici</a></p>
              </div>
            </div>
        </section>
    );
};

export default About;