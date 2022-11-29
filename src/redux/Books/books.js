const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// action creators
export const addBooks = (text) => ({
  type: ADD_BOOK,
  payload: {
    text,
  },
});

export const removeBooks = (text) => ({
  type: REMOVE_BOOK,
  payload: {
    text,
  },
});

// create reducers
const initialState = [];

const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return state.filter((books) => books.id !== payload);
    default:
      return state;
  }
};

export default bookReducer;
