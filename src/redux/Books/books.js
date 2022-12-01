const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// action creators
export const addBooks = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBooks = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// create reducers
const initialState = [{
  id: '1',
  title: 'The complete reference',
  author: 'John dee',
},
{
  id: '2',
  title: 'The complete React Book',
  author: 'Rashid',
},
{
  id: '3',
  title: 'Data structure and algorithm',
  author: 'Ngufor',
},
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
