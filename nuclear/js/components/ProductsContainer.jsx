import React from 'react';
import { getters, actions, ReactMixin } from '../flux.js';

import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

const ProductItemContainer = React.createClass({
    onAddToCartClicked() {
        actions.addToCart(this.props.product);
    },

    render() {
        return (
            <ProductItem
                product={this.props.product}
                onAddToCartClicked={this.onAddToCartClicked}
            />
        );
    }

});

export default const ProductsListContainer = React.createClass({
    mixins: [ReactMixin],

    getDataBindings () {
        return {
            products: getters.products.getProducts
        }
    },

    render() {
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
            <ProductsList title="Flux Shop Demo (Nucular.js)">
                {nodes}
            </ProductsList>
        );
    }
});
