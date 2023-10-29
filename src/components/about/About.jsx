import React from 'react'
import "./about.css"
import Aboutimg from "../../assets/aboutme.png";
const About = () => {
  return (
    <section className="about container section" id='about'>
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
            <div className="image__container"><img src={Aboutimg} alt="" className="about__img" width="200px" /></div>
            <div className="about__data grid">
                <p className="about__description">I'm Frederick Anderson, a dedicated student currently in my 4th semester at Hochschule Darmstadt. My passion lies in the dynamic fields of software engineering and data analytics. With a relentless curiosity and a desire to explore the ever-evolving tech landscape, I'm committed to learning, growing, and pushing the boundaries of what's possible.
As a future software engineer and data analyst, I believe in the power of data-driven solutions and elegant code. I'm on a journey to make meaningful contributions to the world of technology. Join me as I navigate this exciting adventure, one code snippet at a time.
Let's build a smarter, data-driven future together.</p>
<p className="about__description__short">I'm Frederick Anderson, a dedicated student currently in my 4th semester at Hochschule Darmstadt. My passion lies in the dynamic fields of software engineering and data analytics.</p>
            </div>
            <div className="about__skills grid">
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">
                            C++
                        </h3>
                        <span className="skills_number"></span>
                    </div>

                    <div className="skills__bar">
                    <span className="skills__percentage cpp"></span>
                </div>
                </div>


                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">
                            JS
                        </h3>
                        <span className="skills_number"></span>
                    </div>
                    <div className="skills__bar">
                    <span className="skills__percentage javascript"></span>
                </div>
                </div>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">
                            HTML & CSS
                        </h3>
                        <span className="skills_number "></span>
                    </div>
                    <div className="skills__bar">
                    <span className="skills__percentage html"></span>
                </div>
                </div>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">
                            Java
                        </h3>
                        <span className="skills_number"></span>
                    </div>
                    <div className="skills__bar">
                    <span className="skills__percentage java"></span>
                </div>
                </div>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">
                            Python
                        </h3>
                        <span className="skills_number"></span>
                    </div>
                    <div className="skills__bar">
                    <span className="skills__percentage python"></span>
                </div>
                </div>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">
                            Excel
                        </h3>
                        <span className="skills_number"></span>
                    </div>
                    <div className="skills__bar">
                    <span className="skills__percentage excel"></span>
                </div>
                </div>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">
                            SQL
                        </h3>
                        <span className="skills_number"></span>
                    </div>
                    <div className="skills__bar">
                    <span className="skills__percentage sql"></span>
                </div>
                </div>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">
                            React
                        </h3>
                        <span className="skills_number"></span>
                    </div>
                    <div className="skills__bar">
                    <span className="skills__percentage php"></span>
                </div>
                </div>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">
                            Linux
                        </h3>
                        <span className="skills_number"></span>
                    </div>
                    <div className="skills__bar">
                    <span className="skills__percentage linux"></span>
                </div>
                </div>
                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">
                            PHP
                        </h3>
                        <span className="skills_number "></span>
                    </div>
                    <div className="skills__bar">
                    <span className="skills__percentage react"></span>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About