import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Generic } from 'react-simple-chatbot';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class RCarousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={1200}
        naturalSlideHeight={600}
        totalSlides={3}
      >        
        <Slider>
          <Slide index={0}><Generic width="600"/> </Slide>
          <Slide index={1}><Generic /> </Slide>
          <Slide index={2}><Generic /> </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}