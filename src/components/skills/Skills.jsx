import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <h3 className="section__subtitle">Ma stack technique</h3>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
