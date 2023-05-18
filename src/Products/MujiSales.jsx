import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './css/MujiSales.css'

function MujiSales( {list, KoreanPrice} ) {
    
  return (
    <article className='main-event'>
      <p className='main-info'>
        <span>MUJI EVENT</span>
      </p>
      <h2 className='main-title'>무지 이벤트</h2>

      <div className='main_event-list'>
        <div className='main_event-sales'>
          <img src={`http://leedh9276.dothome.co.kr/test/productimg/muji_sale.png`} alt={'이벤트1'} className='main_event-banner'/>
        </div>
        {list.slice(0, 8).map(item => (
          <div key={item.no} className='main-event__list-item'>
            <Link 
              to={`/product/${item.no}`} 
              className='muji_sale-item'
            >
              <div className="muji_sale-img_wrap">
                <img src={`http://leedh9276.dothome.co.kr/test/productimg/${item.img}`} alt={item.name} className='muji_sale-itemimg'/>
              </div>
              <p className='main-item-title'>{item.name}</p>
              <p className='main-item-price'>₩ {KoreanPrice(item.price)}</p>
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
}

export default MujiSales;