import React from 'react';
import PropTypes from 'prop-types';

export function ProductsCount(props) {
    return (
        <div className="results-count">
            <GetContent state={getState(props)} count={props.count}
                        lower={getLowerMargin(props.selectedPage, props.itemsPerPage)}
                        upper={getUpperMargin(props.selectedPage, props.itemsPerPage, props.count)}
                        all={props.count}
            />
        </div>
    );
}

ProductsCount.propTypes = {
    count: PropTypes.number.isRequired,
    selectedPage: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired
};

const states = {
    OK: 'OK',
    NO_RESULTS: 'NO RESULT',
    WRONG_PAGE: 'WRONG PAGE',
};

function getState(props) {
    if (props.count <= 0) {
        return states.NO_RESULTS;
    }
    if (props.count > 0) {
        if (props.count < (props.selectedPage - 1) * props.itemsPerPage) {
            return states.WRONG_PAGE;
        }
        return states.OK;
    }
}

function GetContent(props) {
    switch (props.state) {
        case states.OK: {
            return (
                <React.Fragment>
                    <span>Showing</span>
                    <span>
                        {props.lower} - {props.upper}
                    </span>
                    <span>of</span>
                    <span>{props.all}</span>
                    <span>results</span>
                </React.Fragment>);
        }
        case states.NO_RESULTS: {
            return (<span>No results</span>);
        }
        case states.WRONG_PAGE: {
            return (<span>Selected page does not exist. Select another page.</span>);
        }
        default:
            return (<span></span>)
    }
}

GetContent.propTypes = {
    state: PropTypes.string.isRequired,
    lower: PropTypes.number.isRequired,
    upper: PropTypes.number.isRequired,
    all: PropTypes.number.isRequired,
};

function getLowerMargin(selectedPage, itemsPerPage) {
    return ((selectedPage - 1) * itemsPerPage) + 1;
}

function getUpperMargin(selectedPage, itemsPerPage, count) {
    const upper = ((selectedPage - 1) * itemsPerPage) + itemsPerPage;
    if (upper <= count) {
        return upper;
    }
    return count;
}
