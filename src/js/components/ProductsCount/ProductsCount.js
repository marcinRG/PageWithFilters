import React from 'react';
import PropTypes from 'prop-types';

export function ProductsCount(props) {
    return (
        <div className="results-count">
            <span>Showing</span>
            <span>{getLowerMargin(props.selectedPage,props.itemsPerPage)}-{getUpperMargin(props.selectedPage,props.itemsPerPage,props.count)}</span>
            <span>of</span>
            <span>{props.count}</span>
            <span>results</span>
        </div>
    );
}

function getLowerMargin(selectedPage,itemsPerPage) {
    return ((selectedPage-1)*itemsPerPage)+1;
}
function getUpperMargin(selectedPage,itemsPerPage, count) {
    const upper = ((selectedPage-1)*itemsPerPage)+itemsPerPage;
    if (upper<count) {
        return upper;
    }
    return count;
}

ProductsCount.propTypes = {
    count: PropTypes.number.isRequired,
    selectedPage: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired
};

