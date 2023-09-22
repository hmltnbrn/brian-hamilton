import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ScrollToTop from './ScrollToTop';
import reportWebVitals from './reportWebVitals';

import 'normalize.css';
import './index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </ScrollToTop>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
