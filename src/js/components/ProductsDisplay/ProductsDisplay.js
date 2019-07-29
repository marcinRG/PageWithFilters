import React, { Component } from 'react';
import { Filters } from '../ProductFilter/Filters';
import { Tags } from '../ProductFilter/TagsSelector/Tags';
import { Categories } from '../ProductFilter/CategoriesSelector/Categories';
import { AppData } from '../../data/AppData';
import { Product } from './Product';
import { ProductSortMethodSelector } from './ProductSortMethodSelector/ProductSortMethodSelector';
import { ProductsCount } from './ProductsCount/ProductsCount';
import { getPageNumber, PageSelector } from './PageSelector/PageSelector';
import PropTypes from 'prop-types';

export class ProductsDisplay extends Component {
    constructor(props) {
        super(props);
        this.filterMethods = props.settings.filterMethods;
        this.state = {
            selectedFilterMethod: 0,
            productsPerPage: props.settings.productsPerPage,
            selectedPage: 2,
            count: 51
        };

        this.changePage = (pageNumber) => {
            if (pageNumber) {
                this.setState({
                    selectedPage: pageNumber
                });
            } else {
                if (this.state.selectedPage < getPageNumber(this.state.count, this.state.productsPerPage)) {
                    this.setState((previousState) => {
                        return {
                            selectedPage: previousState.selectedPage + 1
                        };
                    })
                }
            }
        }
        this.changeOrder = (number) =>{
            console.log(number);
        }
    }

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
                        <ProductSortMethodSelector methods={this.filterMethods}
                                                   selectedMethod={this.state.selectedFilterMethod}
                        action={this.changeOrder}/>
                        <ProductsCount selectedPage={this.state.selectedPage} count={this.state.count}
                                       itemsPerPage={this.state.productsPerPage}/>
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
                    <PageSelector selectedPage={this.state.selectedPage} count={this.state.count}
                                  itemsPerPage={this.state.productsPerPage}
                                  action={this.changePage}/>
                </div>
            </section>
        );
    }
}

ProductsDisplay.propTypes = {
    settings: PropTypes.object.isRequired
};
