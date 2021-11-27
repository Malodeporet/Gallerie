import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import img11 from '../../assets/crayon-de-couleur/img11.jpeg';
import img23 from '../../assets/crayon-de-couleur/img23.jpeg';
import img24 from '../../assets/crayon-de-couleur/img24.jpeg';
import img25 from '../../assets/crayon-de-couleur/img24.jpeg';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



const Home =()=> {
    let data= [
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 23,
            imgSrc: img23,
        },
        {
            id: 24,
            imgSrc: img24,
        },
        {
            id: 25,
            imgSrc: img25,
        },

    ]
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
            style={{
                width: '500px',
                height: '600px',
                marginTop: '50px',
                borderRadius: '20px',
                boxShadow: '0px 0px 19px 0px rgba(0,0,0,0.24)'
            }}
        >
            {data.map((item, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <img src={item.imgSrc} style={{ width: '100%' }} />
                    </SwiperSlide>
                )
            })}
            
            
        </Swiper>
    )
}
export default Home;