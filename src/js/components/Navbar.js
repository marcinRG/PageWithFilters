import React, { Component } from 'react';

import img from '../../images/logo.png';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <span className="navbar-logo">
                    <img src={img} alt="page logo"/>
                </span>
                <span className="navbar-title">Top Designers</span>
                <button className="navbar-button"><i className="icon ion-navicon"></i></button>
                <span className="navbar-cart"><i className="icon ion-bag"></i></span>
                <ul className="navbar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Elements</a></li>
                    <li><a href="#">Pages</a></li>
                </ul>
            </nav>
        );
    }
}
