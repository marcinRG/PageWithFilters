import React from 'react';
import { ProductsDisplay } from '../../ProductsDisplay/ProductsDisplay';
import { AppSettings } from '../../../data/AppSettings';
import { SmallForm } from '../../pageElements/SmallForm';

export function ItemsBrowserPage() {
    return (
        <React.Fragment>
            <ProductsDisplay settings={AppSettings.productDisplaySettings}/>
            <SmallForm/>
        </React.Fragment>);
}
