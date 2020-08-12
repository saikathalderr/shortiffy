import React from 'react';

function ShortenBox() {
  return (
    <>
      <form className='w-full'>
        <div className='flex items-center short-container'>
          <input
            className='bg-orange-900 bg-opacity-20 theme-rounded w-full py-5 pr-32 pl-10 placeholder-orange-900 text-orange-900 theme-font-montserrat-black focus:bg-opacity-25'
            type='text'
            placeholder='Paste your long URL here...'
          />
          <button
            className='bg-orange-900 theme-font-montserrat-black text-white py-2 px-5 theme-rounded short-btn'
            type='button'
          >
            Short
          </button>
        </div>
      </form>
    </>
  );
}

export default ShortenBox;
