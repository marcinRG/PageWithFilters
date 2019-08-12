import React, { Component } from 'react';
import { NameValuePair } from '../NameValuePair/NameValuePair';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { setAllElementsSelectedPropertyToFalse, setSelectedProperty } from '../utils';
import { changeSelectedBrand, resetSelectedBrands } from '../../ReduxSettings/actions/brandsFilterActions';

class BrandsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: this.props.values,
            multipleSelection: this.props.multipleSelection
        };

        this.change = (i) => {
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
                <ul className="ordinary-list">
                    {this.state.values.map((element, i) =>
                        <NameValuePair key={i} name={element.name} value={element.value}
                                       selected={element.selected} action={this.change} id={i}/>
                    )}
                </ul>
            </div>);
    }
}

BrandsList.propTypes = {
    values: PropTypes.array.isRequired,
    multipleSelection: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    changeSelected: PropTypes.func.isRequired,
    resetSelected: PropTypes.func
};

function mapStateToProps(state) {
    return {
        multipleSelection: state.brandsFilters.multiSelect,
        values: state.brandsFilters.values,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeSelected: bindActionCreators(changeSelectedBrand, dispatch),
        resetSelected: bindActionCreators(resetSelectedBrands, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandsList);
