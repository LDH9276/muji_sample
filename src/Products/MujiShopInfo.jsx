import React from 'react';
import './css/MujiShopInfo.css';

function MujiShopInfo(props) {
  return (
    <div>
      <div className="main-info-wrap">
        <div className='shop-info-wrap'>
        <img src={`${process.env.PUBLIC_URL}/images/shop.png`} alt={'매장'} className='shop-info-bg'/>

          <div className='shop-info'>
            <div className="shop-store">
              <p className='shop-info-subtitle'>체험 스토어 안내</p>
              <h2 className='shop-info-title'>전국 매장 위치</h2>
              <p className='shop-info-text'>무지의 체험 스토어는 전국에 10개가 있습니다. <br/> 매장에서는 무지의 다양한 상품을 직접 만져보고, <br/> 체험하실 수 있습니다.</p>
              <button type='button' className='shop-info-btn'>매장 찾기 
                <img src={`${process.env.PUBLIC_URL}/images/next-btn.svg`} alt={'매장 찾기'} className='shop-info-arrow'/>
              </button>
            </div>
            <div className='shop-QnA'>
              <h2 className='shop-sub-title'>도움이 필요하신가요?</h2>
              <p className='shop-sub-text'>무지의 상품과 서비스에 대한 문의는 <br/> 고객센터로 문의해주세요.</p>
              <button type='button' className='shop-info-btn'>매장 찾기 
                <img src={`${process.env.PUBLIC_URL}/images/next-btn.svg`} alt={'매장 찾기'} className='shop-info-arrow'/>
              </button>
            </div>
            <div className="shop-call">
              <h2 className='shop-sub-title'>연락해주세요</h2>
              <p className='shop-sub-text'>무지의 상품과 서비스에 대한 문의는 <br/> 고객센터로 문의해주세요.</p>
              <button type='button' className='shop-info-btn'>매장 찾기 
                <img src={`${process.env.PUBLIC_URL}/images/next-btn.svg`} alt={'매장 찾기'} className='shop-info-arrow'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MujiShopInfo;