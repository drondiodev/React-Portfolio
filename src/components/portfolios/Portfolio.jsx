import { useState } from "react";
import PropTypes from "prop-types";

const Portfolio = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);

  const { id, featured_image, images, title } = data;
  const { date, text } = data.body;

  return (
    <div className="grid__item">
      <div className="card">
        <img
          src={featured_image}
          loading="lazy"
          width="365"
          height="243"
          alt="projet de la ville"
          className="card__image"
        />
        <div className="card__inner">
          <h3 className="card__title">{title}</h3>
        </div>
        <div className="card__overlay">
          <button
            className="card__link"
            data-id={`modal-${id}`}
            onClick={handleModal}
          >
            +
          </button>
        </div>
      </div>
      <div
        className={`modal ${showModal ? "show" : "hide"}`}
        id={`modal-${id}`}
      >
        <button className="modal__close" onClick={handleModal}>
          &times;
        </button>
        <div className="modal__content">
          <div className="container2">
            <div className="grid2">
              <div className="grid2__item">
                {images.map((url) => (
                  <img
                    key={url}
                    src={url}
                    loading="lazy"
                    width="560"
                    height="373"
                    className="card__image"
                    alt="Projet site de la ville de lyon"
                  />
                ))}
              </div>
              <div className="grid2__item">
                <h4 className="modal__title h2">{title}</h4>
                <p className="info">
                  <svg
                    width="15"
                    height="15"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="calendar"
                    className="svg-inline--fa fa-calendar fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"
                    ></path>
                  </svg>
                  <i>Année : {date}</i>
                </p>
                <p className="info category">
                  <svg
                    width="15"
                    height="15"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="tag"
                    className="svg-inline--fa fa-tag fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
                    ></path>
                  </svg>
                </p>
                <p>{text}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat accusantium laborum aliquam enim. Vero voluptate,
                  animi, sint vel mollitia ut odio, eius quis expedita quo at!
                  Dignissimos ipsum odit dolores!
                </p>

                <h5 className="h3">Informations</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat accusantium laborum aliquam enim. Vero voluptate,
                  animi, sint vel mollitia ut odio, eius quis expedita quo at!
                  Dignissimos ipsum odit dolores!
                </p>

                <h5 className="h3">Technologies</h5>

                <ul>
                  <li>HTML, CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Portfolio.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    featured_image: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.shape({
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Portfolio;
