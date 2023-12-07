import "./working.css";
import WorkItems from "../work/WorkItems";
import { Data } from "../projects/DataProjects";

const Working = () => {
  // const project = Data.find((p) => p.id === 2);
  return (
    <section className="working section">
      <h2 className="section__title">
        Coming <span>soon</span>
      </h2>
      <h3 className="section__subtitle">Sur quoi je travaille actuellement</h3>
      {/* <div className="container_working">
        <WorkItems item={project} />
      </div> */}
      <div className="container_working">
        {Data.slice(0, 2).map((project) => (
          <WorkItems key={project.id} item={project} />
        ))}
      </div>
    </section>
  );
};

export default Working;
