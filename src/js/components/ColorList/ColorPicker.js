import React from 'react';
import PropTypes from 'prop-types';
import { getSelected } from '../utils';

export function ColorPicker(props) {
    const handleClick = () => {
        props.action(props.id);
    };
    return (
        <li className={setStyleClass(props.colorLight)} style={{ backgroundColor: props.value }} onClick={handleClick}>
            <span className={setCheckMarkClass(getSelected(props.selected))}/>
        </li>
    );
}

function setStyleClass(isLight) {
    let className = 'c-picker';
    if (isLight) {
        return `${className} light`;
    } else {
        return `${className} dark`;
    }
}

function setCheckMarkClass(isSelected) {
    if (isSelected) {
        return 'icon ion-checkmark';
    }
    return 'icon ion-checkmark hidden';
}

ColorPicker.propTypes = {
    value: PropTypes.string.isRequired,
    colorLight: PropTypes.bool.isRequired,
    selected: PropTypes.bool,
    id: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
};
