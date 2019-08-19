//images productsOld
import imgP1 from './../../images/items/3.png';
import imgP2 from './../../images/items/5.png';
import imgP3 from './../../images/items/7.png';
import imgP4 from './../../images/items/8.png';
import imgP5 from './../../images/items/9.png';
import imgP6 from './../../images/items/10.png';
//images slider
import img1 from './../../images/slides/1.png';
import img2 from './../../images/slides/2.png';
import img3 from './../../images/slides/3.png';

export const AppData = {
    slider: {
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
        ],
        settings: {
            delay: 8000,
            autoPlay: true,
            continuous: true,
            currentElem: 0
        }
    },
    filters: {
        prices: {
            max: 2520,
            min: 30,
            pointerSize: 20
        },
        sizes: {
            multiSelect: false,
            values: [
                {
                    name: 'Small',
                    value: 12
                },
                {
                    name: 'Medium',
                    value: 5
                },
                {
                    name: 'Big',
                    value: 9
                }
            ]
        },
        colors: {
            multiSelect: false,
            values: [
                {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                {
                    name: 'green',
                    value: 'rgba(84, 255, 94, .33)',
                    colorLight: true,
                },
                {
                    name: 'blue',
                    value: 'rgba(79, 91, 255, .33)',
                    colorLight: true,
                },
                {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                {
                    name: 'black',
                    value: 'black',
                    colorLight: false,
                }
            ]

        },
        tags: {
            multiSelect: true,
            values: [{ name: 'Simple' }, { name: 'Minimalism' }, { name: 'Furniture' }, { name: 'White' },
                { name: 'Black' }, { name: 'Accessories' }]
        },
        brands: {
            multiSelect: true,
            values: [
                {
                    name: 'Banshu Hamono',
                    value: 12
                },
                {
                    name: 'Bower',
                    value: 7
                },
                {
                    name: 'Braun',
                    value: 19
                },
                {
                    name: 'ElevenPlus',
                    value: 11
                },
                {
                    name: 'Field',
                    value: 8
                },
                {
                    name: 'Henry Wilson',
                    value: 4
                },
                {
                    name: 'XeMenu',
                    value: 2
                }
            ]
        },
        categories: {
            multiSelect: false,
            values: [
                {
                    name: 'All products',
                    value: 50
                },
                {
                    name: 'Living',
                    value: 12
                },
                {
                    name: 'Dining',
                    value: 25
                },
                {
                    name: 'Furniture',
                    value: 5
                },
                {
                    name: 'Lighting',
                    value: 9
                },
                {
                    name: 'Accessories',
                    value: 11
                },
            ]
        }

    },
    basket: {
        items: {}
    },
    products: {
        1: {
            id: 1,
            name: 'Scissors',
            details: `Lorem ipsum 1 dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis, cumque delectus deserunt dignissimos dolor
                    eaque et expedita hic illum iste, minus nam omnis quasi saepe tempora ullam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, amet consequuntur debitis deserunt dignissimos
                    dolorem ipsum
                    laudantium magnam numquam omnis quidem quis sequi, similique tempora ut velit! Error, ipsa.`,
            price: '25.88',
            isNew: true,
            isFavorite: true,
            imagePath: imgP1
        },
        2: {
            id: 2,
            name: 'Watch',
            details: `Lorem ipsum 2 dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis, cumque delectus deserunt dignissimos dolor
                    eaque et expedita hic illum iste, minus nam omnis quasi saepe tempora ullam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, amet consequuntur debitis deserunt dignissimos
                    dolorem ipsum
                    laudantium magnam numquam omnis quidem quis sequi, similique tempora ut velit! Error, ipsa.`,
            price: '45.73',
            isNew: false,
            isFavorite: false,
            imagePath: imgP2
        },
        3: {
            id: 3,
            name: 'Lamp',
            details: `Lorem ipsum 3 dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis, cumque delectus deserunt dignissimos dolor
                    eaque et expedita hic illum iste, minus nam omnis quasi saepe tempora ullam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, amet consequuntur debitis deserunt dignissimos
                    dolorem ipsum
                    laudantium magnam numquam omnis quidem quis sequi, similique tempora ut velit! Error, ipsa.`,
            price: '55.73',
            isNew: false,
            isFavorite: false,
            imagePath: imgP3
        },
        4: {
            id: 4,
            name: 'Kettle',
            details: `Lorem ipsum 4 dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis, cumque delectus deserunt dignissimos dolor
                    eaque et expedita hic illum iste, minus nam omnis quasi saepe tempora ullam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, amet consequuntur debitis deserunt dignissimos
                    dolorem ipsum
                    laudantium magnam numquam omnis quidem quis sequi, similique tempora ut velit! Error, ipsa.`,
            price: '145.31',
            isNew: false,
            isFavorite: false,
            imagePath: imgP4
        },
        5: {
            id: 5,
            name: 'Paper Towel Holder',
            details: `Lorem ipsum 5 dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis, cumque delectus deserunt dignissimos dolor
                    eaque et expedita hic illum iste, minus nam omnis quasi saepe tempora ullam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, amet consequuntur debitis deserunt dignissimos
                    dolorem ipsum
                    laudantium magnam numquam omnis quidem quis sequi, similique tempora ut velit! Error, ipsa.`,
            price: '5.99',
            isNew: false,
            isFavorite: false,
            imagePath: imgP5
        },
        6: {
            id: 6,
            name: 'Piggy Bank',
            details: `Lorem ipsum 6 dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur blanditiis, cumque delectus deserunt dignissimos dolor
                    eaque et expedita hic illum iste, minus nam omnis quasi saepe tempora ullam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, amet consequuntur debitis deserunt dignissimos
                    dolorem ipsum
                    laudantium magnam numquam omnis quidem quis sequi, similique tempora ut velit! Error, ipsa.`,
            price: '17.03',
            isNew: false,
            isFavorite: false,
            imagePath: imgP6
        }
    },
};
