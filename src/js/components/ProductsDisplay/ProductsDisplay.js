import React, { Component } from 'react';
import { Filters } from '../ProductFilter/Filters';
import Product from './Product';
import { ProductSortMethodSelector } from '../ProductSortMethodSelector/ProductSortMethodSelector';
import { ProductsCount } from '../ProductsCount/ProductsCount';
import { getPageNumber, PageSelector } from '../PageSelector/PageSelector';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { changeCurrentPage, changeSortMethod } from '../../ReduxSettings/actions/productsActions';
import { getFilteredProducts } from '../../selectors/productSelectors';

class ProductsDisplay extends Component {
    constructor(props) {
        super(props);
        this.changePage = (pageNumber) => {
            const prods = this.props.products;
            if (pageNumber) {
                this.props.changeCurrentPage(pageNumber);
            } else {
                if (prods.settings.currentPage < getPageNumber(Object.entries(prods.items).length,
                        prods.settings.itemsPerPage)) {
                    this.props.changeCurrentPage(prods.settings.currentPage + 1);
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
                                       count={Object.entries(this.props.products.items).length}
                                       itemsPerPage={this.props.products.settings.itemsPerPage}/>
                    </div>
                    <div className="products">
                        {this.props.filteredProducts.map((obj,i) =>
                            <Product item={obj} key={i}/>
                        )}
                    </div>
                    <PageSelector selectedPage={this.props.products.settings.currentPage}
                                  count={Object.entries(this.props.products.items).length}
                                  itemsPerPage={this.props.products.settings.itemsPerPage}
                                  action={this.changePage}/>
                </div>
            </section>
        );
    }
}

ProductsDisplay.propTypes = {
    products: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    sizes: PropTypes.object.isRequired,
    changeCurrentPage: PropTypes.func.isRequired,
    changeSortMethod: PropTypes.func.isRequired,
    filteredProducts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        filteredProducts: getFilteredProducts(state.products, state.sizeFilters, state.brandsFilters,
            state.categoriesFilters, state.colorFilters, state.tagFilters),
        products: state.products,
        categories: state.categoriesFilters,
        sizes: state.sizeFilters,
        colors: state.colorFilters,
        tags: state.tagFilters,
        brands: state.brandsFilters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeSortMethod: bindActionCreators(changeSortMethod, dispatch),
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDisplay);
