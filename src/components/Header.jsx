import React from 'react';
import { BsFillHeartFill, BsCart, BsPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// TODO: 로그인 여부에 따라 로그인 버튼 다르게 구현
// TODO: admin일때만 연필 버튼 보여주기

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <BsFillHeartFill />
        <h1>Shoppy</h1>
      </Link>
      <Link to='/products'>
        <button>Products</button>
      </Link>
      <Link to='/carts'>
        <BsCart />
      </Link>
      <Link to='/products/new'>
        <BsPencilFill />
      </Link>
      <button>Login</button>
    </header>
  );
}
