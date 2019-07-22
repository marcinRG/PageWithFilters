import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PriceSelector extends Component {
    constructor(props) {
        super(props);
        this.pointerMinRef = React.createRef();
        this.pointerMaxRef = React.createRef();
        this.state = {
            min: props.min,
            max: props.max
        };
        this.changeMinValue = (event) => {
            console.log('changed min value');
            this.setState({
                min: event.target.value
            });
        };
        this.changeMaxValue = (event) => {
            console.log('changed max value');
            this.setState({
                max: event.target.value
            });
        }

    }

    componentDidMount() {
        this.pointerMaxRef.current.addEventListener('click',()=>{
            console.log('max');
        });
        this.pointerMinRef.current.addEventListener('click', ()=>{
            console.log('min');
        })
    }

    render() {
        return (
            <div className="price-filter">
                <h4 className="small-title">Price</h4>
                <div className="field">
                    <div className="beam">
                    </div>
                    <div className="pointer pointer-min" ref={this.pointerMinRef}></div>
                    <div className="pointer pointer-max" ref={this.pointerMaxRef}></div>
                </div>
                <div className="inputs-row">
                    <input className="input-value" type="text" value={this.state.min} onChange={this.changeMinValue}/>
                    <input className="input-value" type="text" value={this.state.max} onChange={this.changeMaxValue}/>
                </div>

            </div>
        );
    }
}

PriceSelector.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};

function changeValue(x, min, max) {
    return reverseTransformation(x, min, max);
}

function limitValues(x,min,max) {
    if (x < min) {
        return min;
    }
    if (x > max) {
        return max;
    }
    return x;
}

function reverseTransformation(yValue, yMin, yMax, minValue, maxValue){
    const xValue = Math.round(minValue + (maxValue - minValue) * (yValue - yMin) / (yMax - yMin));
    return xValue;
}

function transformation(xValue, yMin, yMax, minValue,maxValue) {
    const yValue = Math.round(yMin +
        (yMax - yMin) * (xValue - minValue) / (maxValue - minValue));
    return yValue;
}

/*
private setMinMaxWidth() {
    const rect = this.htmlFieldElement.getBoundingClientRect();
    this.minWidth = Math.floor(rect.left + (this.pointerWidth / 2));
    this.maxWidth = Math.ceil(rect.left + rect.width - (this.pointerWidth / 2));
}

private changePointerPositionAndFillBeamLength(x: number) {
    if (x >= this.minWidth && x <= this.maxWidth) {
        const len = x - this.minWidth;
        this.htmlPointerElement.style.left = len + 'px';
        this.htmlBeamFillElement.style.width = len + 'px';
    }
}*/
