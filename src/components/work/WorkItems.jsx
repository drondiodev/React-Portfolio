const WorkItems = ({ item, deploymentLink }) => {
  return (
    <div className="work__card" key={item.id}>
        <h1 className="hero-title">
            <span>It&apos;s</span>
            <div>coming</div>
            <div>soon</div>
        </h1>
        <h3 className="work__title">{item.title}</h3>
        <a href={deploymentLink} target="_blank" className="work__button" rel="noreferrer">
            Répo GitHub <i className="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default WorkItems