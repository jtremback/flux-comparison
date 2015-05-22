import React from 'react';
import CartContainer from './CartContainer.jsx';
import ProductsContainer from './ProductsContainer.jsx';

export default React.createClass({
    render() {
        const { context } = this.props;

        return (
            <div>
                <ProductsContainer context={context}/>
                <CartContainer context={context}/>
            </div>
        );
    }
});
