import React from 'react';
import './footer.css'

function Footer(props) {
  return (
    <footer>
      <div className="f-wrap">
        <img src={`${process.env.PUBLIC_URL}/images/logo-white.svg`} alt="" className='footer-logo'/>
        <div className="f-top">
        <p className="f-top-toggle">메뉴보기           
          <img src={`${process.env.PUBLIC_URL}/images/logo-black.svg`} alt="" />
        </p>
          <nav className="f-menu">
            <ul>
              <li>로그인 / 회원가입</li>
              <li><strong>온라인 전용 서비스</strong></li>
              <li>고객 지원</li>
              <li>매장 찾기</li>
              <li>회사 정책</li>
              <li><strong>개인 정보 정책</strong></li>
              <li><strong>이용 약관</strong></li>
              <li>회사소개</li>
              <li>보도자료</li>
              <li>투자자 정보</li>
              <li>구인 정보</li>
            </ul>
          </nav>
        </div>
        <div className="f-bottom">
          <p>
            대표 이사: 무인양행㈜ <br /> 사업장 주소: 경기도 안양시 XX구 XXXX로 XX <br /> 사업자 등록번호: 833-00-00000
          </p>
          <p>
            통신 판매 번호: 제 2023-XXXX-XXXX 호 <br /> 고객 지원센터 080-XXX-XXXX <br /> 이메일: bno@XXX.XXX <br /> 호스팅 서비스: Microsoft Azure
          </p>
        </div>
        <address>© MUJI 2023</address>
      </div>
    </footer>
  );
}

export default Footer;