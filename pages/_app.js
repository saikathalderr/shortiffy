import Auth from '../components/auth';
import { ToastContainer } from 'react-toastify';
import '../styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import store from '../store/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.browser ? (
        <Provider store={store}>
          <Auth>
            <Component {...pageProps} />
            <ToastContainer />
          </Auth>
        </Provider>
      ) : (
        'Loading...'
      )}
    </>
  );
}
