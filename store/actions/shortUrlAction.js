import { FETCH_SHORT_LINKS } from './types';
import axios from 'axios';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'token'
)}`;

export const fetchShortUrls = () => (dispatch) => {
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
        dispatch({
          type: FETCH_SHORT_LINKS,
          payload: res.data.data,
        });
      } else {
        return toast.error(res.data.message);
      }
    });
};
