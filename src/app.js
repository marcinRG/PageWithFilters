import style from './scss/style.scss';

import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './js/components/Navbar/Navbar';
import { Footer } from './js/components/pageElements/Footer';
import { AboutPage } from './js/components/Pages/About/AboutPage'
import { ItemsBrowserPage } from './js/components/Pages/ItemsBrowser/ItemsBrowserPage';
import { DealsPage } from './js/components/Pages/Deals/DealsPage';
import { InfoPage } from './js/components/Pages/Info/InfoPage';
import { store } from './js/ReduxSettings/store';
import Provider from 'react-redux/es/components/Provider';
import Slider from './js/components/Slider/Slider';
import ItemDisplayFull from './js/components/ItemDisplayFull/ItemDisplayFull';
import BasketFullDisplay from './js/components/BasketFullDisplay/BasketFullDisplay';

ReactDOM.render(
    <Provider store={store}>
        <Router hashType="slash">
            <Navbar/>
            <Slider/>
            <Route exact={true} path="/" component={ItemsBrowserPage}></Route>
            <Route path="/basket/" component={BasketFullDisplay}></Route>
            <Route path="/item/:itemId" component={ItemDisplayFull}/>
            <Route path="/about/" component={AboutPage}></Route>
            <Route path="/deals/" component={DealsPage}></Route>
            <Route path="/info/" component={InfoPage}></Route>
            <Footer/>
        </Router>
    </Provider>,
    document.getElementById('App'));
