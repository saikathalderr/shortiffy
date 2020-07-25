import React, { useState } from 'react';
import { faPlusSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CreateModal() {
  const [create, setCreateStatus] = useState(false);

  return (
    <>
      <button
        className='bg-orange-900 bg-opacity-10 hover:bg-opacity-20 w-full text-orange-900 theme-font-montserrat-black py-2 rounded'
        onClick={() => {
          setCreateStatus(true);
        }}
      >
        <FontAwesomeIcon icon={faPlusSquare} className='mr-2' />
        Create New
      </button>
      {create ? (
        <div className='z-999 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center'>
          <div className='fixed inset-0 transition-opacity'>
            <div
              className='absolute inset-0 bg-gray-900 opacity-50'
              onClick={() => {
                setCreateStatus(false);
              }}
            ></div>
          </div>
          <div
            className='bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full'
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-headline'
          >
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='mt-2'>
                <input
                  className='bg-orange-900 bg-opacity-10 theme-rounded w-full py-2 px-10 placeholder-orange-900 text-orange-900 font-bold focus:bg-opacity-20'
                  type='text'
                  placeholder='Paste your long URL here...'
                />
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
              <span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
                <button
                  type='button'
                  className='inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-orange-900 text-base leading-6 font-medium text-white shadow-sm hover:bg-orange-900 focus:outline-none focus:border-orange-900 focus:shadow-outline-orange-900 transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                >
                  Create
                </button>
              </span>
              <span className='mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto'>
                <button
                  onClick={() => {
                    setCreateStatus(false);
                  }}
                  type='button'
                  className='inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-orange-900-300 focus:shadow-outline-orange-900 transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                >
                  Cancel
                </button>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CreateModal;
