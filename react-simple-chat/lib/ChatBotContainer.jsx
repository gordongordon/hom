import styled from 'styled-components';
import defaultTheme from './theme';

const ChatBotContainer = styled.div`
  background: ${({ theme }) => theme.background};
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
  font-family: ${({ theme }) => theme.fontFamily};
  position: fixed;
  overflow: hidden;
  z-index: 999;
  transform: ${props => props.opened ? 'scale(1)' : 'scale(0)'};
  transform-origin: bottom right;
  transition: transform .3s ease;
  border-radius: 0;
  bottom: 0;
  height: 100%;
  right: 0;
  width: 100%;
  &:after {
      content: "";
      background-image: url(/chat-background.png);
      background-color: #e0b78d;
      background-size: contain;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
      opacity: .2;
  }
`;
//border-radius: ${props => props.floating ? '0' : ''};
// position: ${props => props.floating ? 'fixed' : 'relative'};

ChatBotContainer.defaultProps = {
  theme: defaultTheme,
};

export default ChatBotContainer;
