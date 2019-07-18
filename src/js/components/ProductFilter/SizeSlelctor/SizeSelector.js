import React from 'react';
import PropTypes from 'prop-types';
import { NameValueComponent } from '../../ElementsList/NameValueComponent';

export function SizeSelector(props) {
    return (
        <div className="size-filter">
            <h4 className="small-title">Size</h4>
            <ul className="ordinary-list">
                {props.sizes.map((size, i) =>
                    <NameValueComponent key={i} name={size.name} count={size.count}/>
                )}
            </ul>
        </div>
    );
}
SizeSelector.propTypes = {
    sizes: PropTypes.array.isRequired
};
