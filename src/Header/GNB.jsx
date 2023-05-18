import React from 'react';
import { Link } from 'react-router-dom';
import './css/GNB.css';

function GNB( {searchboxEvent, searchBtn, cartValue, cartValueText} ) {

  return (
    <nav className='GNB'>
      <ul>
        <li>인기상품</li>
        <li>주간특가</li>
        <li>의류 &middot; 패션</li>
        <li>생활용품</li>
        <li>식품</li>
        <li onClick={searchboxEvent}>
          <img src={`${process.env.PUBLIC_URL}/images/${searchBtn}`} alt="검색" className='searchbox-btn'/>
        </li>
        <li className='cartlist'>
          <Link to ='/cart'>
          <img src={`${process.env.PUBLIC_URL}/images/cart.svg`} alt="장바구니" />
          {cartValue === 0 ? '' : <span className='cart-badge'>{cartValueText}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GNB;