// reducers.js

const initialState = null;

const quoteResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUOTE_RESPONSE':
      return action.payload;
    default:
      return state;
  }
};

export default quoteResponseReducer;
