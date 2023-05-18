import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './css/MujiWalker.css'

function MujiWalker( {list, KoreanPrice} ) {

  return (
    <article className='main-walker'>
      <p className='main-info'>
        <span>MUJI WALKER</span>
      </p> 
      <h2 className='main-title'>무지 특별전</h2>

      <div className='main_walker-list'>
        <div className='main_walker-sales'>
          <img src={`http://leedh9276.dothome.co.kr/test/productimg/muji_walker.png`} alt={'이벤트1'} className='main_walker-banner'/>
        </div>
        {list.slice(0, 2).map(item => (
          <div key={item.no} className='main-walker__list-item'>
            <Link 
              to={`/product/${item.no}`} 
              className='muji_walker-item'
            >
              <img src={`http://leedh9276.dothome.co.kr/test/productimg/${item.img}`} alt={item.name} className='muji_walker-itemimg'/>
              <p className='main-item-title'>{item.name}</p>
              <p className='main-item-price'>₩ {KoreanPrice(item.price)}</p>
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
}

export default MujiWalker;