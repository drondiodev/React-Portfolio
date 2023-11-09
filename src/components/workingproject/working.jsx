import "./working.css";
import WorkItems from "../work/WorkItems";
import { projectsData } from "../work/Data";

const Working = () => {
  const project = projectsData.find((p) => p.id === 1);
  return (
    <section className="skills section container">
      <h2 className="section__title">
        Coming <span>soon</span>
      </h2>
      <h3 className="section__subtitle">Sur quoi je travaille actuellement</h3>
      <div className="container_working">
        <WorkItems item={project} />
      </div>
    </section>
  );
};

export default Working;
