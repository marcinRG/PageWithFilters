//images products
import imgP1 from './../../images/items/3-min.png';
import imgP2 from './../../images/items/5-min.png';
import imgP3 from './../../images/items/7-min.png';
import imgP4 from './../../images/items/8-min.png';
import imgP5 from './../../images/items/9-min.png';
import imgP6 from './../../images/items/10-min.png';
import imgP11 from './../../images/items/11-min.png';
import imgP12 from './../../images/items/12-min.png';
import imgP13 from './../../images/items/13-min.png';
import imgP14 from './../../images/items/14-min.png';
import imgP15 from './../../images/items/15-min.png';
import imgP16 from './../../images/items/16-min.png';
import imgP17 from './../../images/items/17-min.png';
import imgP18 from './../../images/items/18-min.png';
import imgP19 from './../../images/items/19-min.png';
import imgP20 from './../../images/items/20-min.png';
import imgP21 from './../../images/items/21-min.png';
import imgP22 from './../../images/items/22-min.png';
import imgP23 from './../../images/items/23-min.png';
import imgP24 from './../../images/items/24-min.png';
import imgP25 from './../../images/items/25-min.png';
import imgP26 from './../../images/items/26-min.png';
import imgP27 from './../../images/items/27-min.png';
import imgP28 from './../../images/items/28-min.png';
import imgP29 from './../../images/items/29-min.png';
import imgP30 from './../../images/items/30-min.png';
import imgP31 from './../../images/items/31-min.png';
import imgP32 from './../../images/items/32-min.png';
import imgP33 from './../../images/items/33-min.png';
import imgP34 from './../../images/items/34-min.png';
import imgP35 from './../../images/items/35-min.png';
import imgP36 from './../../images/items/36-min.png';
import imgP37 from './../../images/items/37-min.png';
import imgP38 from './../../images/items/38-min.png';
import imgP39 from './../../images/items/39-min.png';
import imgP40 from './../../images/items/40-min.png';
import imgP41 from './../../images/items/41-min.png';
import imgP42 from './../../images/items/42-min.png';
import imgP43 from './../../images/items/43-min.png';
import imgP44 from './../../images/items/44-min.png';
import imgP45 from './../../images/items/45-min.png';
import imgP46 from './../../images/items/46-min.png';
import imgP47 from './../../images/items/47-min.png';

