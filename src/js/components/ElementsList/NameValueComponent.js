import React from 'react';
import PropTypes from 'prop-types';
export function NameValueComponent(props) {
    return (
        <li>{props.name}<sup>{props.count}</sup></li>
    );
}
NameValueComponent.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};
