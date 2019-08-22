import { ActionCreator, Action } from 'redux';

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export const toggleDrawer: ActionCreator<Action> = (): any => {
  return {
    type: TOGGLE_DRAWER
  };
};
