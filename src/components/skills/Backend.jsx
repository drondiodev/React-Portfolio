import React from 'react';
import prisma from "../../assets/prisma.png";

const Backend = () => {
    return (
        <section className="skills__content" aria-label="Compétences backend">
            <header>
                <i className="uil uil-server skills__icon"></i>
                <h2 className="skills__title">Backend</h2>
            </header>
            <div className="skills__box">
                <ul className="skills__group" role="list">
                    <li className="skills__data" role="listitem">
                        <i className="devicon-nodejs-plain skills__icon"></i>
                        <p className="skills__name">NodeJs</p>
                    </li>
                    <li className="skills__data" role="listitem">
                        <i className="devicon-express-original skills__icon"></i>
                        <p className="skills__name">ExpressJS</p>
                    </li>
                </ul>
                <ul className="skills__group" role="list">
                    <li className="skills__data" role="listitem">
                        <i className="devicon-postgresql-plain skills__icon"></i>
                        <p className="skills__name">PostgreSQL</p>
                    </li>
                    <li className="skills__data" role="listitem">
                        <i className="devicon-prisma skills__icon"></i>
                        <p className="skills__name new">    ... Prisma</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Backend