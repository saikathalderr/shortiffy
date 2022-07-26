import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { API_URL, FETCH_TIME } from '../config';
import { Spin, Tooltip } from 'antd';
import { LoadingOutlined, WarningOutlined, CheckOutlined } from '@ant-design/icons';
import axios from 'axios';
import Router from 'next/router';
import SocialLogin from '../components/SocialLogin';

const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;

function Register() {
  const [email, setemail] = useState('');
  const [hasEmail, sethasEmail] = useState(false)
  const [hasEmailChecking, sethasEmailChecking] = useState(false)
  const [fullname, setfullname] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState(false);
  const [query, setquery] = useState(Router.query)

  const registerUser = (e) => {
    e.preventDefault();
    setloading(true);
    let user = {
      full_name: fullname,
      email: email,
      password: password,
    };

    axios({
      method: 'post',
      url: `${API_URL}/user/createNewNormlaUser`,
      data: user,
      validateStatus: (status) => {
        return true;
      },
    })
      .catch((err) => {
        console.log(err);
        setloading(false);
      })
      .then((res) => {
        toast[res.data.status](res.data.message);
        setloading(false);
        if (res.data.status === 'success') {
          Router.push('/login');
        }
      });
  };

  const checkHasEmail = () => {
    sethasEmailChecking(true)
    axios({
      method: 'GET',
      url: `${API_URL}/user/checkHasEmail/${email}`,
      validateStatus: (status) => {
        return true;
      },
    })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        if (res?.data?.message === 'has email') {
          sethasEmail(true)
        } else {
          sethasEmail(false)
        }
        setTimeout(() => {
          sethasEmailChecking(false)
        }, FETCH_TIME);
      });
  }

  useEffect(() => {
    if (email.length >= 1) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(email) == true) {
        checkHasEmail()
      }
    } else {
      sethasEmail(false)
      sethasEmailChecking(false)
    }
  }, [email])

  return (
    <>
      <div className='bg-white border-b-8 border-orange-900 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full'>
          <div className='mb-5'>
            <Link href='/'>
              <button className='bg-black bg-opacity-0 hover:bg-opacity-10 w-10 h-10 text-black rounded-full'>
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
              </button>
            </Link>
            <span className='text-black theme-font-montserrat-black ml-2'>
              Home
            </span>
          </div>
          <div>
            <h1 className='theme-font text-orange-900 text-5xl'>Shortiffy</h1>
            <h2 className='text-3xl leading-9 theme-font-montserrat-black text-gray-900'>
              Register your new account
            </h2>
            <p className='pt-2'>
              <span className='float-right text-xs text-gray-500 font-bold'>
                <Link href={{ pathname: '/login', query: query }} >I already have a account</Link>
              </span>
            </p>
          </div>
          <form
            className='mt-8'
            action='#'
            method='POST'
            onSubmit={registerUser}
          >
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm'>
              <div class="flex items-center border border-gray-300">
                <input
                  aria-label='Email address'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-orange-900 focus:border-orange-900-300 focus:z-10 sm:text-sm sm:leading-5'
                  placeholder='Email address'
                />
                {hasEmailChecking ? <Spin className='flex-shrink-0 mr-2' indicator={antIcon} /> : null}
                {hasEmail && email ? <Tooltip placement="rightTop" color='red' title="Email already exists">
                  <WarningOutlined className='text-red mr-5' />
                </Tooltip> : null}
              </div>
              {/* <div>
                <input
                  aria-label='Email address'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-orange-900 focus:border-orange-900-300 focus:z-10 sm:text-sm sm:leading-5'
                  placeholder='Email address'
                />
              </div> */}
              <div className='-mt-px'>
                <input
                  aria-label='Full Name'
                  name='full name'
                  type='text'
                  required
                  value={fullname}
                  onChange={(e) => {
                    setfullname(e.target.value);
                  }}
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
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
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
            <div className='mt-6 inline-flex w-full'>
              {loading ? (
                <button
                  type='button'
                  disabled
                  className='w-1/2 py-2 px-4 rounded text-sm leading-5 theme-font-montserrat-black text-orange-900 bg-orange-900 bg-opacity-10 cursor-not-allowed'
                >
                  Signing up...
                </button>
              ) : (
                  <button
                    type='submit'
                    className='w-1/2 py-2 px-4 rounded text-sm leading-5 theme-font-montserrat-black text-orange-900 bg-orange-900 bg-opacity-20 hover:bg-opacity-25'
                  >
                    Sign Up
                  </button>
                )}
              {/* <Link href='/login'>
                <button
                  type='submit'
                  className='w-1/2 py-2 px-4 rounded text-sm leading-5 theme-font-montserrat-black text-orange-900 bg-orange-900 bg-opacity-0'
                >
                  Sign In
                </button>
              </Link> */}
            </div>
            <div className='text-center'>
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
