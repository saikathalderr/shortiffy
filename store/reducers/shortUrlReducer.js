import { FETCH_SHORT_LINKS, FETCHING_SHORT_LINKS } from '../actions/types';

const initialState = {
  links: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SHORT_LINKS:
      return {
        ...state,
        links: action.payload,
        isLoading: false,
      };
      case FETCHING_SHORT_LINKS:
        return { ...state, isLoading : true};

    default:
      return state;
  }
}
