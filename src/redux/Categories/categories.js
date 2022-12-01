const STATUS_CHECKER = 'STATUS_CHECKER';

export const statusChecker = () => ({
  type: 'STATUS_CHECKER',
});

const initialState = [];

// reducers
const statusCheckerReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case STATUS_CHECKER:
      return 'Under construction';
    default:
      return state;
  }
};
export default statusCheckerReducer;
