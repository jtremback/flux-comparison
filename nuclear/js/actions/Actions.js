'use strict'
import API from '../utils/WebAPIUtils';

export async function getAllProducts () {
    const products = await API.getAllProducts()
    receiveProducts(products)
}

export function receiveProducts (products) {
    flux.dispatch('RECEIVE_PRODUCTS', products)
}

export function addToCart (product) {
    flux.dispatch('ADD_TO_CART', product)
}

export async function cartCheckout (products) {
    flux.dispatch('CART_CHECKOUT', products)

    const products = await API.checkoutProducts(products)
    finishCheckout(products)
}

export function finishCheckout (products) {
    flux.dispatch('FINISH_CHECKOUT', products)
}
