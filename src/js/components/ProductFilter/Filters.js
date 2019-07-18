import React from 'react';
import { PriceSelector } from './PriceSelector/PriceSelector';
import { ColorSelector } from './ColorSelector/ColorSelector';
import { SizeSelector } from './SizeSlelctor/SizeSelector';
import { BrandSelector } from './BrandSelector/BrandSelector';
import { AppData } from '../../data/AppData';
export function Filters() {
    return (
        <div className="filters">
            <h3 className="side-subtitle">Filter by</h3>
            <PriceSelector/>
            <ColorSelector colors={AppData.filters.colors}/>
            <SizeSelector sizes={AppData.filters.sizes}/>
            <BrandSelector/>
        </div>
    );
}
