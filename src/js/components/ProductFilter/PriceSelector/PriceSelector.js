import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PriceSelector extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log('costam');
        this.pointerMinRef = React.createRef();
        this.pointerMaxRef = React.createRef();
        this.inputMinRef = React.createRef();
        this.inputMaxRef = React.createRef();
        this.progressBeamRef = React.createRef();
        this.pointerSize = props.pointerSize;
        this.pointerValue;
        this.minMaxWidth = null;
        this.state = {
            minValue: props.min,
            maxValue: props.max,
            x1: props.min,
            x2: props.max,
            minWidth: 0,
            maxWidth: 0,
            isMouseDown: false
        };

        this.changeMinValue = (keyEvent) => {
            if (keyEvent.which == 13 || keyEvent.keyCode == 13) {
                let val = this.inputMinRef.current.value;
                if (val && !isNaN(val)) {
                    val = limitValues(val, this.state.minValue, this.state.x2 - this.pointerValue +this.state.minValue);
                    this.inputMinRef.current.value = val;
                    this.setPointerPosition(this.pointerMinRef.current, val);
                    this.setState({
                        x1: val
                    });
                }
                return false;
            }
            return true;
        };

        this.changeMaxValue = (keyEvent) => {
            if (keyEvent.which == 13 || keyEvent.keyCode == 13) {
                let val = this.inputMaxRef.current.value;
                if (val && !isNaN(val)) {
                    val = limitValues(val, this.state.x1 + this.pointerValue - this.state.minValue, this.state.maxValue);
                    this.inputMaxRef.current.value = val;
                    this.setPointerPosition(this.pointerMaxRef.current, val);
                    this.setState({
                        x2: val
                    });
                }
                return false;
            }
            return true;
        }

    }

    setMinMaxWidth() {
        const beamElem = this.progressBeamRef.current;
        this.minMaxWidth = getMinMaxWidth(beamElem, 10);
    }

    componentDidMount() {
        this.setMinMaxWidth();
        this.fillInputs();

        this.pointerValue = position2Value(this.pointerSize + this.minMaxWidth.minWidth,this.minMaxWidth.minWidth,
            this.minMaxWidth.maxWidth,this.state.minValue,this.state.maxValue);
        console.log('pointer value');
        console.log(this.pointerValue);
        const minElem = this.pointerMinRef.current;
        this.setMouseUpDownLeaveListener(minElem);
        this.setPointerPosition(minElem, this.state.x1);

        const maxElem = this.pointerMaxRef.current;
        this.setMouseUpDownLeaveListener(maxElem);
        this.setPointerPosition(maxElem, this.state.x2);

        minElem.addEventListener('mousemove', (mouseEvent) => {
            if (this.state.isMouseDown) {
                const maxPostion = value2Position(this.state.x2, this.state.minValue, this.state.maxValue,
                this.minMaxWidth.minWidth, this.minMaxWidth.maxWidth);
                const x = limitValues(mouseEvent.clientX, this.minMaxWidth.minWidth, maxPostion-this.pointerSize);
                const value = position2Value(x, this.minMaxWidth.minWidth,
                    this.minMaxWidth.maxWidth, this.state.minValue, this.state.maxValue);
                this.inputMinRef.current.value = value;
                this.setState({
                    x1: value
                });
                const newStyleLeft = getStyleLeft(x, this.minMaxWidth);
                if (newStyleLeft) {
                    minElem.style.left = newStyleLeft;
                }
            }
        });

        maxElem.addEventListener('mousemove', (mouseEvent) => {
            if (this.state.isMouseDown) {
                const minPostion = value2Position(this.state.x1, this.state.minValue, this.state.maxValue,
                    this.minMaxWidth.minWidth, this.minMaxWidth.maxWidth);
                const x = limitValues(mouseEvent.clientX, minPostion+this.pointerSize, this.minMaxWidth.maxWidth);
                const value = position2Value(x, this.minMaxWidth.minWidth,
                    this.minMaxWidth.maxWidth, this.state.minValue, this.state.maxValue);
                this.inputMaxRef.current.value = value;
                this.setState({
                    x2: value
                });
                const newStyleLeft = getStyleLeft(x, this.minMaxWidth);
                if (newStyleLeft) {
                    maxElem.style.left = newStyleLeft;
                }
            }
        });
    }

    setPointerPosition(element, position) {
        const elemLeftStyle = getStyleLeft(value2Position(position, this.state.minValue, this.state.maxValue,
            this.minMaxWidth.minWidth, this.minMaxWidth.maxWidth), this.minMaxWidth);
        element.style.left = elemLeftStyle;
    }

    fillInputs() {
        this.inputMinRef.current.value = this.state.x1;
        this.inputMaxRef.current.value = this.state.x2;
    }

    setMouseUpDownLeaveListener(element) {
        /*        element.addEventListener('mouseleave', () => {
                    this.setState({
                        isMouseDown: false
                    });
                });*/

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
                    <div className="beam">
                    </div>
                    <div className="pointer pointer-min" ref={this.pointerMinRef}></div>
                    <div className="pointer pointer-max" ref={this.pointerMaxRef}></div>
                    <div className="beam-progress" ref={this.progressBeamRef}></div>
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

function position2Value(position, minPosition, maxPosition, valueMin, valueMax) {
    const value = Math.round(valueMin + (valueMax - valueMin) * (position - minPosition) / (maxPosition - minPosition));
    return value;
}

function value2Position(value, valueMin, valueMax, minPosition, maxPosition) {
    const position = Math.round(minPosition +
        (maxPosition - minPosition) * (value - valueMin) / (valueMax - valueMin));
    return position;
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

function getStyleLeft(x, minMaxWidth) {
    if (x >= minMaxWidth.minWidth && x <= minMaxWidth.maxWidth) {
        const len = x - minMaxWidth.minWidth;
        return len + 'px';
    }
    return null;
}
