import styled from 'styled-components';
import defaultTheme from '../theme';

const LineText = styled.span`
  margin: 0.5rem;
  font-size:${({ theme }) => theme.subTitleFontSize};
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #F55869;
  margin: 8px 0px;

 &:before,
 &:after {
	content: "";
	flex-grow: 1;
	background: rgba(0, 0, 0, 0.35);
	height: 1px;
	font-size: 0px;
	line-height: 0px;
	margin: 0px 8px;
 }  


 

`;

LineText.defaultProps = {
  theme: defaultTheme,
};

export default LineText;




// .featured-header {
//     border-bottom: none;
//     border-left: none;
//     border-right: none;
//     text-align: center;
//     border-color: #999;
// }
// .featured-header.color {
//     border-color: orange;
// }
// .featured-header.color legend{
//     color: orange;
// }
// .featured-header.radius {
//     border-radius: 12px;
// }
// .featured-header.double {
//     border-style: double;
//     border-top-width: 6px;
//     border-right-width: 0px;
//     border-bottom-width: 0px;
//     border-left-width: 0px;
// }
// .featured-header.cool {
//     font-family: sans-serif;
// }
// .featured-header legend {
//     -webkit-padding-start: 8px;
//     -webkit-padding-end: 8px;
//     background: transparent;
//     /** It's cool because you don't need to fill your bg-color as you would need to in some of the other examples that you can find (: */
//     font-weight: normal;
//     /* I preffer the text to be regular instead of bold  */
//     color: #999;
// }