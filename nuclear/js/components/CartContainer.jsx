import React from 'react';
import { getters, actions, ReactMixin } from '../flux.js';

export default const CartContainer = React.createClass({
    mixins: [ReactMixin],

    getDataBindings () {
        return {
            products: getters.cart.getProducts,
            total: getters.cart.getTotal
        }
    },

    onCheckoutClicked() {
        if (this.state.products.length) {
            actions.cartCheckout(this.state.products);
        }
    },

    render() {
        return (
            <Cart
                products={this.state.products}
                total={this.state.total}
                onCheckoutClicked={this.onCheckoutClicked}
            />
        );
    }
});
