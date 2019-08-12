import React, { Component } from 'react';
import PriceSelector from '../PriceSelector/PriceSelector';
import ColorList from '../ColorList/ColorList';
import SizesList from '../SizesList/SizesList';
import TagList from '../TagsList/TagList';
import CategoriesList from '../CategoriesList/CategoriesList';
import BrandsList from '../BrandsList/BrandsList';

export class Filters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="side-element">
                <CategoriesList className={'category-selectors'} title={'Categories'}/>
                <div className="filters">
                    <h3 className="side-subtitle">Filter by</h3>
                    <PriceSelector/>
                    <SizesList className={'size-filter'} title={'Size'}/>
                    <ColorList className={'color-filter'} title={'Color'}/>
                    <BrandsList className={'brands-filter'}
                                title={'Brands'}/>
                </div>
                <TagList title={'Popular Tags'} className={'tag-selector'}/>
            </div>
        );
    }
}
