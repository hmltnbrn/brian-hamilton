import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ScrollToTop from './ScrollToTop';
import 'normalize.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter } from 'react-router-dom';

injectTapEventPlugin();

ReactDOM.render((
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
