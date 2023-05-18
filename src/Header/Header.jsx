import React, {useState} from 'react';
import HeaderBar from './Bar';
import Styles from './css/Header.module.css';
import HeaderSub from './HeaderSub';
import SearchBox from './SearchBox';

function Header({ userName, logOut, isLoggedIn, userId, userProfile, cartValue, cartValueText}) {
  const [toggleState, setToggleState] = useState(0);
  const [searchbox, setSearchbox] = useState('searchbox');
  const [searchBtn, setSearchBtn] = useState('search.svg');
  const [act, setAct] = useState('');

  const toggle = () => {
    if (toggleState === 0) {
      setToggleState(1);
      setAct('Active');
    } else {
      setToggleState(0);
      setAct('');
    }
  };

  const searchboxEvent = () => {
    if (searchbox === 'searchbox') {
      setSearchbox('searchbox active');
      setSearchBtn('close.svg');
    } else {
      setSearchbox('searchbox');
      setSearchBtn('search.svg');
    }
  }
  

  return (
    <header className={Styles.Headers}>
      <div className={Styles.HeaderWrap}>
        <HeaderBar 
        // 토글 State
        toggle={toggle} 
        toggleState={toggleState} 
        searchboxEvent={searchboxEvent}
        searchBtn={searchBtn}
        act={act}
        cartValue={cartValue}
        cartValueText={cartValueText}
        />
      </div>

      <SearchBox searchbox={searchbox} />

      <HeaderSub 
      // 로그인 state
      // ID는 userID 이름은 userName으로
      userName={userName} 
      logOut={logOut} 
      isLoggedIn={isLoggedIn} 
      userId={userId} 
      userProfile={userProfile}

      // 토글 정보
      setToggleState={setToggleState}
      toggleState={toggleState} 
      toggle={toggle}
      setAct={setAct}
      />
    </header>
  );
}

export default Header;
