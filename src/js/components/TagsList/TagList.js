import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tag } from './Tag';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { setAllElementsSelectedPropertyToFalse, setSelectedProperty } from '../utils';
import { changeSelectedTag, resetSelectedTags } from '../../ReduxSettings/actions/tagsFilterActions';

class TagList extends Component {
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
                <div className="tags">
                    <h3 className="side-subtitle">{this.props.title}</h3>
                    <div className={this.props.className}>
                        <ul className="tags-list">
                            {this.state.values.map((element, i) =>
                                <Tag key={i} name={element.name} value={element.value}
                                     selected={element.selected} action={this.change} id={i}/>
                            )}
                        </ul>
                    </div>
                </div>);
    }
}

TagList.propTypes = {
    values: PropTypes.array.isRequired,
    multipleSelection: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    changeSelected: PropTypes.func.isRequired,
    resetSelected: PropTypes.func
};

function mapStateToProps(state) {
    return {
        multipleSelection: state.tagFilters.multiSelect,
        values: state.tagFilters.values,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeSelected: bindActionCreators(changeSelectedTag, dispatch),
        resetSelected: bindActionCreators(resetSelectedTags, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
