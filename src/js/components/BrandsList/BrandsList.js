import React, { Component } from 'react';
import { NameValuePair } from '../NameValuePair/NameValuePair';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { selectElementInArray } from '../utils';
import { changeSelectedBrand, resetSelectedBrands } from '../../ReduxSettings/actions/brandsFilterActions';

class BrandsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: this.props.values,
            multipleSelection: this.props.multipleSelection
        };

        this.change = (i) => {
            this.setState({ values: selectElementInArray(i,this.state.values,this.state.multipleSelection)});
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
                <div className="reset-wrapper"><button className="reset-button">Reset</button></div>
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
