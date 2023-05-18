import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/MujiCart.css'

function Cart( {setCartValue, KoreanPrice, userId} ) {

  const [total, setTotal] = useState(0);
  const [prices, setPrices] = useState(0);
  const BuyPHP = 'http://leedh9276.dothome.co.kr/test/Buy_insert.php';
  const navigate = useNavigate();

  const addToBuy = () => {

    if(userId === '') {
      alert('로그인이 필요합니다.')
      navigate('/login');
    } else {

    const cartlist = localStorage.getItem('cart'); // 로컬스토리지에 저장된 값을 가져온다.
    const cartArray = JSON.parse(cartlist); // 로컬스토리지의 값은 JSON 문자열을 객체로 변환해야한다.
    const cart = cartArray.map((item) => { // 장바구니에 담긴 상품의 id와 수량을 가져온다.
      return {
        img: item.img,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }
    });

    const formData = new FormData();
    formData.append('id', userId);
    formData.append('cart', JSON.stringify(cart));
    // 알아야 할 것 : 배열을 넘길때 무조건 JSON.stringify를 할 것!!

    axios.post(BuyPHP, formData)
      .then((response) => {
        if(response.data.success === true) {
          alert('구매가 완료되었습니다.');
          setCartValue(0);
          localStorage.setItem('cart', JSON.stringify([]));
          navigate('/orderlist');
        }
      })
    }
  }



  useEffect(() => {
    totalCalc();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalCalc = () => {
    const tototalQuantity = cartArray.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    setTotal(tototalQuantity);

    // 각 항목의 수량 * 가격으로 가격 총합 구하기
    const totalPrice = cartArray.reduce((acc, cur) => {
      return acc + cur.quantity * cur.price;
    }, 0);

    setPrices(totalPrice);
  }
  

  const cartlist = localStorage.getItem('cart'); // 로컬스토리지에 저장된 값을 가져온다.

  if(!cartlist) {
    localStorage.setItem('cart', JSON.stringify([])); // 로컬스토리지에 cart라는 키값으로 빈 배열을 저장한다.
  }
  
  const cartArray = JSON.parse(cartlist); // 로컬스토리지의 값은 JSON 문자열을 객체로 변환해야한다.

  const cart_remove = (index) => {
    const updatedCart = [...cartArray]; // 배열을 복사한다.
    
    setTotal(total - updatedCart[index].quantity);
    setPrices(prices - updatedCart[index].quantity * updatedCart[index].price); // 장바구니 총 상품량과 가격을 업데이트한다.
    
    updatedCart.splice(index, 1); // 복사된 배열에서 인덱스에 해당하는 값을 삭제한다.
    const newCartValue = updatedCart.reduce((acc, item) => acc + item.quantity, 0); // 장바구니에 담긴 수량을 계산한다.
    setCartValue(newCartValue); // 장바구니에 담긴 수량을 업데이트한다.

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    //로컬 스토리지에 값을 저장한다.
  };

  const quantityPlus = (index) => () => {
    const updateQuantity = [...cartArray];
    updateQuantity[index].quantity += 1

    const updateValue = updateQuantity.reduce((acc, item) => acc + item.quantity, 0);
    setCartValue(updateValue);

    localStorage.setItem('cart', JSON.stringify(updateQuantity));
    totalCalc();
  }

  const quantityMinus = (index) => () => {
    const updateQuantity = [...cartArray];
    updateQuantity[index].quantity -= 1

    if(updateQuantity[index].quantity < 1){
      updateQuantity[index].quantity = 1
    }

    const updateValue = updateQuantity.reduce((acc, item) => acc + item.quantity, 0);
    setCartValue(updateValue);

    localStorage.setItem('cart', JSON.stringify(updateQuantity));
    totalCalc();
  }




  return (
    <div className='cart'>
      <h2>장바구니</h2>
      <ul className='cart-list-wrap'>
        <li className='cart-list-legend'>
              <span className='cart-item_name2'>제품명</span>
              <span className='cart-item_quantity2'>수량</span>
              <span className='cart-item_price'>소비자가</span>
              <span className='cart-item_total'>총 가격</span>
              <span className='cart-remove_btn'></span>
        </li>
        {cartArray.length === 0 ? <li className='cart-item_empty'>
          <span>장바구니가 비었습니다.</span>
        </li> :
          cartArray.map((item, index) => (
            <li key={index}  className='cart-list-info'>
              <img src={`http://leedh9276.dothome.co.kr/test/productimg/thumb/${item.img}`} alt={item.name} className='cart-item_thumb'/>
              <Link to = {`/product/${item.id}`} className='cart-item_name'>
                <span>{item.name}</span>
              </Link>
              <span className='cart-quantity-wrap'>
                <button className='cart-item_quantity_btn' onClick={quantityMinus(index)}>-</button>
                <span className='cart-item_quantity'>{item.quantity}</span>
                <button className='cart-item_quantity_btn' onClick={quantityPlus(index)}>+</button>
              </span>


              <span className='cart-item_price'>{KoreanPrice(item.price)}원</span>
              <span className='cart-item_total'>{KoreanPrice(item.quantity * item.price)}원</span>
              <button onClick={() => cart_remove(index)} className='cart-remove_btn'>삭제</button>
            </li>
          ))
        }
      </ul>
      <ul className='cart-list-total'>
        <li>총 수량 : <span>{total}</span> </li>
        <li>가격 : <span>{KoreanPrice(prices)}원</span></li>
      </ul>

      <div className='cart-btn-wrap'>
        <Link to='/products' className='cart-btn01'>쇼핑 계속하기</Link>
        <button className='cart-btn02' onClick={addToBuy}>구매하기</button>
      </div>

    </div>
  );
}

export default Cart;