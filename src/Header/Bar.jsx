import React from 'react';
import { Link } from 'react-router-dom';
import './css/Hbar.css';
import GNB from './GNB';
import GNBMobile from './GNBMobile';

function HeaderBar({toggle, searchboxEvent, searchBtn, act, cartValue, cartValueText}) {

  return (
    <div className="HeaderWrap">
      <h1>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/images/logo-black.svg`} alt="" />
        </Link>
      </h1>

      <div className='HeaderBtn-wrap'>
        <GNB 
          searchboxEvent={searchboxEvent} 
          searchBtn={searchBtn}
          cartValue={cartValue}
          cartValueText={cartValueText}
        />
        <GNBMobile />
        <button type="button" className={`ToggleSwitch ${act}`} onClick={toggle}>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </button>
      </div>
    </div>
  );
}

export default HeaderBar;
