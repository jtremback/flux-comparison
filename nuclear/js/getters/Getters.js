export const products = {
    getProducts: ['products']
};

export const cart = {
    getProducts: ['cart'],
    getTotal: [
        ['cart'],
        products => products.reduce(
            (acc, product) => acc + (product.price * product.quantity)
        )
    ]
};
