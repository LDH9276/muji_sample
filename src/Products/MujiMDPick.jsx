import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import './css/MujiMDPick.css';

// swiper module
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function MujiMDPick( {list, KoreanPrice} ) {

  SwiperCore.use([Navigation]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <article className='muji_mdpick'>
      <p className='main-info'>
        <span>MUJI PRODUCT</span>
      </p>
      <h2 className='main-title'>MD's PICK</h2>
      <Swiper
        slidesPerView={6}
        breakpoints={{
          320 : {
            slidesPerView : 2
          },
          768 : {
            slidesPerView : 4
          },
          1025 : {
            slidesPerView : 6
          }
        }}
        loopedSlides={6}
        space spaceBetween={30}
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
          <SwiperSlide key={item.no} className='muji_new-slide'>
            <Link 
              to={`/product/${item.no}`} 
              className='muji_new-slide-item'
            >
            <div className="muji_new-slide-img_wrap">
              <img src={`http://leedh9276.dothome.co.kr/test/productimg/${item.img}`} alt={item.name} className='muji_new-slide-item__img'/>
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

export default MujiMDPick;