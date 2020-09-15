import { combineReducers } from 'redux';
import shortUrlReducer from './shortUrlReducer';

export default combineReducers({
  shortURLS: shortUrlReducer,
});
