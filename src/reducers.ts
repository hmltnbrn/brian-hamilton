import { combineReducers } from 'redux';
import HeaderReducers from './components/Header/reducers';
import PortolioReducers from './components/Portfolio/reducers';

const reducers = {
  header: HeaderReducers,
  portfolio: PortolioReducers
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
