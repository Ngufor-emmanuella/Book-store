const STATUS_CHECKER = 'STATUS_CHECKER';

export const statusChecker = () => ({
  type: 'STATUS_CHECKER',
  Payload: 'UNDER_CONSTRUCTION',
});

const initialState = {
  books: [],
};

// reducers
const statusCheckerReducer = (state = initialState, action) => {
  if (action.type === STATUS_CHECKER) {
    return 'UNDER_CONSTRUCTION';
  }
  return state;
};

export default statusCheckerReducer;
