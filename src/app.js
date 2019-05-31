import style from './scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './js/components/Navbar';
import { Slider } from './js/components/Slider/Slider';

const slides = [
    {
        title: 'Lorem ipsum 1',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aliquid architecto atque corporis dolorum`,
        imagePath: 'images/slides/1slide.png'
    },
    {
        title: 'Lorem ipsum 2',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aliquid architecto atque corporis dolorum`,
        imagePath: 'images/slides/2slide.png'
    },
    {
        title: 'Lorem ipsum 3',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aliquid architecto atque corporis dolorum`,
        imagePath: 'images/slides/3slide.png'
    }
];

ReactDOM.render(
    <React.Fragment>
        <Navbar/>
        <Slider images={slides}/>
    </React.Fragment>,
    document.getElementById('App'));
