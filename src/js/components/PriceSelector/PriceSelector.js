import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {
    addMaxPriceRange,
    addMinPriceRange,
    resetPricesSelection
} from '../../ReduxSettings/actions/priceFilterActions';
import { sortParamNames } from '../../data/SortParamNames';

class PriceSelector extends Component {
    constructor(props) {
        super(props);
        this.pointerMinRef = React.createRef();
        this.pointerMaxRef = React.createRef();
        this.inputMinRef = React.createRef();
        this.inputMaxRef = React.createRef();
        this.backgroundBeamRef = React.createRef();
        this.progressBeamRef = React.createRef();

        this.state = {
            isMouseDown: false
        };

        this.changeMinValue = (keyEvent) => {
            return this.changeValueOnInput(keyEvent, this.inputMinRef.current, sortParamNames.MIN, this.setUIAndStateMin);
        };

        this.changeMaxValue = (keyEvent) => {
            return this.changeValueOnInput(keyEvent, this.inputMaxRef.current, sortParamNames.MAX, this.setUIAndStateMax);
        };

        this.setUIAndStateMin = (value) => {
            this.setUIElements(value, this.pointerMinRef.current, this.inputMinRef.current);
            this.setBeamLengthAndOffset({ offset: value });
            this.props.setMin((value - 0));
        };

        this.setUIAndStateMax = (value) => {
            this.setUIElements(value, this.pointerMaxRef.current, this.inputMaxRef.current);
            this.setBeamLengthAndOffset({ width: value });
            this.props.setMax((value - 0));
        };

        this.change = () => {
            this.changeSize();
        };

        this.reset = () => {
            this.resetSelection();
        };

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.change);
    }

    getSliderMinMaxWidth() {
        const beamElem = this.backgroundBeamRef.current;
        return getMinMaxWidth(beamElem, this.props.pointerSize);
    }

    resetSelection() {
        this.setUIElements(this.props.lowerBound, this.pointerMinRef.current, this.inputMinRef.current);
        this.setUIElements(this.props.upperBound, this.pointerMaxRef.current, this.inputMaxRef.current);
        this.setBeamLengthAndOffset({
            offset: this.props.lowerBound,
            width: this.props.upperBound
        });
        this.props.reset({
            min: this.props.lowerBound,
            max: this.props.upperBound
        })
    }

    changeSize() {
        this.setPointerPosition(this.pointerMinRef.current, this.props.min);
        this.setPointerPosition(this.pointerMaxRef.current, this.props.max);
        this.setBeamLengthAndOffset();
    }

    getPointerValue() {
        const minMax = this.getSliderMinMaxWidth();
        const pointerValue = transformation(this.props.pointerSize + minMax.minWidth, minMax.minWidth,
            minMax.maxWidth, this.props.lowerBound, this.props.upperBound);
        return pointerValue;
    }

    setUIElements(value, pointer, input) {
        this.setPointerPosition(pointer, value);
        input.value = value;
    }

    setBeamLengthAndOffset(valuePair) {
        let offset = this.props.min;
        let width = this.props.max;
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
        const widthPx = width - offset - this.props.pointerSize;
        const offsetPx = offset - minMax.minWidth + this.props.pointerSize;
        if (widthPx && offsetPx) {
            this.progressBeamRef.current.style.left = offsetPx + 'px';
            this.progressBeamRef.current.style.width = widthPx + 'px';
        }
    }

    changeValueOnInput(keyEvent, input, name, func) {
        if (keyEvent.which === 13 || keyEvent.keyCode === 13) {
            let val = input.value;
            val = this.getLimitedValues(val, name);
            console.log(val);
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
                minMax.maxWidth, this.props.lowerBound, this.props.upperBound);
            func(value);
        }
    }

    getLimitedPosition(position, name, minMax) {
        if (name === sortParamNames.MIN) {
            const maxPosition = transformation(this.props.max, this.props.lowerBound, this.props.upperBound,
                minMax.minWidth, minMax.maxWidth);
            return limitValues(position, minMax.minWidth, (maxPosition - this.props.pointerSize));
        } else {
            const minPosition = transformation(this.props.min, this.props.lowerBound, this.props.upperBound,
                minMax.minWidth, minMax.maxWidth);
            return limitValues(position, (minPosition + this.props.pointerSize), minMax.maxWidth);
        }
    }

    getLimitedValues(value, name) {
        const pointerValue = this.getPointerValue();
        if (name === sortParamNames.MAX) {
            return limitValues(value, (this.props.min - this.props.lowerBound + pointerValue), this.props.upperBound);
        }
        return limitValues(value, this.props.lowerBound, this.props.max - pointerValue + this.props.lowerBound);
    }

    componentDidMount() {
        window.addEventListener('resize', this.change);
        this.changeSize();
        this.fillInputs();
        this.setMouseUpDownLeaveListener(this.pointerMinRef.current);
        this.setMouseUpDownLeaveListener(this.pointerMaxRef.current);
        this.pointerMinRef.current.addEventListener('mousemove', (mouseEvent) => {
            this.changeValueOnPointerMove(mouseEvent, sortParamNames.MIN, this.setUIAndStateMin);
        });
        this.pointerMaxRef.current.addEventListener('mousemove', (mouseEvent) => {
            this.changeValueOnPointerMove(mouseEvent, sortParamNames.MAX, this.setUIAndStateMax);
        });
    }

    getPointerPosition(element, value) {
        const minMax = this.getSliderMinMaxWidth();
        return transformation(value, this.props.lowerBound, this.props.upperBound,
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
        this.inputMinRef.current.value = this.props.min;
        this.inputMaxRef.current.value = this.props.max;
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
                    <div className="beam" ref={this.backgroundBeamRef}/>
                    <div className="beam-progress" ref={this.progressBeamRef}/>
                    <div className="pointer pointer-min" ref={this.pointerMinRef}/>
                    <div className="pointer pointer-max" ref={this.pointerMaxRef}/>
                </div>
                <div className="inputs-row">
                    <input className="input-value" type="text" ref={this.inputMinRef}
                           onKeyDown={this.changeMinValue}/>
                    <input className="input-value" type="text" ref={this.inputMaxRef}
                           onKeyDown={this.changeMaxValue}/>
                </div>
                <div className="reset-wrapper">
                    <button className="reset-button" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

PriceSelector.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    lowerBound: PropTypes.number.isRequired,
    upperBound: PropTypes.number.isRequired,
    pointerSize: PropTypes.number.isRequired,
    setMax: PropTypes.func.isRequired,
    setMin: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        min: state.priceFilters.min,
        max: state.priceFilters.max,
        lowerBound: state.priceFilters.lowerBound,
        upperBound: state.priceFilters.upperBound,
        pointerSize: state.priceFilters.pointerSize
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setMax: bindActionCreators(addMaxPriceRange, dispatch),
        setMin: bindActionCreators(addMinPriceRange, dispatch),
        reset: bindActionCreators(resetPricesSelection, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceSelector);

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
