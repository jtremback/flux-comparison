import * as API from './utils/WebAPIUtils';
import flux from './flux.js';
import { toImmutable } from 'nuclear-js';

export function receiveProducts (products) {
    flux.dispatch('RECEIVE_PRODUCTS', toImmutable(products));
}

export async function getAllProducts () {
    const products = await API.getAllProducts();
    receiveProducts(products);
}

export function addToCart (product) {
    flux.dispatch('ADD_TO_CART', product);
}

export function finishCheckout (products) {
    flux.dispatch('FINISH_CHECKOUT', products);
}

export async function cartCheckout (products) {
    if (products) {
        flux.dispatch('CART_CHECKOUT', products);

        products = await API.checkoutProducts(products);
        finishCheckout(products);
    }
}
