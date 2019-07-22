import React, { Component } from 'react';
import { ObjectTableWithSelectedField } from '../../../dataModel/ObjectTableWithSelectedField';
import PropTypes from 'prop-types';
import { Tag } from './Tag';

export class Tags extends Component {
    constructor(props) {
        super(props);
        this.className = props.className;
        this.title = props.title;
        this.state = {
            elements: new ObjectTableWithSelectedField(props.array, props.multipleSelection)
        };
        this.selectElement = (i) => {
            this.setState(() => {
                const elements = this.state.elements;
                elements.changeSelected(i);
                const selected = elements.getSelected();
                return {
                    elements,
                    selected
                };
            });
        }
    }

    render() {
        return (
            <div className="tags">
                <h3 className="side-subtitle">{this.title}</h3>
                <div className={this.className}>
                    <ul className="tags-list">
                        {this.state.elements.values.map((element, i) =>
                            <Tag key={i} name={element.name} value={element.value}
                                           selected={element.selected} action={this.selectElement} id={i}/>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
Tags.propTypes = {
    array: PropTypes.array.isRequired,
    multipleSelection: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

