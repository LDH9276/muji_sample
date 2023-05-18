import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LNB from './LNB';
import './css/Header_sub.css';
import LNBMobile from './LNBMobile';


function HeaderSub({setToggleState, toggleState, userName, logOut, setToggle, userProfile, setAct}) {

  const [headerSub, setHeaderSub] = useState('header-sub');
  const navigate = useNavigate();

  useEffect(() => {
    if (toggleState === 1) {
      setHeaderSub('header-sub active');
    } else {
      setHeaderSub('header-sub');
    }
  }, [toggleState]);

  const login = () => {
    setToggleState(0);
    setAct('');
    navigate('/login');
  }
  const logOutBtn = () => {
    setToggleState(0);
    setAct('');
    logOut();
  }

  const register = () => {
    setToggleState(0);
    setAct('');
    navigate('/signup');
  }
  const toBuyList = () => {
    setToggleState(0);
    setAct('');
    navigate('/orderlist');
  }

  return (
    <div className={headerSub}>
      <div className="header-sub-wrap">

        {/* LMB 넣기 */}
        <LNB />
        <LNBMobile />

        {/* 로그인 여부에 따라 다른 화면 보여주기 */}
        <div className='header-profile-wrap'>
          {userName ? (
            <div className='profile-wrap'>
              {userProfile !== null || userProfile !== '.' ? (
                //로그인 상태일시
                <img src={`http://leedh9276.dothome.co.kr/test/files/${userProfile}`} alt="회원 로그인" />) : (
                <img src="http://leedh9276.dothome.co.kr/test/img/profile/profile.png" alt="회원 로그인" />
                )
              }
              <p className='profile-info'>
                <span>환영합니다 <br />
                <strong>{userName}님.</strong> 
                </span>
                <button onClick={logOutBtn} className='profile-btn'>로그아웃</button>
              </p>
              <p className='my-profile'>
                <span>마이페이지</span>
                <button onClick={toBuyList}>주문내역</button>
              </p>
            </div>
          ) : (
            // 비회원 상태일시
            <div className='profile-wrap'>
              <img src="http://leedh9276.dothome.co.kr/test/img/profile/defaultprofile.png" alt="비회원 로그인" />
              <p className='profile-info'>
                <span>로그인 되어 있지 않습니다. <br />
                <strong>로그인</strong> 해주세요.
                </span>
              </p>
              <p className='profile-info'>
                <button onClick={login} className='login-btn'>로그인</button>
                <button onClick={register} className='join-btn'>회원가입</button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderSub;