import React, {useState, useEffect} from 'react';
import axios from 'axios'; // modify the import statement
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import './css/MujiProduct.css';


function Product({setCartValue, KoreanPrice}) {

  const [error, setError] = useState(null);

  //상품정보 state
  const [productID, setProductID] = useState('');
  const [productCate, setProductCate] = useState('');
  const [productSubCate, setProductSubCate] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [detailImage, setDetailImage] = useState('');
  const [detail, setDetail] = useState('');
  const [mainImg, setMainImg] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const Navigate = useNavigate();

  const productListPHP = 'http://leedh9276.dothome.co.kr/test/Product_list.php';

  // useEffect로 컴포넌트가 처음 렌더링될 때만 실행되도록 설정
  useEffect(() => {
    fetchList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const fetchList = async() => {
    try {
      const response = await axios.get(`${productListPHP}?id=${id}`);
      console.log(response.data);
      setProductID(response.data.no);
      setProductCate(response.data.cate);
      setProductSubCate(response.data.parent);
      setProductName(response.data.name);
      setProductPrice(response.data.price);
      setProductImage(response.data.img);
      setDetail(response.data.detail);
      setDetailImage(response.data.detail_imgs);
    } catch (e) {
      setError(e);
      Navigate('/404');
      console.log(e + error);
    }
  }
  const addToCart = () => {
    //해당 상품정보를 로컬스토리지에 담는다
    let cart = localStorage.getItem('cart');
    
    if (cart === null) {
      cart = []; // cart 배열을 생성
      setCartValue(0);
    }
    else {
      cart = JSON.parse(cart); // JSON 문자열을 객체로 변환
    }
    // findIndex 메소드로 배열 내부에 있는 객체의 인덱스를 찾는다
    const index = cart.findIndex(item => item.id === productID && item.name === productName && item.price === productPrice);

    if (index !== -1) { // 상품정보가 중복된다면 (-1이 아니라면) 수량만 증가
      cart[index].quantity += quantity;
    } else { // Otherwise, add the product to the cart
      cart.push({ 
        id: productID,
        name: productName,
        price: productPrice,
        img: productImage,
        quantity: quantity
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    cartQuantity();
  }

  const quantityPlus = () => {
    setQuantity(quantity + 1);
  }
  const quantityMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  }
  

  const product = productImage.substring(0, 8);  
  const changeDetailPhoto = (index) => {
    return () => {
      setMainImg(index + 1);
    }
  }
    
  return (
    <div className='list-detail-wrap'>
      <div className="list-info-wrap">
        <div className="info-img-wrap">
          <img src={`http://leedh9276.dothome.co.kr/test/productimg/${product}${mainImg}.jpg`} alt="상품이미지" className='info-img'/>
        </div>
        <ul className='list-detail-info'>
          <li>
            <span className="list-item-cate">
              {productCate} 
            </span>
            <img src={`${process.env.PUBLIC_URL}/images/next-btn.svg`} alt="화살표" className='list-item-cate_a'/>
            <span className="list-item-subcate">
              {productSubCate}
            </span>
          </li>
          <li className="list-item-title">
              {productName}
          </li>
          <li className="list-item-detail">
              {detail}
          </li>
          <li className='list-item-price'>
            {KoreanPrice(productPrice)} 원
          </li>
          <li>
          <Link to = '/'>
            <button className='list-tomain'>목록으로</button>
          </Link>
          </li>
        </ul>
        <div className="list-buy-wrap">
          <p className='list-quantity-wrap'>수량
            <span className="list-quantity">
              <button onClick={quantityMinus} className='list-quantity_minus'>-</button> 
              {quantity} 
              <button onClick={quantityPlus}className='list-quantity_plus'>+</button>
            </span> 
          </p>
          <p className='list-nowprice-wrap'>현재가격 
            <span className="list-nowprice">
            {KoreanPrice(productPrice * quantity)}원
            </span></p>
          <button onClick={addToCart} className='list-addtocart'>장바구니 담기</button>
        </div>
      </div>


      <div className="detail">
        <div className="info-img-wrap">
          <img src={`http://leedh9276.dothome.co.kr/test/productimg/${productImage}`} alt="상세1" onClick={changeDetailPhoto(0)} className='info-img'/>
        </div>
        <div className="info-img-wrap">
          <img src={`http://leedh9276.dothome.co.kr/test/productimg/${detailImage[0]}`} alt="상세1"  onClick={changeDetailPhoto(1)} className='info-img'/>
        </div>
        <div className="info-img-wrap">
          <img src={`http://leedh9276.dothome.co.kr/test/productimg/${detailImage[1]}`} alt="상세1"  onClick={changeDetailPhoto(2)} className='info-img'/>
        </div>
        <div className="info-img-wrap">
          <img src={`http://leedh9276.dothome.co.kr/test/productimg/${detailImage[2]}`} alt="상세1"  onClick={changeDetailPhoto(3)} className='info-img'/>
        </div>
        <div className="info-img-wrap">
          <img src={`http://leedh9276.dothome.co.kr/test/productimg/${detailImage[3]}`} alt="상세1"  onClick={changeDetailPhoto(4)} className='info-img'/>
        </div>
        <div className="info-img-wrap">
          <img src={`http://leedh9276.dothome.co.kr/test/productimg/${detailImage[4]}`} alt="상세1"  onClick={changeDetailPhoto(5)} className='info-img'/>
        </div>
      </div>
    </div>
  );
}

export default Product;