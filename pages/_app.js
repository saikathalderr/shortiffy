import Auth from '../components/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import '../styles/index.css';
import { Provider } from 'react-redux';
import store from '../store/store';

import Loading from '../components/Loading'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.browser ? (
        <div className='bg-white h-screen'>
          <Provider store={store}>
            <Auth>
              <Component {...pageProps} />
              <ToastContainer />
            </Auth>
          </Provider>
        </div>
      ) : <Loading />}
    </>
  );
}
