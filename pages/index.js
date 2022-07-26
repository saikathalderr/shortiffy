import { Row, Col } from 'antd';
import Nav from '../components/Nav';
import TaglineText from '../components/TagLineText';
import ShortenBox from '../components/ShortenBox';
import KeyFeatures from '../components/keyFeatures';
import Head from "next/head";
import React from "react";

function HomePage() {
  return (
      <div>
        <Head>
          <title> Shortiffy </title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className='container mx-auto py-5'>
          <Row>
            <Col xs={4}/>
            <Col span={16}>
              <Nav />
              <TaglineText />
              <ShortenBox />
              <KeyFeatures />
            </Col>
            <Col xs={4} />
          </Row>
        </div>
      </div>
  );
}

export default HomePage;
