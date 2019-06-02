//assets
import style from './scss/style.scss';
import img1 from './images/slides/1.png';
import img2 from './images/slides/2.png';
import img3 from './images/slides/3.png';
//
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './js/components/Navbar';
import { Slider } from './js/components/Slider/Slider';
import {AppSettings} from './js/data/AppSettings';


const slides = [
    {
        title: 'Lorem ipsum 1',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aliquid architecto atque corporis dolorum`,
        image: img1,
        imageAlt: 'hanging plant in a pot'
    },
    {
        title: 'Lorem ipsum 2',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aliquid architecto atque corporis dolorum`,
        image: img2,
        imageAlt: 'hanging plant in a pot, upside down'
    },
    {
        title: 'Lorem ipsum 3',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aliquid architecto atque corporis dolorum`,
        image: img3,
        imageAlt: 'kettle'
    }
];



ReactDOM.render(
    <React.Fragment>
        <Navbar/>
        <Slider images={slides} settings={AppSettings.sliderSettings}/>
    </React.Fragment>,
    document.getElementById('App'));
