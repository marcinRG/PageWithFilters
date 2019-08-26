import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addMaxPriceRange, addMinPriceRange } from '../../ReduxSettings/actions/priceFilterActions';

class PriceSelector extends Component {
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
            return this.changeValueOnInput(keyEvent, this.inputMinRef.current, 'min', this.setUIAndStateX1);
        };

        this.changeMaxValue = (keyEvent) => {
            return this.changeValueOnInput(keyEvent, this.inputMaxRef.current, 'max', this.setUIAndStateX2);
        };

        this.setUIAndStateX1 = (value) => {
            this.setUIElements(value, this.pointerMinRef.current, this.inputMinRef.current);
            this.setBeamLengthAndOffset({ offset: value });
            this.setState({
                x1: value
            });
            this.props.setMinRange((value-0));
        };

        this.setUIAndStateX2 = (value) => {
            this.setUIElements(value, this.pointerMaxRef.current, this.inputMaxRef.current);
            this.setBeamLengthAndOffset({ width: value });
            this.setState({
                x2: value
            });
            this.props.setMaxRange((value-0));
        };

        this.change = () => {
            this.changeSize();
        }

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.change);
    }

    getSliderMinMaxWidth() {
        const beamElem = this.backgroundBeamRef.current;
        const minMax = getMinMaxWidth(beamElem, this.pointerSize);
        return minMax;
    }

    changeSize() {
        this.setPointerPosition(this.pointerMinRef.current, this.state.x1);
        this.setPointerPosition(this.pointerMaxRef.current, this.state.x2);
        this.setBeamLengthAndOffset();
    }

    getPointerValue() {
        const minMax = this.getSliderMinMaxWidth();
        const pointerValue = transformation(this.pointerSize + minMax.minWidth, minMax.minWidth,
            minMax.maxWidth, this.state.minValue, this.state.maxValue);
        return pointerValue;
    }

    setUIElements(value, pointer, input) {
        this.setPointerPosition(pointer, value);
        input.value = value;
    }

    setBeamLengthAndOffset(valuePair) {
        let offset = this.state.x1;
        let width = this.state.x2;
        if (valuePair) {
            if (valuePair.offset) {
                offset = valuePair.offset;
            }
            if (valuePair.width) {
                width = valuePair.width;
            }
        }
        const minMax = this.getSliderMinMaxWidth();
        offset = this.getPointerPosition(this.pointerMinRef.current, offset);
        width = this.getPointerPosition(this.pointerMaxRef.current, width);
        const widthPx = width - offset - this.pointerSize;
        const offsetPx = offset - minMax.minWidth + this.pointerSize;
        if (widthPx && offsetPx) {
            this.progressBeamRef.current.style.left = offsetPx + 'px';
            this.progressBeamRef.current.style.width = widthPx + 'px';
        }
    }

    changeValueOnInput(keyEvent, input, name, func) {
        if (keyEvent.which == 13 || keyEvent.keyCode == 13) {
            let val = input.value;
            val = this.getLimitedValues(val, name);
            func(val);
            return false;
        }
        return true;
    }

    changeValueOnPointerMove(mouseEvent, name, func) {
        if (this.state.isMouseDown) {
            const minMax = this.getSliderMinMaxWidth();
            let position = mouseEvent.clientX;
            position = this.getLimitedPosition(position, name, minMax);
            const value = transformation(position, minMax.minWidth,
                minMax.maxWidth, this.state.minValue, this.state.maxValue);
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
        window.addEventListener('resize', this.change);
        this.changeSize();
        this.fillInputs();
        this.setMouseUpDownLeaveListener(this.pointerMinRef.current);
        this.setMouseUpDownLeaveListener(this.pointerMaxRef.current);
        this.pointerMinRef.current.addEventListener('mousemove', (mouseEvent) => {
            this.changeValueOnPointerMove(mouseEvent, 'min', this.setUIAndStateX1);
        });
        this.pointerMaxRef.current.addEventListener('mousemove', (mouseEvent) => {
            this.changeValueOnPointerMove(mouseEvent, 'max', this.setUIAndStateX2);
        });
    }

    getPointerPosition(element, value) {
        const minMax = this.getSliderMinMaxWidth();
        return transformation(value, this.state.minValue, this.state.maxValue,
            minMax.minWidth, minMax.maxWidth);
    }

    setPointerPosition(element, value) {
        const minMax = this.getSliderMinMaxWidth();
        const position = this.getPointerPosition(element, value);
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
    pointerSize: PropTypes.number.isRequired,
    setMaxRange: PropTypes.func.isRequired,
    setMinRange: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        min: state.priceFilters.min,
        max: state.priceFilters.max,
        pointerSize: state.priceFilters.pointerSize
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setMaxRange: bindActionCreators(addMaxPriceRange,dispatch),
        setMinRange: bindActionCreators(addMinPriceRange,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PriceSelector);

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
