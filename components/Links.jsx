import React, { useState } from 'react';
import { faCopy, faCalendarDay, faTrashAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faCopy as faCopyOutline } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import { useRouter } from 'next/router';
import { Button, message } from 'antd';

function Links(props) {
  const router = useRouter();
  const analyzeID = router.query.analyze;
  const [copy, setcopy] = useState(false);
  return (
    <>
      <div
        className={
          analyzeID === props.linkData._id
            ? 'w-full rounded overflow-hidden p-2 my-2 bg-white link-container bg-gray-200'
            : 'w-full rounded overflow-hidden p-2 my-2 bg-white link-container cursor-pointer hover:bg-gray-100'
        }
        onClick={() => {
          router.push(`/dashboard?analyze=${props.linkData._id}`);
        }}
      >
        <div className='w-full'>
          <span className='text-xs font-bold text-gray-400'>
            <FontAwesomeIcon icon={faCalendarDay} className='mr-1' />
            <Moment format='YYYY-MM-DD'>{props.linkData.createdAt}</Moment>
          </span>
          <span className='ml-3 text-xs font-bold text-gray-400'>
            <FontAwesomeIcon icon={faClock} className='mr-1' />
            <Moment format='hh:mm a'>{props.linkData.createdAt}</Moment>
          </span>
        </div>

        <div className='flex my-1'>
          <button>
            <FontAwesomeIcon
              icon={copy ? faCopy : faCopyOutline}
              size='lg'
              className='flex-1 text-gray-500'
              onClick={(e) => {
                e.stopPropagation();
                setcopy(!copy);
                navigator.clipboard.writeText(props.linkData.short_url);
                message.info('Link Copied!');
                setTimeout(() => {
                  setcopy(false);
                }, 2000);
              }}
            />
          </button>
          <div className='flex-1 font-bold text-xs text-black bg-transparent ml-2 mt-1'>
            {props.linkData.short_url}
          </div>
          {/* <input
            readOnly={true}
            value={props.linkData.short_url}
            className='flex-1 font-bold text-xs text-black bg-transparent ml-2'
          /> */}
          {/* <Button
            type='text'
            danger
            shape='circle'
            icon={<FontAwesomeIcon icon={faTrashAlt} />}
          /> */}
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
