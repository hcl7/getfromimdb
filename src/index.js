import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { createRoot } from 'react-dom/client';

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider> 
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render( app );
reportWebVitals();
