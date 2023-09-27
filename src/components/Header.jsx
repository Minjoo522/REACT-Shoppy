import { signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BsFillHeartFill, BsCart, BsPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { googleAuth, googleProvider } from '../service/firebase';

// TODO: admin일때만 연필 버튼 보여주기

export default function Header() {
  const [userData, setUserData] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    googleAuth.onAuthStateChanged((user) => {
      if (user) {
        setUserData(user);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  const handleLoginClick = async () => {
    const data = await signInWithPopup(googleAuth, googleProvider);
    setUserData(data.user);
  };

  const handleLogOutClick = () => {
    signOut(googleAuth)
      .then(() => {
        setIsLogin(false);
      })
      .catch((error) => {
        // TODO: 에러 처리 코드
        console.log(error);
      });
  };
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
        {isLogin ? (
          <div className='flex items-center gap-1.5'>
            <img src={userData.photoURL} alt={`${userData.displayName} 프로필 사진`} />
            <span>{userData.displayName}</span>
          </div>
        ) : (
          ''
        )}
        <button
          className='px-4 py-1.5 bg-brand text-white rounded'
          onClick={isLogin ? handleLogOutClick : handleLoginClick}>
          {isLogin ? 'LogOut' : 'LogIn'}
        </button>
      </div>
    </header>
  );
}
