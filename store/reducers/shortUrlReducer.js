const { GET_SHORTEN_URL } = require('../actions/types');

const initialState = {
  links: [],
};

const shortUrlReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHORTEN_URL:
      return {
        ...state,
        links: action.payload,
      };
    default:
      return state;
  }
};

export default shortUrlReducer;
