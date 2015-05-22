module.exports = new Nuclear.Store({
    getInitialState () {
        return toImmutable({})
    },

    initialize () {
        this.on('ADD_TO_CART', addToCart)
        this.on('BEGIN_CHECKOUT', beginCheckout)
        this.on('FINISH_CHECKOUT', finishCheckout)
    }
})

// ACTION HANDLERS
function addToCart (products, newProduct) {
    const quantity = products.getIn([newProduct.id, quantity])
    const product = newProduct.set(
        'quantity',
        (quantity || 0) + 1
    )

    return products.set(product.id, product)
}

function beginCheckout () {
    console.log('CHECKING OUT:', products)
    return toImmutable({})
}

function finishCheckout (products) {
    console.log('YOU BOUGHT:', products)
}
