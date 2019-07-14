import React from 'react';
import PropTypes from 'prop-types';

export function Product(props) {
    return (
        <div className="product-info">
            <div className="product-upper-info">
                <span className={toggleNewClass(props.isNew)}>New</span>
                <span className="fav-info"><i className={toggleFavoriteClass(props.isFavorite)}></i></span>
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

function toggleFavoriteClass(isFavorite) {
    if (isFavorite) {
        return "icon ion-ios-heart"
    }
    return "icon ion-ios-heart-outline";
}

function toggleNewClass(isNew) {
    if (isNew) {
        return "new-info"
    }
    return "new-info hidden";
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired
};

