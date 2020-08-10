import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  faCaretUp,
  faUsers,
  faMoneyBillAlt,
  faExchangeAlt,
  faUserPlus,
  faCalendarDay,
  faClock,
  faCopy,
  faSync
} from '@fortawesome/free-solid-svg-icons';
import { faCopy as faCopyOutline } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skeleton from 'react-loading-skeleton';

import { connect } from 'react-redux';
import { fetchShortUrlById } from '../store/actions/shortUrlAction';

import TrafficChart from '../components/TrafficChart';
import CountryChart from '../components/CountryChart';
import DeleteModal from '../components/DeleteModal';
import Moment from 'react-moment';
import { message } from 'antd';

function AnalizeNumbers(props) {
  const [copy, setcopy] = useState(false);
  const router = useRouter();
  const { query } = router;

  const close = () => {
    router.push('/dashboard');
  };

  const reload = () => {
    props.fetchShortUrlById(query.analyze);
  };

  useEffect(() => {
    if (query.analyze) {
      props.fetchShortUrlById(query.analyze);
    }
  }, [query.analyze]);

  return (
    <>
      <div className='p-10'>
        <div className='mb-5'>
          <div className='mb-2'>
            <span className='theme-font text-orange-900 text-2xl mb-2'>
              Shortiffy Analytics
            </span>
            <span className='float-right'>
              {props.isLoading || !props.link ? (
                <Skeleton height={34} width={200} />
              ) : (
                <>
                  <button
                    className='bg-blue bg-opacity-5 hover:bg-opacity-10 text-blue font-bold mx-2 py-2 px-5 rounded text-xs theme-font-montserrat-black'
                    onClick={reload}
                  >
                    <FontAwesomeIcon icon={faSync} className='mr-2' />
                    Reload
                  </button>
                  {/* <button
                    className='bg-black bg-opacity-0 hover:bg-opacity-10 text-black font-bold py-2 px-5 rounded text-xs theme-font-montserrat-black'
                    onClick={close}
                  >
                    Close
                  </button> */}
                  <DeleteModal analyzeID={query.analyze} />
                </>
              )}
              {/* <button className='bg-blue bg-opacity-0 hover:bg-opacity-10 text-blue font-bold py-2 px-5 rounded text-xs theme-font-montserrat-black'>
                <FontAwesomeIcon icon={faCog} className='mr-2' />
                Options
              </button> */}
            </span>
          </div>
          {props.isLoading || !props.link ? (
            <Skeleton height={21} width={250} />
          ) : (
            <>
              <div className='flex w-full'>
                <button className='flex-initial mr-2'>
                  <FontAwesomeIcon
                    icon={copy ? faCopy : faCopyOutline}
                    className='text-gray-500'
                    onClick={(e) => {
                      e.stopPropagation();
                      setcopy(!copy);
                      navigator.clipboard.writeText(props.link.short_url);
                      message.info('Link Copied, share with anyone you want');
                      setTimeout(() => {
                        setcopy(false);
                      }, 2000);
                    }}
                  />
                </button>
                <input
                  readOnly={true}
                  value={props.link.short_url}
                  className='font-bold text-base text-black bg-transparent flex-1'
                />
              </div>
            </>
          )}
          {props.isLoading || !props.link ? (
            <Skeleton height={15} />
          ) : (
            <input
              readOnly={true}
              value={props.link.long_url}
              className='w-1/2 text-xs text-gray-400 bg-transparent truncate'
            />
          )}

          <br />

          {props.isLoading || !props.link ? (
            <Skeleton height={15} width={200} />
          ) : (
            <span className='text-xs font-bold text-gray-400'>
              <FontAwesomeIcon icon={faCalendarDay} className='mr-2' />
              <Moment format='YYYY-MM-DD'>{props.link.createdAt}</Moment>
              &nbsp;&nbsp;-&nbsp;&nbsp;
              <FontAwesomeIcon icon={faClock} className='mr-2' />
              <Moment format='HH:MM A'>{props.link.createdAt}</Moment>
            </span>
          )}
        </div>
        <div className='flex w-full gap-5'>
          <div className='w-1/3'>
            <div className='py-5 text-center border-2 border-gray-300 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl theme-rounded'>
              <button className='rounded-full h-10 w-10 bg-green bg-opacity-10'>
                <FontAwesomeIcon icon={faMoneyBillAlt} className='text-green' />
              </button>
              <br />
              <span className='theme-font-montserrat-extra-bold text-black text-4xl'>
                $1263
                <FontAwesomeIcon icon={faCaretUp} className='ml-2 text-green' />
              </span>
              <br />
              <span className='theme-font-montserrat-extra-bold text-gray-400 text-md'>
                Your Link value
              </span>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='py-5 text-center border-2 border-gray-300 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl theme-rounded'>
              <button className='rounded-full h-10 w-10 bg-orange-900 bg-opacity-10'>
                <FontAwesomeIcon icon={faUsers} className='text-orange-900' />
              </button>
              <br />
              <span className='theme-font-montserrat-extra-bold text-black text-4xl'>
                4850
                <FontAwesomeIcon
                  icon={faExchangeAlt}
                  className='ml-2 text-yellow'
                />
              </span>
              <br />
              <span className='theme-font-montserrat-extra-bold text-gray-400 text-md'>
                Total Visitors
              </span>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='py-5 text-center border-2 border-gray-300 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl theme-rounded'>
              <button className='rounded-full h-10 w-10 bg-blue bg-opacity-10'>
                <FontAwesomeIcon icon={faUserPlus} className='text-blue' />
              </button>
              <br />
              <span className='theme-font-montserrat-extra-bold text-black text-4xl'>
                256
                <FontAwesomeIcon icon={faCaretUp} className='ml-2 text-green' />
              </span>
              <br />
              <span className='theme-font-montserrat-extra-bold text-gray-400 text-md'>
                New Users this week
              </span>
            </div>
          </div>
        </div>
        <div className='flex w-full gap-5 py-10'>
          <div className='w-1/2 h-64'>
            <TrafficChart />
          </div>
          <div className='w-1/2 h-64'>
            <CountryChart />
          </div>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  const { shortURLS } = state;
  return { link: shortURLS.link, isLoading: shortURLS.isLinkLoading };
}
export default connect(mapStateToProps, { fetchShortUrlById })(AnalizeNumbers);
