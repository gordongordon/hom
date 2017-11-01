import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class RCarousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={600}
        naturalSlideHeight={300}
        totalSlides={3}
      >        
        <Slider>
          <Slide index={0}>jkjkljlj  I am the first Slide.
              <button>1</button>
              <button>1</button>
              <button>1</button>
          </Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}