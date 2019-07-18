import React, { Component } from 'react';
import { ColorSelector } from './ColorSelector/ColorSelector';
import { AppData } from '../../data/AppData';
import { ElementsList } from '../ElementsList/ElementsList';

export class Filters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filters">
                <h3 className="side-subtitle">Filter by</h3>
                <ColorSelector array={AppData.filters.colors} multipleSelection={false}/>
                <ElementsList array={AppData.filters.sizes} multipleSelection={false} className={'size-filter'}
                              title={'Size'}/>
                <ElementsList array={AppData.filters.brands} multipleSelection={true} className={'brands-filter'}
                              title={'Brands'}/>
            </div>
        );
    }
}
