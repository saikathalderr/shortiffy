// Components
import Nav from '../components/Nav';
import TaglineText from '../components/TagLineText';
import ShortenBox from '../components/ShortenBox';
import KeyFeatures from '../components/keyFeatures';

function HomePage() {
  return (
    <div className='container mx-auto py-10 bg-white'>
      <div className='grid grid-cols-7'>
        <div className='col-start-2 col-span-5'>
          <Nav />
          <TaglineText />
          <ShortenBox />
          <KeyFeatures />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
