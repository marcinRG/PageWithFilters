import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

export class BasketSmallDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-cart"><Link to={'/basket/'}>
                    <i className="icon ion-bag"></i>
                </Link>
                <span className="items-in-basket">5</span>
            </div>
        );
    }
}
