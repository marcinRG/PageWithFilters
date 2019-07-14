import React, { Component } from 'react';
import { SliderNavButton } from './SliderNavButton';
import PropTypes from 'prop-types';
import { Slide } from './Slide';
import { SliderNavBar } from './SliderNavBar';

export class Slider extends Component {
    constructor(props) {
        super(props);
        this.slidesRef = React.createRef();
        const firstSlide = this.setFirstImage(props.settings);
        this.state = {
            currentSlide: firstSlide,
            sliderWidth: 0
        };
        this.continuous = props.settings.continuous;
        this.images = this.prepareImagesArray(props.images, this.continuous);
        console.log(this.images);

        this.nextImgButton = () => {
            this.next();
        };

        this.previousImgButton = () => {
            this.previous();
        };

        this.resize = () => {
            console.log('resize called');
            this.changeSize();
        };
    }

    previous() {
        let next = findPreviousElem(this.state.currentSlide, this.images);
        this.slidesRef.current.classList.remove('transition');
        this.animate(next).then((value) => {
            console.log('animation completed');
            if (this.continuous) {
                if ((this.state.currentSlide === 1)) {
                    next = this.images.length - 2;
                }
                this.slidesRef.current.classList.remove('transition');
                this.moveToSlide(this.state.sliderWidth, next);
            }
            this.setState({ currentSlide: next });
        });
    }

    getFirstOrLast() {
        let next = undefined;
        if (this.continuous) {
            if ((this.state.currentSlide === this.images.length - 2)) {
                next = 1;
            }
            if ((this.state.currentSlide === 1)) {
                next = this.images.length - 2;
            }
        }
        return next;
    }

    next() {
        let next = findNextElem(this.state.currentSlide, this.images);
        this.slidesRef.current.classList.remove('transition');
        this.animate(next).then((value) => {
            console.log('animation completed');
            if (this.continuous) {
                if ((this.state.currentSlide === this.images.length - 2)) {
                    next = 1;
                }
                this.slidesRef.current.classList.remove('transition');
                this.moveToSlide(this.state.sliderWidth, next);
            }
            this.setState({ currentSlide: next });
        });
    }

    animate(next) {
        this.slidesRef.current.classList.remove('transition');
        return new Promise((resolve) => {
            const transitionEnded = () => {
                this.slidesRef.current.removeEventListener('transitionend', transitionEnded);
                resolve();
            };
            this.slidesRef.current.addEventListener('transitionend', transitionEnded);
            this.slidesRef.current.classList.add('transition');
            this.moveToSlide(this.state.sliderWidth, next);
        });
    }

    componentDidMount() {
        console.log('component Mounted!');
        this.changeSize();
        console.log('events');
        window.addEventListener('resize', this.resize);
    }

    setFirstImage(settings) {
        if (settings.continuous) {
            return settings.currentElem + 1;
        }
        return settings.currentElem;
    }

    prepareImagesArray(images, continuous) {
        const array = [...images];
        if (continuous) {
            const first = images[images.length - 1];
            array.unshift(first);
            const last = images[0];
            array.push(last);
        }
        return array;
    }

    changeSize() {
        console.log(this.state.currentSlide);
        this.setState(() => {
            const newWidth = calculateElementWidth(this.slidesRef.current);
            this.slidesRef.current.classList.remove('transition');
            this.moveToSlide(newWidth, this.state.currentSlide);
            return {
                sliderWidth: newWidth
            }
        });
    }

    moveToSlide(width, slideNumber) {
        this.slidesRef.current.style.left = `-${width * slideNumber}px`;
    }

    createSlides() {
        return (
            <div className="slides" ref={this.slidesRef}>
                {this.images.map((image, i) =>
                    <Slide key={i} title={image.title} description={image.description}
                           image={image.image} imageAlt={image.imageAlt}/>
                )}
            </div>
        );
    }

    render() {
        return (
            <section className="slider">
                <SliderNavButton buttonClass="prev" iconClass="ion-chevron-left" action={this.previousImgButton}/>
                <SliderNavButton buttonClass="next" iconClass="ion-chevron-right" action={this.nextImgButton}/>
                <SliderNavBar current={this.state.currentSlide + 1} all={this.props.images.length}/>
                <div className="slider-view">
                    {this.createSlides()}
                </div>
            </section>
        );
    }
}

Slider.propTypes = {
    images: PropTypes.array.isRequired,
    settings: PropTypes.object.isRequired,
};

function findNextElem(currentElement, array) {
    if (currentElement < array.length - 1) {
        return currentElement + 1;
    } else {
        return 0;
    }
}

function findPreviousElem(currentElement, array) {
    if (currentElement > 0) {
        return currentElement - 1;
    } else {
        return array.length - 1;
    }
}

function calculateElementWidth(element) {
    if (element) {
        const width = element.getBoundingClientRect().width;
        return width;
    }
}

// console.log('next click');
// this.animate(next).then((value) => {
//     console.log(value);
//     console.log('animation completed');
// });
// this.animate(next)().then(() => {
//     console.log('animation completed');
// });
// this.costam(next).then(() => {
//     return this.transitionEndPromise;
// }).then(() => {
//     console.log('transition completed');
//     this.setState({ currentSlide: next });
// });
// this.slidesRef.current.classList.add('transition');
// this.setToSlide(this.state.sliderWidth, next);
// this.transitionEndPromise().then(() => {
//     console.log('transition completed');
//     if (this.continuous) {
//         if ((this.state.currentSlide === this.images.length - 2)) {
//             this.slidesRef.current.classList.remove('transition');
//             next = 1;
//             this.setToSlide(this.state.sliderWidth, next);
//             console.log(next);
//         }
//     }
//
// });
// onAnimationComplete(resolve) {
//     console.log('removing ')
//     this.slidesRef.current.removeEventListener('transitionend', this.onAnimationComplete);
//     resolve();
// }

// onAnimationComplete(currentElement) {
//     let current = 0;
//     if (this.continuous) {
//          else {
//             if ((currentElement === this.images.length - 1)) {
//                 current = 1;
//             }
//         }
//      return current;
//     }
// }

// this.transitionEndPromise = new Promise((resolve) => {
//     this.slidesRef.current.addEventListener('transitionend', () => {
//         resolve('transition ended');
//     })
// });

// costam(next) {
//     return new Promise((resolve, reject) => {
//         this.slidesRef.current.classList.add('transition');
//         this.setToSlide(this.state.sliderWidth, next);
//         resolve(this.slidesRef.current);
//     });
// }

// return new Promise((resolve) => {
//     this.slidesRef.current.addEventListener('transitionend',
//         () => {
//             console.log(this);
//             this.onAnimationComplete(resolve);
//         },
//         false);
//     this.slidesRef.current.classList.add('transition');
//     this.setToSlide(this.state.sliderWidth, next);
// });
