import styled, {keyframes} from 'styled-components';
import defaultTheme from '../../theme';

const freshing = keyframes`
0% {  border: 3px solid #ffb3b3;   }
50% {  border: 3px solid #000;     }
100% {  border: 3px solid #ffb3b3; }
`;

const OptionElement = styled.a`
  background: rgba(254, 254, 254, 1);
  border-radius: 8px;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.botFontColor};
  display: inline-block;
  font-size: 0.8rem;
  padding: 4px;
  border-style: solid;
  &:hover { opacity: .7; }
  animation: ${freshing} 1s linear infinite;
  &:active { transform: translateY(-10px);
             background-color: ${ ({theme}) => theme.headerBgColor };
             box-shadow: 0 2px #666;
   }
`;

//background: ${({ theme }) => theme.botBubbleColor};


OptionElement.defaultProps = {
  theme: defaultTheme,
};

export default OptionElement;
