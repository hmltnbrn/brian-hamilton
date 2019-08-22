import { TOGGLE_DRAWER } from './actions';
import { Reducer, AnyAction } from 'redux';

interface InitialState {
  drawer: boolean;
}

interface ActionTypes {
  type: typeof TOGGLE_DRAWER;
  payload?: InitialState;
}

const initialState = {
  drawer: false
};

const HeaderReducers: Reducer<InitialState, AnyAction> = (
  state: InitialState = initialState,
  action: ActionTypes
): InitialState => {
  switch (action.type) {
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
