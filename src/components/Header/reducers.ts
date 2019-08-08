import { TOGGLE_DRAWER } from './actions';

type InitialState = {
  drawer: Boolean
};

type ActionTypes = {
  type: typeof TOGGLE_DRAWER,
  payload: InitialState
};

const initialState = {
  drawer: false
};

const HeaderReducers = function(state = initialState, action: ActionTypes) {
  switch(action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawer: !state.drawer
      };
    default:
      return state;
  }
};

export default HeaderReducers;
