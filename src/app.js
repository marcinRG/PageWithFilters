import style from './scss/style.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './js/components/Navbar/Navbar';
import { Footer } from './js/components/pageElements/Footer';
// import { AboutPage } from './js/components/Pages/About/AboutPage'
import { ItemsBrowserPage } from './js/components/Pages/ItemsBrowser/ItemsBrowserPage';
import { BasketPage } from './js/components/Pages/Basket/BaketPage';
// import { InfoPage } from './js/components/Pages/Info/InfoPage';
// import { DealsPage } from './js/components/Pages/Deals/DealsPage';
import { ItemPage } from './js/components/Pages/Item/ItemPage';
import { store } from './js/ReduxSettings/store';
import Provider from 'react-redux/es/components/Provider';
import Slider from './js/components/Slider/Slider';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Navbar/>
            <Slider />
            <Route exact={true} path="/" component={ItemsBrowserPage}></Route>
            <Route path="/basket/" component={BasketPage}></Route>
            <Route path="/item/" component={ItemPage}></Route>
{/*            <Route path="/about/" component={AboutPage}></Route>
            <Route path="/deals/" component={DealsPage}></Route>
            <Route path="/info/" component={InfoPage}></Route>
            <Route path="/item/" component={ItemPage}></Route>*/}
            <Footer/>
        </Router>
    </Provider>,
    document.getElementById('App'));
