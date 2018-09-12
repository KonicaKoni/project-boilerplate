/* eslint import/no-named-default: off */

import { combineReducers } from 'redux';
import { homeReducer } from './pages/Home/reducer';

//const dummyReducer = (store = {}) => store;

export const reducers = combineReducers({
  //dummy: dummyReducer,
  home: homeReducer,
  // place other reducers here,
});
