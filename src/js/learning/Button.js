import React from 'react';
import PropTypes from 'prop-types';

export function Button(props) {
    return (
        <React.Fragment>
            <button onClick={props.action}>{props.title}</button>
            <br/>
        </React.Fragment>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};
