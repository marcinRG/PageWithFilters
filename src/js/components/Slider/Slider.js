import React, { Component } from 'react';
import { SliderNavButton } from './SliderNavButton';
import PropTypes from 'prop-types';
import { Slide } from './Slide';
import { SliderNavBar } from './SliderNavBar';

export class Slider extends Component {
    constructor(props) {
        super(props);
        this.currentImage = 0;
        this.slidesRef = React.createRef();
        this.state = {
            currentSlide: 1,
            sliderWidth: 0
        };
        this.images = this.prepareImagesArray(props.images);

        this.nextImgButton = () => {

            this.setState((prevState)=>{
                const next = findNextElem(prevState.currentSlide, this.images);
                this.setToSlide(this.state.sliderWidth, next);
                console.log(next);
                return {
                    currentSlide: next
                }
            });
        };

        this.previousImgButton = () => {
            console.log('prev');
            this.setState((prevState)=>{
                const next = findPreviousElem(prevState.currentSlide, this.images);
                this.setToSlide(this.state.sliderWidth, next);
                console.log(next);
                return {
                    currentSlide: next
                }
            });
        };

        this.resize = () => {
            console.log('resize called');
            this.changeSize();
        };
    }

    componentDidMount() {
        console.log('component Mounted!');
        this.changeSize();
        window.addEventListener('resize', this.resize);
    }

    prepareImagesArray(images) {
        const array = [...images];
        const first = images[images.length - 1];
        array.unshift(first);
        const last = images[0];
        array.push(last);
        return array;
    }

    changeSize() {
        this.setState(() => {
            const newWidth = calculateElementWidth(this.slidesRef.current);
            this.setToSlide(newWidth,this.state.currentSlide);
            return {
                sliderWidth: newWidth
            }
        });
    }

    setToSlide(width, slideNumber) {
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
                <SliderNavBar current={this.currentImage + 1} all={this.props.images.length}/>
                <div className="slider-view">
                    {this.createSlides()}
                </div>
            </section>
        );
    }
}

Slider.propTypes = {
    images: PropTypes.array.isRequired,
    settings: PropTypes.object.isRequired
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
