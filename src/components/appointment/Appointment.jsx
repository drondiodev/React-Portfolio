import { useState, useEffect } from "react";
import "./appointment.css";
import pastille from "../../assets/pastille.svg";
import arrow2 from "../../assets/arrow2.svg";

const Appointment = () => {
  const [message, setMessage] = useState("Une question ?");

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prev) => {
        return prev === "Une question ?" ? "Prendre un RDV" : "Une question ?";
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="home__appointment">
      {/* <div className="appointment">
        <a href="#contact" title="message" className="appointment-link">
          <span>{message}</span>
        </a>
      </div> */}
      <div className="home__appointmentarrow">
        <div className="top">
          <h2>Passez à l&apos;action </h2>
          <div>
            <img src={arrow2} alt="fleche" width={110} />
          </div>
        </div>
        <div className="bottom">
          <div className="appointment">
            <a
              href="https://calendly.com/drondiodev/"
              target="_blank"
              rel="noreferrer"
              title="Prendre un RDV"
              className="appointment-link"
            >
              <span>{message}</span>
            </a>
            <img src={pastille} alt="" className="pastille" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
