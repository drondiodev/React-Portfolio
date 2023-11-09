import "./services.css";

const Services = () => {
    return (
        <section className="services section" id="services">
        <h2 className="section__title">Compétences</h2>
        <h3 className="section__subtitle">Ce que je propose</h3>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <h3 className="services__title">
                        Développeur Web
                        </h3>
                    </div>
                <div>
                    <p className="services__modal-description">
                        Ayant terminé ma formation de développeur web spécialisé en accessibilité numérique, je me lance dans une nouvelle aventure professionnelle.
                    </p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            
                            <p className="services__modal-info">Mon super pouvoir : la résolution de problèmes.</p>
                        </li>
                        <li className="services__modal-service">
                            
                            <p className="services__modal-info">Grâce à mon parcours, c’est ma maturité, ma faculté d’adaptation et ma persévérance que je peux mettre à votre service.</p>
                        </li>
                        <li className="services__modal-service">
                            
                            <p className="services__modal-info">Organisé, je sais prendre en compte les priorités, prendre l&apos;initiative si nécessaire et travailler en autonomie.</p>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="services__content">
                <div>
                    <h3 className="services__title">Mes atouts</h3>
                </div>
                <div>
                    <p className="services__modal-description">
                        Excellent communicateur et collaborateur, je comprends que vous ne vous souciez pas toujours de <strong>comment</strong> c&apos;est fait, juste que c&apos;est bien fait et à temps.
                    </p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                          
                            <p className="services__modal-info">Je monte en compétences pour encadrer toutes les phases d&apos;un projet.</p>
                        </li>
                        <li className="services__modal-service">
                            
                            <p className="services__modal-info">
                            Si vous cherchez un professionel passionné par son travail, prêt à relever de nouveaux défis avec enthousiasme, je vous invite à nous rencontrer dès maintenant.
                            </p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Services;