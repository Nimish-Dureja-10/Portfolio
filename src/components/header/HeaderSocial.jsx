import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/nimish-dureja-9b7150221/' target='_blank'>
            <BsLinkedin />
        </a>
        <a href='https://github.com/Nimish-Dureja-10' target='_blank'>
            <BsGithub />
        </a>
        <a href='https://www.instagram.com/nimishdureja/' target='_blank'>
            <BsInstagram />
        </a>
    </div>
  )
}

export default HeaderSocial