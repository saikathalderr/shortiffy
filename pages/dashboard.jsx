import React from 'react';

import Listing from '../components/Listing';
import AnalizeNumbers from '../components/AnalizeNumbers';

function dashboard() {
  return (
    <div className='bg-gray-100'>
      {/* <div className='flex flex-wrap'>
        <div className='w-full md:w-1/4'>
          <Listing />
        </div>
        <div className='w-full md:w-3/4'>
          <AnalizeNumbers />
        </div>
      </div> */}

      <div className='w-full flex flex-wrap mx-auto'>
        <div className='w-full min-h-screen lg:w-1/5 leading-normal bg-white theme-rounded shadow-xl'>
          <Listing />
        </div>
        <div className='w-full lg:w-4/5'>
          <AnalizeNumbers />
        </div>
      </div>
    </div>
  );
}

export default dashboard;
