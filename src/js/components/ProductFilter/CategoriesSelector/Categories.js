import React, { Component } from 'react';
import { ObjectTableWithSelectedField } from '../../../dataModel/ObjectTableWithSelectedField';
import { NameValuePair } from '../../ElementsList/NameValuePair';
import PropTypes from 'prop-types';

export class Categories extends Component {
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
            <div className="categories">
                <h3 className="side-subtitle">{this.title}</h3>
                <div className={this.className}>
                    <ul className="ordinary-list">
                        {this.state.elements.values.map((element, i) =>
                            <NameValuePair key={i} name={element.name} value={element.value}
                                           selected={element.selected} action={this.selectElement} id={i}/>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

Categories.propTypes = {
    array: PropTypes.array.isRequired,
    multipleSelection: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
