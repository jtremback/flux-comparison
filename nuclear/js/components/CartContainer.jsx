import React from 'react';
import Cart from '../../../common/components/Cart.jsx';
import flux from '../flux.js';
import * as getters from '../getters.js';
import * as actions from '../actions.js';

export default React.createClass({
    mixins: [flux.ReactMixin],

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
