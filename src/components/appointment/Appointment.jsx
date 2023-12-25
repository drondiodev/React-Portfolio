import "./appointment.css";
import pastille from "../../assets/pastille.svg";

const Appointment = () => {
  return (
    <section className="home__appointment">
      <div className="appointment">
        <a href="#contact" title="Prendre un RDV" className="appointmentlink">
          <span>Une question ?</span>
        </a>
      </div>
      <div className="appointment">
        <a
          href="https://calendly.com/drondiodev/"
          target="_blank"
          rel="noreferrer"
          title="Prendre un RDV"
          className="appointmentlink"
        >
          <span>Prendre un RDV</span>
        </a>
        <img src={pastille} alt="" className="pastille" />
      </div>
    </section>
  );
};

export default Appointment;
