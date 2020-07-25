import React from 'react';
import Link from 'next/link';

import Profile from './Profile';

function Nav() {
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
          <Link href='/dashboard'>
            <button className='dashboard-btn py-2 px-10 theme-rounded'>
              Dashboard
            </button>
          </Link>
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Nav;
