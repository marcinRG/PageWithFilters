import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { BasketItem } from './BasketItem';
import PropTypes from 'prop-types';

class BasketFullDisplay extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>Basket</div>
                {Object.keys(this.props.items).map(i =>
                    <BasketItem key={i} item={this.props.items[i]}/>
                )}
            </React.Fragment>);
    }
}

BasketFullDisplay.propTypes = {
    items: PropTypes.object
};

function mapStateToProps(state) {
    return {
        items: state.basket.items,
    };
}

export default connect(mapStateToProps)(BasketFullDisplay);
