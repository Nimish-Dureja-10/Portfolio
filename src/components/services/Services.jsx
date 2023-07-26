import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer !!!</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Database Management</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>lorem epison perjjfje feirehd.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services