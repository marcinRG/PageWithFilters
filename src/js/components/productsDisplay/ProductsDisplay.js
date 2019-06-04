import React, { Component } from 'react';

export class ProductsDisplay extends Component {
    render() {
        return(
            <section className="offer">
                <div className="side-element">
                    <div className="categories">
                        <h3 className="side-subtitle">Categories</h3>
                        <div className="category-selector"></div>
                    </div>
                    <div className="filters">
                        <h3 className="side-subtitle">Filter by</h3>
                        <div className="price-filter">
                            <h4 className="small-title">Price</h4>
                            <input type="text"/>
                            <input type="text"/>
                        </div>
                        <div className="color-filter">
                            <h4 className="small-title">Color</h4>
                            <ul className="color-selector-list">
                                <li className="c-picker grey"></li>
                                <li className="c-picker red"></li>
                                <li className="c-picker white"></li>
                                <li className="c-picker blue"></li>
                                <li className="c-picker green"></li>
                            </ul>
                        </div>
                        <div className="size-filter">
                            <h4 className="small-title">Size</h4>
                            <ul className="ordinary-list">
                                <li>Small<sup>12</sup></li>
                                <li>Medium<sup>5</sup></li>
                                <li>Large<sup>9</sup></li>
                            </ul>
                        </div>
                        <div className="brands-filter">
                            <h4 className="small-title">Brand</h4>
                            <ul className="ordinary-list">
                                <li>Banshu Hamono<sup>8</sup></li>
                                <li>Bower<sup>5</sup></li>
                                <li>Braun<sup>3</sup></li>
                                <li>ElevenPlus<sup>4</sup></li>
                                <li>Field<sup>1</sup></li>
                                <li>Henry Wilson<sup>5</sup></li>
                                <li>Menu<sup>1</sup></li>
                            </ul>
                        </div>

                    </div>
                    <div className="tags">
                        <h3 className="side-subtitle">Popular Tags</h3>
                        <div className="tag-selector">
                            <ul className="tags-list">
                                <li>Simple</li>
                                <li>Minimalism</li>
                                <li>Furniture</li>
                                <li>White</li>
                                <li>Black</li>
                                <li>Accessories</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-element">
                    <div className="result-filter">
                        <div className="filter-input">
                            <span>Sort by:</span>
                            <span>name</span>
                            <span><i className="icon ion-arrow-down-b"></i></span>
                        </div>
                        <div className="results-count">
                            <span>Showing</span>
                            <span>1-12</span>
                            <span>of</span>
                            <span>24</span>
                            <span>results</span>
                        </div>

                    </div>
                    <div className="products">


                        <div className="product-info">
                            <div className="product-upper-info">
                                <span className="new-info">New</span>
                                <span className="fav-info"><i className="icon ion-ios-heart-outline"></i></span>
                            </div>

                            <img src="images/items/3.png" alt="img" />
                                <h5 className="product-name">Product Name</h5>
                                <div className="product-lower-info">
                                    <span className="product-price">59.99</span>
                                    <span className="product-to-cart"><i className="icon ion-bag"></i>Add to Cart</span>
                                </div>
                        </div>

                        <div className="product-info">
                            <div className="product-upper-info">
                                <span className="new-info">New</span>
                                <span className="fav-info"><i className="icon ion-ios-heart-outline"></i></span>
                            </div>

                            <img src="images/items/3.png" alt="img" />
                                <h5 className="product-name">Product Name</h5>
                                <div className="product-lower-info">
                                    <span className="product-price">59.99</span>
                                    <span className="product-to-cart"><i className="icon ion-bag"></i>Add to Cart</span>
                                </div>
                        </div>

                        <div className="product-info">
                            <div className="product-upper-info">
                                <span className="new-info">New</span>
                                <span className="fav-info"><i className="icon ion-ios-heart-outline"></i></span>
                            </div>

                            <img src="images/items/3.png" alt="img"/>
                                <h5 className="product-name">Product Name</h5>
                                <div className="product-lower-info">
                                    <span className="product-price">59.99</span>
                                    <span className="product-to-cart"><i className="icon ion-bag"></i>Add to Cart</span>
                                </div>
                        </div>

                        <div className="product-info">
                            <div className="product-upper-info">
                                <span className="new-info">New</span>
                                <span className="fav-info"><i className="icon ion-ios-heart-outline"></i></span>
                            </div>

                            <img src="images/items/3.png" alt="img"/>
                                <h5 className="product-name">Product Name</h5>
                                <div className="product-lower-info">
                                    <span className="product-price">59.99</span>
                                    <span className="product-to-cart"><i className="icon ion-bag"></i>Add to Cart</span>
                                </div>
                        </div>

                        <div className="product-info">
                            <div className="product-upper-info">
                                <span className="new-info">New</span>
                                <span className="fav-info"><i className="icon ion-ios-heart-outline"></i></span>
                            </div>

                            <img src="images/items/3.png" alt="img"/>
                                <h5 className="product-name">Product Name</h5>
                                <div className="product-lower-info">
                                    <span className="product-price">59.99</span>
                                    <span className="product-to-cart"><i className="icon ion-bag"></i>Add to Cart</span>
                                </div>
                        </div>

                        <div className="product-info">
                            <div className="product-upper-info">
                                <span className="new-info">New</span>
                                <span className="fav-info"><i className="icon ion-ios-heart-outline"></i></span>
                            </div>

                            <img src="images/items/3.png" alt="img"/>
                                <h5 className="product-name">Product Name</h5>
                                <div className="product-lower-info">
                                    <span className="product-price">59.99</span>
                                    <span className="product-to-cart"><i className="icon ion-bag"></i>Add to Cart</span>
                                </div>
                        </div>
                    </div>
                    <div className="page-filter">
                        <span><i className="icon ion-ios-arrow-thin-right"></i></span>
                        <ul>
                            <li className="active">1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
