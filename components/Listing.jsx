import React from 'react';
import Link from 'next/link';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Links from '../components/Links';
import CreateLink from '../components/CreateModal';

function Listing() {
  return (
    <>
      <div className='p-5 sticky top-0 z-10'>
        <div className='divide-y divide-gray-400 divide-opacity-25'>
          <div className='pb-5'>
            <Link href='/'>
              <div className='mb-5'>
                <button className='bg-black bg-opacity-0 hover:bg-opacity-10 w-10 h-10 text-black rounded-full'>
                  <FontAwesomeIcon icon={faLongArrowAltLeft} />
                </button>
                <span className='text-black theme-font-montserrat-black ml-2'>
                  Home
                </span>
              </div>
            </Link>
            <CreateLink />
          </div>
          <div>
            <input
              className='bg-gray-100 font-bold appearance-none rounded w-full mt-3 py-3 px-5 text-xs text-black leading-tight focus:bg-white focus:outline-none focus:shadow-lg '
              type='text'
              placeholder='🔍 Search by short link, long link, date'
            />
            <div className='py-5'>
              <Links />
              <Links />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
