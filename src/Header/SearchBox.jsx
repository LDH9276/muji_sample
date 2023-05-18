import React from 'react';
import './css/SearchBox.css';


function SearchBox( {searchbox} ) {

  return (
    <div className={searchbox}>
      <div className="searchbox-wrap">
        <input type="text" name="search-item" id="searchitem" placeholder='검색어를 입력해주세요.' />
        <button type="submit" className="search-btn">
          <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="검색" />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;