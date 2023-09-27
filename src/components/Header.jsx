import React from 'react';
import { BsFillHeartFill, BsCart, BsPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// TODO: 로그인 여부에 따라 로그인 버튼 다르게 구현
// TODO: admin일때만 연필 버튼 보여주기

export default function Header() {
  return (
    <header className='w-full flex justify-between p-4 bg-white mb-4'>
      <Link to='/' className='flex items-center gap-1 text-2xl text-brand'>
        <BsFillHeartFill />
        <h1 className='font-bold'>Shoppy</h1>
      </Link>
      <div className='flex items-center gap-4 text-lg font-semibold'>
        <Link to='/products'>
          <button>Products</button>
        </Link>
        <Link className='text-xl' to='/carts'>
          <BsCart />
        </Link>
        <Link to='/products/new'>
          <BsPencilFill />
        </Link>
        <button className='px-4 py-1.5 bg-brand text-white rounded'>Login</button>
      </div>
    </header>
  );
}
