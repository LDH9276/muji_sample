import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

function Sidebar( {cartValue, cartValueText} ) {

  const [sidebar, setSidebar] = useState('nav-sidebar');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { capture: true }); // 스크롤 이벤트 등록
    return () => {
      window.removeEventListener('scroll', handleScroll); 		// 스크롤 이벤트 제거
    };
    
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;	// 현재 스크롤 위치
    setScrollY(scrollTop);		// 스크롤 이벤트가 시작되면 요값이 변경된다
  }

  useEffect(() => {
    if (scrollY < 200) {
      setSidebar('nav-sidebar');
    } else {
      setSidebar('nav-sidebar active');
    }
  }, [scrollY]);
    
  
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
  }


  return (
    <nav className={sidebar}>
      <ul>
        <li className='sidebar-cartlist'>
          <Link to='/cart'>
            <img src={`${process.env.PUBLIC_URL}/images/cart-white.svg`} alt="장바구니" className='sidebar-cart_icon'/>
            {cartValue === 0 ? '' : <span className='sidebar-cart_badge'>{cartValueText}</span>}
          </Link>
        </li>
        <li className='sidebar-totop'>
          <button onClick={scrollToTop}>
            <img src={`${process.env.PUBLIC_URL}/images/topbtn.svg`} alt="상단으로" className='sidebar-top'/>
          </button>
        </li>
        <li className='sidebar-tobottom'>
          <button onClick={scrollToBottom}>
            <img src={`${process.env.PUBLIC_URL}/images/topbtn.svg`} alt="하단으로" className='sidebar-bottom'/>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;