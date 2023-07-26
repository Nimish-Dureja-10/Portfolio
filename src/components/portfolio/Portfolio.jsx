import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'AirBnb Clone',
    github: 'https://github.com/Nimish-Dureja-10/airbnb',
    demo: 'https://github.com/Nimish-Dureja-10/airbnb',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Ecommerce Website',
    github: 'https://github.com/Nimish-Dureja-10/ecommerce-website',
    demo: 'https://github.com/Nimish-Dureja-10/ecommerce-website',
  },
  {
    id: 3,
    image: IMG2,
    title: 'Part-Time Job Protal',
    github: 'https://github.com/itsPriyanshuhere/Part-Timerz',
    demo: 'https://github.com/itsPriyanshuhere/Part-Timerz',
  },
  {
    id: 4,
    image: IMG1,
    title: 'Bakery Site',
    github: 'https://github.com/Nimish-Dureja-10/BakerySite',
    demo: 'https://github.com/Nimish-Dureja-10/BakerySite',
  },
  {
    id: 5,
    image: IMG1,
    title: 'Tindog Website',
    github: 'https://github.com/Nimish-Dureja-10/Tindog',
    demo: 'https://github.com/Nimish-Dureja-10/Tindog',
  },
  {
    id: 6,
    image: IMG1,
    title: "Client's Portfolio",
    github: 'https://aayushmishra.in/',
    demo: 'https://aayushmishra.in/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className='portfolio__image'>
                  <img src={image} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio