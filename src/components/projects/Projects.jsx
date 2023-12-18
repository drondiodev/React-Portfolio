import "./projects.css";
import { DataProjects } from "./DataProjects";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Mousewheel, Pagination, Navigation } from "swiper/modules";

const Projects = () => {
  return (
    <section className="projects container section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <h3 className="section__subtitle">
        Découvre l&apos;ensemble de mes réalisations
      </h3>
      <Swiper
        cssMode={true}
        className="projects__container"
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        navigation={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Mousewheel]}
      >
        {DataProjects.map(({ id, image, title, alt, description, repo }) => {
          return (
            <SwiperSlide className="projects__card" key={id}>
              <img src={image} alt={alt} className="projects__img" />
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
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
