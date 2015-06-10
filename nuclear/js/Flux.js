import Nuclear from 'nuclear-js';

import cart from './stores/CartStore.js';
import products from './stores/ProductStore.js';

let flux = new Nuclear.Reactor({
    debug: true
});

flux.registerStores({
    cart,
    products
});

export default flux;
