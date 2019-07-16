import React, { Component } from 'react';
import { SliderNavButton } from './SliderNavButton';
import PropTypes from 'prop-types';
import { Slide } from './Slide';
import { SliderNavBar } from './SliderNavBar';

export class Slider extends Component {
    constructor(props) {
        super(props);
        this.slidesRef = React.createRef();
        this.timerId;
        this.autoPlay = props.settings.autoPlay;
        this.delay = props.settings.delay;
        const firstSlide = this.setFirstImage(props.settings);
        this.state = {
            currentSlide: firstSlide,
            sliderWidth: 0
        };

        this.continuous = props.settings.continuous;
        this.images = this.prepareImagesArray(props.images, this.continuous);

        this.nextImgButton = () => {
            this.next(findNextElem, 'up');
        };

        this.previousImgButton = () => {
            this.next(findPreviousElem, 'down');
        };

        this.resize = () => {
            this.changeSize();
        };
    }

    next(nextFunction, direction) {
        this.timerId = clearTimeout(this.timerId);
        let next = nextFunction(this.state.currentSlide, this.images);
        this.slidesRef.current.classList.remove('transition');
        this.animate(next).then(() => {
            const firstLast = this.getFirstOrLast(direction);
            if (firstLast) {
                next = firstLast;
                this.slidesRef.current.classList.remove('transition');
                this.moveToSlide(this.state.sliderWidth, next);
            }
            this.setState({ currentSlide: next });
            this.autoPlaySlides();
        });

    }

    getFirstOrLast(direction) {
        if (this.continuous) {
            if (direction === 'up') {
                if ((this.state.currentSlide === this.images.length - 2)) {
                    return 1;
                }
            }
            if (direction === 'down') {
                if ((this.state.currentSlide === 1)) {
                    return this.images.length - 2;
                }
            }
        }
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
        this.changeSize();
        this.autoPlaySlides();
        window.addEventListener('resize', this.resize);
    }

    setFirstImage(settings) {
        if (settings.continuous) {
            return settings.currentElem + 1;
        }
        return settings.currentElem;
    }

    getSlideNumber() {
        if (this.continuous) {
            return this.state.currentSlide;
        } else {
            return this.state.currentSlide + 1;
        }
    }

    autoPlaySlides() {
        if (this.autoPlay) {
            this.timerId = executeInFuture(this.timerId, this.nextImgButton, this.delay);
        }
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
                <SliderNavBar current={this.getSlideNumber()} all={this.props.images.length}/>
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

function executeInFuture(timeOutId, func, time) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(func, time);
    return timeOutId;
}
