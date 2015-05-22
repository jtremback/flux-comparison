import React from 'react';
import flux from './Flux.js';
import App from './components/App.jsx';

flux.actions.getAllProducts();

React.render(
    React.createElement(App, { flux }),
    document.getElementById('flux-app')
);
