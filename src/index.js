import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ScrollToTop from './ScrollToTop';
import 'normalize.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
), document.getElementById('root'));
serviceWorker.unregister();
