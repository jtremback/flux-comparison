import React from 'react';
import flux from './flux.js';
import { getAllProducts } from './actions.js';
import App from './components/App.jsx';

getAllProducts();

React.render(
    React.createElement(App),
    document.getElementById('flux-app')
);
