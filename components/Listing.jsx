import React, { useEffect } from 'react';
import Link from 'next/link';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Links from '../components/Links';
import CreateLink from '../components/CreateModal';

import { connect } from 'react-redux';
import {
  fetchShortUrls,
  searchShortUrls,
} from '../store/actions/shortUrlAction';
import Skeleton from 'react-loading-skeleton';
import { Scrollbars } from 'react-custom-scrollbars';

function Listing(props) {
  useEffect(() => {
    props.fetchShortUrls();
  }, []);

  const search = (e) => {
    if (e.target.value.length > 1) {
      props.searchShortUrls(e.target.value);
    } else {
      props.fetchShortUrls();
    }
  };
  return (
    <>
      <div className='p-5 sticky top-0 z-10'>
        <div className='divide-y divide-gray-400 divide-opacity-25'>
          <div className='pb-5'>
            <Link href='/'>
              <div className='mb-5'>
                <button className='bg-black bg-opacity-0 hover:bg-opacity-10 w-10 h-10 text-black rounded-full'>
                  <FontAwesomeIcon icon={faLongArrowAltLeft} />
                </button>
                <span className='text-black theme-font-montserrat-black ml-2'>
                  Home
                </span>
              </div>
            </Link>
            <CreateLink />
          </div>
          <div>
            <input
              className='bg-gray-100 font-bold appearance-none rounded w-full mt-3 py-3 px-5 text-xs text-black leading-tight focus:bg-white focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='🔍 Search by short link, long link, name'
              onChange={search}
            />
            <div
              className='my-5'
              style={{
                overflow: 'hidden',
                height: `calc(100vh - 250px)`,
                left: 0,
              }}
            >
              <Scrollbars height={'100%'}>
                {props.isLoading ? (
                  <>
                    {[1, 2, 3, 4].map((e) => {
                      return <Skeleton key={e} height={80} />;
                    })}
                  </>
                ) : props.links.length ? (
                  props.links.map((link) => {
                    return <Links key={link._id} linkData={link} />;
                  })
                ) : null}
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  const { shortURLS } = state;
  return { links: shortURLS.links, isLoading: shortURLS.isLoading };
}
export default connect(mapStateToProps, { fetchShortUrls, searchShortUrls })(
  Listing
);
