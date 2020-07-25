import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  const [menu, setmenu] = useState(false);
  return (
    <>
      <div className='relative inline-block text-left'>
        <div>
          <button
            className='theme-icon-btn ml-10'
            onClick={() => setmenu(!menu)}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
        {menu ? (
          <div
            className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg'
            onMouseLeave={() => setmenu(false)}
          >
            <div className='rounded-md bg-white shadow-xs'>
              <div
                className='py-1'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='options-menu'
              >
                <a
                  href='#'
                  className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                  role='menuitem'
                >
                  Account settings
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                  role='menuitem'
                >
                  Support
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                  role='menuitem'
                >
                  License
                </a>
                <form method='POST' action='#'>
                  <button
                    type='submit'
                    className='block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                    role='menuitem'
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Profile;
