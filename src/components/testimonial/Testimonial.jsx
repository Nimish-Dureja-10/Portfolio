import React from 'react'
import './testimonial.css'
import IMG1 from '../../assets/testimonial1.jpeg'

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: IMG1,
    name: 'Ayush Mishra',
    review: "Nimish's Web Development's website features a sleek and modern design, making it visually appealing and easy to navigate. The layout is intuitive, and theresponsive design ensures a seamless experience across different devices."
  },
  {
    id: 2,
    image: IMG1,
    name: 'Karan Dureja',
    review: "The portfolio section showcases a diverse range of impressive projects. Each entry includes detailed descriptions and live links to view the websites they've built. It's evident that they have experience in various industries and a keen eye for design."
  },
  {
    id: 3,
    image: IMG1,
    name: 'Kushagra Singh',
    review: "Nimish's Web Development presents their skills and services clearly. From front-end to back-end development, they cover a wide array of technologies, including HTML5, CSS3, JavaScript, React, Node.js, and more. Their expertise is well-defined, giving potential clients confidence in their capabilities.",
  },
  {
    id: 4,
    image: IMG1,
    name: 'Priyanshu Pandey',
    review: "The website performs exceptionally well in terms of loading speed, contributing to an excellent user experience. It shows that they value optimization and understand the importance of fast-loading websites."
  },
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Friends and Family</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonial__container' 
        // install Swiper modules
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({id,image,name,review})=> {
            return (
              <SwiperSlide className='testimonial' key={id}>
                <div className='client__avatar'>
                  <img src={image} alt='client_img'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                 {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial