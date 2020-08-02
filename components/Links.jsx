import React, { useState } from 'react';
import { faCopy, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faCopy as faCopyOutline } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import { useRouter } from 'next/router';

function Links(props) {
  const router = useRouter();
  const analyzeID = router.query.analyze;
  const [copy, setcopy] = useState(false);
  return (
    <>
      <div
        className={
          analyzeID === props.linkData._id
            ? 'w-full rounded overflow-hidden p-3 my-3 bg-white link-container bg-gray-200'
            : 'w-full rounded overflow-hidden p-3 my-3 bg-white link-container cursor-pointer hover:bg-gray-100'
        }
        onClick={() => {
          router.push(`/dashboard?analyze=${props.linkData._id}`);
        }}
      >
        <div className='w-full'>
          <span className='text-xs font-bold text-gray-400'>
            <FontAwesomeIcon icon={faCalendarDay} className='mr-2' />
            <Moment format='LLLL'>{props.linkData.createdAt}</Moment>
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
            value={props.linkData.short_url}
            className='font-bold text-xs text-black bg-transparent ml-2'
          />
        </div>
        <input
          readOnly={true}
          value={props.linkData.long_url}
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
