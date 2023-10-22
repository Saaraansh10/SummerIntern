import React from 'react'
import  './Testimonials.css'
import AVTR1 from '../../assets/avatar1 (1).jpg'
import AVTR2 from '../../assets/avatar2 (1).jpg'
import AVTR3 from '../../assets/avatar3 (1).jpg'
import AVTR4 from '../../assets/avatar4 (1).jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data= [
  {
    avatar: AVTR1,
    name: 'Samiksha Mishra',
    review: 'The website looks simple and sober but it has some sound technical qualities!!'
  },
  {
    avatar: AVTR2,
    name: 'Avyukt R Kumar',
    review: 'This website gives a great usage of react and its applications!!'
  },
  {
    avatar: AVTR3,
    name: 'Rishi Raj',
    review: 'The website looks amazing and it can be very much used as an example of react project!!'
  },
  {
    avatar: AVTR4,
    name: 'Smriti Priya',
    review: 'The website looks very interesting and the designed portfolio can become a template for bigger projects!!'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Viewers</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       modules={[ Navigation,Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt='avt1-img'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials