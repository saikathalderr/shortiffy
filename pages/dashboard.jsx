import React from 'react';

import { Layout, Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import Listing from '../components/Listing';
import AnalizeNumbers from '../components/AnalizeNumbers';

const { Header, Content, Sider } = Layout;
function dashboard() {
  return (
    <div className='bg-gray-100'>
      <Layout style={{minHeight: '100vh'}}>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          width={350}
          theme={'light'}
          className='shadow-lg'
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Listing />
        </Sider>
        <Layout>
          <Content>
            <AnalizeNumbers />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default dashboard;
