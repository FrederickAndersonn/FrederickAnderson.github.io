import React from 'react'
import "./home.css"
import Me from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'
import MyResume from "../../assets/My_Resume.pdf"
import ScrollDown from './ScrollDown'
import Shape from './Shape'

const Home = () => {
  return (
    <section className="home container" id="home">
        <div className="intro">
            <img src={Me} alt="" className="home__img" width= "200px"/>
            <h1 className="home__name">Frederick Anderson</h1>
            <span className="home__education">Informatik Student in Hochschule Darmstadt</span>
            <HeaderSocials />
            <a href="#contact" className="btn">Hire Me</a>
            <a href={MyResume} className="btn">My Resume</a>
            <ScrollDown />
        </div>  
        <Shape />
    </section>
  )
}

export default Home