// src/blocks/Card/index.js

import styled from 'styled-components';
import defaultTheme from '../theme';
import PropTypes from 'prop-types';

import Title from '../Elements/Title';
import SubTitle from '../Elements/SubTitle';
import Footer from '../Elements/Footer';
import Content from '../Elements/Content';
import React from 'react';
import Button from '../Elements/Button';
import ContentItem from '../Elements/ContentItem';
import GenericContainer from '../Elements/GenericContainer';
import LineText from '../Elements/LineText';
import Toggle from '../Elements/Toggle';

// import Header from './Header';
// import Image from './Image';
// import Text from './Text';
// import Title from './Title';

const Carousel = styled.div`
background: white;
border-bottom-left-radius: 1.3rem;
border-bottom-right-radius: 1.3rem;
border-top-left-radius: 1.3rem;
border-top-right-radius: 1.3rem;
border : 1px;  
box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
font-family: ${({ theme }) => theme.fontFamily};
overflow: hidden;
position: 'relative';
bottom:   'initial';
right: 'initial';
width: ${props => props.width};
transform: ${props => props.opened ? 'scale(1)' : 'scale(0)'};
transform-origin: bottom right;
transition: transform .3s ease;
padding 5px 5px 30px 5px;
width: 80%;

@media screen and (max-width: 568px) {
  border-radius: '';
  bottom: 0;
  height: 100%;
  right: 0;
  width: 80%;
}
`;


Carousel.Title = Title;
Carousel.SubTitle = SubTitle;
Carousel.Footer = Footer;
Carousel.Content = Content;
Carousel.Button = Button;
Carousel.ContentItem = ContentItem;
Carousel.LineText = LineText;
Carousel.Toggle = Toggle;
Carousel.GenericContainer = GenericContainer;


Carousel.defaultProps = {
    theme: defaultTheme,
  };
  

export default Carousel;