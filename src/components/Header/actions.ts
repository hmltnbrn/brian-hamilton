import { ActionCreator, Action } from 'redux';

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export const toggleDrawer: ActionCreator<Action> = () => {
  return {
    type: TOGGLE_DRAWER
  };
};
