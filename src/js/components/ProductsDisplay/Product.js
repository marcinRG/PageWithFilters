import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { addItemToBasket, updateItemCount } from '../../ReduxSettings/actions/basketActions';
import { getItemCount } from '../utils';

class Product extends Component {
    constructor(props) {
        super(props);

        this.addToBasket = () => {
            if (this.props.items) {
                if (this.props.items[this.props.item.id]) {
                    this.props.updateCount({
                        count: getItemCount(this.props.items,this.props.item.id) + 1,
                        id: this.props.item.id
                    });
                } else {
                    const item = Object.assign({}, this.props.item, { count: 1 });
                    this.props.addToBasket(item);
                }
            }
        }
    }

    render() {
        return (
            <div className="product-info">
                <div className="product-upper-info">
                    <span className={toggleNewClass(this.props.item.isNew)}>New</span>
                    <span className="fav-info"><i
                        className={toggleFavoriteClass(this.props.item.isFavorite)}></i></span>
                </div>
                <Link to={'/item/' + this.props.item.id}>
                    <img src={this.props.item.imagePath} alt={this.props.item.name}/>
                </Link>
                <h5>
                    <Link to={'/item/' + this.props.item.id}>
                        {this.props.item.name}
                    </Link>
                </h5>

                {/*<h5 className="product-name">{this.props.item.name}</h5>*/}
                <div className="product-lower-info">
                    <span className="product-price">{this.props.item.price}</span>
                    <span className="product-to-cart" onClick={this.addToBasket}><i className="icon ion-bag"></i>Add to Cart</span>
                </div>
            </div>
        );
    }

}

function toggleFavoriteClass(isFavorite) {
    if (isFavorite) {
        return 'icon ion-ios-heart'
    }
    return 'icon ion-ios-heart-outline';
}

function toggleNewClass(isNew) {
    if (isNew) {
        return 'new-info'
    }
    return 'new-info hidden';
}

function mapStateToProps(state) {
    return {
        items: state.basket.items,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToBasket: bindActionCreators(addItemToBasket, dispatch),
        updateCount: bindActionCreators(updateItemCount, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);

Product.propTypes = {
    item: PropTypes.object.isRequired,
    items: PropTypes.object,
    addToBasket: PropTypes.func.isRequired,
    updateCount: PropTypes.func.isRequired
};

