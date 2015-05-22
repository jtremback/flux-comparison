const getters = {
    products: {
        getProducts: ['products']
    },

    cart: {
        getProducts: ['cart'],
        getTotal: [
            getters.cart.getProducts,
            products => products.reduce(
                (acc, product) => acc + (product.price * product.quantity)
            )
        ]
    }
}

export getters
