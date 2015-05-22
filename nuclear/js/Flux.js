import Nuclear from 'nuclear-js';

import actions from './actions/Actions.js';
import actions from './getters/Getters.js';

import cart from './stores/CartStore.js';
import products from './stores/ProductStore.js';

let flux = new Nuclear.Reactor({
    debug: true,
});

flux.registerStores({
    cart,
    products
});

flux.actions = actions;
flux.getters = getters;

export flux;
