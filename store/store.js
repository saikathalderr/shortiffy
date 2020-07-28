import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const inialState = {};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  inialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
