import style from './scss/style.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './js/components/pageElements/Navbar';
import { Slider } from './js/components/Slider/Slider';
import { AppSettings } from './js/data/AppSettings';
import { AppData } from './js/data/AppData';
import { Footer } from './js/components/pageElements/Footer';
import { AboutPage } from './js/components/Pages/About/AboutPage'
import { ItemsBrowserPage } from './js/components/Pages/ItemsBrowser/ItemsBrowserPage';
import { BasketPage } from './js/components/Pages/Basket/BaketPage';
import { InfoPage } from './js/components/Pages/Info/InfoPage';
import { DealsPage } from './js/components/Pages/Deals/DealsPage';
import { ItemPage } from './js/components/Pages/Item/ItemPage';
import { store } from './js/ReduxSettings/store';
import Provider from 'react-redux/es/components/Provider';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Navbar/>
            <Slider images={AppData.slides} settings={AppSettings.sliderSettings}/>
            <Route path="/about/" component={AboutPage}></Route>
            <Route exact={true} path="/" component={ItemsBrowserPage}></Route>
            <Route path="/deals/" component={DealsPage}></Route>
            <Route path="/info/" component={InfoPage}></Route>
            <Route path="/basket/" component={BasketPage}></Route>
            <Route path="/item/" component={ItemPage}></Route>
            <Footer/>
        </Router>
    </Provider>,
    document.getElementById('App'));
