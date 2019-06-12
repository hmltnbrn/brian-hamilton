import { TOGGLE_DRAWER } from './actions';

const initialState = {
  drawer: false
};

const HeaderReducers = function(state = initialState, action) {
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
