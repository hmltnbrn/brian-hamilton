import { TOGGLE_DIALOG, GET_PORTFOLIO, GET_PROJECT } from './actions';

type InitialState = {
  dialog: Boolean,
  portfolio: Array<any>,
  project: Object
};

type ActionTypes = {
  type: typeof TOGGLE_DIALOG | typeof GET_PORTFOLIO | typeof GET_PROJECT,
  payload: InitialState
};

const initialState: InitialState = {
  dialog: false,
  portfolio: [],
  project: {}
};

const PortfolioReducers = function(state = initialState, action: ActionTypes) {
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
