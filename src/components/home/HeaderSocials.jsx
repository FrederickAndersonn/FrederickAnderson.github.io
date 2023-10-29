import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://github.com/FrederickAndersonn" className="home__social-link" target="_blank" rel="noreferrer noopener">
            <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/frederick-anderson-770252214" className="home__social-link" target="_blank" rel="noreferrer noopener">
            <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://instagram.com/frederickanderson_?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" className="home__social-link" target="_blank"rel="noreferrer noopener" >
            <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="www.twitter.com" className="home__social-link" target="_blank" rel="noreferrer noopener">
            <i className="fa-brands fa-twitter"></i>
        </a>
    </div>
  )
}

export default HeaderSocials