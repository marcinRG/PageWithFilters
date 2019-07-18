import React from 'react';
import PropTypes from 'prop-types';
import { ColorPicker } from './ColorPicker';

export function ColorSelector(props) {
    return (
        <div className="color-filter">
            <h4 className="small-title">Color</h4>
            <ul className="color-selector-list">
                {props.colors.map((color, i) =>
                    <ColorPicker key={i} value={color.value} colorLight={color.colorLight}/>
                )}
            </ul>
        </div>
    );
}
ColorSelector.propTypes = {
    colors: PropTypes.array.isRequired
};
