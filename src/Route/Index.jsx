import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewProduct from '../Products/MujiNewProduct';
import './Main.css';
import MainBanner from '../Products/MainBanner';
import MujiSales from '../Products/MujiSales';
import MujiWalker from '../Products/MujiWalker';
import MujiMagazine from '../Products/MujiMagazine';
import MujiMDPick from '../Products/MujiMDPick';
import MujiWeather from '../Products/MujiWeather';
import MujiShopInfo from '../Products/MujiShopInfo';

function Index( {KoreanPrice} ) {

  const [list, setList] = useState([]);
  const [error, setError] = useState(null);


  const productListPHP = 'http://leedh9276.dothome.co.kr/test/Product_chk.php';

  const fetchList = async() => {
    try { // 응답 성공
      const response = await axios.get(productListPHP);
      setList(response.data.list);
    } catch (e) { // 응답 실패
      setError(e);
      console.log(e +error);
    }
  }

  useEffect(() => {
    fetchList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 각 JSON 필터
  const categoryNewList = list.filter(item => item.cate === '생활용품');
  const categoryWalkerList = list.filter(item => item.cate === 'MUJI WALKER'); 

  return (
    <div>
      <MainBanner />
      <NewProduct list={categoryNewList} KoreanPrice={KoreanPrice} />
      <MujiSales list={list} KoreanPrice={KoreanPrice} />
      <MujiWalker list={categoryWalkerList}  KoreanPrice= {KoreanPrice} />
      <MujiMagazine  />
      <MujiMDPick list={list}  KoreanPrice={KoreanPrice} />
      <MujiWeather list={list}  KoreanPrice={KoreanPrice} />
      <MujiShopInfo />
    </div>
  );
}

export default Index;