import React, {useState, useEffect} from 'react';
import './css/OrderList.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function OrderList( {userId} ) {

  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const productListPHP = 'http://leedh9276.dothome.co.kr/test/Buy_Read.php';

  const userCheck = () => {
    const user = localStorage.getItem('token');
    if(!user) {
      navigate('/login');
    }
  }

  const formData = new FormData();
  formData.append('id', userId);

  const readList = async () => {
    try {
      const response = await axios.post(productListPHP, formData);
      const productList = response.data.list.map((item) => {
        item.product = JSON.parse(item.product); // JSON 문자열을 객체로 변환
        return item;
      });
      const orderDate = productList.map((item) => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        item.date = `${year}년 ${month}월 ${day}일`;
        return item;
      });
      setList(productList);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  function calculateTotalPrice(products) {
    return products.reduce((total, products) => total + (products.quantity * products.price), 0)
  }

  useEffect(() => {
    console.log(userId);
    userCheck();
    readList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className='order-list'>
      <h2>구매확인</h2>
      {!list.length == 0 ? (list.reverse().map((item) => (
        <div key={item.orderID} className='order-item'>
          <div className="order-info-wrap">
            <p className='order-num'>{item.orderID}</p>
            <p className='order-date'>{item.date}</p>
          </div>

          <div className='order-detail'>
          {item.product.map((product, index) => (
              <div key={index} className='order-detail-list'>
                <img src={`http://leedh9276.dothome.co.kr/test/productimg/thumb/${product.img}`} alt={product.name} className='order-thumb'/>
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.price}</p>
                  <p>{product.quantity}</p>
                </div>
              </div>
            ))}
            <p className='total-price'>
              총 가격 {calculateTotalPrice(item.product)}
            </p>
          </div>
        </div>
      ))) : 
      <div className="none">
        <p>주문내역이 없습니다.</p>
      </div>
      }
    </div>
  );
}

export default OrderList;