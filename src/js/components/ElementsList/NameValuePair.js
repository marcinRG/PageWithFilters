import React from 'react';
import PropTypes from 'prop-types';
export function NameValuePair(props) {
    const handleClick = () => {
        props.action(props.id);
    };
    return (
        <li className={setSelectedClass(props.selected)} onClick={handleClick}>{props.name}<sup>{props.value}</sup></li>
    );
}

function setSelectedClass(isSelected) {
    if (isSelected) {
        return 'selected';
    }
}

NameValuePair.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
};
