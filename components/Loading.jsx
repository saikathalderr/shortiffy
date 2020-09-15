import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Loading() {
  const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;

  return (
    <>
      <h1 className='theme-font text-orange-900 text-6xl text-center'>Shortiffy</h1>
      <h1 className='text-black font-black text-center'>
        <Spin indicator={antIcon} className='mr-2 mb-2' />
            Loading...
      </h1>
    </>
  );
}

export default Loading
