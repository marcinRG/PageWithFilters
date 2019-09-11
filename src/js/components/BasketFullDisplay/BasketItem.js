import React from 'react';
import PropTypes from 'prop-types';
import { round } from '../utils';
import { Link } from 'react-router-dom';

export function BasketItem(props) {
    const addOne = () => {
        const newObj = createNewItemState(props.item,props.item.count+1);
        props.updateAction(newObj);
    };

    const removeOne = () => {
        if (props.item.count > 1) {
            const newObj = createNewItemState(props.item,props.item.count-1);
            props.updateAction(newObj);
        }
    };

    const remove = () => {
        props.removeAction(props.item.id);
    };

    return (

        <div className="row-container item">
            <img className="item-image" src={props.item.imagePath} alt={props.item.name}/>
            <div className="item-detail">
                <Link to={'/item/' + props.item.id}>
                    <h4 className="item-name">{props.item.name}</h4>
                </Link>

                <div className="item-additional-info">
                    <span>{props.item.brand}, {props.item.color.name}, {props.item.size}</span>
                    <span>price per one: {props.item.price}</span>
                </div>
                <div className="items-count-form">
                    <input className="input-txt" type="text" value={props.item.count} readOnly={true}/>
                    <div className="button-wrapper">
                        <button onClick={addOne} className="button-action up">
                            <i className="icon ion-android-arrow-dropup"/>
                        </button>
                        <button onClick={removeOne} className="button-action">
                            <i className="icon ion-android-arrow-dropdown"/>
                        </button>
                    </div>
                </div>
                <div className="remove-row">
                    <button className="remove-action" onClick={remove}>
                        <i className="icon ion-android-delete"></i>remove item
                    </button>
                </div>
            </div>
            <div className="item-price">{round(props.item.price * props.item.count,2)}</div>
        </div>
    );
}

function createNewItemState(prevItemState, count) {
    return Object.assign({}, prevItemState, {count: count});
}

BasketItem.propTypes = {
    item: PropTypes.object.isRequired,
    removeAction: PropTypes.func.isRequired,
    updateAction: PropTypes.func.isRequired
};
