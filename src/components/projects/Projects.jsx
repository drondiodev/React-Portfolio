import "./projects.css";
import { Data } from "./DataProjects";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <section className="projects container section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <h3 className="section__subtitle">Découvre l&apos;ensemble de mes réalisations</h3>
      <Swiper
        className="projects__container"
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, repo }) => {
          return (
            <SwiperSlide className="projects__card" key={id}>
              <img src={image} alt="" className="projects__img" />
              <h3 className="projects__title">{title}</h3>
              <p className="projects__description">{description}</p>
              <a
              href={repo}
              target="_blank"
              title="page github associé"
              className="work__button"
              rel="noreferrer"
            >
              Repository GitHub
              <i className="uil uil-github-alt work__button-icon" alt="repository github"></i>
            </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;