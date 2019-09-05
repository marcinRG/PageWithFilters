import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tag } from './Tag';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { selectElementInArray} from '../utils';
import { changeSelectedTag, resetSelectedTags } from '../../ReduxSettings/actions/tagsFilterActions';

class TagList extends Component {
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
                <div className="tags">
                    <h3 className="side-subtitle">{this.props.title}</h3>
                    <div className={this.props.className}>
                        <ul className="tags-list">
                            {this.state.values.map((element, i) =>
                                <Tag key={i} name={element.name} value={element.value}
                                     selected={element.selected} action={this.change} id={i}/>
                            )}
                        </ul>
                        <div className="reset-wrapper"><button className="reset-button">Reset</button></div>
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
