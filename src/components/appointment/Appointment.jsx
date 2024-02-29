import { useState, useEffect } from "react";
import "./appointment.css";
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
      <div className="home__appointmentarrow">
        <div className="top">
          <h2>Il est temps de passer à l&apos;action </h2>
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
            <span className="dot">
              <span className="pingmobile"></span>
              <span className="badge">1</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
