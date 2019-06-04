//images products
import imgP1 from './../../images/items/3.png';
import imgP2 from './../../images/items/5.png';
//images slider
import img1 from './../../images/slides/1.png';
import img2 from './../../images/slides/2.png';
import img3 from './../../images/slides/3.png';

export const AppData = {
    products: [
        {
            id: 1,
            name: 'Scissors',
            price: 25.88,
            isNew: true,
            isFavorite: true,
            imagePath: imgP1
        },
        {
            id: 2,
            name: 'Watch',
            price: 45.73,
            isNew: false,
            isFavorite: false,
            imagePath: imgP2
        },
    ],
    slides: [
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
    ]
};
