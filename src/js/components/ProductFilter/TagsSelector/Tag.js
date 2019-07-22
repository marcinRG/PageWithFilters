import React from 'react';
import PropTypes from 'prop-types';
import { setSelectedClass } from '../../ElementsList/NameValuePair';

export function Tag(props) {
    const handleClick = () => {
        props.action(props.id);
    };
    return (
        <li className={setSelectedClass(props.selected)} onClick={handleClick}>{props.name}</li>
    );
}

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
};
