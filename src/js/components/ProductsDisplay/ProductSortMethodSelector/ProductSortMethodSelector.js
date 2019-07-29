import React from 'react';
import PropTypes from 'prop-types';

export function ProductSortMethodSelector(props) {
    console.log(props.methods);
    return (
        <div className="filter-input">
            <span>Sort by:</span>
            <span className="selected">{props.methods[props.selectedMethod]}</span>
            <span><i className="icon ion-arrow-down-b"></i></span>
            <ul className="sort-methods">
                {props.methods.map((elem, i) =>
                    <MethodItem key={i} nrId={i} name={elem} action={props.action}></MethodItem>
                )}
            </ul>
        </div>
    );
}

function MethodItem(props) {
    const onClick = () => {
        props.action(props.nrId);
    };
    return (<li onClick={onClick}>{props.name}</li>);
}

MethodItem.propTypes = {
    nrId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};

ProductSortMethodSelector.propTypes = {
    methods: PropTypes.array.isRequired,
    selectedMethod: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
};
