const STATUS_CHECKER = 'STATUS_CHECKER';

export const statusChecker = () => ({
  type: 'STATUS_CHECKER',
  Payload: 'UNDER_CONSTRUCTION',
});

const initialState = [];

// reducers
const statusCheckerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case STATUS_CHECKER:
      return payload;
    default:
      return state;
  }
};

export default statusCheckerReducer;
