import React from 'react';
import flux from '../flux.js';
import getters from '../getters.js';
import actions from '../actions.js';

import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

const ProductItemContainer = React.createClass({
    render () {
        return (
            <ProductItem
                product={this.props.product}
                onAddToCartClicked={() => actions.addToCart(this.props.product)}
            />
        );
    }
});

export default React.createClass({
    mixins: [flux.ReactMixin],

    getDataBindings () {
        return {
            products: ['products']
        };
    },

    componentDidMount () {
        flux.observe(['products'], console.log);
    },

    render () {
        const nodes = this.state.products.map(product => {
            return (
                <ProductItemContainer
                    key={product.id}
                    product={product}
                />
            );
        });

        return (
            <ProductsList title="Flux Shop Demo (Nuclear.js)">
                {nodes}
            </ProductsList>
        );
    }
});
