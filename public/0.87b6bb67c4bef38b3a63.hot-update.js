webpackHotUpdate(0,{

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SingleSalePropertyForMatchViewWrapper = undefined;\n\nvar _css = __webpack_require__(847);\n\nvar _whiteSpace = __webpack_require__(850);\n\nvar _whiteSpace2 = _interopRequireDefault(_whiteSpace);\n\nvar _css2 = __webpack_require__(962);\n\nvar _flex = __webpack_require__(965);\n\nvar _flex2 = _interopRequireDefault(_flex);\n\nvar _css3 = __webpack_require__(843);\n\nvar _button = __webpack_require__(846);\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _css4 = __webpack_require__(834);\n\nvar _badge = __webpack_require__(837);\n\nvar _badge2 = _interopRequireDefault(_badge);\n\nvar _css5 = __webpack_require__(968);\n\nvar _card = __webpack_require__(971);\n\nvar _card2 = _interopRequireDefault(_card);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(74);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcForm = __webpack_require__(545);\n\nvar _moment = __webpack_require__(651);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _propertysViewModel = __webpack_require__(768);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n////import 'moment/locale/zh-cn';\n\n\n//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'\n\n// const Item = List.Item;\n// const Brief = Item.Brief;\n\n// const LABEL_JOBNATURE = {\n//  '0' : '私人企業',\n//  '1' : '政府工',\n//  '2' : '自僱人士',\n//  '3' : '學生',\n//  '4' : '海外人士',\n// }\n//\n// const jobNature = [\n//   {\n//     label : '私人企業',\n//     value : '0'\n//   },   {\n//     label : '政府工',\n//     value : '1'\n//   },   {\n//     label : '自僱人士',\n//     value : '2'\n//   },   {\n//     label : '學生',\n//     value : '3'\n//   },  {\n//     label : '海外人士',\n//     value : '4'\n//   },\n// ]\n\n// const NameOfBuilding = [\n//   { value: 'MOSDBC', label: '迎海' },\n//   { value: 'MOSCTO', label: '第一城' },\n//   { value: 'MOSSSC', label: '新港城' },\n// ];\n//\n// const BUILDING_NAME = {\n//    'MOSDBC' : '迎海',\n//    'MOSCTO' : '第一城',\n//    'MOSSSC' : '新港城'\n// }\n\nvar SingleSalePropertyForMatchView = function (_React$Component) {\n  _inherits(SingleSalePropertyForMatchView, _React$Component);\n\n  function SingleSalePropertyForMatchView(props) {\n    _classCallCheck(this, SingleSalePropertyForMatchView);\n\n    var _this = _possibleConstructorReturn(this, (SingleSalePropertyForMatchView.__proto__ || Object.getPrototypeOf(SingleSalePropertyForMatchView)).call(this, props));\n\n    _this.state = {\n      disabled: false,\n      selectedSegmentIndex: 0\n    };\n    return _this;\n  }\n\n  _createClass(SingleSalePropertyForMatchView, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      //const p = this.props;\n      // const t = moment().format('YYYY-MM-DD HH:mm:ss');\n      // this.props.property.realTime = moment( t );\n      this.props.property.setTimeStamp();\n      //    console.log( 'realTime will mount', this.props.property.realTime)\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var property = this.props.property;\n\n\n      console.log('SingleRentPropertyForMatch', property);\n      var that = this;\n      // const { getFieldProps } = this.props.form;\n      // For DatePicker\n      //const minDate = moment().locale('zh-cn').utcOffset(8);\n      // const maxDate = moment(minDate).add(6, 'M');\n\n      // console.log( 'property', property )\n      // console.log( 'roleName', property.roleName );\n      // console.log( 'dayListed', property.dayListed )\n      // console.log( 'timeEnter', this.props.timeEnter )\n      //property.reatTime = moment( this.props.timeEnter );\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _card2.default,\n          { full: 'true' },\n          _react2.default.createElement(\n            _badge2.default,\n            { text: '平', corner: true },\n            _react2.default.createElement(_card2.default.Header, {\n              title: property.contactNameLabel,\n              thumb: 'http://via.placeholder.com/140x100',\n              extra: _react2.default.createElement(\n                'div',\n                null,\n                '\\u5C0B\\u627E:',\n                property.nameOfBuildingLabel,\n                ' '\n              )\n            })\n          ),\n          _react2.default.createElement(\n            _card2.default.Body,\n            null,\n            _react2.default.createElement(\n              'div',\n              null,\n              property.partitionLabel\n            )\n          ),\n          _react2.default.createElement(_card2.default.Footer, { content: _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                _button2.default,\n                { type: 'ghost', inline: true, size: 'small' },\n                'Chat'\n              ),\n              _react2.default.createElement(\n                _button2.default,\n                { type: 'ghost', inline: true, size: 'small' },\n                '\\u76F4\\u63A5\\u96FB\\u8A71\\u806F\\u7D61'\n              )\n            ), extra: _react2.default.createElement(\n              _flex2.default,\n              { style: { marginBottom: '1rem' } },\n              _react2.default.createElement(_badge2.default, { text: property.roleName, style: { marginLeft: 6, padding: '0 0.06rem', backgroundColor: property.colorByRoleName, borderRadius: 5 } }),\n              _react2.default.createElement(_badge2.default, { text: property.howFresh, style: { marginLeft: 6, padding: '0 0.06rem', backgroundColor: property.colorByFresh, borderRadius: 5 } }),\n              _react2.default.createElement(_badge2.default, { text: property.dayListed,\n                style: {\n                  marginLeft: 6,\n                  padding: '0 0.06rem',\n                  backgroundColor: '#fff',\n                  borderRadius: 5,\n                  color: '#f19736',\n                  border: '2px solid #f19736'\n                }\n              })\n            ) })\n        ),\n        \"sale\" + property.fbid,\n        _react2.default.createElement(_whiteSpace2.default, { size: 'sm' })\n      );\n    }\n  }]);\n\n  return SingleSalePropertyForMatchView;\n}(_react2.default.Component);\n\n;\n\nvar SingleSalePropertyForMatchViewWrapper = exports.SingleSalePropertyForMatchViewWrapper = (0, _rcForm.createForm)()(SingleSalePropertyForMatchView);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3NpbmdsZVByb3BlcnR5Vmlldy9zaW5nbGVTYWxlUHJvcGVydHlGb3JNYXRjaFZpZXcuanM/N2FlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpc3QgLCBDYXJkLCBTdGVwcGVyLCBQaWNrZXIsIFN3aXBlQWN0aW9uLCBEYXRlUGlja2VyLCBCYWRnZSwgRmxleCwgSW5wdXRJdGVtLCBXaGl0ZVNwYWNlLCBCdXR0b24sIFNlZ21lbnRlZENvbnRyb2x9IGZyb20gJ2FudGQtbW9iaWxlJztcclxuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJ3JjLWZvcm0nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbi8vLy9pbXBvcnQgJ21vbWVudC9sb2NhbGUvemgtY24nO1xyXG5pbXBvcnQge3Byb3BlcnR5c30gZnJvbSAncHJvcGVydHlzVmlld01vZGVsJ1xyXG4vL2ltcG9ydCB7U2luZ2xlTGVhc2VQcm9wZXJ0eUZvck1hdGNoVmlld1dyYXBwZXJ9IGZyb20gJ3NpbmdsZUxlYXNlUHJvcGVydHlGb3JNYXRjaFZpZXcnXHJcblxyXG4vLyBjb25zdCBJdGVtID0gTGlzdC5JdGVtO1xyXG4vLyBjb25zdCBCcmllZiA9IEl0ZW0uQnJpZWY7XHJcblxyXG4vLyBjb25zdCBMQUJFTF9KT0JOQVRVUkUgPSB7XHJcbi8vICAnMCcgOiAn56eB5Lq65LyB5qWtJyxcclxuLy8gICcxJyA6ICfmlL/lupzlt6UnLFxyXG4vLyAgJzInIDogJ+iHquWDseS6uuWjqycsXHJcbi8vICAnMycgOiAn5a2455SfJyxcclxuLy8gICc0JyA6ICfmtbflpJbkurrlo6snLFxyXG4vLyB9XHJcbi8vXHJcbi8vIGNvbnN0IGpvYk5hdHVyZSA9IFtcclxuLy8gICB7XHJcbi8vICAgICBsYWJlbCA6ICfnp4HkurrkvIHmpa0nLFxyXG4vLyAgICAgdmFsdWUgOiAnMCdcclxuLy8gICB9LCAgIHtcclxuLy8gICAgIGxhYmVsIDogJ+aUv+W6nOW3pScsXHJcbi8vICAgICB2YWx1ZSA6ICcxJ1xyXG4vLyAgIH0sICAge1xyXG4vLyAgICAgbGFiZWwgOiAn6Ieq5YOx5Lq65aOrJyxcclxuLy8gICAgIHZhbHVlIDogJzInXHJcbi8vICAgfSwgICB7XHJcbi8vICAgICBsYWJlbCA6ICflrbjnlJ8nLFxyXG4vLyAgICAgdmFsdWUgOiAnMydcclxuLy8gICB9LCAge1xyXG4vLyAgICAgbGFiZWwgOiAn5rW35aSW5Lq65aOrJyxcclxuLy8gICAgIHZhbHVlIDogJzQnXHJcbi8vICAgfSxcclxuLy8gXVxyXG5cclxuLy8gY29uc3QgTmFtZU9mQnVpbGRpbmcgPSBbXHJcbi8vICAgeyB2YWx1ZTogJ01PU0RCQycsIGxhYmVsOiAn6L+O5rW3JyB9LFxyXG4vLyAgIHsgdmFsdWU6ICdNT1NDVE8nLCBsYWJlbDogJ+esrOS4gOWfjicgfSxcclxuLy8gICB7IHZhbHVlOiAnTU9TU1NDJywgbGFiZWw6ICfmlrDmuK/ln44nIH0sXHJcbi8vIF07XHJcbi8vXHJcbi8vIGNvbnN0IEJVSUxESU5HX05BTUUgPSB7XHJcbi8vICAgICdNT1NEQkMnIDogJ+i/jua1tycsXHJcbi8vICAgICdNT1NDVE8nIDogJ+esrOS4gOWfjicsXHJcbi8vICAgICdNT1NTU0MnIDogJ+aWsOa4r+WfjidcclxuLy8gfVxyXG5cclxuY2xhc3MgU2luZ2xlU2FsZVByb3BlcnR5Rm9yTWF0Y2hWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgc2VsZWN0ZWRTZWdtZW50SW5kZXg6IDAsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAvL2NvbnN0IHAgPSB0aGlzLnByb3BzO1xyXG4gICAgLy8gY29uc3QgdCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgLy8gdGhpcy5wcm9wcy5wcm9wZXJ0eS5yZWFsVGltZSA9IG1vbWVudCggdCApO1xyXG4gICAgIHRoaXMucHJvcHMucHJvcGVydHkuc2V0VGltZVN0YW1wKCk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyggJ3JlYWxUaW1lIHdpbGwgbW91bnQnLCB0aGlzLnByb3BzLnByb3BlcnR5LnJlYWxUaW1lKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtwcm9wZXJ0eX0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnU2luZ2xlUmVudFByb3BlcnR5Rm9yTWF0Y2gnLCBwcm9wZXJ0eSApXHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy8gY29uc3QgeyBnZXRGaWVsZFByb3BzIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgLy8gRm9yIERhdGVQaWNrZXJcclxuICAgICAgICAvL2NvbnN0IG1pbkRhdGUgPSBtb21lbnQoKS5sb2NhbGUoJ3poLWNuJykudXRjT2Zmc2V0KDgpO1xyXG4gICAgICAgIC8vIGNvbnN0IG1heERhdGUgPSBtb21lbnQobWluRGF0ZSkuYWRkKDYsICdNJyk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCAncHJvcGVydHknLCBwcm9wZXJ0eSApXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coICdyb2xlTmFtZScsIHByb3BlcnR5LnJvbGVOYW1lICk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coICdkYXlMaXN0ZWQnLCBwcm9wZXJ0eS5kYXlMaXN0ZWQgKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCAndGltZUVudGVyJywgdGhpcy5wcm9wcy50aW1lRW50ZXIgKVxyXG4gICAgICAgIC8vcHJvcGVydHkucmVhdFRpbWUgPSBtb21lbnQoIHRoaXMucHJvcHMudGltZUVudGVyICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICA8Q2FyZCBmdWxsPVwidHJ1ZVwiPlxyXG4gICA8QmFkZ2UgdGV4dD17J+W5syd9IGNvcm5lcj5cclxuICAgIDxDYXJkLkhlYWRlclxyXG4gICAgICB0aXRsZT17IHByb3BlcnR5LmNvbnRhY3ROYW1lTGFiZWwgfVxyXG4gICAgICB0aHVtYj1cImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE0MHgxMDBcIlxyXG4gICAgICBleHRyYT17PGRpdj7lsIvmib46e3Byb3BlcnR5Lm5hbWVPZkJ1aWxkaW5nTGFiZWx9IDwvZGl2Pn1cclxuICAgIC8+XHJcbiAgICA8L0JhZGdlPlxyXG4gICAgPENhcmQuQm9keT5cclxuICAgICAgICA8ZGl2Pntwcm9wZXJ0eS5wYXJ0aXRpb25MYWJlbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgPENhcmQuRm9vdGVyIGNvbnRlbnQ9ezxkaXY+PEJ1dHRvbiB0eXBlPVwiZ2hvc3RcIiBpbmxpbmUgc2l6ZT1cInNtYWxsXCI+Q2hhdDwvQnV0dG9uPjxCdXR0b24gdHlwZT1cImdob3N0XCIgaW5saW5lIHNpemU9XCJzbWFsbFwiPuebtOaOpembu+ipseiBr+e1oTwvQnV0dG9uPjwvZGl2Pn0gZXh0cmE9eyAgICAgICAgICA8RmxleCBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxcmVtJyB9fT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgdGV4dD17cHJvcGVydHkucm9sZU5hbWV9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDYsIHBhZGRpbmc6ICcwIDAuMDZyZW0nLCBiYWNrZ3JvdW5kQ29sb3I6IHByb3BlcnR5LmNvbG9yQnlSb2xlTmFtZSwgYm9yZGVyUmFkaXVzOiA1IH19IC8+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIHRleHQ9e3Byb3BlcnR5Lmhvd0ZyZXNofSBzdHlsZT17eyBtYXJnaW5MZWZ0OiA2LCBwYWRkaW5nOiAnMCAwLjA2cmVtJywgYmFja2dyb3VuZENvbG9yOiBwcm9wZXJ0eS5jb2xvckJ5RnJlc2gsIGJvcmRlclJhZGl1czogNSB9fSAvPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSB0ZXh0PXtwcm9wZXJ0eS5kYXlMaXN0ZWR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA2LFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAwLjA2cmVtJyxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZjE5NzM2JyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICNmMTk3MzYnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Pn0gLz5cclxuICA8L0NhcmQ+XHJcbiAge1wic2FsZVwiK3Byb3BlcnR5LmZiaWR9XHJcbiAgPFdoaXRlU3BhY2Ugc2l6ZT1cInNtXCIgLz5cclxuPC9kaXY+XHJcbik7XHJcblxyXG59IH07XHJcblxyXG5leHBvcnQgY29uc3QgU2luZ2xlU2FsZVByb3BlcnR5Rm9yTWF0Y2hWaWV3V3JhcHBlciA9IGNyZWF0ZUZvcm0oKShTaW5nbGVTYWxlUHJvcGVydHlGb3JNYXRjaFZpZXcpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvc2luZ2xlUHJvcGVydHlWaWV3L3NpbmdsZVNhbGVQcm9wZXJ0eUZvck1hdGNoVmlldy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFIQTtBQVpBO0FBMkJBO0FBQ0E7QUE3QkE7QUFpQ0E7Ozs7QUFyRUE7QUFDQTtBQW9FQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})