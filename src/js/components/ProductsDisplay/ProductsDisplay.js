import React, { Component } from 'react';
import { Filters } from '../ProductFilter/Filters';
import { AppData } from '../../data/AppData';
import { Product } from './Product';
import { ProductSortMethodSelector } from '../ProductSortMethodSelector/ProductSortMethodSelector';
import { ProductsCount } from '../ProductsCount/ProductsCount';
import { getPageNumber, PageSelector } from '../PageSelector/PageSelector';
import PropTypes from 'prop-types';

export class ProductsDisplay extends Component {
    constructor(props) {
        super(props);
        this.filterMethods = props.settings.filterMethods;
        this.state = {
            selectedFilterMethod: 0,
            productsPerPage: props.settings.productsPerPage,
            selectedPage: 1,
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
        };
        this.changeOrder = (number) => {
            console.log(number);
        };
    }

    render() {
        return (
            <section className="offer">
                <Filters/>
                <div className="main-element">
                    <div className="result-filter">
                        <ProductSortMethodSelector methods={this.filterMethods}
                                                   selectedMethod={this.state.selectedFilterMethod}
                                                   action={this.changeOrder}/>
                        <ProductsCount selectedPage={this.state.selectedPage} count={this.state.count}
                                       itemsPerPage={this.state.productsPerPage}/>
                    </div>
                    <div className="products">

                        <Product name={AppData.productsOld[0].name} price={AppData.productsOld[0].price}
                                 imagePath={AppData.productsOld[0].imagePath} isNew={AppData.productsOld[0].isNew}
                                 isFavorite={AppData.productsOld[0].isFavorite}/>

                        <Product name={AppData.productsOld[1].name} price={AppData.productsOld[1].price}
                                 imagePath={AppData.productsOld[1].imagePath} isNew={AppData.productsOld[1].isNew}
                                 isFavorite={AppData.productsOld[1].isFavorite}/>

                        <Product name={AppData.productsOld[2].name} price={AppData.productsOld[2].price}
                                 imagePath={AppData.productsOld[2].imagePath} isNew={AppData.productsOld[2].isNew}
                                 isFavorite={AppData.productsOld[2].isFavorite}/>

                        <Product name={AppData.productsOld[3].name} price={AppData.productsOld[3].price}
                                 imagePath={AppData.productsOld[3].imagePath} isNew={AppData.productsOld[3].isNew}
                                 isFavorite={AppData.productsOld[3].isFavorite}/>

                        <Product name={AppData.productsOld[4].name} price={AppData.productsOld[4].price}
                                 imagePath={AppData.productsOld[4].imagePath} isNew={AppData.productsOld[4].isNew}
                                 isFavorite={AppData.productsOld[4].isFavorite}/>

                        <Product name={AppData.productsOld[5].name} price={AppData.productsOld[5].price}
                                 imagePath={AppData.productsOld[5].imagePath} isNew={AppData.productsOld[5].isNew}
                                 isFavorite={AppData.productsOld[5].isFavorite}/>

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
