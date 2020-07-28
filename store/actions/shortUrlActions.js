// import axios from 'axios';
// import { toast } from 'react-toastify';
import { GET_SHORTEN_URL } from './types';

export const fetchShortUrls = () => {
  return {
    type: GET_SHORTEN_URL,
    payload: [
      {
        yo: 'yo',
      },
    ],
  };
};
