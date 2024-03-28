// src/app/store.js
import counterReducer from '../features/counter/counterSlice';
import dummyreducer from '../features/counter/dummyreducer';
import { configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  counter: counterReducer,
  dummy: dummyreducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});