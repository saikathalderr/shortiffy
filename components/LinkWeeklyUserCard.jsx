import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';

function LinkWeeklyUserCard(props) {
  return (
    <>
      {props.isLoading || !props.data ? (
        <Skeleton height={159} width={'100%'} />
      ) : (
        <div className='py-5 text-center border-2 border-gray-300 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl theme-rounded'>
          <button className='rounded-full h-10 w-10 bg-blue bg-opacity-10'>
            <FontAwesomeIcon icon={faUserPlus} className='text-blue' />
          </button>
          <br />
          <span className='theme-font-montserrat-extra-bold text-black text-4xl'>
            {props.data.totalWeekViews}
            <FontAwesomeIcon icon={faCaretUp} className='ml-2 text-green' />
          </span>
          <br />
          <span className='theme-font-montserrat-extra-bold text-gray-400 text-md'>
            New Users this week
          </span>
        </div>
      )}
    </>
  );
}

export default LinkWeeklyUserCard;
