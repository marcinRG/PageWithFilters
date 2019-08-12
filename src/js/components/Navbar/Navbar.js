import React, { Component } from 'react'
import img from '../../../images/logo.png';
import { LinkList } from '../pageElements/LinkList';
import BasketSmallDisplay from '../BasketSmallDisplay/BasketSmallDisplay';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };

        this.changeVisibility = () => {
            this.changeMenuVisibility();
        };
    }

    changeMenuVisibility() {
        this.setState((previousState) => {
            return {
                showMenu: !previousState.showMenu
            }
        });
    }

    setNavMenuClass() {
        if (this.state.showMenu) {
            return 'navbar-menu visible';
        }
        return 'navbar-menu';
    }

    render() {
        return (
            <nav className="navbar">
                <span className="navbar-logo">
                    <img src={img} alt="page logo"/>
                </span>
                <span className="navbar-title">Top Designers</span>
                <button className="navbar-button" onClick={this.changeVisibility}><i className="icon ion-navicon"></i></button>
                <BasketSmallDisplay />
                <ul className={this.setNavMenuClass()}>
                   <LinkList/>
                </ul>
            </nav>
        );
    }
}
