import Nuclear from 'nuclear-js';

// ACTION HANDLERS
function addToCart (products, newProduct) {
    return products.set(newProduct.id, newProduct);
}

function receiveProducts (products, newProducts) {
    newProducts = newProducts.toMap().mapKeys((k, v) => v.get('id'));
    return products.merge(newProducts);
}

export default new Nuclear.Store({
    getInitialState () {
        return Nuclear.toImmutable({});
    },

    initialize () {
        this.on('ADD_TO_CART', addToCart);
        this.on('RECEIVE_PRODUCTS', receiveProducts);
    }
});
