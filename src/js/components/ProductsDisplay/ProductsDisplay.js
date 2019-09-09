import React, { Component } from 'react';
import { Filters } from '../ProductFilter/Filters';
import { ProductSortMethodSelector } from '../ProductSortMethodSelector/ProductSortMethodSelector';
import { ProductsCount } from '../ProductsCount/ProductsCount';
import { getPageNumber, PageSelector } from '../PageSelector/PageSelector';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { changeCurrentPage, changeSortMethod } from '../../ReduxSettings/actions/productsActions';
import { getFilteredProducts, sliceResultsArray } from '../../selectors/productSelectors';
import ItemDisplayShort from '../ItemDisplayShort/ItemDisplayShort';

class ProductsDisplay extends Component {
    constructor(props) {
        super(props);
        this.changePage = (pageNumber) => {
            const settings = this.props.products.settings;
            if (pageNumber) {
                this.props.changeCurrentPage(pageNumber);
            }
            else {
                if (settings.currentPage < getPageNumber(this.props.filteredProducts.length,
                    settings.itemsPerPage)) {
                    this.props.changeCurrentPage(settings.currentPage + 1);
                } else {
                    this.props.changeCurrentPage(1);
                }
            }
        };

        this.changeOrder = (number) => {
            this.props.changeSortMethod(number);
        };
    }

    render() {
        return (
            <section className="offer">
                <Filters/>
                <div className="main-element">
                    <div className="result-filter">
                        <ProductSortMethodSelector methods={this.props.products.settings.sortMethodList}
                                                   selectedMethod={this.props.products.settings.sortMethod}
                                                   action={this.changeOrder}/>
                        <ProductsCount selectedPage={this.props.products.settings.currentPage}
                                       count={this.props.filteredProducts.length}
                                       itemsPerPage={this.props.products.settings.itemsPerPage}/>
                    </div>
                    <div className="products">
                        {this.props.page.map((obj, i) =>
                            <ItemDisplayShort item={obj} key={i}/>
                        )}
                    </div>
                    <PageSelector selectedPage={this.props.products.settings.currentPage}
                                  count={this.props.filteredProducts.length}
                                  itemsPerPage={this.props.products.settings.itemsPerPage}
                                  action={this.changePage}/>
                </div>
            </section>
        );
    }
}

ProductsDisplay.propTypes = {
    products: PropTypes.object.isRequired,
    changeCurrentPage: PropTypes.func.isRequired,
    changeSortMethod: PropTypes.func.isRequired,
    filteredProducts: PropTypes.array.isRequired,
    page: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const items = getFilteredProducts(state.products, state.sizeFilters, state.brandsFilters,
        state.categoriesFilters, state.colorFilters, state.tagFilters, state.priceFilters);
    const currentPage = sliceResultsArray(items, state.products.settings);

    return {
        filteredProducts: items,
        page: currentPage,
        products: state.products,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeSortMethod: bindActionCreators(changeSortMethod, dispatch),
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDisplay);
