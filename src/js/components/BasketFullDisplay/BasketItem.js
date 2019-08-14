import React from 'react';
import PropTypes from 'prop-types';

export function BasketItem(props) {
    return (
        <React.Fragment>
            <h1>Basket item</h1>
            <div>
                <img src={'../' + props.item.imagePath} alt={props.item.name} />
                <span>{props.item.name}</span>
                <span>{props.item.price}</span>
                <span>{props.item.count}</span>
            </div>
        </React.Fragment>
    );
}

BasketItem.propTypes = {
    item: PropTypes.object.isRequired
};
