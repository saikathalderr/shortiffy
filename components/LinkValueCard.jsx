import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';

function LinkValueCard(props) {
  return (
    <>
      {props.isLoading || !props.data ? (
        <Skeleton height={159} width={'100%'} />
      ) : (
        <div className='py-5 text-center border-2 border-gray-300 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl theme-rounded'>
          <button className='rounded-full h-10 w-10 bg-green bg-opacity-10'>
            <FontAwesomeIcon icon={faMoneyBillAlt} className='text-green' />
          </button>
          <br />
          <span className='theme-font-montserrat-extra-bold text-black text-4xl'>
            ${Math.round(props.data.totalAmount * 100) / 100}
            <FontAwesomeIcon icon={faCaretUp} className='ml-2 text-green' />
          </span>
          <br />
          <span className='theme-font-montserrat-extra-bold text-gray-400 text-md'>
            Your Link value
          </span>
        </div>
      )}
    </>
  );
}

export default LinkValueCard;
