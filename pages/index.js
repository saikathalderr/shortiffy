import { Row, Col } from 'antd';
// Components
import Nav from '../components/Nav';
import TaglineText from '../components/TagLineText';
import ShortenBox from '../components/ShortenBox';
import KeyFeatures from '../components/keyFeatures';

function HomePage() {
  return (
    <div className='container mx-auto py-5'>
      {/* <div className='grid grid-cols-7'>
        <div className='col-start-2 col-span-5'>
          <Nav />
          <TaglineText />
          <ShortenBox />
          <KeyFeatures />
        </div>
      </div> */}
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
  );
}

export default HomePage;
