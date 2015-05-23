import React from 'react';
import { getters, actions, ReactMixin, default as flux } from '../flux.js';

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
    mixins: [ReactMixin],

    getDataBindings () {
        return {
            products: ['products']
        };
    },

    render () {
        var that = this;
        setTimeout(() => console.log('bam', flux.evaluate(['products']), that.state.products), 5000);
        const nodes = this.state.products.map(product => {
            return (
                <ProductItemContainer
                    flux={this.props.flux}
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
