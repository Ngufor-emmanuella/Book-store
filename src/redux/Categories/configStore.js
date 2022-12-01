import { configureStore } from '@reduxjs/toolkit';
import statusCheckerReducer from './categories';
import bookReducer from '../Books/books';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: statusCheckerReducer,
  },
});

export default store;
