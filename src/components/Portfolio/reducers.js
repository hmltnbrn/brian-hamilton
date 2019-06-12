import { TOGGLE_DIALOG, GET_PORTFOLIO, GET_PROJECT } from './actions';

const initialState = {
  dialog: false,
  portfolio: [],
  project: {}
};

const PortfolioReducers = function(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_DIALOG:
      return {
        ...state,
        dialog: !state.dialog
      };
    case GET_PORTFOLIO:
      return {
        ...state,
        portfolio: action.payload
      };
    case GET_PROJECT:
      return {
        ...state,
        dialog: true,
        project: action.payload
      };
    default:
      return state;
  }
};

export default PortfolioReducers;