//images slider
import img1 from './../../images/slides/1.png';
import img2 from './../../images/slides/2.png';
import img3 from './../../images/slides/3.png';
import { sortMethodsNames } from './sortMethodsNames';

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
            lowerBound: 5,
            upperBound: 1900,
            max: 800,
            min: 300,
            pointerSize: 20
        },
        sizes: {
            multiSelect: false,
            values: [
                {
                    name: 'small',
                    value: 12
                },
                {
                    name: 'medium',
                    value: 5
                },
                {
                    name: 'big',
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
            multiSelect: false,
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
                    name: 'Green',
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
        items: {
            1: {
                id: 1,
                name: 'Scissors',
                brand: 'Banshu Hamono',
                tags: ['Simple', 'Black', 'Accessories'],
                color: {
                    name: 'black',
                    value: 'black',
                    colorLight: false,
                },
                size: 'small',
                category: 'Accessories',
                details: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloremque 
                harum in provident quae suscipit. Adipisci expedita saepe sint. Doloribus excepturi ipsa quae vel voluptates.
                Ea fugiat nemo nulla! At, autem consectetur deserunt ea eaque eius enim excepturi facere incidunt ipsa ipsam 
                iusto laboriosam magni neque nostrum numquam officia officiis praesentium qui recusandae reprehenderit, 
                sit tempore ullam! Libero, qui.`,
                price: '25.88',
                isNew: true,
                isFavorite: true,
                imagePath: imgP1
            },
            2: {
                id: 2,
                name: 'Watch',
                details: `Accusantium ad adipisci at consectetur consequatur, culpa cum cupiditate, deleniti dolore ea esse et harum id
        inventore itaque laudantium obcaecati possimus quasi quisquam reiciendis repellat velit veritatis vero voluptas
        voluptatibus.

    Asperiores itaque suscipit tenetur. Assumenda dolorem error eum iure minima possimus praesentium provident quas
        sapiente soluta! Autem debitis deleniti odit quaerat quis saepe soluta voluptatem. Autem error fugiat quod
        vitae.`,
                price: '45.73',
                brand: 'Green',
                tags: ['Simple', 'Black', 'Accessories'],
                color: {
                    name: 'green',
                    value: 'rgba(84, 255, 94, .33)',
                    colorLight: true,
                },
                size: 'medium',
                category: 'Furniture',
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
                brand: 'Field',
                tags: ['Minimalism', 'Furniture', 'Black'],
                color: {
                    name: 'blue',
                    value: 'rgba(79, 91, 255, .33)',
                    colorLight: true
                },
                size: 'small',
                category: 'Furniture',
                isNew: false,
                isFavorite: false,
                imagePath: imgP3
            },
            4: {
                id: 4,
                name: 'Kettle',
                details: `Cupiditate distinctio maiores quia repudiandae voluptas. Dolore dolorum enim, et iste maxime nisi nobis numquam
        perspiciatis sed unde vero voluptates! Accusamus autem, debitis minus mollitia optio reiciendis velit veritatis
        voluptatem.

    Accusantium ad, alias aliquam aspernatur assumenda autem cum deleniti distinctio dolorum et explicabo fuga
        fugit illo iusto molestiae non nostrum perspiciatis placeat porro quia quisquam quod soluta ullam veritatis
        voluptatem.`,
                price: '145.31',
                brand: 'Banshu Hamono',
                tags: ['Simple', 'Minimalism', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'big',
                category: 'Accessories',
                isNew: false,
                isFavorite: false,
                imagePath: imgP4
            },
            5: {
                id: 5,
                name: 'Paper Towel Holder',
                details: `Alias aperiam consectetur deleniti distinctio doloremque ea eligendi enim eos, numquam, odio, officia quae
        quasi quo quos soluta sunt voluptatibus? Delectus ducimus ea illum praesentium quia quibusdam sunt vitae
        voluptatibus!
    Ab, aliquid assumenda consectetur delectus dolore eos illo incidunt laudantium, minus neque nostrum officia
        omnis perspiciatis quibusdam, repudiandae sapiente sit velit voluptate. Consequuntur cum, odit? Id perferendis
        tempore vel voluptatem.`,
                price: '5.99',
                brand: 'Henry Wilson',
                tags: ['White', 'Black', 'Accessories'],
                color: {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                size: 'medium',
                category: 'Accessories',
                isNew: true,
                isFavorite: false,
                imagePath: imgP5
            },
            6: {
                id: 6,
                name: 'Unicorn Bank',
                details: `Ad autem doloremque expedita ipsam laboriosam nemo numquam tempore unde voluptatem, voluptatum. Esse ex
        incidunt magni quae tempora vel vitae. Cumque explicabo impedit iste iure officia, porro tenetur! Aliquam,
        illum.
    Adipisci architecto aut consequatur cumque dignissimos harum illum ipsa iure labore mollitia natus neque odit
        optio quae quaerat repellendus sunt, suscipit, voluptates. Atque consequuntur cum id in officiis praesentium
        veritatis.`,
                price: '245.99',
                brand: 'Banshu Hamono',
                tags: ['Simple', 'Minimalism', 'Accessories'],
                color: {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                size: 'small',
                category: 'Furniture',
                isNew: false,
                isFavorite: false,
                imagePath: imgP6
            },
            7: {
                id: 7,
                name: 'Gamers Towel',
                brand: 'ElevenPlus',
                details: `Accusamus consequuntur esse expedita magnam maiores molestias natus nemo nulla odit optio quae, quia quidem sed
        soluta veritatis. Ab beatae culpa deleniti ea facere harum laborum nesciunt quasi tempora tempore.

    Ab aliquid consequatur corporis deleniti doloremque, dolorum eaque excepturi fuga hic, ipsa ipsum labore libero
        maxime modi nostrum nulla odit officia praesentium quasi quis reprehenderit sed suscipit vel veniam voluptatum.`,
                price: '99.43',
                tags: ['Simple', 'White', 'Black'],
                color: {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                size: 'small',
                isNew: false,
                isFavorite: false,
                imagePath: imgP11,
                category: 'Living'
            },
            8: {
                id: 8,
                name: 'Luxury Box',
                brand: 'Green',
                details: `    Ad adipisci architecto eaque labore, laboriosam libero magni numquam reprehenderit! Animi, cumque debitis eum
        illo inventore laborum libero minus modi officiis optio quas, recusandae rerum saepe sed ullam vitae voluptate?

    Amet dignissimos ex ipsam nulla sunt voluptatem voluptatibus. Alias aut blanditiis deserunt, distinctio dolorem
        enim explicabo illum in inventore, iste itaque laboriosam laudantium, molestias nihil non pariatur placeat qui
        saepe.`,
                price: '1517.75',
                tags: ['Minimalism', 'Furniture', 'Accessories'],
                color: {
                    name: 'green',
                    value: 'rgba(84, 255, 94, .33)',
                    colorLight: true,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP12,
                category: 'Furniture'
            },
            9: {
                id: 9,
                name: 'C\'est N\'est Pas Une Pipe',
                brand: 'Field',
                details: `    Aperiam eaque expedita harum labore maiores nam, sunt ullam voluptate. Aliquam dolore doloremque facere nobis
        optio vero? Accusantium amet dolorem eligendi eos id ipsam necessitatibus omnis temporibus tenetur. Molestias,
        ullam.
    Dicta in odio quae quaerat sapiente velit? Alias, aliquam amet at eaque exercitationem id illo ipsum maiores
        molestias, non optio placeat praesentium, qui reiciendis repudiandae totam veritatis? Dolor, eum, reiciendis.`,
                price: '863.25',
                tags: ['Black', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP13,
                category: 'Accessories'
            },
            10: {
                id: 10,
                name: 'Tiny Chest',
                brand: 'ElevenPlus',
                details: `    Alias amet, aspernatur cumque deleniti, doloremque excepturi expedita magnam natus pariatur, perferendis
        praesentium quae quo ratione reiciendis veniam? Aliquam architecto dignissimos dolor ducimus explicabo ipsam
        molestiae quo sunt totam voluptas!

    Ad, adipisci harum ipsum laudantium, maxime molestiae necessitatibus non odio quo, quod repellat tempora
        voluptatum! A, accusamus amet, animi aspernatur consequuntur, dolorem est eum itaque necessitatibus non numquam
        tempore vel.`,
                price: '17.03',
                tags: ['Simple', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP14,
                category: 'Living'
            },
            11: {
                id: 11,
                name: 'Mysterious Box',
                brand: 'Field',
                details: `    Cumque quisquam, suscipit! Minus, molestiae nostrum porro quo recusandae sunt suscipit. Esse laborum maxime
        tempore. Deserunt dicta dolore ea fuga inventore iusto magni odio, officia reprehenderit sunt tenetur vero
        voluptas.

    Amet, consectetur dolorem eligendi enim facere fuga ipsa labore, laborum modi necessitatibus nobis quos
        recusandae rem. Consequuntur cumque doloremque et expedita facilis fugit, laudantium molestias mollitia nesciunt
        placeat tenetur voluptate!`,
                price: '45.25',
                tags: ['White', 'Black', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP15,
                category: 'Living'
            },
            12: {
                id: 12,
                name: 'Square Shaped Clock',
                brand: 'Bower',
                details: `    Amet aperiam assumenda dignissimos ea fugiat provident similique suscipit! Accusamus amet cum eius itaque
        molestiae, neque nostrum nulla odio perspiciatis, possimus quaerat qui tempora veritatis. A alias perspiciatis
        quisquam sequi.

    Cupiditate debitis dignissimos facere illum molestiae mollitia numquam quod sit! Iure maxime quam quos.
        Accusantium architecto aspernatur illo itaque, iusto labore laudantium magni neque nobis, officiis porro, sed
        temporibus. Libero.`,
                price: '452.11',
                tags: ['Simple'],
                color: {
                    name: 'blue',
                    value: 'rgba(79, 91, 255, .33)',
                    colorLight: true
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP16,
                category: 'Furniture'
            },
            13: {
                id: 13,
                name: 'Round Clock With Roman Numbers',
                brand: 'Banshu Hamono',
                details: `    A accusamus accusantium adipisci aliquam architecto corporis dicta dolore doloribus earum error, fuga laborum
        nisi nulla perferendis placeat praesentium quae quas qui quisquam ratione reiciendis rem repellat repellendus,
        vero, vitae.

    Aut dignissimos, ea, excepturi facilis harum illo molestias mollitia, nemo neque nisi optio pariatur provident
        quaerat quibusdam sint tempora tempore temporibus? Culpa doloribus modi nisi optio, quis sed? Adipisci, iusto.`,
                price: '251.78',
                tags: ['Simple', 'Accessories'],
                color: {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                size: 'small',
                isNew: false,
                isFavorite: false,
                imagePath: imgP17,
                category: 'Living'
            },
            14: {
                id: 14,
                name: 'Slightly Different Clock',
                brand: 'ElevenPlus',
                details: `    Ipsa, rerum sint. Amet atque quasi temporibus vero voluptates. A accusamus consequatur dolore dolorem ea fugiat
        harum impedit ipsa laudantium maxime minima minus mollitia provident repudiandae suscipit, ullam vero! Tempora.

    Accusantium aliquam, animi debitis delectus dignissimos dolorum eligendi hic ipsum, laboriosam minima officia
        rem reprehenderit repudiandae sunt tempore veritatis vero. Commodi dolor error iusto magnam, maxime neque
        officia possimus unde!`,
                price: '63.22',
                tags: ['Simple', 'Furniture'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'small',
                isNew: false,
                isFavorite: false,
                imagePath: imgP18,
                category: 'Living'
            },
            15: {
                id: 15,
                name: 'Round Clock With Brass Finishing',
                brand: 'Henry Wilson',
                details: `    Accusamus at doloribus est expedita, illo impedit libero nihil numquam quis recusandae veniam voluptatem! A,
        adipisci assumenda, delectus dolore dolorem fugiat laborum obcaecati odit quasi quis quod tempore velit vero?

    Adipisci, aperiam assumenda aut commodi culpa delectus dolore enim est eum exercitationem facere fuga fugiat
        ipsum maiores odit placeat rem, repellendus repudiandae sunt tenetur velit veniam voluptas voluptate? Quisquam,
        ut.`,
                price: '74.95',
                tags: ['Simple', 'Minimalism', 'Furniture'],
                color: {
                    name: 'green',
                    value: 'rgba(84, 255, 94, .33)',
                    colorLight: true,
                },
                size: 'big',
                isNew: true,
                isFavorite: false,
                imagePath: imgP19,
                category: 'Furniture'
            },
            16: {
                id: 16,
                name: 'Cane Box GTX 350R',
                brand: 'Field',
                details: `    Fuga, nulla, voluptates. Alias, assumenda deleniti deserunt eos error eveniet fuga laboriosam neque, optio
        perspiciatis quae sed sit tenetur totam vel. Aspernatur enim, facere necessitatibus nemo neque quis temporibus
        unde.
    Aspernatur assumenda commodi enim excepturi facilis fuga ipsam iste itaque iure, laboriosam, laudantium maiores
        neque nihil officia officiis porro quidem reprehenderit repudiandae tempora voluptates? Enim facilis minus modi
        perspiciatis sequi.`,
                price: '21.56',
                tags: ['White', 'Black', 'Accessories'],
                color: {
                    name: 'black',
                    value: 'black',
                    colorLight: false,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP20,
                category: 'Furniture'
            },
            17: {
                id: 17,
                name: 'Childen Chest El Gato',
                brand: 'Field',
                details: `    Accusantium aliquid architecto asperiores consequuntur debitis deserunt dolor doloremque eligendi eos eveniet
        ex, exercitationem fugit in ipsum iure maxime neque non obcaecati porro possimus reiciendis rem repellat sed ut
        voluptatum!

    Amet animi at consectetur consequatur debitis dignissimos, dolores eum eveniet incidunt laboriosam libero
        magnam natus nihil, quis quo quod quos recusandae sapiente soluta sunt tempora tempore totam unde veniam
        voluptatibus!`,
                price: '87.45',
                tags: ['Simple', 'Minimalism', 'Furniture', 'White', 'Black', 'Accessories'],
                color: {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP21,
                category: 'Dining'
            },
            18: {
                id: 18,
                name: 'Gamers Alarm clock',
                brand: 'Green',
                details: `    Ab adipisci aliquam cum deserunt dicta earum explicabo incidunt itaque libero minima nam nobis pariatur porro
        quas ratione repellat reprehenderit, sit soluta voluptas voluptatibus? Dicta impedit numquam sunt tenetur velit.

    A accusamus autem beatae eius esse harum illum maxime minima, mollitia quis quisquam tempore! A accusamus
        ducimus est facere fuga ipsam magnam maxime necessitatibus, non officiis reprehenderit saepe sapiente vel!`,
                price: '83.77',
                tags: ['Simple', 'Furniture', 'White', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP22,
                category: 'Accessories'
            },
            19: {
                id: 19,
                name: 'Diamond Encrusted Alarm Clock',
                brand: 'Green',
                details: `Adipisci at cupiditate dignissimos enim excepturi exercitationem expedita inventore ipsam iusto laboriosam
        minima nobis obcaecati odio optio porro provident quaerat reprehenderit rerum sed similique sunt suscipit
        temporibus totam, unde voluptate.

    Aut ducimus magnam minima molestias? Amet aperiam, consectetur delectus excepturi facilis illum ipsam iure
        magni molestiae mollitia, numquam omnis perferendis perspiciatis quae quas quasi similique ullam, unde vel
        veniam voluptates!`,
                price: '254.98',
                tags: ['Minimalism', 'Furniture', 'White', 'Accessories'],
                color: {
                    name: 'blue',
                    value: 'rgba(79, 91, 255, .33)',
                    colorLight: true
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP23,
                category: 'Furniture'
            },
            20: {
                id: 20,
                name: 'Tissue Box',
                brand: 'Henry Wilson',
                details: `Amet deleniti dignissimos doloremque obcaecati quae quam suscipit tempora, tempore. Aliquid commodi eum
        excepturi fugiat harum, in ipsa, ipsum itaque laudantium molestiae pariatur qui quidem sed sunt totam unde
        voluptate?

    Aut deleniti dolorum, eaque ex fuga mollitia nemo praesentium, provident quo sed sunt voluptatibus voluptatum!
        Debitis distinctio obcaecati optio quam qui quibusdam quisquam sint ullam. Amet dignissimos dolorem recusandae
        veniam?`,
                price: '98.77',
                tags: [ 'Minimalism', 'Furniture', 'Black', 'Accessories'],
                color: {
                    name: 'green',
                    value: 'rgba(84, 255, 94, .33)',
                    colorLight: true,
                },
                size: 'small',
                isNew: false,
                isFavorite: false,
                imagePath: imgP24,
                category: 'Dining'
            },
            21: {
                id: 21,
                name: 'World Map Clock',
                brand: 'Field',
                details: `    A autem beatae corporis deleniti maxime quidem, reiciendis. Amet est, fugit harum incidunt maxime nam nulla,
        pariatur perspiciatis quaerat reprehenderit repudiandae vitae. Accusamus, eaque eligendi eveniet harum incidunt
        itaque repudiandae.

    Aliquam laudantium magnam nam odio recusandae repellendus voluptas. Accusamus atque autem cum deleniti dolor
        doloremque dolores eius, eos est facilis id illo, iure laboriosam minima numquam quia repellat tempore
        veritatis.`,
                price: '17.03',
                tags: ['Simple', 'Minimalism','Accessories'],
                color: {
                    name: 'black',
                    value: 'black',
                    colorLight: false,
                },
                size: 'big',
                isNew: true,
                isFavorite: false,
                imagePath: imgP25,
                category: 'Dining'
            },
            22: {
                id: 22,
                name: 'Filthy Rich Piggy Bank',
                brand: 'ElevenPlus',
                details: `    Aliquam asperiores aspernatur beatae consectetur cum dignissimos dolore dolores expedita explicabo fuga harum
        illum inventore laboriosam modi perspiciatis porro quae, quia quisquam quod repellendus saepe sed, sit, soluta
        sunt vel.

    Animi dolore eaque est id laborum numquam reiciendis, rem sunt ut velit. Enim maxime, repudiandae. Assumenda
        deleniti deserunt dolore, dolores eaque eligendi inventore, nemo neque possimus quaerat quidem similique
        suscipit.`,
                price: '348.11',
                tags: ['Minimalism', 'Furniture', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP26,
                category: 'Furniture'
            },
            23: {
                id: 23,
                name: 'Studded Vase',
                brand: 'Field',
                details: `    Blanditiis consectetur dolore eveniet excepturi exercitationem quas qui quod, quos rem repellendus suscipit
        veritatis, voluptatem. At cum deleniti distinctio earum eius enim fuga fugit, labore, laudantium mollitia quas
        rerum unde!
    
    Delectus dicta ea, ex laborum magnam reprehenderit sunt voluptatibus. Debitis excepturi explicabo incidunt
        quaerat repellendus soluta. Adipisci amet corporis cum doloremque laboriosam perspiciatis ratione. Atque iste
        nisi officiis sit tempore.
    `,
                price: '786.99',
                tags: ['White', 'Black', 'Accessories'],
                color: {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP27,
                category: 'Dining'
            },
            24: {
                id: 24,
                name: 'King Piggy Bank',
                brand: 'XeMenu',
                details: `A ad aliquam consequuntur corporis dolor dolore enim est exercitationem impedit incidunt minus nobis, nulla qui
        sapiente sequi! A asperiores aspernatur consequatur distinctio, error expedita ipsa nihil odit reiciendis!
        Cupiditate.
    
    Amet blanditiis, cum esse eveniet fuga incidunt odit officia quod rem vero! Aspernatur doloribus ducimus, et
        eveniet incidunt magnam maiores mollitia neque nesciunt, officiis optio, perspiciatis quisquam rerum similique
        ut?`,
                price: '1517.48',
                tags: ['Simple', 'Furniture', 'Accessories'],
                color: {
                    name: 'blue',
                    value: 'rgba(79, 91, 255, .33)',
                    colorLight: true
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP28,
                category: 'Furniture'
            },
            25: {
                id: 25,
                name: 'See-trough Box',
                brand: 'Green',
                details: `Consequuntur et ipsa ipsam iure magni maxime necessitatibus, neque nulla obcaecati perspiciatis, possimus
        provident, quibusdam quo recusandae sapiente voluptas voluptatem voluptatibus? Debitis dolores iste odio quo
        recusandae! Non sequi, veniam.
    
    Aliquid consequatur doloremque fugiat labore molestiae perspiciatis qui sed voluptas voluptatem voluptates! At
        aut consectetur dicta dignissimos distinctio, exercitationem magni maxime. Accusantium culpa dolorum, eius in
        ipsum modi veritatis. Placeat.`,
                price: '1890.45',
                tags: [ 'Minimalism', 'Furniture', 'Accessories'],
                color: {
                    name: 'green',
                    value: 'rgba(84, 255, 94, .33)',
                    colorLight: true,
                },
                size: 'small',
                isNew: false,
                isFavorite: false,
                imagePath: imgP29,
                category: 'Lighting'
            },
            26: {
                id: 26,
                name: 'Ashtray',
                brand: 'Bower',
                details: `Explicabo harum inventore reprehenderit. Amet aspernatur consectetur nostrum rerum vero? Deleniti deserunt
        earum error ex facilis illo iusto, laudantium molestias non omnis quidem quod ratione tempora velit, veniam
        vitae voluptatem?
    
    Animi, aut culpa deleniti distinctio ea eveniet facilis in inventore ipsam laudantium, maiores maxime, mollitia
        necessitatibus numquam quod ullam veniam voluptate voluptates? Consequuntur dolore explicabo ipsa, iste officia
        optio quidem.`,
                price: '786.45',
                tags: ['White', 'Black', 'Accessories'],
                color: {
                    name: 'black',
                    value: 'black',
                    colorLight: false,
                },
                size: 'small',
                isNew: false,
                isFavorite: false,
                imagePath: imgP30,
                category: 'Dining'
            },
            27: {
                id: 27,
                name: 'Ridiculously Fancy Handbag',
                brand: 'ElevenPlus',
                details: `A et eveniet harum magnam necessitatibus quas quo sed sit ut. Animi deleniti facilis fugiat iure nobis non
        omnis pariatur qui. Ipsa laboriosam, nesciunt nihil numquam optio unde voluptate voluptatem.
    
    Asperiores eligendi facilis labore officia repellendus repudiandae sequi. Aspernatur dolores, facilis nemo
        perspiciatis porro quia quis sequi sit vel voluptate. Deleniti, dignissimos error esse expedita incidunt itaque
        necessitatibus non voluptas?`,
                price: '66.74',
                tags: ['Simple', 'Minimalism', 'Furniture'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP31,
                category: 'Furniture'
            },
            28: {
                id: 28,
                name: 'Crystal Lamp',
                brand: 'Green',
                details: `Accusamus accusantium aspernatur deserunt et facere, fugiat inventore iure nemo nihil, officia quisquam
        repellendus sit tenetur. Accusantium aspernatur consectetur dolore in libero molestiae nesciunt quidem sunt.
        Adipisci cum facilis veniam.
    
    Animi, beatae corporis dicta doloremque ducimus eum id, magni nemo obcaecati optio recusandae rerum tempora
        tempore unde, voluptatum! Amet commodi iure labore nisi nulla, quasi qui quod voluptas. Ad, maxime?`,
                price: '866.23',
                tags: ['Simple', 'Minimalism', 'Furniture'],
                color: {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP32,
                category: 'Furniture'
            },
            29: {
                id: 29,
                name: 'Yet Another Clock',
                brand: 'Field',
                details: `Deserunt dolor exercitationem inventore quas! Accusantium, corporis doloremque eos fuga harum illum incidunt
        maiores, obcaecati quibusdam quisquam, quod ratione saepe voluptatem? Blanditiis error et facilis modi quae
        quidem tempore vero.
    
    Asperiores aspernatur autem consectetur deserunt dicta dolor error est itaque laboriosam, nam porro rerum,
        voluptate voluptatem. Assumenda aut, autem delectus dolorem doloremque explicabo illo, incidunt, maiores natus
        non quaerat temporibus?`,
                price: '582.11',
                tags: ['Simple', 'Minimalism', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP33,
                category: 'Accessories'
            },
            30: {
                id: 30,
                name: 'Ceramic Bowl',
                brand: 'Green',
                details: `    At, dolorem tempora. At consectetur distinctio eligendi molestias mollitia nulla odit officiis porro
        praesentium vero. Cupiditate ex excepturi inventore vero? Aliquid aut consequuntur cumque deserunt fugiat iusto,
        odit velit voluptas!

    Distinctio eos nihil quos vitae? Accusamus architecto autem, consequuntur ea earum enim esse libero modi neque
        reprehenderit. Aliquid animi at blanditiis consectetur distinctio, error impedit modi odit omnis quasi sint.`,
                price: '458.12',
                tags: ['Simple', 'Minimalism'],
                color: {
                    name: 'blue',
                    value: 'rgba(79, 91, 255, .33)',
                    colorLight: true
                },
                size: 'medium',
                isNew: true,
                isFavorite: false,
                imagePath: imgP34,
                category: 'Furniture'
            },
            31: {
                id: 31,
                name: 'Really Posh Box',
                brand: 'ElevenPlus',
                details: `    Accusantium aliquid dolorem earum id neque, nostrum placeat porro quaerat quibusdam quisquam quod sed, sit,
        tenetur! Blanditiis distinctio dolore laborum magnam odit porro qui quibusdam quod reprehenderit repudiandae.
        Labore, quidem.

    Distinctio dolore error in minus molestiae sit suscipit. Adipisci aliquam delectus doloribus ducimus enim
        eveniet expedita explicabo impedit incidunt ipsum iste itaque molestias nesciunt odit omnis quam ratione,
        tempora tempore.`,
                price: '77.23',
                tags: ['Simple'],
                color: {
                    name: 'green',
                    value: 'rgba(84, 255, 94, .33)',
                    colorLight: true,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP35,
                category: 'Accessories'
            },
            32: {
                id: 32,
                name: 'Worlds Smallest Chest',
                brand: 'ElevenPlus',
                details: `    Ab aperiam beatae cum distinctio, earum eligendi error expedita facilis laboriosam molestias nisi obcaecati,
        officia quos sapiente tenetur? Aperiam et, fuga fugit ipsum molestias nulla praesentium quas ratione unde vitae!

    Ad, blanditiis cupiditate earum hic quia quod quos repellat! Accusamus adipisci aliquid dolorem, esse illo
        iusto magnam minus necessitatibus officiis quaerat quibusdam reiciendis reprehenderit saepe sapiente tempora!
        Sequi, similique unde?`,
                price: '890.32',
                tags: ['Minimalism', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP36,
                category: 'Furniture'
            }, 33: {
                id: 33,
                name: 'Boxy Wash Bag',
                brand: 'XeMenu',
                details: `Adipisci animi aspernatur culpa delectus dignissimos, error id illum inventore ipsum, iure modi mollitia nisi
        non omnis, perferendis quae quaerat quasi repellat voluptate voluptatibus. Aliquid autem dignissimos eius facere
        odit?

    Dolore doloribus eius facilis inventore quas rem tempora tempore voluptatem! Accusamus fugiat incidunt
        laudantium numquam officia quaerat quo sed soluta. A adipisci est laborum molestias odio provident. Harum in,
        libero!`,
                price: '680.55',
                tags: ['Minimalism', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP37,
                category: 'Dining'
            },
            34: {
                id: 34,
                name: 'Box With Lock',
                brand: 'Green',
                details: `    A accusantium consectetur consequuntur dignissimos esse explicabo fugit harum illo, laborum nemo placeat
        provident recusandae soluta. Aspernatur commodi deserunt error magni modi neque non, pariatur perferendis
        voluptate! Eius, quas, quidem!

    Doloremque dolores ipsam minima provident totam! Beatae, consequuntur est exercitationem fugiat illum molestias
        quisquam sapiente similique totam voluptate? At deleniti eius est eveniet illum molestiae nihil quibusdam
        quisquam sunt ullam!`,
                price: '489.11',
                tags: ['Simple', 'Minimalism', 'Furniture', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP38,
                category: 'Furniture'
            },
            35: {
                id: 35,
                name: 'Little Princess Gamers Box',
                brand: 'ElevenPlus',
                details: `    Amet atque aut culpa debitis dicta eius, expedita fugit illo incidunt libero odit quam quas quasi quo ratione
        recusandae repellat, repellendus sit suscipit tempore temporibus tenetur totam ullam unde velit?

    Aliquam aut consectetur cumque delectus dignissimos facere fugiat impedit incidunt ipsam iure laudantium nobis
        nostrum quia quis, quos repellat repudiandae similique ullam. Accusantium illo modi nostrum sit temporibus unde
        vitae?`,
                price: '397.58',
                tags: ['Simple', 'Minimalism'],
                color: {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP39,
                category: 'Furniture'
            },
            36: {
                id: 36,
                name: 'Newspaper Holder',
                brand: 'Green',
                details: `    Hic, pariatur, rerum! Enim eum modi quo saepe totam! Accusantium beatae eius, esse officia reiciendis totam.
        Accusamus aperiam deserunt enim in ipsam itaque iure, nostrum quaerat sed, sequi ut vero.

    Doloribus mollitia nihil officiis. Accusantium aliquam atque consequatur dicta esse, in ipsa nemo, nobis
        officia omnis quia sed, tempora temporibus. Accusantium, ad adipisci dolore dolorum excepturi optio pariatur.
        Iure, velit!`,
                price: '631.78',
                tags: ['Furniture', 'White', 'Black', 'Accessories'],
                color: {
                    name: 'blue',
                    value: 'rgba(79, 91, 255, .33)',
                    colorLight: true
                },
                size: 'small',
                isNew: false,
                isFavorite: false,
                imagePath: imgP40,
                category: 'Furniture'
            },
            37: {
                id: 37,
                name: 'Flowery Bag',
                brand: 'Field',
                details: `    Ab animi aperiam cum delectus deleniti et facere fugiat id illum itaque, iure, maxime minus nisi nobis
        obcaecati, odio placeat porro possimus quae quo suscipit tempora tempore unde vitae voluptatibus?

    Animi blanditiis debitis doloremque labore laudantium nulla numquam odio quia saepe voluptas. A alias atque hic
        in inventore ipsam iste minus natus necessitatibus odit optio provident, quam sunt tempora tempore?`,
                price: '687.66',
                tags: ['Simple', 'Accessories'],
                color: {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP41,
                category: 'Dining'
            },
            38: {
                id: 38,
                name: 'Silver Table Lamp',
                brand: 'XeMenu',
                details: `    Amet assumenda corporis dolorem doloremque ducimus ipsa labore maiores modi nihil non officia omnis
        praesentium, quibusdam rem unde. Aliquam porro temporibus ut. Asperiores delectus modi nostrum pariatur quaerat
        quisquam vitae!

    Accusantium adipisci assumenda commodi consequuntur cum dicta doloremque illo, laboriosam optio perspiciatis
        qui repellat, vero! A aut culpa distinctio error, est, neque officiis optio provident quaerat quia tempore
        voluptates voluptatum!`,
                price: '298.03',
                tags: ['Simple', 'Minimalism', 'Furniture', 'White', 'Black', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP42,
                category: 'Lighting'
            },
            39: {
                id: 39,
                name: 'Fancy Flowerpot',
                brand: 'ElevenPlus',
                details: `    Ab adipisci alias, architecto, blanditiis consectetur cupiditate deleniti dicta eius facilis fugiat illum
        nihil, numquam porro qui quibusdam quos sint suscipit ullam ut velit. Adipisci aliquid consequatur deleniti
        error voluptate?

    Aliquam aliquid culpa, debitis deserunt eius enim eos excepturi fugiat inventore, minus modi nam placeat quos
        sunt tempora temporibus totam vero voluptatem. Aperiam atque incidunt, maxime nulla perferendis sequi suscipit.`,
                price: '1320.39',
                tags: ['Simple', 'Minimalism'],
                color: {
                    name: 'blue',
                    value: 'rgba(79, 91, 255, .33)',
                    colorLight: true
                },
                size: 'medium',
                isNew: true,
                isFavorite: false,
                imagePath: imgP43,
                category: 'Furniture'
            },
            40: {
                id: 40,
                name: 'Cane Bowl',
                brand: 'Bower',
                details: `    Adipisci aliquam consequatur culpa et, fuga fugiat impedit inventore itaque, mollitia nulla officiis omnis,
        pariatur possimus quibusdam quis veritatis vero. Aut dolore doloremque illum itaque minus modi natus, recusandae
        tenetur?

    Adipisci animi aperiam blanditiis fugit nobis nostrum officiis quam? Aliquid atque deserunt dicta dignissimos,
        doloremque dolores eaque fugit harum illo laborum nihil quas qui quidem ratione reprehenderit, rerum sequi
        vitae.`,
                price: '872.15',
                tags: ['Black', 'Accessories'],
                color: {
                    name: 'white',
                    value: 'white',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP44,
                category: 'Furniture'
            },
            41: {
                id: 41,
                name: 'Cane Bowl',
                brand: 'Field',
                details: `    Exercitationem fugiat sit voluptatem? Accusamus autem consequuntur inventore laborum maxime natus quis sapiente
        sit tenetur ut. At, consequuntur dolor ducimus excepturi facere fugiat impedit ipsam, nemo non sequi unde vitae.

    At aut blanditiis delectus magni maiores nulla optio quam repellendus. A ea obcaecati possimus quibusdam
        tempora vitae. Ab, amet atque, deserunt eaque incidunt nemo nobis quis rem sint voluptas voluptate.`,
                price: '900.87',
                tags: ['Minimalism', 'Accessories'],
                color: {
                    name: 'red',
                    value: 'rgba(255, 7, 10, .33)',
                    colorLight: true,
                },
                size: 'big',
                isNew: false,
                isFavorite: false,
                imagePath: imgP45,
                category: 'Furniture'
            },
            42: {
                id: 42,
                name: 'Copper Wire Bowl',
                brand: 'ElevenPlus',
                details: `    Architecto eius harum iste nisi, praesentium vero! Aperiam beatae blanditiis cum cumque debitis delectus dicta
        earum fugit ipsam ipsum iusto, libero maxime natus necessitatibus nesciunt nihil obcaecati perspiciatis quos ut?

    Amet architecto consectetur cumque debitis deserunt dolor eaque facere fuga in libero magnam maiores minus
        molestias neque nobis nulla repudiandae rerum saepe sint sunt tempora, tempore tenetur vero voluptatem
        voluptates.`,
                price: '931.88',
                tags: ['Simple', 'Accessories'],
                color: {
                    name: 'green',
                    value: 'rgba(84, 255, 94, .33)',
                    colorLight: true,
                },
                size: 'medium',
                isNew: false,
                isFavorite: false,
                imagePath: imgP46,
                category: 'Lighting'
            },
            43: {
                id: 43,
                name: 'Box With Bow',
                brand: 'Green',
                details: `    Amet doloribus eveniet nemo perferendis possimus quia repudiandae ullam! Accusamus cumque eum ratione! Corporis
        et explicabo facilis fugiat id iste minima minus neque, nesciunt, nihil odio pariatur quibusdam tempora tempore!

    Aliquam aspernatur assumenda consequuntur dignissimos ea, eos et exercitationem harum hic ipsum, natus non
        veritatis voluptatibus. Amet aspernatur commodi consequuntur, ducimus explicabo maxime obcaecati possimus, quam
        quos saepe temporibus voluptas.`,
                price: '529.03',
                tags: ['Simple', 'Black', 'Accessories'],
                color: {
                    name: 'black',
                    value: 'black',
                    colorLight: false,
                },
                size: 'small',
                isNew: false,
                isFavorite: false,
                imagePath: imgP47,
                category: 'Dining'

            }
        },
        settings: {
            itemsPerPage: 10,
            currentPage: 1,
            sortMethod: 0,
            sortMethodList: [
                sortMethodsNames.SORT_BY_NAME_ASC,
                sortMethodsNames.SORT_BY_NAME_DESC,
                sortMethodsNames.SORT_BY_PRICE_ASC,
                sortMethodsNames.SORT_BY_PRICE_DESC,
            ]
        }
    },
};
