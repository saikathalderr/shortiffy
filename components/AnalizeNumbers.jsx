import React from 'react';
import {
  faCaretUp,
  faUsers,
  faMoneyBillAlt,
  faExchangeAlt,
  faUserPlus,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TrafficChart from '../components/TrafficChart';
import CountryChart from '../components/CountryChart';
import DeleteModal from '../components/DeleteModal';

function AnalizeNumbers() {
  return (
    <>
      <div className='p-10'>
        <div className='mb-5'>
          <div className='mb-2'>
            <span className='theme-font text-orange-900 text-2xl mb-2'>
              Shortiffy Analytics
            </span>
            <span className='float-right'>
              <DeleteModal />
              {/* <button className='bg-blue bg-opacity-0 hover:bg-opacity-10 text-blue font-bold py-2 px-5 rounded text-xs theme-font-montserrat-black'>
                <FontAwesomeIcon icon={faCog} className='mr-2' />
                Options
              </button> */}
            </span>
          </div>
          <input
            readOnly={true}
            value='https://shr.fy/2OR5pt9'
            className='w-full font-bold text-base text-black bg-transparent'
          />
          <input
            readOnly={true}
            value='https://www.amazon.in/Low-Price-With-Free-Shipping/bbp?category=/mens&pf_rd_r=DZS1ZWW3V9A85TZ5XEHK&pf_rd_p=8f29f872-c954-480b-bc95-6a373f7e690f'
            className='w-1/2 text-xs text-gray-400 bg-transparent truncate'
          />
          <br />
          <span className='text-xs font-bold text-gray-400'>
            <FontAwesomeIcon icon={faCalendarDay} className='mr-2' />
            24-07-2020 &nbsp;-&nbsp; Saikat Halder
          </span>
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
                Link value
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
                New Users
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

export default AnalizeNumbers;
