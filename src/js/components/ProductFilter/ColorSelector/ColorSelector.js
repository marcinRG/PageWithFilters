import React, { Component } from 'react';
import { ColorPicker } from './ColorPicker';
import { ObjectTableWithSelectedField } from '../../../dataModel/ObjectTableWithSelectedField';
import PropTypes from 'prop-types';


export class ColorSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: new ObjectTableWithSelectedField(props.array, props.multipleSelection)
        };

        this.selectColor = (i) => {
            this.setState(() => {
                const colors = this.state.colors;
                colors.changeSelected(i);
                const selected = colors.getSelected();
                return {
                    colors,
                    selected
                };
            });
        };
    }

    render() {
        return (
            <div className="color-filter">
                <h4 className="small-title">Color</h4>
                <ul className="color-selector-list">
                    {this.state.colors.values.map((color, i) =>
                        <ColorPicker key={i} value={color.value} colorLight={color.colorLight}
                                     selected={color.selected} id={i} action={this.selectColor}/>
                    )}
                </ul>
            </div>);
    }
}

ColorSelector.propTypes = {
    array: PropTypes.array.isRequired,
    multipleSelection: PropTypes.bool.isRequired,
};

