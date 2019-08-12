import React from 'react';
import PropTypes from 'prop-types';
import { getSelected, setSelectedClass } from '../utils';

export function Tag(props) {
    const handleClick = () => {
        props.action(props.id);
    };
    return (
        <li className={setSelectedClass(getSelected(props.selected))} onClick={handleClick}>{props.name}</li>
    );
}

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    id: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
};
