import React from 'react';
import PropTypes from 'prop-types';

export function SliderNavBar(props) {
    return (
        <div className="nav">
            <span className="current">{props.current}</span>
            <span className="of">of</span>
            <span className="all">{props.all}</span>
        </div>
    )
}

SliderNavBar.propTypes = {
    current: PropTypes.number.isRequired,
    all: PropTypes.number.isRequired
}
