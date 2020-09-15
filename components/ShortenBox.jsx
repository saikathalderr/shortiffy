import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  createNewShortUrl,
} from '../store/actions/shortUrlAction';

function ShortenBox(props) {

  const router = useRouter();
  const [url, setUrl] = useState('')

  const short = (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem('token')
    if (!token) {
      router.push(`/login?callbackurl=dashboard&link=${url}`)
    } else {
      router.push(`/dashboard?callbackurl=dashboard&link=${url}`)
    }
  }

  return (
    <>
      <form className='w-full' action='#' method='POST' onSubmit={short}>
        <div className='flex items-center short-container'>
          <input
            className='bg-orange-900 bg-opacity-20 theme-rounded w-full py-5 pr-32 pl-10 placeholder-orange-900 text-orange-900 theme-font-montserrat-black focus:bg-opacity-25'
            type='text'
            value={url}
            autoFocus
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Paste your long URL here...'
          />
          { url ?
            <button
              className='bg-orange-900 theme-font-montserrat-black text-white py-2 px-5 theme-rounded short-btn'
              type='submit'
            >
            Next
            </button>
          : null }
        </div>
      </form>
    </>
  );
}

export default connect(null, { createNewShortUrl })(
  ShortenBox
);
