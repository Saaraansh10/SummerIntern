import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/about14.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Saaraansh Mishra</h1>
        <h5 className="text-light">Frontend-Web Developer and a Coding Enthusiast</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header