import { combineReducers } from 'redux';
import HeaderReducers from './components/Header/reducers';

const rootReducer = combineReducers({
  header: HeaderReducers
});

export default rootReducer;
