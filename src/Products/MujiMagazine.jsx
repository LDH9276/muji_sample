import React from 'react';
import './css/MujiMagazine.css';

function MujiMagazine(props) {
  return (
    <article id='magazine'>
      <div className='magazine-wrap'>
        <div className="magazine_title-wrap">
          <img src={`${process.env.PUBLIC_URL}/images/logo-muji.svg`} alt={'무지 매거진'} className='magazine-banner'/>
          <h2 className='magazine-title'>Mail magagine</h2>
          <p className='magazine-info'>소식과 다양한 브랜드 스토리를 매월 1회 <br/> 10% 쿠폰과 함께 보내드립니다.</p>
          <button type='button' className='magazine-btn'>메일 매거진 신청          <img src={`${process.env.PUBLIC_URL}/images/next-btn.svg`} alt={'메일 매거진 신청'} className='magazine-arrow'/>
          </button>
        </div>
        <ul className='magazine_info-wrap'>
          <li>
            <img src={`${process.env.PUBLIC_URL}/images/logo1.svg`} alt={'무지 매거진1'} className='magazine-img'/>
            <p className='magazine-info-text'>
              <span>가구 &middot; 가전 패브릭</span>
              <span>BLOG</span>
            </p>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/images/logo2.png`} alt={'무지 매거진1'} className='magazine-img'/>
            <p className='magazine-info-text'>
              <span>모바일 애플리케이션</span>
              <span>MUJI passport</span>
            </p>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/images/logo3.svg`} alt={'무지 매거진1'} className='magazine-img'/>
            <p className='magazine-info-text'>
              <span>SNS</span>
              <span>MUJI 인스타그램</span>
            </p>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/images/logo4.svg`} alt={'무지 매거진1'} className='magazine-img'/>
            <p className='magazine-info-text'>
              <span>BLOG</span>
              <span>MUJI 블로그</span>
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default MujiMagazine;