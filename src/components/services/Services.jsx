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
{/*             <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Responsible for building the user interface and user experience of websites and web applications.</p>
            </li> */}
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Ensuring that the website or application looks and functions well on various devices and screen sizes, including desktops, laptops, tablets, and smartphones.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Designing the visual elements of the user interface, including layout, color schemes, typography, buttons, icons, and other graphical elements.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Conducting tests to identify and fix any issues or bugs in the frontend code to ensure the application works as intended.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Optimizing the frontend code and assets to improve website loading times and overall performance.</p>
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
              <p>Building the backend logic and functionality of web applications using programming languages such as Node JS, Python, PHP or others.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Utilizing backend frameworks such as Django (Python), or Express.js (Node.js) to streamline development and enhance application efficiency.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Integrating with external services and APIs to fetch or send data to other systems.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Conducting tests to identify and fix any issues or bugs in the backend code to ensure the application works as intended.</p>
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
              <p>Designing the database schema and handling data storage and retrieval using database management systems like MySQL, MongoDB, or others.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Creating a well-structured and efficient database schema that meets the specific requirements of the application or system.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Optimizing database queries, indexing, and configuration to improve performance and reduce response times.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
