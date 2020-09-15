import {
  FETCH_SHORT_LINKS,
  FETCH_SHORT_LINK,
  FETCHING_SHORT_LINKS,
  FETCHING_SHORT_LINK,
  ANALYZE_SHORT_LINK,
  ANALYZING_SHORT_LINK,
} from '../actions/types';

const initialState = {
  links: [],
  link: null,
  linkAnalyzeData: null,

  // Loading state
  isLinkAnalyzing: true,
  isLoading: true,
  isLinkLoading: true,
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

    case ANALYZE_SHORT_LINK:
      return {
        ...state,
        isLinkAnalyzing: false,
        linkAnalyzeData: action.payload,
      };

    case ANALYZING_SHORT_LINK:
      return { ...state, isLinkAnalyzing: true };

    default:
      return state;
  }
}
