import React, { useEffect, useState } from 'react';
import { BsFillHeartFill, BsCart, BsPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { logIn, logOut, onUserStateChange } from '../service/firebase';

export default function Header() {
  const [user, setUser] = useState('');
  const [admin, setAdmin] = useState('');

  useEffect(() => {
    onUserStateChange(setUser, setAdmin);
  }, []);

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
        {user ? (
          <>
            <Link className='text-xl' to='/carts'>
              <BsCart />
            </Link>
            {user?.uid === admin ? (
              <Link to='/products/new'>
                <BsPencilFill />
              </Link>
            ) : (
              ''
            )}
            <div className='flex items-center gap-1.5'>
              <img className='rounded-full w-8 h-8' src={user.photoURL} alt={`${user.displayName} 프로필 사진`} />
              <span>{user.displayName}</span>
            </div>
            <button className='px-4 py-1.5 bg-brand text-white rounded' onClick={logOut}>
              LogOut
            </button>
          </>
        ) : (
          <button className='px-4 py-1.5 bg-brand text-white rounded' onClick={logIn}>
            LogIn
          </button>
        )}
      </div>
    </header>
  );
}
