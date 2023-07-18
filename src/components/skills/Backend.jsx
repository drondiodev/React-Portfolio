import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <i className="uil uil-server skills__icon"></i>
        <h3 className="skills__title">Backend</h3>
        <div className="skills__box">

            <div className="skills__group">
            <div className="skills__data">
                <i className="devicon-nodejs-plain skills__icon"></i>

                <div>
                <h3 className="skills__name">NodeJs</h3>
                </div>
            </div>

            <div className="skills__data">
                <i className="devicon-express-original skills__icon"></i>

                <div>
                <h3 className="skills__name">ExpressJS</h3>
                </div>
            </div>
            </div>

            <div className="skills__group">
            <div className="skills__data">
                <i className="devicon-postgresql-plain skills__icon"></i>

                <div>
                <h3 className="skills__name">PostgreSQL</h3>
                </div>
            </div>

            <div className="skills__data">
                <i className="devicon-sequelize-plain skills__icon"></i>

                <div>
                <h3 className="skills__name">Sequelize</h3>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Backend