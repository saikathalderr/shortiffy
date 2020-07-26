import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import SocialLogin from '../components/SocialLogin';

function Register() {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full'>
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
          <div>
            <h1 className='theme-font text-orange-900 text-5xl'>Shortiffy</h1>
            <h2 className='text-3xl leading-9 theme-font-montserrat-black text-gray-900'>
              Register your account
            </h2>
          </div>
          <form className='mt-8' action='#' method='POST'>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm'>
              <div>
                <input
                  aria-label='Email address'
                  name='email'
                  type='email'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-orange-900 focus:border-orange-900-300 focus:z-10 sm:text-sm sm:leading-5'
                  placeholder='Email address'
                />
              </div>
              <div className='-mt-px'>
                <input
                  aria-label='Full Name'
                  name='full name'
                  type='text'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-orange-900 focus:border-orange-900-300 focus:z-10 sm:text-sm sm:leading-5'
                  placeholder='Full name'
                />
              </div>
              <div className='-mt-px'>
                <input
                  aria-label='Password'
                  name='password'
                  type='password'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-orange-900 focus:border-orange-900-300 focus:z-10 sm:text-sm sm:leading-5'
                  placeholder='Password'
                />
              </div>
            </div>

            {/* <div className='mt-6'>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 theme-font-montserrat-black rounded-md text-orange-900 bg-orange-900 bg-opacity-20 hover:bg-opacity-25'
              >
                Sign in
              </button>
            </div> */}
            <div class='mt-6 inline-flex w-full'>
              <button
                type='submit'
                className='w-1/2 py-2 px-4 rounded text-sm leading-5 theme-font-montserrat-black text-orange-900 bg-orange-900 bg-opacity-20 hover:bg-opacity-25'
              >
                Sign Up
              </button>
              <Link href='/login'>
                <button
                  type='submit'
                  className='w-1/2 py-2 px-4 rounded text-sm leading-5 theme-font-montserrat-black text-orange-900 bg-orange-900 bg-opacity-0'
                >
                  Sign In
                </button>
              </Link>
            </div>
            {/* <div className='my-5 text-gray-300 text-center'>Or</div>
            <div className='text-center'>
              <SocialLogin />
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
