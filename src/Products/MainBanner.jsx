import React from 'react';

// swiper module
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function MainBanner(props) {


  return (
    <div className='main-banner'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='main-banner-slide'>
            <img src={`http://leedh9276.dothome.co.kr/test/productimg/banner00.png`} alt={'배너1'} className='main-banner-slide-item__img'/>
        </SwiperSlide>
        <SwiperSlide className='main-banner-slide'>
            <img src={`http://leedh9276.dothome.co.kr/test/productimg/banner01.png`} alt={'배너1'} className='main-banner-slide-item__img'/>
        </SwiperSlide>
        <SwiperSlide className='main-banner-slide'>
            <img src={`http://leedh9276.dothome.co.kr/test/productimg/banner02.png`} alt={'배너1'} className='main-banner-slide-item__img'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainBanner;