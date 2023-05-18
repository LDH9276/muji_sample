import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Index from './Route/Index';
import Login from './Login/Login';
import Header from './Header/Header';
import NotFound from './Route/NotFound';
import Product from './Products/Product';
import Sign from './Login/Sign';
import './App.css';
import Footer from './Footer/Footer';
import Cart from './Products/Cart';
import Sidebar from './Header/Sidebar';
import OrderList from './Products/OrderList';
import Modal from './Header/Modal';

function App(props) {
  const[userName, setUserName] = useState(null);
  const[userId, setUserId] = useState(null);
  const[userProfile, setUserProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const tokenChek = 'http://leedh9276.dothome.co.kr/test/verify.php';
  const [cartValue, setCartValue] = useState(0);
  const [cartValueText, setCartValueText] = useState(0);
  

  // 최초 실행함수
  useEffect(() => {
    verifyUser(); // 토큰검증
    cartQuantity(); // 장바구니확인
  }, []); 

  // 장바구니확인
  const cartQuantity = () => {
    let cart = localStorage.getItem('cart');
    if (cart === null) {
      setCartValue(0);
    } else {
      cart = JSON.parse(cart);
      const sum = cart.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);
      setCartValue(sum);
    }
  }

  useEffect(() => {
    if(cartValue > 99){
      setCartValueText('99')
      } else {
      setCartValueText(cartValue)
      }
  }, [cartValue]);    

  // 토큰 검증
  const verifyUser = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios(tokenChek, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        withCredentials: true
      });
      if (response.data) {
        setUserName(response.data.user_name);
        setUserId(response.data.user_id);
        setUserProfile(response.data.user_profile);
        setIsLoggedIn(true);
        if(response.data.success === false){
          setIsLoggedIn(false);
          setUserId('');
          setUserName('');
          setUserProfile('');
          localStorage.removeItem('token');
        }
      }
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
      setUserId('');
      setUserName('');
      setUserProfile('');
      localStorage.removeItem('token');
    }
  }

  // 로그아웃
  const logOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserId('');
    setUserName('');
    setUserProfile('');
  };

  // 가격 콤마
  const KoreanPrice = (num) => {
    num = Number(num);
    return num.toLocaleString('ko-KR');
  }

  // 모달 닫기
  const [modal, setModal] = useState(true)
  const modalClose = () => {
    setModal(false)
  }

  return (
      <>
        {modal === true ? (
          <Modal modalClose={modalClose} />) : ''
        }
        <Header 
          userName={userName} 
          logOut={logOut} 
          isLoggedIn={isLoggedIn} 
          userId={userId} 
          userProfile={userProfile} 
          cartValue={cartValue}
          cartValueText={cartValueText}
        />
        <Sidebar 
          cartValue={cartValue}
          cartValueText={cartValueText}
        />
      <Routes>
        <Route 
          exact path="/" 
          element={
          <Index KoreanPrice={KoreanPrice}/>} 
        />
        <Route 
          path="/login" 
          element={<Login isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
          userName={userName} 
          setUserName={setUserName} 
          setUserId={setUserId} 
          userId={userId} 
          setUserProfile={setUserProfile}/>} 
        />
        <Route 
          path="/signup" 
          element={<Sign />} 
        />
        <Route 
          path="/product/:id" 
          element={
            <Product 
              cartValue={cartValue}
              setCartValue={setCartValue}
              KoreanPrice={KoreanPrice}
            />
          } 
        />
        <Route 
          path="/*" 
          element={<NotFound />} 
        />
          <Route 
            path="/cart" 
            element={
              <Cart   
                setCartValue={setCartValue}
                KoreanPrice={KoreanPrice}
                userId={userId} 
              />
            } 
          />
        <Route
          path="/orderlist"
          element={<OrderList  key={userId} userId={userId}/>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
