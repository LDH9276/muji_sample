import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';


function List(props) {

  // 상품 목록 state
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  // 상품목록 pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [postsPerPage] = useState(10);
  const offset = (currentPage - 1) * postsPerPage;

  const productListPHP = 'http://localhost/test/Product_chk.php';

  const fetchList = async() => {
    try { // 응답 성공
      const response = await axios.get(productListPHP);
      setList(response.data.list);
      setTotalPosts(response.data.list.length);
      console.log(response.data.list);
    } catch (e) { // 응답 실패
      setError(e);
      console.log(e +error);
    }
  }

  // useEffect로 컴포넌트가 처음 렌더링될 때만 실행되도록 설정
  useEffect(() => {
    fetchList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <h1>제품 목록</h1>
      <ul>
        {list.slice(offset, offset + postsPerPage).map(item => (
          <li key={item.no}>
            <Link to={`/product?id=${item.no}`}>
            {item.name} ({item.price})
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        total={totalPosts}
        limit={postsPerPage}
        page={currentPage}
        setPage={setCurrentPage}
      />
    </div>
  );
}

export default List;