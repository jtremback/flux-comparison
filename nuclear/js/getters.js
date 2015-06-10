export const products = {
    getProducts: [
        ['products'],
        products => products.toArray()
    ]
};

const getProducts = [
    ['cart'],
    products => products.toArray()
];

const getTotal = [
    ['cart'],
    products => {
        return products.reduce(
            // Reduce products down to a total price.
            (acc, product) => acc + (product.price * product.quantity)
        // Fallback to 0 if no products
        ) || 0;
    }
];

export const cart = {
    getProducts,
    getTotal
};
