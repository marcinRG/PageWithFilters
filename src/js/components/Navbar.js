import React, { Component } from 'react'
import { AppSettings } from './../data/AppSettings';
import img from '../../images/logo.png';

export class Navbar extends Component {
    constructor() {
        super();
        this.break = AppSettings.navBarSettings.breakPoint;
        this.menuRef = React.createRef();
        this.state = {
            width: window.innerWidth,
            showMenu: false
        };
        this.resize = () => {
            this.changeSize();
        };
        this.changeVisibility = () => {
            this.changeMenuVisibility();
        };
    }

    changeSize() {
        const width = window.innerWidth;
        console.log(calculateElementHeight(this.menuRef.current));
        this.setState((previousState) => {
            const prevWidth = previousState.width;
            const showMenu = isMenuShown(prevWidth, previousState.showMenu);
            if ((prevWidth > this.break && width <= this.break) || (prevWidth <= this.break && width > this.break)) {
                return {
                    width,
                    showMenu
                }
            }
        });
    }

    changeMenuVisibility() {
        this.setState((previousState) => {
            return {
                showMenu: !previousState.showMenu
            }
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    render() {
        return (
            <nav className="navbar">
                <span className="navbar-logo">
                    <img src={img} alt="page logo"/>
                </span>
                <span className="navbar-title">Top Designers</span>
                <button className="navbar-button" onClick={this.changeVisibility}><i className="icon ion-navicon"></i></button>
                <span className="navbar-cart"><i className="icon ion-bag"></i></span>
                <ul className="navbar-menu" ref={this.menuRef}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Elements</a></li>
                    <li><a href="#">Pages</a></li>
                </ul>
            </nav>
        );
    }
}

function isMenuShown(width, menuState) {
    const breakP = AppSettings.navBarSettings.breakPoint;
    if (breakP > width) {
        return true;
    }
    else {
        return menuState;
    }
}

function getElementVisbilityAndDisplay(element) {
    if (element) {
        return {
            visibility: element.style.visibility,
            display: element.style.display
        }
    }
}

function setElementVisibilityAndDisplay(element, displayVisibility) {
    if (element) {
        element.style.visibility = displayVisibility.visibility;
        element.style.display = displayVisibility.display;
        return element;
    }
}

function calculateElementHeight(element) {
    if (element) {
        const prevDisplayVisibility = getElementVisbilityAndDisplay(element);
        setElementVisibilityAndDisplay(element, {
            visibility: 'hidden',
            display: 'flex'
        });
        const height = element.getBoundingClientRect().height;
        setElementVisibilityAndDisplay(element, prevDisplayVisibility);
        return height;
    }
}
