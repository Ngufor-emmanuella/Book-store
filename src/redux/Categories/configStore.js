import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import statusCheckerReducer from './Categories/categories';
import bookReducer from './Books/books';

const rootReducer = combineReducers({
  Books: bookReducer,
  Categories: statusCheckerReducer,
});

const store = configureStore(rootReducer);

export default store;
