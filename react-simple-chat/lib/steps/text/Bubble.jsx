import styled from 'styled-components';
import { scale } from '../../common/animations';
import defaultTheme from '../../theme';


//animation: ${scale} .3s ease forwards;

const Bubble = styled.div`
  animation: ${scale} .5s ease forwards;
  background: ${props => (props.user ? props.theme.userBubbleColor : props.theme.botBubbleColor)};
  border-radius: ${(props) => {
    const { isFirst, isLast, user } = props;
    if (!isFirst && !isLast) {
      return user ? '18px 0 0 18px' : '0 18px 18px 0px';
    } else if (!isFirst && isLast) {
      return user ? '18px 0 18px 18px' : '0 18px 18px 18px';
    }
    return props.user ? '18px 18px 0 18px' : '18px 18px 18px 0';
  }};
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
  color: ${props => (props.user ? props.theme.userFontColor : props.theme.botFontColor)};
  display: inline-block;
  font-size: 0.7rem;
  max-width: 75%;
  margin: ${(props) => {
    const { isFirst, showAvatar, user } = props;
    if (!isFirst && showAvatar) {
      return user ? '1px 46px 10px 0' : '1px 0 10px 46px';
    } else if (!isFirst && !showAvatar) {
      return user ? '1px 0px 10px 0' : '1px 0 10px 0px';
    }

    return '0 0 10px 0';
  }};

  overflow: hidden;
  position: relative;
  padding: 12px;
  transform: scale(0);
  transform-origin: ${(props) => {
    const { isFirst, user } = props;
    if (isFirst) {
      return user ? 'bottom right' : 'bottom left';
    }

    return user ? 'top right' : 'top left';
  }};
`;


// &::before{
//   content: "";
//   border-style: solid;
//   border-width: 0.5rem 0.625rem 0.5rem 0;
//   border-color: transparent #e6e6e6 transparent transparent;
//   position: absolute;
//   right: 95%;
//   bottom: calc(50% - 0.5rem);
//   height: 0;
//   width: 0;
// }
Bubble.defaultProps = {
  theme: defaultTheme,
};

export default Bubble;
