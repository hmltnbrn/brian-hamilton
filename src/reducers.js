import { combineReducers } from 'redux';
import HeaderReducers from './components/Header/reducers';
import PortolioReducers from './components/Portfolio/reducers';

const rootReducer = combineReducers({
  header: HeaderReducers,
  portfolio: PortolioReducers
});

export default rootReducer;
