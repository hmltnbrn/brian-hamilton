import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const composeEnhancers = composeWithDevTools({});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
