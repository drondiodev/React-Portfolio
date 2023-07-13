const WorkItems = ({ item, deploymentLink }) => {
  return (
    <div className="work__card" key={item.id}>
        {/* <h1 className="hero-title">
            <span>It&apos;s</span>
            <div>coming</div>
            <div>soon</div>
      </h1> */}
        <img src={item.image} alt="" className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <a href={deploymentLink} target="_blank" title="page github associé" className="work__button" rel="noreferrer">
            Repository GitHub <i className="uil uil-github-alt" alt="repository github"></i>
        </a>
    </div>
  )
}

export default WorkItems