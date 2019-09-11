import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { addItemToBasket, updateItemCount } from '../../ReduxSettings/actions/basketActions';
import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom';
import { getItemCount } from '../utils';

class ItemDisplayFull extends Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.itemId;
        if (id) {
            this.state = {
                item: Object.assign({}, this.props.items[id])
            };
        }

        this.addToBasket = () => {
            if (this.props.items) {
                if (this.props.basket[this.state.item.id]) {
                    this.props.updateCount({
                        count: getItemCount(this.props.basket, this.state.item.id) + 1,
                        id: this.state.item.id
                    });
                } else {
                    const item = Object.assign({}, this.state.item, { count: 1 });
                    this.props.addToBasket(item);
                }
            }
        }

    }

    render() {
        return (
            <div className="item-display">
                <h3 className="item-title">Item details</h3>
                <div className="image-container">
                    <img className="item-image" src={this.state.item.imagePath} alt={this.state.item.name}/>
                </div>
                <div className="item-detail">
                    <h4 className="detail item-name">{this.state.item.name}</h4>
                    <span className="detail item-brand"><span
                        className="title">Brand:</span>{this.state.item.brand}</span>
                    <div className="detail item-details">{this.state.item.details}
                    </div>
                    <span className="detail item-size"><span
                        className="title">Item size:</span>{this.state.item.size}</span>
                    <div className="detail item-color"><span className="title">Available color:</span>
                        <span className="color" style={{ backgroundColor: this.state.item.color.value }}></span>
                    </div>
                    <div className="detail item-category"><span className="title">Category:</span>
                        <span>{this.state.item.category}</span>
                    </div>
                    <div className=" detail item-tags"><span
                        className="title">Tags:</span>
                        {this.state.item.tags.map((tag, i) =>
                            <span key={i}>{tag}, </span>
                        )}
                    </div>
                    <div className="row">
                        <span className="item-price">{this.state.item.price}</span>
                        <button className="item-add-to-basket" onClick={this.addToBasket}><i
                            className="icon ion-bag"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        items: state.products.items,
        basket: state.basket.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToBasket: bindActionCreators(addItemToBasket, dispatch),
        updateCount: bindActionCreators(updateItemCount, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDisplayFull);

ItemDisplayFull.propTypes = {
    match: PropTypes.object,
    items: PropTypes.object,
    basket: PropTypes.object,
    addToBasket: PropTypes.func.isRequired,
    updateCount: PropTypes.func.isRequired
};
