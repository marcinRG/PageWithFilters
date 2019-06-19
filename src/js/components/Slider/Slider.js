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
        this.images = this.prepareImagesArray(props.images);
        this.nextImgButton = () => {
            console.log('next');
        };
        this.previousImgButton = () => {
            console.log('previous');
        };

        this.resize = () => {
            this.changeSize();
        };

    }

    componentDidMount() {
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
        const newWidth = calculateElementWidth(this.slidesRef.current);
        this.setState({
            sliderWidth: newWidth
        });
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

    findNextElem() {
        if (this.currentImage < this.props.images.length - 1) {
            this.currentImage = this.currentImage + 1;
        } else {
            this.currentImage = 0;
        }
    }

    findPreviousElem() {
        if (this.currentImage > 0) {
            this.currentImage = this.currentImage - 1;
        } else {
            this.currentImage = this.props.images.length - 1;
        }
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

function calculateElementWidth(element) {
    if (element) {
        const width = element.getBoundingClientRect().width;
        return width;
    }
}
