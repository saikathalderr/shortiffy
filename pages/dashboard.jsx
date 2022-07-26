import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { Layout } from 'antd';

import Listing from '../components/Listing';
import AnalizeNumbers from '../components/AnalizeNumbers';
import SelectToSeeAnalyze from '../components/SelectToSeeAnalyze';

const { Content, Sider } = Layout;

function dashboard() {
  const router = useRouter();
  const { query } = router;

  const [linkSelected, setLinkSelected] = useState(false);

  useEffect(() => {
    if (query.analyze) {
      setLinkSelected(true);
    } else {
      setLinkSelected(false);
    }
  }, [query]);

  return (
    <div>
      <Head>
          <title> Shortiffy - Dashboard </title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='bg-gray-100'>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
              breakpoint='lg'
              collapsedWidth='0'
              width={350}
              theme={'light'}
              className='shadow-lg rounded-r-lg'
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
              {linkSelected ? <AnalizeNumbers /> : <SelectToSeeAnalyze />}
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}

export default dashboard;
