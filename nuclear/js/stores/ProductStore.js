module.exports = new Nuclear.Store({
    getInitialState () {
        return toImmutable({})
    },

    initialize () {
        this.on('ADD_TO_CART', addToCart);
        this.on('RECEIVE_PRODUCTS', receiveProducts);
    }
})

function addToCart (products, newProduct) {
    return products.set(newProduct.id, newProduct);
}

function receiveProducts (products, newProducts) {
    return products.merge(newProducts);
}
