import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Nimish Dureja</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://github.com/Nimish-Dureja-10'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/nimish-dureja-9b7150221/'><AiFillLinkedin /></a>
        <a href='https://www.instagram.com/nimishdureja/'><AiFillInstagram /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Nimish Dureja. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer