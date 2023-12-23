import { useEffect, useState } from "react";
import { projectsNav } from "../../constants";
import { Data } from "../../constants";
import WorkItems from "./WorkItems";
import "./work.css";

const Works = () => {
  const [item, setItem] = useState({ name: "tout" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "tout") {
      setProjects(Data);
    } else {
      const newProjects = Data.filter(
        (project) => project.category === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? "active-work" : ""} work__item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
