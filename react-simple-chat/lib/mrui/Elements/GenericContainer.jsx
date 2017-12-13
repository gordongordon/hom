import styled from 'styled-components';
import defaultTheme from '../theme';


const GenericContainer = styled.div`
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
// background: ${({ theme }) => theme.background};

//border-radius: 1.3rem;

// border-bottom-left-radius: 1.3em;
// border-bottom-right-radius: 1.3em;

GenericContainer.defaultProps = {
  theme: defaultTheme,
};

export default GenericContainer;
