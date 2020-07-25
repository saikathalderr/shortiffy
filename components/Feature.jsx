import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feature(props) {
  return (
    <>
      <button className='theme-icon-btn'>
        <FontAwesomeIcon icon={props.icon} />
      </button>
      <h1 className='theme-font-montserrat-black text-orange-900 text-1xl mt-2'>
        {props.title}
      </h1>
    </>
  );
}

export default Feature;
