// index.js

import { createStore, combineReducers } from 'redux';
import quoteResponseReducer from './reducers';

const rootReducer = combineReducers({
  quoteResponse: quoteResponseReducer,
});

const store = createStore(rootReducer);

export default store;
