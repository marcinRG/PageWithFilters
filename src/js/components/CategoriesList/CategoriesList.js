import React, { Component } from 'react';
import { NameValuePair } from '../NameValuePair/NameValuePair';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { setAllElementsSelectedPropertyToFalse, setSelectedProperty } from '../utils';
import { changeSelectedCategory, resetSelectedCategories } from '../../ReduxSettings/actions/categoriesFilterActions';

class CategoriesList extends Component {
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
            <div className="categories">
                <h3 className="side-subtitle">{this.props.title}</h3>
                <div className={this.props.className}>
                    <ul className="ordinary-list">
                        {this.state.values.map((element, i) =>
                            <NameValuePair key={i} name={element.name} value={element.value}
                                           selected={element.selected} action={this.change} id={i}/>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

CategoriesList.propTypes = {
    values: PropTypes.array.isRequired,
    multipleSelection: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    changeSelected: PropTypes.func.isRequired,
    resetSelected: PropTypes.func
};

function mapStateToProps(state) {
    return {
        multipleSelection: state.categoriesFilters.multiSelect,
        values: state.categoriesFilters.values,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeSelected: bindActionCreators(changeSelectedCategory, dispatch),
        resetSelected: bindActionCreators(resetSelectedCategories, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
