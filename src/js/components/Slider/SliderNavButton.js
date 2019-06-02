import React from 'react';
import PropTypes from 'prop-types';

export function SliderNavButton(props) {
    const iconClass = 'icon ' + props.iconClass;
    return (
        <div className={props.buttonClass}><i className={iconClass} onClick={props.action}></i></div>
    );
}

SliderNavButton.propTypes = {
    buttonClass: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};
