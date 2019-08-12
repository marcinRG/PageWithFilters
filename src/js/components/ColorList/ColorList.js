import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ColorPicker } from './ColorPicker';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { changeSelectedColor, resetSelectedColors } from '../../ReduxSettings/actions/colorsFilterActions';
import { setAllElementsSelectedPropertyToFalse, setSelectedProperty } from '../utils';

class ColorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: this.props.values,
            multipleSelection: this.props.multipleSelection
        };

        this.change = (i) => {
            console.log('color change');
            let array = [...this.state.values];
            if (!this.state.multipleSelection) {
                array = setAllElementsSelectedPropertyToFalse(array);
            }
            array[i] = setSelectedProperty(array[i]);
            this.setState({ values: array });
            this.props.changeSelected(this.state.values);
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <h4 className="small-title">{this.props.title}</h4>
                    <ul className="color-selector-list">
                        {this.state.values.map((element, i) =>
                            <ColorPicker key={i} value={element.value} colorLight={element.colorLight}
                                         selected={element.selected} id={i} action={this.change}/>
                        )}
                    </ul>
            </div>);
    }
}

ColorList.propTypes = {
    values: PropTypes.array.isRequired,
    multipleSelection: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    changeSelected: PropTypes.func.isRequired,
    resetSelected: PropTypes.func
};

function mapStateToProps(state) {
    return {
        multipleSelection: state.colorFilters.multiSelect,
        values: state.colorFilters.values,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeSelected: bindActionCreators(changeSelectedColor, dispatch),
        resetSelected: bindActionCreators(resetSelectedColors, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorList);
