import styled from 'styled-components';
import Slider from './Slider';

const SliderInput = styled.input.attrs({
	type: 'checkbox',
   })`

   display: inline;  
       > * {
           background-color: #FF0000;
       }
`;

export default SliderInput;
