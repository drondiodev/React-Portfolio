import PropTypes from "prop-types";
import { useState } from "react";
import Data from "../../components/portfolio/cardsData";
import "./Card.css";

// eslint-disable-next-line react/prop-types
export default function Card({ title, text, button }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{title}</h3>

      <p>{text}</p>
      <Card {...Data} />
      <button
        className={`card-btn ${isHovered ? "visible" : ""}`}
        onClick={handleClick}
      >
        {button?.text}
      </button>

      {isHovered && <div className="hover-bg"></div>}
    </div>
  );
}

Card.proptypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.shape({
    onClick: PropTypes.func,
    text: PropTypes.string,
  }).isRequired,
};
