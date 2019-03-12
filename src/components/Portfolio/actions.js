import axios from 'axios';

export const TOGGLE_DIALOG = 'TOGGLE_DIALOG';
export const GET_PORTFOLIO = 'GET_PORTFOLIO';
export const GET_PROJECT = 'GET_PROJECT';

const url = process.env.NODE_ENV === 'production' ? "" : "http://localhost:8080";

export const toggleDialog = () => dispatch => {
  dispatch({
    type: TOGGLE_DIALOG
  });
};

export const getPortfolio = () => async dispatch => {
  try {
    var res = await axios.get(`${url}/portfolio`);
    dispatch({ type: GET_PORTFOLIO, payload: res.data })
  } catch(err) {
    console.log(err);
  }
};

export const getProject = (id) => async dispatch => {
  try {
    var res = await axios.get(`${url}/project/${id}`);
    dispatch({ type: GET_PROJECT, payload: res.data })
  } catch(err) {
    console.log(err);
  }
};
