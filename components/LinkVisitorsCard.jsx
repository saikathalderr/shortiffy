import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';

function LinkVisitorsCard(props) {
    return (
      <>
        {props.isLoading || !props.data ? (
          <Skeleton height={159} width={'100%'} />
        ) : (
          <div className='py-8 text-center border-2 border-gray-300 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl theme-rounded'>
            <button className='rounded-full h-10 w-10 bg-orange-900 bg-opacity-10'>
              <FontAwesomeIcon icon={faUsers} className='text-orange-900' />
            </button>
            <br />
            <span className='theme-font-montserrat-extra-bold text-black text-xl'>
              {props.data.totalClick}
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
        )}
      </>
    );
}

export default LinkVisitorsCard
