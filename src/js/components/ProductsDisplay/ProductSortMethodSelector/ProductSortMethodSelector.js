import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProductSortMethodSelector extends Component {
    constructor(props) {
        super(props);
        console.log(props.methods);
        this.listOptions = props.methods;
        this.state = {
            showOptions: false,
            selected: props.selectedMethod
        };

        this.action = (i) => {
            console.log('action:' + i);
            this.setState({ selected: i });
            //props.action(i);
        };
    }

    render() {
        return (
            <div className="filter-input">
                <span>Sort by:</span>
                <span className="selected">{this.listOptions[this.state.selected]}</span>
                <span><i className="icon ion-arrow-down-b"></i></span>
                <ul className="sort-methods">
                    {this.listOptions.map((elem, i) =>
                        <MethodItem key={i} nrId={i} name={elem} action={this.action}></MethodItem>
                    )}
                </ul>
            </div>
        );
    }
}

function getListClassName() {
    console.log('get list name');
}

function setButtonClassName() {
    console.log('get button class');
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
