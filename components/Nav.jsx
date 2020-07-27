import React, { useState } from 'react';
import Link from 'next/link';

import Profile from './Profile';

function Nav() {
  const [auth, setauth] = useState(
    window.localStorage.getItem('token') ? true : false
  );
  return (
    <>
      <div className='flex mb-4'>
        <div className='flex-1 h-12 text-left'>
          <Link href='/'>
            <h1 className='theme-font text-orange-900 text-5xl logo'>
              Shortiffy
            </h1>
          </Link>
        </div>
        <div className='flex-1 h-12 text-right'>
          {auth ? (
            <>
              <Link href='/dashboard'>
                <button className='dashboard-btn py-2 px-10 rounded'>
                  Dashboard
                </button>
              </Link>
              <Profile />
            </>
          ) : (
            <>
              <Link href='/login'>
                <button className='theme-font-montserrat-black py-2 px-5 ml-2 rounded bg-orange-900 bg-opacity-0 hover:bg-opacity-10 text-orange-900'>
                  Login
                </button>
              </Link>
              <Link href='/register'>
                <button className='theme-font-montserrat-black py-2 px-5 ml-2 rounded bg-orange-900 bg-opacity-0 hover:bg-opacity-10 text-orange-900'>
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
