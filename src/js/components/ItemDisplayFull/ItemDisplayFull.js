import React, { Component } from 'react';

export class ItemDisplayFull extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="item-display">
                <h3 className="item-title">Item details</h3>
                <div className="image-container">
                    <img className="item-image" src="images/items/9.png" alt="xxx"/>
                </div>
                <div className="item-detail">
                    <h4 className="detail item-name">Lorem ipsum</h4>
                    <span className="detail item-brand"><span className="title">Brand:</span>AKME Inc.</span>
                    <div className="detail item-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        amet aspernatur blanditiis, cumque delectus deserunt dignissimos dolor
                        eaque et expedita hic illum iste, minus nam omnis quasi saepe tempora ullam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, amet consequuntur debitis
                        deserunt dignissimos
                        dolorem ipsum
                        laudantium magnam numquam omnis quidem quis sequi, similique tempora ut velit! Error, ipsa.
                    </div>
                    <span className="detail item-size"><span className="title">Item size:</span>small</span>
                    <div className="detail item-color"><span className="title">Available color:</span>
                        <span className="color"></span>
                    </div>
                    <div className="detail item-category"><span className="title">Category:</span><span>Lamps</span>
                    </div>
                    <div className=" detail item-tags"><span
                        className="title">Tags:</span><span>Lamps</span>,<span>Accessories</span></div>
                    <div className="row">
                        <span className="item-price">57.12</span>
                        <button className="item-add-to-basket"><i className="icon ion-bag"></i>Add to Cart</button>
                    </div>
                </div>
            </div>);
    }
}
