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
  if (action.type === 'ADD_BOOK') {
    return [...state, action.payload];
  } else (action.type === 'REMOVE_BOOK'); {
    return state.map((Books) => Books.id !== payload)
  } else {
    default:
      return state;
  }
};

export default bookReducer;
