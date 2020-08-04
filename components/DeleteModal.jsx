import React, { useState } from 'react';
import { faTrashAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DeleteModal() {
  const [deleteLink, setdeleteLink] = useState(false);

  return (
    <>
      <button
        className='bg-red bg-opacity-0 hover:bg-opacity-10 text-red font-bold py-2 px-5 rounded text-xs theme-font-montserrat-black'
        onClick={() => {
          setdeleteLink(true);
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} className='mr-2' />
        Delete
      </button>
      {deleteLink ? (
        <div className='z-999 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center'>
          <div className='fixed inset-0 transition-opacity'>
            <div
              className='absolute inset-0 bg-gray-900 opacity-50'
              onClick={() => {
                setdeleteLink(false);
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
              <div className='sm:flex sm:items-start'>
                <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red bg-opacity-10 sm:mx-0 sm:h-10 sm:w-10'>
                  <FontAwesomeIcon icon={faExclamationTriangle} className='text-red'/>
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <h3
                    className='text-lg leading-6 font-medium text-gray-900'
                    id='modal-headline'
                  >
                    Delete Link
                  </h3>
                  <div className='mt-2'>
                    <p className='text-sm leading-5 text-gray-500'>
                      Are you sure you want to Delete your link? All of your
                      data of this link will be permanently removed. This action
                      cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
              <span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
                <button
                  type='button'
                  className='inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red text-base leading-6 font-medium text-white shadow-sm hover:bg-red focus:outline-none focus:border-red focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                >
                  Delete
                </button>
              </span>
              <span className='mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto'>
                <button
                  onClick={() => {
                    setdeleteLink(false);
                  }}
                  type='button'
                  className='inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5'
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

export default DeleteModal;
