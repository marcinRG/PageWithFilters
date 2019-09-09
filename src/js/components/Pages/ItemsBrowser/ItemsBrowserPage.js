import React from 'react';
import ProductsDisplay from '../../ProductsDisplay/ProductsDisplay';
import { SmallForm } from '../../pageElements/SmallForm';

export function ItemsBrowserPage() {
    return (
        <React.Fragment>
            <ProductsDisplay/>
            <SmallForm/>
        </React.Fragment>);
}
