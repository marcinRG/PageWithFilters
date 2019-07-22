import React, { Component } from 'react';
import { Filters } from '../ProductFilter/Filters';
import { Tags } from '../ProductFilter/TagsSelector/Tags';
import { Categories } from '../ProductFilter/CategoriesSelector/Categories';
import { AppData } from '../../data/AppData';
import { Product } from './Product';

export class ProductsDisplay extends Component {
    render() {
        return (
            <section className="offer">
                <div className="side-element">
                    <Categories multipleSelection={false} array={AppData.filters.categories}
                                className={'category-selectors'} title={'Categories'}/>
                    <Filters/>
                    <Tags array={AppData.filters.tags} multipleSelection={true} title={'Popular Tags'}
                    className={'tag-selector'}/>
                </div>
                <div className="main-element">
                    <div className="result-filter">
                        <div className="filter-input">
                            <span>Sort by:</span>
                            <span>name</span>
                            <span><i className="icon ion-arrow-down-b"></i></span>
                        </div>
                        <div className="results-count">
                            <span>Showing</span>
                            <span>1-12</span>
                            <span>of</span>
                            <span>24</span>
                            <span>results</span>
                        </div>

                    </div>
                    <div className="products">

                        <Product name={AppData.products[0].name} price={AppData.products[0].price}
                                 imagePath={AppData.products[0].imagePath} isNew={AppData.products[0].isNew}
                                 isFavorite={AppData.products[0].isFavorite}/>

                        <Product name={AppData.products[1].name} price={AppData.products[1].price}
                                 imagePath={AppData.products[1].imagePath} isNew={AppData.products[1].isNew}
                                 isFavorite={AppData.products[1].isFavorite}/>

                        <Product name={AppData.products[2].name} price={AppData.products[2].price}
                                 imagePath={AppData.products[2].imagePath} isNew={AppData.products[2].isNew}
                                 isFavorite={AppData.products[2].isFavorite}/>

                        <Product name={AppData.products[3].name} price={AppData.products[3].price}
                                 imagePath={AppData.products[3].imagePath} isNew={AppData.products[3].isNew}
                                 isFavorite={AppData.products[3].isFavorite}/>

                        <Product name={AppData.products[4].name} price={AppData.products[4].price}
                                 imagePath={AppData.products[4].imagePath} isNew={AppData.products[4].isNew}
                                 isFavorite={AppData.products[4].isFavorite}/>

                        <Product name={AppData.products[5].name} price={AppData.products[5].price}
                                 imagePath={AppData.products[5].imagePath} isNew={AppData.products[5].isNew}
                                 isFavorite={AppData.products[5].isFavorite}/>

                    </div>
                    <div className="page-filter">
                        <span><i className="icon ion-ios-arrow-thin-right"></i></span>
                        <ul>
                            <li className="active">1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
