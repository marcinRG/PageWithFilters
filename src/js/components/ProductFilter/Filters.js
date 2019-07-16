import React from 'react';
import { PriceSelector } from './PriceSelector/PriceSelector';
import { ColorSelector } from './ColorSelector/ColorSelector';
import { SizeSelector } from './SizeSlelctor/SizeSelector';
import { BrandSelector } from './BrandSelector/BrandSelector';
export function Filters() {
    return (
        <div className="filters">
            <h3 className="side-subtitle">Filter by</h3>
            <PriceSelector/>
            <ColorSelector/>
            <SizeSelector/>
            <BrandSelector/>
        </div>
    );
}
