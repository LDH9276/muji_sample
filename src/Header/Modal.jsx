import React from 'react';
import './css/modal.css'

function Modal({modalClose}) {

  return (
    <div className="modal">
      <div className="modal-wrap">
        <p>Mady By</p>
        <img src={`${process.env.PUBLIC_URL}/images/logo-ldh.svg`} alt="로고" className="modal-logo" />
        <p className="modal-notice_title">포트폴리오 사이트입니다.</p>
        <p className="modal-notice_info">해당 사이트는 무인양품와 무관하며, 사진의 저작권은 MUJI에 있습니다. <br />
        회원가입시 민감한 정보를 쓰지 말아주세요.</p>
        <p className="modal-notice_btn">해당 주의사항을 확인하셨으면 아래 버튼을 눌러주세요.</p>
        <button className="modal-notice_close" onClick={modalClose}>확인</button>
        <script src="./script/modal.js"></script>
      </div>
  </div>
  );
}

export default Modal;