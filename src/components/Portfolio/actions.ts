import { Dispatch, ActionCreator, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../store'

import axios from 'axios';

export const TOGGLE_DIALOG = 'TOGGLE_DIALOG';
export const GET_PORTFOLIO = 'GET_PORTFOLIO';
export const GET_PROJECT = 'GET_PROJECT';

const url = process.env.NODE_ENV === 'production' ? "" : "http://localhost:8080";

export const toggleDialog: ActionCreator<Action> = () => {
  return {
    type: TOGGLE_DIALOG
  };
};

export const getPortfolio = (): ThunkAction<void, AppState, null, Action<null>> => async (dispatch: Dispatch<Action>) => {
  try {
    var res = await axios.get(`${url}/api/portfolio`);
    return await dispatch({ type: GET_PORTFOLIO, payload: res.data })
  } catch(err) {
    console.log(err);
  }
};

export const getProject = (id: number): ThunkAction<void, AppState, null, Action<string>> => async (dispatch: Dispatch<Action>) => {
  try {
    var res = await axios.get(`${url}/api/project/${id}`);
    return await dispatch({ type: GET_PROJECT, payload: res.data })
  } catch(err) {
    console.log(err);
  }
};
