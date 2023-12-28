import { useState, useEffect } from "react";
import "./appointment.css";
import pastille from "../../assets/pastille.svg";

const Appointment = () => {
  const [message, setMessage] = useState("Une question ?");

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prev) => {
        return prev === "Une question ?" ? "Un devis ?" : "Une question ?";
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="home__appointment">
      <div className="appointment">
        <a href="#contact" title="message" className="appointment-link">
          <span>{message}</span>
        </a>
      </div>
      <div className="appointment">
        <a
          href="https://calendly.com/drondiodev/"
          target="_blank"
          rel="noreferrer"
          title="Prendre un RDV"
          className="appointment-link"
        >
          <span>Prendre un RDV</span>
        </a>
        <img src={pastille} alt="" className="pastille" />
      </div>
    </section>
  );
};

export default Appointment;
