import Auth from '../components/auth';
import { ToastContainer } from 'react-toastify';
import '../styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Auth>
        <Component {...pageProps} />
        <ToastContainer />
      </Auth>
    </>
  );
}
