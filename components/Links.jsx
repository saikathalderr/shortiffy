import React, { useState } from 'react';
import { faCopy, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faCopy as faCopyOutline } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Links() {
  const [copy, setcopy] = useState(false);
  return (
    <>
      <div className='w-full rounded overflow-hidden p-3 my-3 bg-white link-container hover:bg-gray-100'>
        <div className='w-full'>
          <span className='text-xs font-bold text-gray-400'>
            <FontAwesomeIcon icon={faCalendarDay} className='mr-2' />
            24-07-2020
          </span>
        </div>
        <div>
          <button>
            <FontAwesomeIcon
              icon={copy ? faCopy : faCopyOutline}
              className='text-gray-500'
              onClick={(e) => {
                e.stopPropagation();
                setcopy(!copy);
              }}
            />
          </button>
          <input
            readOnly={true}
            value='https://shr.fy/2OR5pt9'
            className='font-bold text-xs text-black bg-transparent ml-2'
          />
        </div>
        <input
          readOnly={true}
          value='https://www.amazon.in/Low-Price-With-Free-Shipping/bbp?category=/mens&pf_rd_r=DZS1ZWW3V9A85TZ5XEHK&pf_rd_p=8f29f872-c954-480b-bc95-6a373f7e690f'
          className='w-full text-xs text-gray-400 bg-transparent'
        />
        {/* <div className='w-full'>
          <span className='text-xs text-gray-400'>
            <span className='font-bold'>By</span> Saikat Halder
          </span>
        </div> */}
      </div>
    </>
  );
}

export default Links;
