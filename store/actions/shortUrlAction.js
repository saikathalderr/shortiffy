import {
  FETCH_SHORT_LINKS,
  FETCHING_SHORT_LINKS,
  FETCH_SHORT_LINK,
  FETCHING_SHORT_LINK,
  ANALYZE_SHORT_LINK,
  ANALYZING_SHORT_LINK,
} from './types';
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

export const fetchShortUrlById = (linkID) => (dispatch) => {
  dispatch({ type: FETCHING_SHORT_LINK });
  dispatch({ type: ANALYZING_SHORT_LINK });
  axios({
    method: 'GET',
    url: `${API_URL}/link/getLinkById/${linkID}`,
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
            type: FETCH_SHORT_LINK,
            payload: res.data.data,
          });
          dispatch(analyzeShortLink(linkID));
        }, FETCH_TIME);
      } else {
        return toast.error(res.data.message);
      }
    });
};

export const createNewShortUrl = (data) => (dispatch) => {
  axios({
    method: 'POST',
    url: `${API_URL}/link/create`,
    data: data,
    validateStatus: (status) => {
      return true;
    },
  })
    .catch((err) => {
      return console.log(err);
    })
    .then((res) => {
      if (res.data.status === 'success') {
        dispatch(fetchShortUrls());
      } else {
        return toast.error(res.data.message);
      }
    });
};

export const analyzeShortLink = (linkID) => (dispatch) => {
  axios({
    method: 'GET',
    url: `${API_URL}/link/analyzeLink/${linkID}`,
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
            type: ANALYZE_SHORT_LINK,
            payload: res.data.data,
          });
        }, FETCH_TIME);
      } else {
        return toast.error(res.data.message);
      }
    });
};

export const deleteShortUrl = (linkID) => (dispatch) => {
  axios({
    method: 'DELETE',
    url: `${API_URL}/link/delete/${linkID}`,
    validateStatus: (status) => {
      return true;
    },
  })
    .catch((err) => {
      return console.log(err);
    })
    .then((res) => {
      if (res.data.status === 'success') {
        dispatch(fetchShortUrls());
      } else {
        return toast.error(res.data.message);
      }
    });
};
