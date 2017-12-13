import styled from 'styled-components';
import defaultTheme from '../theme';

const Title = styled.h2`
  margin: 0.5rem;
  font-size: ${({ theme }) => theme.titleFontSize};
  ${props => props.isFirst ? 'border-top-left-radius: 1.3em' : ''};
  ${props => props.isLast ? 'border-top-right-radius: 1.3em' : ''};
`;

Title.defaultProps = {
  theme: defaultTheme,
};

export default Title;
