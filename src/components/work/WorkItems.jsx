/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const WorkItems = ({ item }) => {
  return (
    <section className="work__card">
      <div key={item.id}>
        <img src={item.image} alt={item.alt} className="work__img" />
      </div>
      <div>
        <h3 className="work__title">{item.title}</h3>
        <p className="work__subtitle">{item.description}</p>
        <a
          href={item.repo}
          target="_blank"
          title="page github associé"
          className="work__button"
          rel="noreferrer"
        >
          Repository GitHub
        </a>
      </div>
    </section>
  );
};

export default WorkItems;
