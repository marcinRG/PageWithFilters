import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PriceSelector extends Component {
    constructor(props) {
        super(props);
        this.pointerMinRef = React.createRef();
        this.pointerMaxRef = React.createRef();
        this.backgroundBeamRef = React.createRef();
        this.minMaxWidth = null;
        this.state = {
            min: props.min,
            x1: props.min,
            x2: props.max,
            max: props.max,
            isMouseDown: false
        };
        this.changeMinValue = (event) => {
            let val = event.target.value;
            if (val) {
                val = limitValues(val,this.state.min, this.state.max);
                this.setPointerPosition(this.pointerMinRef.current, val);
                this.setState({
                    x1: val
                });
            }
        };
        this.changeMaxValue = (event) => {
            console.log('changed max value');
            this.setState({
                x2: event.target.value
            });
        }

    }

    setMinMaxWitdth() {
        const beamElem = this.backgroundBeamRef.current;
        this.minMaxWidth = getMinMaxWidth(beamElem, 10);
    }

    componentDidMount() {
        this.setMinMaxWitdth();

        const minElem = this.pointerMinRef.current;
        this.setMouseUpDownLeaveListener(minElem);
        this.setPointerPosition(minElem,this.state.x1);

        const maxElem = this.pointerMaxRef.current;
        this.setMouseUpDownLeaveListener(maxElem);
        this.setPointerPosition(maxElem,this.state.x2);

        minElem.addEventListener('mousemove', (mouseEvent) => {
            if (this.state.isMouseDown) {
                const x = limitValues(mouseEvent.clientX, this.minMaxWidth.minWidth, this.minMaxWidth.maxWidth);
                this.setState({
                   x1: position2Value(x,this.minMaxWidth.minWidth,
                       this.minMaxWidth.maxWidth,this.state.min,this.state.max)
                });
                const newStyleLeft = getStyleLeft(x, this.minMaxWidth);
                if (newStyleLeft) {
                    minElem.style.left = newStyleLeft;
                }
            }
        });
    }

    setPointerPosition(element, position) {
        const elemLeftStyle = getStyleLeft(value2Position(position, this.state.min, this.state.max,
            this.minMaxWidth.minWidth, this.minMaxWidth.maxWidth), this.minMaxWidth);
        element.style.left = elemLeftStyle;
    }

    setMouseUpDownLeaveListener(element) {
        element.addEventListener('mouseleave', () => {
            this.setState({
                isMouseDown: false
            });
        });

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
                    <div className="beam" ref={this.backgroundBeamRef}>
                    </div>
                    <div className="pointer pointer-min" ref={this.pointerMinRef}></div>
                    <div className="pointer pointer-max" ref={this.pointerMaxRef}></div>
                </div>
                <div className="inputs-row">
                    <input className="input-value" type="text" value={this.state.x1} onChange={this.changeMinValue}/>
                    <input className="input-value" type="text" value={this.state.x2} onChange={this.changeMaxValue}/>
                </div>

            </div>
        );
    }
}

PriceSelector.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};


function position2Value(position, minPostion, maxPosition, valueMin, valueMax) {
    const value = Math.round(valueMin + (valueMax - valueMin) * (position - minPostion) / (maxPosition - minPostion));
    return value;
}

function value2Position(value, valueMin, valueMax, minPosition, maxPosition) {
    const position = Math.round(minPosition +
        (maxPosition - minPosition) * (value - valueMin) / (valueMax - valueMin));
    return position;
}

function limitValues(x, min,max) {
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
