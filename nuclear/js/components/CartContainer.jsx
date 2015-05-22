import React from 'react';
import Cart from '../../../common/components/Cart.jsx';
import { getters, actions, ReactMixin } from '../flux.js';

export default React.createClass({
    mixins: [ReactMixin],

    getDataBindings () {
        return {
            products: getters.cart.getProducts,
            total: getters.cart.getTotal
        };
    },

    render() {
        return (
            <Cart
                products={this.state.products}
                // Coerce to string
                total={this.state.total + ''}
                onCheckoutClicked={() => actions.cartCheckout(this.state.products)}
            />
        );
    }
});
