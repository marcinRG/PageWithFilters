import React, { Component } from 'react';
import { ColorSelector } from './ColorSelector/ColorSelector';
import { AppData } from '../../data/AppData';
import { ElementsList } from '../ElementsList/ElementsList';
import PriceSelector from './PriceSelector/PriceSelector';

export class Filters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filters">
                <h3 className="side-subtitle">Filter by</h3>
                <PriceSelector/>
{/*
                <PriceSelector min={AppData.filtersOld.prices.min} max={AppData.filtersOld.prices.max}
                               pointerSize={AppData.filtersOld.prices.pointerSize}/>
                <ColorSelector array={AppData.filtersOld.colors} multipleSelection={false}/>
                <ElementsList array={AppData.filtersOld.sizes} multipleSelection={false} className={'size-filter'}
                              title={'Size'}/>
                <ElementsList array={AppData.filtersOld.brands} multipleSelection={true} className={'brands-filter'}
                              title={'Brands'}/>
*/}
            </div>
        );
    }
}
