import React from 'react';
import PropTypes from 'prop-types';

export function TextLabel(props) {
    return (
        <React.Fragment>
            <span>Numer of clicks: </span>
            <span>{props.counter}</span>
        </React.Fragment>

    );
}

TextLabel.propTypes = {
    counter: PropTypes.number.isRequired
}
