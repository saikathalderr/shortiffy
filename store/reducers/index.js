import { combineReducers } from 'redux';
import shortUrlReducer from './shortUrlReducer';

const rootReducers = combineReducers({
  ShortURL: shortUrlReducer,
});

export default rootReducers;
