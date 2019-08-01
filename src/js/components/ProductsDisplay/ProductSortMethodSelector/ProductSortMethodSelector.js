import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProductSortMethodSelector extends Component {
    constructor(props) {
        super(props);
        this.listOptions = props.methods;
        this.state = {
            showOptions: false,
            selected: props.selectedMethod
        };

        this.action = (i) => {
            this.setState({
                selected: i,
                showOptions: false
            });
            props.action(i);
        };

        this.toggleList = () => {
            this.setState((prevState => {
                return {
                    showOptions: !prevState.showOptions
                }
            }));
        }
    }

    render() {
        return (
            <div className="filter-input">
                <div className="filter-container">
                    <span>Sort by:</span>
                    <span className="selected">{this.listOptions[this.state.selected]}</span>
                    <span className="button" onClick={this.toggleList}><i className={getButtonClassName(this.state.showOptions)}></i></span>
                    <ul className="sort-methods" style={getStyleHeight(this.state.showOptions,this.listOptions.length,28)}>
                        {this.listOptions.map((elem, i) =>
                            <MethodItem key={i} nrId={i} name={elem} action={this.action}></MethodItem>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

function getStyleHeight(isVisble, count, height) {
    const h = isVisble ? count * height : 0;
    return {
        height: h + 'px'
    };
}

function getButtonClassName(isVisible) {
    const className='icon ion-arrow-down-b';
    if (isVisible) {
        return `${className} rotated`;
    }
    return className;

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
