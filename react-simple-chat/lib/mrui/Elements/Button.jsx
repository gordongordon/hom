import styled from 'styled-components';
// import theme from './theme';
import defaultTheme from '../theme';

const Button = styled.button`
  font-family: Helvetica Neue,Segoe UI,Helvetica,Arial,sans-serif;
  margin: 5px auto;
  color: #0184ff;
  background-color: white;
  border: 3px solid rgba(0,0,0,.1);
  top : ${props => props.last ? '0px' : ''};
  box-shadow: none;
  cursor:  pointer;
  outline: none;
  text-align: center;
  align: center;
  padding: 10px 16px 10px 16px;
  position: relative;
  font-weight: 500;
  width:80%;
  font-size : 1rem;
  ${props => props.first ? 'border-top-width: 1px;' : ''};
  border-radius: 1.3rem;

  &:hover { background-color: LightSteelBlue; }
  &:active { background-color: SteelBlue; color: White; }
  display: flex;
`;

// &:last-child {
//   border-top-width: 0px;
//   border-left-width: 0px;
//   border-right-width: 0px;
//   border-bottom-left-radius: 1.3rem;
//   border-bottom-right-radius: 1.3rem;
//   border-bottom-width: 0px;
// }
// border-color: #f2f2f2;
// border-left-width: 0px;
// border-right-width: 0px;

Button.defaultProps = {
  theme: defaultTheme,
};

export default Button;
