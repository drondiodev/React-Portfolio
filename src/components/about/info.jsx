import Arrow3 from "../../assets/arrow3.svg";
import Arrow4 from "../../assets/arrow4.svg";

const Info = () => {
  return (
    <section>
      <div className="about__proposal">
        <div className="about__title">
          <a href="#services" className="proposal__title">
            <span>Ce que je propose</span>
            <img src={Arrow4} alt="Arrow icon" className="arrow-icon" />
          </a>
        </div>
        <div>
          <h2 className="about__subtitle">
            <span>Mon objectif : </span>
            Créer des expériences en ligne engageantes et parfaitement adaptées
            aux besoins business de chaque client.
          </h2>
          <div className="about__content">
            <div className="icon-wrapper">
              <img src={Arrow3} alt="Arrow icon" className="big-arrow" />
            </div>
            <div className="about__text">
              <p>
                Je m&apos;engage à fournir des solutions fonctionnelles et
                innovantes, adaptées à chaque projet.
              </p>
              <span>
                Je m’occupe de votre projet, il suffit de m&apos;en dire plus.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
