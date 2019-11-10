import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ScrollToTop from './ScrollToTop';
import 'normalize.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root: HTMLElement | null = document.getElementById('root');

if (root != null) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    root
  );
  serviceWorker.register();
}
