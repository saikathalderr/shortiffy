import {
  FETCH_SHORT_LINKS,
  FETCH_SHORT_LINK,
  FETCHING_SHORT_LINKS,
  FETCHING_SHORT_LINK,
} from '../actions/types';

const initialState = {
  links: [],
  link: null,
  isLoading: false,
  isLinkLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SHORT_LINKS: // Multiple Links
      return {
        ...state,
        links: action.payload,
        isLoading: false,
      };
    case FETCH_SHORT_LINK: // Like by ID
      return {
        ...state,
        link: action.payload,
        isLinkLoading: false,
      };
    case FETCHING_SHORT_LINKS:
      return { ...state, isLoading: true };
    case FETCHING_SHORT_LINK:
      return { ...state, link: null, isLinkLoading: true };

    default:
      return state;
  }
}
