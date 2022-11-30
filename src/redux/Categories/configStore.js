import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import statusCheckerReducer from './categories';
import bookReducer from '../books/books';

const rootReducer = combineReducers({
  Books: bookReducer,
  Categories: statusCheckerReducer,
});

const store = configureStore(rootReducer);

export default store;
