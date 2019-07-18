import React from 'react';
import PropTypes from 'prop-types';

export function ColorPicker(props) {
    return (
        <li className={setStyleClass(props.colorLight)} style={{ backgroundColor: props.value }}>
            <span className="icon ion-checkmark"></span>
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

ColorPicker.propTypes = {
    value: PropTypes.string.isRequired,
    colorLight: PropTypes.bool.isRequired
};
