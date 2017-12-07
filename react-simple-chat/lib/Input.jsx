import styled, {keyframes} from 'styled-components';
import { invalidInput } from './common/animations';

const freshing = keyframes`
0% {  border: 3px solid #F55869;   } 
50% {  border: 3px solid #000;     }
100% {  border: 3px solid #F55869; }
`;

const Input = styled.input`
  animation: ${props => props.invalid ? `${invalidInput} .2s ease` : ''};
  border: 0;
  border-radius: 20px 20px 20px 20px;
  border-top: ${props => props.invalid ? '0' : '1px solid #eee'};
  box-shadow: ${props => props.invalid ? 'inset 0 0 2px #E53935' : 'none'};
  box-sizing: border-box;
  color: ${props => props.invalid ? '#E53935' : ''};
  font-size: 0.7rem;
  opacity: ${props => props.disabled && !props.invalid ? '.5' : '1'};
  outline: none;
  padding: 6px 10px 6px 20px;
  margin: 10px 10px 10px 20px;
  width: 90%;
  -webkit-appearance: none;
  &:disabled { background: #fff; }
  &:focus { 
    animation: ${freshing} 3s linear infinite;
  }
  border-bottom-left-radius: ${props => props.floating ? '0' : '20px'};
  border-bottom-right-radius: ${props => props.floating ? '0' : '20px'};
`;
//padding: ${props => props.hasButton ? '16px 52px 16px 10px' : '16px 10px'};

export default Input;
