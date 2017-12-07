import styled from 'styled-components';

const Content = styled.div`
  overflow-y: scroll;
  margin-top: 2px;
  padding-top: 6px;
  height: calc(100% - 156px);
  `;
// @media screen and (max-width: 568px) {
//   height: ${props => props.floating ? 'calc(100% - 112px)' : ''};
// }

export default Content;
