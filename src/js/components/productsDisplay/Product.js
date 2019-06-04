import React from 'react';
import PropTypes from 'prop-types';
import imgP2 from '../../../images/items/5.png';

export function Product(props) {
    return (
        <div className="product-info">
            <div className="product-upper-info">
                <span className="new-info">New</span>
                <span className="fav-info"><i className="icon ion-ios-heart-outline"></i></span>
            </div>

            <img src={props.imagePath} alt={props.name} />
            <h5 className="product-name">{props.name}</h5>
            <div className="product-lower-info">
                <span className="product-price">{props.price}</span>
                <span className="product-to-cart"><i className="icon ion-bag"></i>Add to Cart</span>
            </div>
        </div>
    );
}

function toggleHaertClass(isFavorite) {
    if (isFavorite) {
        return "icon ion-ios-heart-outline"
    }
    return "icon ion-ios-heart-outline";
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired
};

