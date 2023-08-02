import React from "react";

const Frontend = () => {
    return (
        <section className="skills__content" aria-label="Compétences frontend">
            <header>
                <i className="uil uil-arrow skills__icon" alt=""></i> 
                <h2 className="skills__title">Frontend</h2>
            </header>
            <div className="skills__box">

                <ul className="skills__group" role="list">
                    <li className="skills__data" role="listitem">
                        <i className="devicon-html5-plain skills__icon" alt=""></i>
                        <p className="skills__name">HTML</p>
                    </li>
                    <li className="skills__data" role="listitem">
                        <i className="devicon-css3-plain skills__icon" alt=""></i>
                        <p className="skills__name">CSS</p>
                    </li>
                    <li className="skills__data" role="listitem">
                        <i className="devicon-javascript-plain skills__icon" alt=""></i>
                        <p className="skills__name">JavaScript</p>
                    </li>
                </ul>
                <ul className="skills__group" role="list">
                    <li className="skills__data" role="listitem">
                        <i className="devicon-react-original skills__icon" alt=""></i>
                        <p className="skills__name">React</p>
                    </li>
                    <li className="skills__data" role="listitem">
                        <i className="devicon-jamstack-original skills__icon" alt=""></i>
                        <p className="skills__name">Jamstack</p>
                    </li>
                    <li className="skills__data" role="listitem">
                        <i className="devicon-git-plain skills__icon" alt=""></i>
                        <p className="skills__name">Git/GitHub</p>
                    </li>
                </ul>
            </div>
        </section>


    );
};

export default Frontend;