import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PriceSelector extends Component {
    constructor(props) {
        super(props);
        this.pointerMinRef = React.createRef();
        this.pointerMaxRef = React.createRef();
        this.inputMinRef = React.createRef();
        this.inputMaxRef = React.createRef();
        this.backgroundBeamRef = React.createRef();
        this.progressBeamRef = React.createRef();
        this.pointerSize = props.pointerSize;

        this.state = {
            minValue: props.min,
            maxValue: props.max,
            x1: props.min,
            x2: props.max,
            isMouseDown: false
        };

        this.changeMinValue = (keyEvent) => {
            return this.changeValueOnInput(keyEvent, this.inputMinRef.current,
                this.pointerMinRef.current, 'min', this.setX1);
        };

        this.changeMaxValue = (keyEvent) => {
            return this.changeValueOnInput(keyEvent, this.inputMaxRef.current,
                this.pointerMaxRef.current, 'max', this.setX2);
        };

        this.setX1 = (value) => {
            this.setState({
                x1: value
            });
        };

        this.setX2 = (value) => {
            this.setState({
                x2: value
            })
        };
    }

    getSliderMinMaxWidth() {
        const beamElem = this.backgroundBeamRef.current;
        const minMax = getMinMaxWidth(beamElem, this.pointerSize);
        return minMax;
    }

    changeSize() {
        this.setPointerPosition(this.pointerMinRef.current, this.state.x1);
        this.setPointerPosition(this.pointerMaxRef.current, this.state.x2);
    }

    getPointerValue() {
        const minMax = this.getSliderMinMaxWidth();
        const pointerValue = transformation(this.pointerSize + minMax.minWidth, minMax.minWidth,
            minMax.maxWidth, this.state.minValue, this.state.maxValue);
        return pointerValue;
    }

    changeValueOnInput(keyEvent, input, pointer, name, func) {
        if (keyEvent.which == 13 || keyEvent.keyCode == 13) {
            let val = input.value;
            val = this.getLimitedValues(val, name);
            input.value = val;
            this.setPointerPosition(pointer, val);
            func(val);
            return false;
        }
        return true;
    }

    changeValueOnPointerMove(mouseEvent, input, pointer, name, func) {
        if (this.state.isMouseDown) {
            const minMax = this.getSliderMinMaxWidth();
            let position = mouseEvent.clientX;
            position = this.getLimitedPosition(position, name, minMax);
            const value = transformation(position, minMax.minWidth,
                 minMax.maxWidth, this.state.minValue, this.state.maxValue);
            this.setPointerPosition(pointer, value);
            input.value = value;
            func(value);
        }
    }

    getLimitedPosition(position, name, minMax) {
        if (name === 'min') {
            const maxPosition = transformation(this.state.x2, this.state.minValue, this.state.maxValue,
                minMax.minWidth, minMax.maxWidth);
            return limitValues(position, minMax.minWidth, (maxPosition - this.pointerSize));
        } else {
            const minPosition = transformation(this.state.x1, this.state.minValue, this.state.maxValue,
                minMax.minWidth, minMax.maxWidth);
            return limitValues(position, (minPosition + this.pointerSize), minMax.maxWidth);
        }
    }

    getLimitedValues(value, name) {
        const pointerValue = this.getPointerValue();
        if (name === 'max') {
            return limitValues(value, (this.state.x1 - this.state.minValue + pointerValue), this.state.maxValue);
        }
        return limitValues(value, this.state.minValue, this.state.x2 - pointerValue + this.state.minValue);
    }

    componentDidMount() {
        window.addEventListener('resize', this.changeSize);
        this.changeSize();
        this.fillInputs();
        this.setMouseUpDownLeaveListener(this.pointerMinRef.current);
        this.setMouseUpDownLeaveListener(this.pointerMaxRef.current);
        this.pointerMinRef.current.addEventListener('mousemove', (mouseEvent) => {
            this.changeValueOnPointerMove(mouseEvent, this.inputMinRef.current,
                this.pointerMinRef.current, 'min', this.setX1);
        });
        this.pointerMaxRef.current.addEventListener('mousemove', (mouseEvent) => {
            this.changeValueOnPointerMove(mouseEvent, this.inputMaxRef.current,
                this.pointerMaxRef.current, 'max', this.setX2);
        });
    }

    setPointerPosition(element, value) {
        const minMax = this.getSliderMinMaxWidth();
        const position = transformation(value, this.state.minValue, this.state.maxValue,
            minMax.minWidth, minMax.maxWidth);
        const elemLeftStyle = getStyleLeft(position, minMax.minWidth, minMax.maxWidth);
        if (elemLeftStyle) {
            element.style.left = elemLeftStyle;
        }
    }

    fillInputs() {
        this.inputMinRef.current.value = this.state.x1;
        this.inputMaxRef.current.value = this.state.x2;
    }

    setMouseUpDownLeaveListener(element) {

        element.addEventListener('mousedown', () => {
            this.setState({
                isMouseDown: true
            });
        });

        element.addEventListener('mouseup', () => {
            this.setState({
                isMouseDown: false
            });
        });
    }

    render() {
        return (
            <div className="price-filter">
                <h4 className="small-title">Price</h4>
                <div className="field">
                    <div className="beam" ref={this.backgroundBeamRef}></div>
                    <div className="beam-progress" ref={this.progressBeamRef}></div>
                    <div className="pointer pointer-min" ref={this.pointerMinRef}></div>
                    <div className="pointer pointer-max" ref={this.pointerMaxRef}></div>
                </div>
                <div className="inputs-row">
                    <input className="input-value" type="text" ref={this.inputMinRef}
                           onKeyDown={this.changeMinValue}/>
                    <input className="input-value" type="text" ref={this.inputMaxRef}
                           onKeyDown={this.changeMaxValue}/>
                </div>

            </div>
        );
    }
}

PriceSelector.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    pointerSize: PropTypes.number.isRequired
};

function transformation(xValue, xMin, xMax, yMin, yMax) {
    const yValue = Math.round(yMin + (yMax - yMin) * (xValue - xMin) / (xMax - xMin));
    return yValue;
}

function limitValues(x, min, max) {
    if (x < min) {
        return min;
    }
    if (x > max) {
        return max;
    }
    return x;
}

function getMinMaxWidth(element, pointerWidth) {
    const rect = element.getBoundingClientRect();
    return {
        minWidth: Math.floor(rect.left + (pointerWidth / 2)),
        maxWidth: Math.ceil(rect.left + rect.width - (pointerWidth / 2))
    }
}

function getStyleLeft(x, min, max) {
    if (x >= min && x <= max) {
        const len = x - min;
        return len + 'px';
    }
    return null;
}

// element.addEventListener('mouseleave', () => {
//      this.setState({
//          isMouseDown: false
//      });
//  });
