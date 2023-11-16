/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const WorkItems = ({ item }) => {
  
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.alt} className="work__image" />

      <div className="work__content">
        <h3 className="work__title">{item.title}</h3>
        <p className="work__subtitle">{item.subtitle}</p>
        <a
          href={item.repo}
          target="_blank"
          title="page github associé"
          className="work__button"
          rel="noreferrer"
        >
          Repository GitHub
          <i className="uil uil-github-alt work__button-icon" alt="repository github"></i>
        </a>
      </div>   
    </div>
  )
}

export default WorkItems;