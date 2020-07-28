import Auth from '../components/auth';
import { ToastContainer } from 'react-toastify';
import '../styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from '../store/reducers/index';

let store;

if (process.browser) {
  const enhancers = [
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ];
  store = createStore(rootReducers, compose(...enhancers));
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {store ? (
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
