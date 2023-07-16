import React from "react";

const Frontend = () => {
    return (
        <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>
            <div className="skills__box">

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="devicon-html5-plain skills__icon"></i>
                        <div>
                        <h3 className="skills__name">HTML</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="devicon-css3-plain skills__icon"></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="devicon-javascript-plain skills__icon"></i>
                        <div>
                        <h3 className="skills__name">JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="devicon-react-original skills__icon"></i>
                        <div>
                        <h3 className="skills__name">React</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="devicon-jamstack-original skills__icon"></i>
                        <div>
                        <h3 className="skills__name">Jamstack</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="devicon-git-plain skills__icon"></i>
                        <div>
                        <h3 className="skills__name">Git/GitHub</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Frontend;