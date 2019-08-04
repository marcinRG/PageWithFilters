import React from 'react';
import { Link } from 'react-router-dom';

export function LinkList() {
    return (
        <React.Fragment>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/'}>Shop</Link></li>
            <li><Link to={'/deals'}>Deals</Link></li>
            <li><Link to={'/info'}>Info</Link></li>
        </React.Fragment>
    );
}
