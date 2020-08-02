import { FETCH_SHORT_LINKS, FETCHING_SHORT_LINKS } from './types';
import axios from 'axios';
import { API_URL, FETCH_TIME } from '../../config';
import { toast } from 'react-toastify';

if (process.browser) {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;
}

export const fetchShortUrls = () => (dispatch) => {
  dispatch({ type: FETCHING_SHORT_LINKS });
  axios({
    method: 'GET',
    url: `${API_URL}/link/getLinks`,
    validateStatus: (status) => {
      return true;
    },
  })
    .catch((err) => {
      return console.log(err);
    })
    .then((res) => {
      if (res.data.status === 'success') {
        setTimeout(() => {
          dispatch({
            type: FETCH_SHORT_LINKS,
            payload: res.data.data,
          });
        }, FETCH_TIME);
      } else {
        return toast.error(res.data.message);
      }
    });
};
