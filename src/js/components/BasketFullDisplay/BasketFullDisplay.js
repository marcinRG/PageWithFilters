import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { BasketItem } from './BasketItem';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { removeItemFromBasket, updateItemCount } from '../../ReduxSettings/actions/basketActions';
import {round} from '../utils';

class BasketFullDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="basket-full">
                <h3 className="basket-title">Basket</h3>
                <div className="item-title">
                    <span className="title left">Item:</span>
                    <span className="title right">Price:</span>
                </div>
                <div className="items-list">
                    <div>
                        {Object.keys(this.props.items).map(i =>
                            <BasketItem key={i} item={this.props.items[i]} updateAction={this.props.updateItemCount}
                            removeAction={this.props.removeItem}/>
                        )}
                    </div>
                </div>
                <div className="item-title">
                    <span className="title right">Total:</span>
                </div>
                <div className="row-container total">
                    <div className="item-price">
                        <span className="total-price">{round(getTotalSum(this.props.items),2)}</span>
                        <button className="checkout"><i className="icon ion-ios-cart"></i>Checkout</button>
                    </div>
                </div>
            </div>);
    }
}

function getTotalSum(obj) {
    let total = 0;
    Object.keys(obj).forEach((i) => {
        total = total + (obj[i].count*obj[i].price);
    });
    return total;
}

BasketFullDisplay.propTypes = {
    items: PropTypes.object,
    removeItem: PropTypes.func.isRequired,
    updateItemCount: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        items: state.basket.items,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeItem: bindActionCreators(removeItemFromBasket, dispatch),
        updateItemCount: bindActionCreators(updateItemCount, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketFullDisplay);
