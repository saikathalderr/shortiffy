import React, { useState, useEffect } from 'react';
import { faPlusSquare, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker, Input, Form, Checkbox } from 'antd';

import { connect } from 'react-redux';
import {
  createNewShortUrl,
  fetchShortUrls,
} from '../store/actions/shortUrlAction';
import { useRouter } from 'next/router';

function CreateModal(props) {
  const router = useRouter();
  const [create, setCreateStatus] = useState(false);
  const [value, setValue] = useState(false);
  const [expire, setExpire] = useState(false);
  const [expireDate, setExpireDate] = useState(null);
  const [linkValue, setLinkValue] = useState(null);
  const [longUrl, setLongUrl] = useState('');
  const [customLink, setcustomLink] = useState('');
  const [safeCustomLink, setsafeCustomLink] = useState(null)
  const [validate, setValidate] = useState(false);
  const [callback, setcallback] = useState(localStorage.getItem('callBack'))


  useEffect(() => {
    if(callback){
      router.push(`/dashboard${JSON.parse(callback)}`)
    }
  }, [callback])

  useEffect(() => {
    if(router.query.link) {
      setCreateStatus(true)
      setLongUrl(router.query.link)
    }
  }, [router.query])

  useEffect(() => {
    if (customLink.length >= 1) {
      var reg = /^[a-zA-Z0-9_-]*$/;
      if (reg.test(customLink) == true) {
        setsafeCustomLink(true)
      } else {
        setsafeCustomLink(false)
      }
    }
  }, [customLink])

  useEffect(() => {
    if ((expire && !expireDate) || !longUrl || (customLink && !safeCustomLink)) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [create, expire, expireDate, linkValue, longUrl, customLink, safeCustomLink]);

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
    setExpireDate(dateString);
  };

  const submit = () => {
    props.createNewShortUrl({
      long_url: longUrl,
      will_expire: expireDate,
      link_value: linkValue,
      custom_link_name: customLink ? customLink : null
    })
    setCreateStatus(false)
    setExpire(false)
    setExpireDate(null)
    setLinkValue(null)
    setLongUrl('')
    setValidate(false)
    setcustomLink('')
    localStorage.removeItem('callBack')
    router.push(`/dashboard`)
  };

  return (
    <>
      <button
        className='bg-orange-900 bg-opacity-10 hover:bg-opacity-20 w-full text-orange-900 theme-font-montserrat-black py-2 rounded'
        onClick={() => {
          setCreateStatus(true);
        }}
      >
        <FontAwesomeIcon icon={faPlusSquare} className='mr-2' />
        Create New Link
      </button>
      {create ? (
        <div className='z-999 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center'>
          <div className='fixed inset-0 transition-opacity'>
            <div
              className='absolute inset-0 bg-gray-900 opacity-50'
              onClick={() => {
                localStorage.removeItem('callBack')
                setCreateStatus(false)
                setExpire(false)
                setExpireDate(null)
                setLinkValue(null)
                setLongUrl('')
                setValidate(false)
                setcustomLink('')
                router.push(`/dashboard`)
              }}
            ></div>
          </div>
          <div
            className='bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full'
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-headline'
          >
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='mt-2'>
                <input
                  className='bg-orange-900 bg-opacity-10 theme-rounded w-full py-2 px-10 placeholder-orange-900 text-orange-900 font-bold focus:bg-opacity-20'
                  type='text'
                  placeholder='Paste your long URL here...'
                  value={longUrl}
                  autoFocus
                  onChange={(e) => setLongUrl(e.target.value)}
                />

                <Input
                  placeholder='Set a custome url for the short link'
                  onChange={(e) => setcustomLink(e.target.value)}
                  defaultValue={customLink}
                  className='mt-3'
                />
                {
                  customLink.length ?
                    <Form.Item validateStatus={safeCustomLink ? 'success' : 'error'} extra={!safeCustomLink ? 'The custome link is not safe' : null}>
                      <Input
                        placeholder='Set a custom name for the short link'
                        value={`https://shr.fy/${customLink}`}
                        className='mt-3'
                        readOnly
                      />
                    </Form.Item>
                    : null
                }
                <label className='mt-2 block text-gray-500 font-bold'>
                  <Checkbox
                    checked={value}
                    onChange={(e) => setValue(e.target.checked)}
                  >
                    I want to add link value
                  </Checkbox>
                </label>
                {value ? <Input
                  className='my-3'
                  placeholder='Set link value per visitor.'
                  min={0}
                  prefix={<FontAwesomeIcon icon={faDollarSign} />}
                  onChange={(e) => setLinkValue(e.target.value)}
                  defaultValue={linkValue}
                  type='number'
                /> : null}
                <label className='mt-2 block text-gray-500 font-bold'>
                  <Checkbox
                    checked={expire}
                    onChange={(e) => setExpire(e.target.checked)}
                  >
                    I want this link to expire
                  </Checkbox>
                </label>
                {expire ? (
                  <DatePicker
                    className='w-full mt-3'
                    placeholder='Set expire date'
                    onChange={onChange}
                    defaultValue={expireDate}
                  />
                ) : null}
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
              <span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
                {validate ? (
                  <button
                    type='button'
                    className='inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-orange-900 text-base leading-6 font-medium text-white shadow-sm hover:bg-orange-900 focus:outline-none focus:border-orange-900 focus:shadow-outline-orange-900 transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                    onClick={() => submit()}
                  >
                    Create
                  </button>
                ) : (
                    <button disabled className='inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-orange-900 text-base bg-opacity-50 leading-6 font-medium text-white shadow-sm focus:outline-none focus:border-orange-900 focus:shadow-outline-orange-900 transition ease-in-out duration-150 sm:text-sm sm:leading-5 cursor-not-allowed'>
                      Create
                    </button>
                  )}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default connect(null, { createNewShortUrl, fetchShortUrls })(
  CreateModal
);
