import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import './css/MujiWeather.css';

// swiper module
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function MujiWeather( {list, KoreanPrice} ) {

  SwiperCore.use([Navigation]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <article className='muji_weather'>
      <p className='main-info'>
        <span>MUJI PRODUCT</span>
      </p>
      <h2 className='main-title'>계절의 추천</h2>
      <Swiper
        slidesPerView={4}
        breakpoints={{
          320 : {
            slidesPerView : 2
          },
          768 : {
            slidesPerView : 4
          },
          1025 : {
            slidesPerView : 4
          }
        }}
        loopedSlides={4}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: false }}
        navigation={{ 
          prevEl: prevRef.current, 
          nextEl: nextRef.current
        }} 
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {list.slice(0, 12).map(item => (
          <SwiperSlide key={item.no} className='muji_weather-slide'>
            <Link 
              to={`/product/${item.no}`} 
              className='muji_weather-slide-item'
            >
              <div className="muji_weather-slide-img_wrap">
                <img src={`http://leedh9276.dothome.co.kr/test/productimg/${item.img}`} alt={item.name} className='muji_weatherslide-item__img'/>
              </div>
              <p className='main-item-title'>{item.name}</p>
              <p className='main-item-price'>₩ {KoreanPrice(item.price)}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev" ref={prevRef}> 
          <img src={`${process.env.PUBLIC_URL}/images/slide-prev.svg`} alt="이전" />
      </div>
      <div className="swiper-button-next" ref={nextRef}>
          <img src={`${process.env.PUBLIC_URL}/images/slide-next.svg`} alt="다음" />
      </div>
    </article>
  );
}

export default MujiWeather;