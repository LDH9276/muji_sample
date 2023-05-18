import React from 'react';

function LNBMobile(props) {


  const categories = [
    {
      id: 1,
      name: '남성복',
      subcategories: [
        { id: 1, name: '남성복 전체'},
        { id: 2, name: '남성 니트'},
        { id: 3, name: '남성 컷앤소'},
        { id: 4, name: '남성 아웃트탑'},
        { id: 5, name: '남성 하의'},
        { id: 6, name: '남성 MUJI WALKER'},
      ],
    },
    {
      id: 2,
      name: '여성복',
      subcategories: [
        { id: 7, name: '여성복 전체'},
        { id: 8, name: '여성 니트'},
        { id: 9, name: '여성 컷앤소'},
        { id: 10, name: '여성 아웃트탑'},
        { id: 11, name: '여성 하의'},
        { id: 12, name: '여성 MUJI WALKER'},
      ],
    },
    {
      id: 3,
      name: '아동복 · 마터니티',
      subcategories: [
        { id: 1, name: '여성복 전체'},
        { id: 2, name: '여성 니트'},
        { id: 3, name: '여성 컷앤소'},
        { id: 4, name: '여성 아웃트탑'},
        { id: 5, name: '여성 하의'},
        { id: 6, name: '여성 MUJI WALKER'},
      ],
    },
    {
      id: 4,
      name: '이너웨어',
      subcategories: [
        { id: 1, name: '여성복 전체'},
        { id: 2, name: '여성 니트'},
        { id: 3, name: '여성 컷앤소'},
        { id: 4, name: '여성 아웃트탑'},
        { id: 5, name: '여성 하의'},
        { id: 6, name: '여성 MUJI WALKER'},
      ],
    },
    {
      id: 5,
      name: '가방 · 신발',
      subcategories: [
        { id: 1, name: '여성복 전체'},
        { id: 2, name: '여성 니트'},
        { id: 3, name: '여성 컷앤소'},
        { id: 4, name: '여성 아웃트탑'},
        { id: 5, name: '여성 하의'},
        { id: 6, name: '여성 MUJI WALKER'},
      ],
    },
    {
      id: 6,
      name: '이너웨어',
      subcategories: [
        { id: 1, name: '여성복 전체'},
        { id: 2, name: '여성 니트'},
        { id: 3, name: '여성 컷앤소'},
        { id: 4, name: '여성 아웃트탑'},
        { id: 5, name: '여성 하의'},
        { id: 6, name: '여성 MUJI WALKER'},
      ],
    },
    {
      id: 7,
      name: '남성복',
      subcategories: [
        { id: 1, name: '남성복 전체'},
        { id: 2, name: '남성 니트'},
        { id: 3, name: '남성 컷앤소'},
        { id: 4, name: '남성 아웃트탑'},
        { id: 5, name: '남성 하의'},
        { id: 6, name: '남성 MUJI WALKER'},
      ],
    },
    {
      id: 8,
      name: '여성복',
      subcategories: [
        { id: 1, name: '여성복 전체'},
        { id: 2, name: '여성 니트'},
        { id: 3, name: '여성 컷앤소'},
        { id: 4, name: '여성 아웃트탑'},
        { id: 5, name: '여성 하의'},
        { id: 6, name: '여성 MUJI WALKER'},
      ],
    },
    {
      id: 9,
      name: '아동복 · 마터니티',
      subcategories: [
        { id: 1, name: '여성복 전체'},
        { id: 2, name: '여성 니트'},
        { id: 3, name: '여성 컷앤소'},
        { id: 4, name: '여성 아웃트탑'},
        { id: 5, name: '여성 하의'},
        { id: 6, name: '여성 MUJI WALKER'},
      ],
    },
    {
      id: 10,
      name: '이너웨어',
      subcategories: [
        { id: 1, name: '여성복 전체'},
        { id: 2, name: '여성 니트'},
        { id: 3, name: '여성 컷앤소'},
        { id: 4, name: '여성 아웃트탑'},
        { id: 5, name: '여성 하의'},
        { id: 6, name: '여성 MUJI WALKER'},
      ],
    },
    {
      id: 11,
      name: '가방 · 신발',
      subcategories: [
        { id: 1, name: '여성복 전체'},
        { id: 2, name: '여성 니트'},
        { id: 3, name: '여성 컷앤소'},
        { id: 4, name: '여성 아웃트탑'},
        { id: 5, name: '여성 하의'},
        { id: 6, name: '여성 MUJI WALKER'},
      ],
    },
    {
      id: 12,
      name: '이너웨어',
      subcategories: [
        { id: 1, name: '여성복 전체'},
        { id: 2, name: '여성 니트'},
        { id: 3, name: '여성 컷앤소'},
        { id: 4, name: '여성 아웃트탑'},
        { id: 5, name: '여성 하의'},
        { id: 6, name: '여성 MUJI WALKER'},
      ],
    },
  ];

  return (
    <div className='menu-wrap_mobile'>
      <nav>
        <p className='menu-main-gen'>의류 패션잡화</p>
        <ul className='LNB-main'>
        {categories.slice(0, 6).map((category) => (
          <li key={category.id}>
            <span>{category.name}</span>
          </li>
        ))}
        </ul>
      </nav>

      <nav>
        <p className='menu-main-gen'>가구 · 인테리어</p>
        <ul className='LNB-main'>
        {categories.slice(6, 12).map((category) => (
          <li key={category.id}>
            <span>{category.name}</span>
          </li>
        ))}
        </ul>
      </nav>
      
      <nav>
        <div className="menu01">
        <p className='menu-main-gen'>식품 &middot; 생활용품</p>
        <ul className='LNB-main sub'>
          <li>과자</li>
          <li>음료</li>
          <li>소스</li>
        </ul>
        </div>
        <div className="menu02">
        <p className='menu-main-gen'>식품 &middot; 생활용품</p>
        <ul className='LNB-main sub'>
          <li>과자</li>
          <li>음료</li>
          <li>소스</li>
        </ul>
        </div>
        <div className="menu3">
        <p className='menu-main-gen'>식품 &middot; 생활용품</p>
        <ul className='LNB-main sub'>
          <li>과자</li>
          <li>음료</li>
          <li>소스</li>
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default LNBMobile;