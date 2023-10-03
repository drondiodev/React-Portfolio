/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const WorkItems = ({ item }) => {
  
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__image" />

      <div className="work__content">
        <h3 className="work__title">{item.title}</h3>
        <p className="work__subtitle">{item.subtitle}</p>

        <div className="work__tech">
          {item.technos.map((stack, index ) => {
            return (
              <p key={index} className="work__tech-item">{stack.stack}</p>
            )
          })}
        </div>

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











// const WorkItems = ({item}) => {
//   return (
//     <div className="work__card" key={item.id}>

//         <img src={item.image} alt="" className='work__img'/>
//         <h3 className="work__title">{item.title}</h3>
//         <a href={deploymentLink} target="_blank" title="page github associé" className="work__button" rel="noreferrer">
//             Repository GitHub <i className="uil uil-github-alt" alt="repository github"></i>
//         </a>
//     </div>
//   )
// }

export default WorkItems;



      {/* <h1 className="hero-title">
          <span>It&apos;s</span>
          <div>coming</div>
          <div>soon</div>
      </h1> */}