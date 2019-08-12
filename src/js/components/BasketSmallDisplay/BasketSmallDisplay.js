import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

class BasketSmallDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-cart">
                <Link to={'/basket/'}>
                    <i className="icon ion-bag"></i>
                    <span className={getClassName(this.props.items)}>{getLength(this.props.items)}</span>
                </Link>
            </div>
        );
    }
}

function getClassName(obj) {
    if ((obj) && (getLength(obj)>0)) {
        return 'items-in-basket'
    }
    return 'items-in-basket hidden';
}

function getLength(obj) {
    if (obj) {
        return Object.keys(obj).length;
    }
    return 0;
}

BasketSmallDisplay.propTypes = {
    items: PropTypes.object
};

function mapStateToProps(state) {
    return {
        items: state.basket.items,
    };
}

export default connect(mapStateToProps)(BasketSmallDisplay);
