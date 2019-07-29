import style from './scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './js/components/pageElements/Navbar';
import { Slider } from './js/components/Slider/Slider';
import {AppSettings} from './js/data/AppSettings';
import {AppData} from './js/data/AppData';
import { Footer } from './js/components/pageElements/Footer';
import { SmallForm } from './js/components/pageElements/SmallForm';
import { ProductsDisplay } from './js/components/ProductsDisplay/ProductsDisplay';

ReactDOM.render(
    <React.Fragment>
        <Navbar/>
        <Slider images={AppData.slides} settings={AppSettings.sliderSettings}/>
        <ProductsDisplay settings={AppSettings.productDisplaySettings}/>
        <SmallForm/>
        <Footer/>
    </React.Fragment>,
    document.getElementById('App'));
