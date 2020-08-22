import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Loading() {
    const antIcon = <LoadingOutlined style={{ fontSize: 15 }} spin />;

    return (
      <>
        <div>
          <div className='m-auto text-center'>
            <h1 className='theme-font text-orange-900 text-6xl'>Shortiffy</h1>
            <h1 className='text-black font-black'>
              <Spin indicator={antIcon} className='mr-2 mb-2' />
              Loading...
            </h1>
          </div>
        </div>
      </>
    );
}

export default Loading
