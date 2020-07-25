import React from 'react';
import Feature from './Feature';

import {
  faBolt,
  faShieldAlt,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';

function keyFeatures() {
  return (
    <>
      <div className='flex divide-x divide-orange-500 mb-4 my-20'>
        <div className='flex-1 text-center'>
          <Feature icon={faBolt} title='Lightning Fast' />
        </div>

        <div className='flex-1 text-center'>
          <Feature icon={faChartPie} title='Detail Analytics' />
        </div>

        <div className='flex-1 text-center'>
          <Feature icon={faShieldAlt} title='Completely Secure' />
        </div>
      </div>
    </>
  );
}

export default keyFeatures;
