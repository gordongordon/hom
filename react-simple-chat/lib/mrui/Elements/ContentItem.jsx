import styled from 'styled-components';

const ContentItem = styled.div`
  height: auto;
  border: 0px solid rgba(0,0,0,.15);
  margin: 0;
  padding-top: 2px;
  padding-left: 10px;
  padding-bottom: 2px;
  width : 100%;
  position: relative;
  text-align: ${props => props.right ? 'right' : 'left'};
  display: inline-block;

`;

// &:nth-child(1) {background: #CCC};
// &:nth-child(2) {background: #CCC};
// &:nth-child(3) {background: #FFF};
// &:nth-child(4) {background: #FFF};
// &:nth-child(5) {background: #CCC};
// &:nth-child(6) {background: #CCC};
// &:nth-child(7) {background: #FFF};
// &:nth-child(8) {background: #FFF};
// &:nth-child(9) {background: #CCC};
// &:nth-child(10) {background: #CCC};
// &:nth-child(11) {background: #FFF};
// &:nth-child(12) {background: #FFF};
// &:nth-child(13) {background: #CCC};
// &:nth-child(14) {background: #CCC};
// &:nth-child(15) {background: #FFF};
// &:nth-child(16) {background: #FFF};

export default ContentItem;
