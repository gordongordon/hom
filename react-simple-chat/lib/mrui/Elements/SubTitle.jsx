import styled from 'styled-components';
import defaultTheme from '../theme';

const SubTitle = styled.h5`
  margin: 0.5rem;
  font-size:${({ theme }) => theme.subTitleFontSize};
  color: #666666;
`;

SubTitle.defaultProps = {
  theme: defaultTheme,
};

export default SubTitle;
