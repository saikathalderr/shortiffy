import { FETCH_SHORT_LINKS } from '../actions/types';

const initialState = {
  links: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SHORT_LINKS:
      return {
        ...state,
        links: action.payload,
      };

    default:
      return state;
  }
}
