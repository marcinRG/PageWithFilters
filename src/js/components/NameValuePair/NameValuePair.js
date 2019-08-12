import React from 'react';
import PropTypes from 'prop-types';
import { getSelected, setSelectedClass } from '../utils';

export function NameValuePair(props) {
    const handleClick = () => {
        props.action(props.id);
    };
    return (
        <li className={setSelectedClass(getSelected(props.selected))} onClick={handleClick}>{props.name}<sup>{props.value}</sup></li>
    );
}

NameValuePair.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    selected: PropTypes.bool,
    id: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
};
